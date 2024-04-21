#   استفاده از سرور داخلی یا تانل


# ساخت تانل با nginx و تنها یک پورت و فرگمنت  و DNS

برای آماده سازی سرور این اقدامات رو انجام دهیم:

تغییر پورت سرور

```
echo "Port 42327" >> /etc/ssh/sshd_config
systemctl restart sshd
service ssh restart
sudo ufw allow 42327
```

تغییر پسورد اصلی
```
sudo passwd root

```

نصب ابزار مانیتورینگ
```
#instal monitoring
apt-get update
apt-get install nload
apt-get install htop
apt-get install iftop
apt-get install vnstat
apt-get install speedtest-cli
apt-get install net-tools
apt-get install git
apt-get install cron
apt-get install curl tar unzip jq -y
apt-get install -y jq
```

افزایش سرعت سرور
```
echo "net.ipv4.tcp_fastopen = 3" | sudo tee -a /etc/sysctl.conf
echo "net.core.default_qdisc = fq" | sudo tee -a /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control = bbr" | sudo tee -a /etc/sysctl.conf

sysctl -p
```

میزان نگه داری لاگ ها

```
journalctl --vacuum-time=10d
```

تنظیم ساعت سرور

```
#set timezone
timedatectl set-timezone UTC
timedatectl
echo "UTC" | sudo tee /etc/timezone
cat /etc/timezone

#set timezone
timedatectl set-timezone Asia/Tehran
timedatectl
echo "Asia/Tehran" | sudo tee /etc/timezone
cat /etc/timezone
```

دامنه خود را روی کلود فلیر ست کنید

ابتدا در CDN خود مثلا Cloudflare یک A record بسازید و دامین یا ساب دامین خود را به آی پی سرور اشاره بدید و تیک پروکسی هم روشن کنید.

در بخش تنظیمات Network تیک گزینه ی GRPC را فعال کنید.

در بخش SSL/TLS encryption mode گزینه ی Full را انتخاب کنید.



نصب NGINX Reverse Proxy Installer


با این اسکریپت، می‌توانید به صورت خودکار یک سرور وب را به عنوان یک پروکسی برای مسیردهی ترافیک به (سرویس‌های GRPC و WebSocket) پیکربندی کنید. گواهی ssl بگیرید و یک قالب سایت از میان 170 قالب رایگان نصب کنید.
(ابزار مخفی ساز)


```
bash <(curl -fsSL https://raw.githubusercontent.com/Ptechgithub/NginxReverseProxy/main/install.sh)
```

مسیر nginx

```
cd /etc/nginx/sites-available/
```


وب سایت فیک نصب نکنید باگ دارد.


نصب ظاهر
```
cd /var/www/
git clone https://github.com/learning-zone/website-templates.git /var/www/website-templates
```

اگر خواستید پاک کنید به صورت دستی
```
rm -rf /etc/letsencrypt > /dev/null 2>&1
rm -rf /var/www/html/* > /dev/null 2>&1

# Remove NGINX configuration files
find /etc/nginx/sites-available/ -mindepth 1 -maxdepth 1 ! -name 'default' -exec rm -rf {} +
find /etc/nginx/sites-enabled/ -mindepth 1 -maxdepth 1 ! -name 'default' -exec rm -rf {} +

# Restart NGINX service
systemctl restart nginx
```



ادرس سرتیفیکت

```
/etc/letsencrypt/live/domain/fullchain.pem
/etc/letsencrypt/live/domain/privkey.pem
```


تا اینجا باید یک وب سایت روی دامنه داشته باشد.

## download xray

نصب xray
```
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install --beta -u root
```

## close ports

بستن پورت ها
```
sudo ufw app list

sudo ufw deny 22
sudo ufw allow 443
sudo ufw deny 80
sudo ufw deny 80/tcp
sudo ufw allow 42327
sudo ufw deny 8443
sudo ufw deny 10808


sudo ufw enable
sudo ufw status
```


روی کلود فلیر CDN را خاموش کنید

## nginx configuration

مشاهده کانفیگ nginx
```
cd /etc/nginx/sites-available
tail -f /var/log/nginx/domain.access.log
```

نمونه کانفیگ در فولدر tunnel موجود است

```
https://raw.githubusercontent.com/majidrezarahnavard/way_of_freedom/main/tunnel/nginx_confix
```

restart nginx

```
sudo systemctl restart nginx
```

## xray configuration

حالا کافی هست که کانفیگ xray بسازیم
نمونه کانفیگ در فولدر tunnel موجود است


xray رو با دستور زیر در tmux اجرا کنید

```
https://raw.githubusercontent.com/majidrezarahnavard/way_of_freedom/main/tunnel/xray_config.json
```

```
xray -x xray_config.json
```

نمونه کانفیگ برای کلاینت

```
trojan://a59a487c-66wd-156a-8299-2d80beae332c@mammad.com:443?security=tls&sni=mammad.com&type=grpc&serviceName=your_custom_path%2F8443%2F&mode=gun#mammad
```

## proxychain

vi /etc/proxychains.conf


اضافه کردن
```
socks5  127.0.0.1 10808
```
proxychains curl ip-api.com


## گرفتن مجددا certbot

```
	sudo certbot --nginx -d "$domain" --register-unsafely-without-email --non-interactive --agree-tos --redirect || display_error "Failed to obtain SSL certificate"
```

[How To Secure Nginx with Let's Encrypt on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04)




## نحوه جلوگیری از عبور ترافیک داخلی از سرور پروکسی

ایده‌آل‌ترین حالت اینه که ترافیک داخلی ایران به سمت سرور پروکسی ارسال نشه. برای این‌منظور می‌تونیم توی کلاینت‌های مختلف با Routing Rules تعریف‌کنیم این‌ترافیک از پروکسی عبور نکنه و فقط ترافیک خارجی به سمت سرور پروکسی ارسال بشه.

[نحوه جلوگیری از عبور ترافیک داخلی از سرور پروکسی](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87-%D9%85%D8%B3%D8%AF%D9%88%D8%AF%D8%B3%D8%A7%D8%B2%DB%8C-%D8%B3%D8%A7%DB%8C%D8%AA%E2%80%8C%D9%87%D8%A7-%D9%88-%D8%A7%D9%BE%E2%80%8C%E2%80%8C%D9%87%D8%A7%DB%8C-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86%DB%8C-%D8%A7%D8%B2-%D8%B3%D9%85%D8%AA-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1-02-15)

## ReverseTlsTunnel - تانل معکوس
دراین روش بجای اینکه از سرور داخل به خارج تانل بزنیم داریم از سرور خارج به ایران میزنیم برای همین در برخی مواقع حتی ممکنه روی سرور فیلتر شده هم جواب بده!!

با ۲روش میشه انجامش داد که یکی با خود پنل x-ui هستش یکی هم پروژه ReverseTlsTunnel

1. x-ui:

[آموزش تانل معکوس](https://www.youtube.com/watch?v=jCg6Yci7a5U)

[chain](https://www.youtube.com/watch?v=0SBtJ11EcjA)

[ ریورس تانل , v2ray , حرفه ای و بدون اختلال با پنل x-ui ](https://www.youtube.com/watch?v=2ieccbVzlUw)

2. [ReverseTlsTunnel](https://github.com/radkesvat/ReverseTlsTunnel)


3. [ریورس پروکسی grpc / معکوس تمام سایت](https://www.youtube.com/watch?v=QBEnXWTyQwE)


## ReverseTlsTunnel

تونل معکوس: فرقش با تونل عادی اینه که کانکشن را سرور خارج آغاز میکنه مثل یک بازدید کننده خارجی از یه سایت ایرانی که سرور شما باشه و بعد از اتصال ؛ دیتا مثل تونل عادی رد و بدل میشه ؛ این روش از تونل های عادی که سرور ایران به خارج کانکشن رو شروع میکنه از نظر دیتکت شدن؛ میشه گفت بهتره چون عموما یه سرور کانکشن به جایی شروع نمی کنه (برای مدت طولانی و تعداد کانکشن همزمان بالا!) .


[Ptechgithub](https://github.com/Ptechgithub/ReverseTlsTunnel)


[ آموزش تانل معکوس - Reverse TLS Tunnel | اتصال به سرور خارج حتی اگر فیلتر شده! ](https://www.youtube.com/watch?v=lkH-IP7-Jag)

# NginxReverseProxy

این اسکریپت برای نصب و پیکربندی NGINX Reverse Proxy بر روی سرورهای لینوکسی استفاده می‌شود. با اجرای این اسکریپت، می‌توانید به سرعت و به صورت خودکار یک سرور وب را به عنوان یک پروکسی برای مسیردهی ترافیک به برنامه‌های دیگر (سرویس‌های GRPC و WebSocket) پیکربندی کنید. گواهی ssl بگیرید و یک قالب سایت رایگان نصب کنید.


[NginxReverseProxy](https://github.com/Ptechgithub/NginxReverseProxy)


#  آموزش کامل FallBack در X-UI و دور زدن فیلترینگ با Nginx 

اگه قبلا ویدیو کامل آموزش پنل X-UI رو دیدید که حدودا بالای 1 ساعت هستش نیاز نیست این آموزش رو ببینید. با آموزش کامل FallBack در X-UI و دور زدن فیلترینگ با Nginx در خدمت شما هستم.

[ آموزش کامل FallBack در X-UI و دور زدن فیلترینگ با Nginx ](https://www.youtube.com/watch?v=sXKK0rCrm8s)

[config](https://t.me/iaghapour/292)


#  فریب دادن ربات فیلترینگ با Fallback و Nginx 

توی این ویدیو، به نحوه نصب و استفاده از سرور Nginx در کنار پنل X-UI از طریق پنل Alireza0 میپردازیم. از ابتدا با نصب و راه‌اندازی پنل X-UI شروع می‌کنیم و سپس با استفاده از یک اسکریپت PHP و Nginx، یک سرویس جعلی رو روی سرور ایجاد می‌کنیم.

[ فریب دادن ربات فیلترینگ با Fallback و Nginx ](https://www.youtube.com/watch?v=gdYJTtXwfGc&t=186s)


#  همه کانفیگ ها + پنل مرزبان روی پورت 443 ! تک پورت کردن پنل مرزبان با fallback و HAProxy 


توی این آموزش با هم یادمیگیریم که چطور توی پنل مرزبان با استفاده از haproxy همه کانفیگ ها و حتی پنل مرزبان رو روی یک پورت مثلا پورت 443 بالا بیاریم و حتی اگه از قبل پنل رو روی پورت دیگه ای مثلا پورت 8080 بالا آوردیم بتونیم درخواست هایی که به اون پورت میاد رو هم بفرستیم به تنظیمات جدیدمون تا کاربرا دچار مشکل نشن. توی این آموزش از پنل مرزبان استفاده میکنیم .
.

[ همه کانفیگ ها + پنل مرزبان روی پورت 443 ! تک پورت کردن پنل مرزبان با fallback و HAProxy ](https://www.youtube.com/watch?v=CX8bXLD69G0)

## RATHOLE

[آموزش تانل RATHOLE روی پنل3x-ui به روش آزومی](https://www.youtube.com/watch?v=xRGROvccDIc)

## ICMP

سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت با استفاده از اسکریپت kcp آزومی تانل icmp  بین سرور ایران و خارجتون برقرار کنین.

 [آموزش تانل ICMP به روش آزومی روی پنل 3x-ui ثنایی](https://www.youtube.com/watch?v=UOB4R_C4Imw)


## SoftEther

سلام به همگی، امروز آموزش تانل زدن از سرور خارج به ایران رو بهتون یاد بدم تا در صورتی که سرورتون بلاک بود یا آی پی کثیف داشت دیگه به مشکل بر نخورید.
با softEther می تونید کانفیگ های Openvpn و l2tp وصل بشید و مشکلتون رو برطرف کنید

[ با SoftEther VPN از سرور خارج به ایران ریورس تانل بزن! ](https://www.youtube.com/watch?v=WNPNkJix4fk)


## GENEVE

[ آموزش ساخت IPV6 با استفاده ازGENEVE به روش آزومی ](https://www.youtube.com/watch?v=mXDgJhQ8Rzw)

## وردپرس با پنل سنایی و علیرضا

[ پنل xui و وردپرس رو کنار هم داشته باش! اسکریپت خودکار WUI  تک پورت کردن پنل سنایی و علیرضا ](https://www.youtube.com/watch?v=OksLefIcUxc)



همونطور که میدونین استفاده از پنل های xui بدون اینکه سایتی در پس زمینه باشه میتونه احتمال فیلتر شدن آیپی سرور و دامنه رو افزایش بده . به همین علت اسکریپت WUI میتونه برای ما وردپرس رو در کنار پنل xui نصب کنه و مارو به حالت عادی نزدیکتر کنه. با اینکار یک سایت وردپرسی روی دامنه شما ایجاد میشه و با یک مسیر مخفی میتونیم به  پنلمون دسترسی داشته باشیم.


[WUI (WordPress + XUI Panel)](https://github.com/azavaxhuman/WUI)


## Namizun - نامیزون
با استفاده از نامیزون مقدار مصرف ترافیک رو نامتعادل کنید اینطوری هم دیرتر شناسایی میشه هم اگه جایی مشکل مصرف منصفانه داشتید میتونید بااین روش دورش بزنید:

[گیتهاب پروژه](https://github.com/salehi/namizun)

[آموزش](https://www.youtube.com/watch?v=rFXG6SdcqWw)

## Speedtest - تست سرعت
[Client]
* https://fiber.google.com/speedtest/
* https://speed.cloudflare.com/
* https://www.speedtest.net/

[Server]
```
wget -qO- bench.sh | bash
```

# Gost

[آموزش اجرای تانل معکوس Gost بر روی سرور ایران](https://telegra.ph/%D8%AA%D8%A7%D9%86%D9%84-%D9%85%D8%B9%DA%A9%D9%88%D8%B3-Gost-%D8%A8%D8%A7-%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%D8%A7%D8%B2-CDN-03-13)

# یک به چند

[آموزش تانل یک سرور ایران به چند سرور خارج روی پنل علیرضا و ثنایی](https://www.youtube.com/watch?v=4bB34F2QoK0)

# Port to Port

[ آموزش تانل سرور ایران به چند سرور خارج با روش Port to Port ](https://www.youtube.com/watch?v=AplqTJDN1YY)


# ipv4 to ipv6

[ تانل Ipv6 با ماژول Ip6GRE + IPtables | حل اختلال v2ray با ساخت شبکه خصوصی ](https://www.youtube.com/watch?v=j5TtmVXq-rE)


# چرا NGINX انقدر وحشتناک سریعه؟!

[چرا NGINX انقدر وحشتناک سریعه؟!](https://threadreaderapp.com/thread/1761266188871496093.html)



#  آموزش ساخت کانفیگ نیم بها و افزایش سرعت دانلود و آپلود سرور 

[ آموزش ساخت کانفیگ نیم بها و افزایش سرعت دانلود و آپلود سرور ](https://www.youtube.com/watch?v=NNbYF633B_I)


#  آموزش تانل باIP6IP6 به روش آزومی روی پنل 3X-UI ثنایی-SIXTININELEARN 


سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت با استفاده از IP6IP6  برای سرور ایران و خارجتون IPV6  بگیرین و با استفاده از تانل اوتباند بینشون ارتباط برقرار کنین برای عبور از فیلترینگ.


[ آموزش تانل باIP6IP6 به روش آزومی روی پنل 3X-UI ثنایی-SIXTININELEARN ](https://www.youtube.com/watch?v=VIZ-WyTpEx8)


#  روش جدید تانل OPENVPN پرسرعت ترین روش ممکن-SIXTININELEARN 

ا دامنه ی فیلتر شده ی خودتون کانفیگ بسازین و بتونین به اینترنت آزاد وصل بشین

[OPENVPN](https://www.youtube.com/watch?v=z1XecNzLlG0)


#  آموزش تانل IPSEC روی پنل 3x-ui ثنایی-SIXTININELEARN 

سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت با استفاده از تانل گاست تانل IPSEC  بین سرور ایران و خارجتون برقرار کنین به همراه ساخت IPV6.

[ آموزش تانل IPSEC روی پنل 3x-ui ثنایی-SIXTININELEARN ](https://www.youtube.com/watch?v=K2W9tq3yKcc)



#  آموزش تانل بین 2 سرور با Gost V3 ساده و با سرعت بالا 


همونطور که قول داده بودم آموزش تانل بین 2 سرور با Gost V3 ساده و با سرعت بالا آماده شده و همراه با این آموزش برای شما یه هدیه هم در نظر گرفتیم.

************************************
برای دوستانی که ویدیو رو کامل دیدن و ما رو ساب کردن و در قسمت نظرات کدی که در ویدیو گفته شده رو برای ما کامنت کنن قرعه کشی گذاشتیم و به چند نفر سرور رایگان یک ماهه میدیم و همینطور پول به صورت رمز ارز :) تعداد افراد کامنت کننده زیاد بشه جوایز رو هم بیشتر میکنیم پس برای دوستان خودتون هم بفرستید.
************************************

تانل سرور ایران و خارج / آموزش تانل با gost v3 / تانل gost / چندی از کلمات کلیدی این ویدیو هستن :)


[ آموزش تانل بین 2 سرور با Gost V3 ساده و با سرعت بالا ](https://www.youtube.com/watch?v=wBRyHV0jEpU)


#  آموزش تانل دکودمودور به ساده ترین روش و ساخت ipv6 لوکال با یک کلیک | سریعترین روش 

#دکودمودور
در این ویدیو به ساده ترین و سریع ترین روش ممکن برای سرور داخل و سرور خارج یک ipv6 لوکال می سازیم و در ادامه با استفاده از تانل دکودمو-دور ارتباط این دو سرور رو باهم برقرار می کنیم. این آموزش یکی از ساده ترین و سریعترین روش های تانل زدن بین دو سرور داخل و خارج می باشد.


[AminiYT](https://www.youtube.com/watch?v=PcuUOoWV7ME&t=28s)