#   روش‌های اتصال به اینترنت آزاد


در این مستندات سعی بر این که تمام روش های موثر برای اتصال به اینترنت آزاد جمع آوری گردد.
در حال حاضر سه روش fragment, warp on warp, worker   بسیار موثر هستند.
در نظر داشته باشید روش های بسیار متعددی و گوناگونی معرفی شده است .

| روش | توضیحات |
| --- | --- |
| [Fragment](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/Fragment.md) | در این روش پکیت ها تکه تکه می شوند و نیاز به دامنه و سرور کثیف هست |
| [DNS](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/DNS.md) | این کار زمانی مناسب است که می خواهید خودتان داشته باشید |
| [CloudFlare White IP](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/CloudFlare.md) | روش هایی برای یافتن ای پی های مناسب کلودفلیر |
| [Server Security](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/Security.md) | روش های رعایت امنیت در سرور |
| [Oblivion](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/Oblivion.md) | اپلیکیشین با تکنولوژی وارپ بدون سرور و دامنه |
| [Warp on Warp](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/Warp.md)|روش های که با آنها وارپ را به کار می اندازید|
| [Worker](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/Worker.md) | به صورت رایگان کانفیگ ورکر بسازید در صورت نیاز دامنه تهیه کنید |
| [Internal Server](https://github.com/majidrezarahnavard/way_of_freedom/blob/main/Internal_Server.md) | روش برای افرادی که یک سرور داخلی دارند و یک سرور خارجی |



[اگر دانش کافی ندارید از این بخش شروع کنید](https://github.com/majidrezarahnavard/way_of_freedom?tab=readme-ov-file#%D8%A7%DA%AF%D8%B1-%D8%AF%D8%A7%D9%86%D8%B4-%D9%81%D9%86%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%86%D8%AF%D8%A7%D8%B1%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%A7%DB%8C%D9%86-%D8%A8%D8%AE%D8%B4-%D8%B4%D8%B1%D9%88%D8%B9-%DA%A9%D9%86%DB%8C%D8%AF)


[نمایش به صورت وبسایت](https://majidrezarahnavard.github.io/way_of_freedom/)


#  گرم یاد آوری یا نه من از یادت نمی کاهم

* به یاد یوسف قبادی
* به یاد سگارو



[صحبت های سارینا اسماعیل زاده](https://www.youtube.com/watch?v=gpRnvFZ3vTU&t=52s)

[مجیدرضا رهنورد](https://www.youtube.com/watch?v=N3Yo009a7Uc)




# امنیت پلتفرم توییتر

اگربه امنیت خودتون اهمیت میدین این موارد رو تو اتصال به توییتر خودتون حتما لحاظ کنید

[نکاتی در خصوص امنیت پلتفرم توییتر (X) برای فعالین سیاسی، اجتماعی، مدنی و کلا" همه !](https://telegra.ph/%D9%86%DA%A9%D8%A7%D8%AA%DB%8C-%D8%AF%D8%B1-%D8%AE%D8%B5%D9%88%D8%B5-%D8%A7%D9%85%D9%86%DB%8C%D8%AA-%D9%BE%D9%84%D8%AA%D9%81%D8%B1%D9%85-%D8%AA%D9%88%DB%8C%DB%8C%D8%AA%D8%B1-X-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%81%D8%B9%D8%A7%D9%84%DB%8C%D9%86-%D8%B3%DB%8C%D8%A7%D8%B3%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-%D9%85%D8%AF%D9%86%DB%8C-%D9%88-%DA%A9%D9%84%D8%A7-%D9%87%D9%85%D9%87-02-13)

[ How to Set up 2-Factor Authentication On Twitter Account ](https://www.youtube.com/watch?v=BXLQNr-gaEs)

[ How To Change Email Address In Twitter (2022) ](https://www.youtube.com/watch?v=F-itvjI0r-8)

[ How to set up two-factor authentication (2FA) for ProtonMail ](https://www.youtube.com/watch?v=GgrNWoLyp1g)

[تو این #رشتو می خواهم توضیح بدهم که شیوه کارکرد #عرزشی های #سایبری چجوری هست و چگونه مغز شما رو منفجر می کنند:](https://threadreaderapp.com/thread/1762784314478022916.html?utm_campaign=topunroll)

[اگر از سرور ناشناس استفاده کنیم چه میشود؟](https://threadreaderapp.com/thread/1762770899537690939.html)

## Data leak

هرکانفیگی که استفاده می کنید حتما یکبار با سایت زیر چک کنید که دیتا لیک نداشته باشد

https://browserleaks.com/




WebRTC in Firefox

    To disable WebRTC in Firefox:
    Type about:config in the address bar and press Enter.
    In the search bar, type media.peerconnection.enabled and double-click the preference to set its value to false.

WebRTC in Chrome

    The recommended solution to limit the risk of IP leakage via WebRTC is to use the official Google extension called WebRTC Network Limiter, which provides a range of options with varying levels of protection.




# Wireguard go
[wireguard-go](https://github.com/bepass-org/wireguard-go/releases/tag/v1.0.4-rc2)
[خیلی ساده برین توی گیت هاب BePass و فایل مربوط به سیستمتون رو دانلود کنید :](https://threadreaderapp.com/thread/1759816946474766832.html)


# نکوباکس

[ اموزش کامل برنامهٔ نکو باکس Neko Box (برای دور زدن فیلترینگ) ](https://www.youtube.com/watch?v=JjvSeQwdxT8)

# v2ray windows

[ آموزش استفاده از v2ray در ویندوز , نحوه اتصال کانفیگ v2ray در ویندوز ](https://www.youtube.com/watch?v=Z31wBnYe3co)


# Bepass

Bepass: A DPI-nightmare proxy
[bepass](https://github.com/bepass-org/bepass)

[Bepass-worker](https://www.youtube.com/watch?v=1UG8g9-6XUc&t=161s)


# تذکر
اپلیکشن Beepass ربطی به این اپلیکشن ندارد و ناامن است.

</br>
برای کمک به این پروژه کتاب 
Network Programg with Go
را مطالعه کنید

# Yebekhe

[TelegramV2rayCollector](https://github.com/yebekhe/TelegramV2rayCollector)

[cf-clean-ip-resolver](https://github.com/yebekhe/cf-clean-ip-resolver)

[v2hub](https://github.com/sarinaesmailzadeh/V2Hub/blob/main/merged)


# Hiddify هیدیفای


[ آموزش کامل تنظیمات پیشرفته هیدیفای نکست Hiddify Next ](https://www.youtube.com/watch?v=NtQ0bQlIRrY)

[Hiddify Next](https://www.youtube.com/watch?v=EjHjLQbC40E)

[hiddify-next github](https://github.com/hiddify/hiddify-next/release)

[کانفیگ امین](https://github.com/amin4139/share_file/blob/main/Hiddify+)

[توضیحات امین](https://twitter.com/amin_o__o/status/1758010995207729342)

[ اتصال به اینترنت آزاد با معجره هایدیفای ](https://www.youtube.com/watch?v=qLrAdVcPpB0)
[کانفیگ](https://t.me/geekmeekbysina/97)

[ پیدا کردن ایپی تمیز و ساخت کانفیگ شخصی برای هیدیفای کاملا رایگان ](https://www.youtube.com/watch?v=uzdUFBEOTOU)


# Mahsa NG

[Mahsa NG Application](https://play.google.com/store/apps/details?id=com.MahsaNet.MahsaNG)


# Amnezia VPN

[ آموزش نصب و کانفیگ Amnezia VPN روی سرور (نصب ساده با پینگ مناسب - مناسب ترید) ](https://www.youtube.com/watch?v=JIgMNK_oQYk)


https://threadreaderapp.com/thread/1757093989616947356.html


بله، زمان ترید ساعت سیستم رو به سوئد تغییر بدین.
البته به شرطی که ژئولوکیشن ip سرورتون هم سوئد باشه.
از سایت http://ipinfo.io لوکیشن ip تون رو چک کنین.

</br>

این روش amnezia پارسال یه اپدیت خیلی مهم گرفت که عملا سیستم dpi روسیه رو  نابود کرد ازونجایی هم که سیستم dpi ایران عملا همون نسخه روسی هست بنابراین تو ایران هم خوب جواب میده منتها یکسری اشکالات امنیتی داذه که فیلترچی میتونه ازشون سو استفاده کنه ولی اون اشکالاتم میشه حل کرد


# argovpn 
[ArgoVPN](https://play.google.com/store/apps/details?id=com.filtershekanha.argovpn&hl=en_US)


# Edge Tunnel 

[ بدون داشتن سرور و با Edge Tunnel کانفیگ Vless بساز و محدودیت کلودفلر رو دور بزن ](https://www.youtube.com/watch?v=3XoiNd3CNts)

# Tor project

[ روش استفاده از مرورگر "تور" در اندروید ](https://www.youtube.com/watch?v=h24QM4iEhvE)


[ آموزش مخفی کردن آی پی سرور پشت آی پی های پروژه تور (Tor with X-UI) ](https://www.youtube.com/watch?v=sHI8oXN0Qg8)


[ترکیب Tor Browser و v2rayNG](https://www.youtube.com/watch?v=ZLsLDrm1Wh4&t=56s)

# IPv6 TunnelBroker
[اگر سرور مجازی شما ipv6 نداره ، این اسکریپت به شما کمک میکنه تا براحتی IPv6 که با استفاده از سرویس های تانل بروکر دریافت کردید رو روی سرور مجازیتون ست کنید. همینطور به راحتی میتونید تنظیمات رو مشاهده کنید یا اون رو به حالت قبل برگردونید. ](https://github.com/azavaxhuman/IPv6-TunnelBroker)

# از پرداخت با ریال جدا خودداری کنید

برای خرید سرور و دامنه و فیلترشکن و تلفن تلگرام هرگز از ریال استفاده نکنید.


[آموزش کیف پول متامسک](https://www.youtube.com/watch?v=DE4iA1-vLrU)


اگر از شبکه ترون 
</br>
TRX
</br>
استفاده کمترین کارمزد رو خواهد داشت.


[شبکه ترون چیست؟](https://www.youtube.com/watch?v=UWz8C0dLDkI)

## آدرس فیک

```
https://www.fakexy.com/
```



## از کجا سرور و دامنه با کریپتو بخرم؟

```
https://www.ethernetservers.com/vps-hosting
https://www.digiturunc.com/
yottasrc.com
https://www.hazi.ro/
https://aeza.net/
https://regxa.com/
https://racknerd.com/NewYear/
https://www.ihc.ru/?ref=405186
https://github.com/dalisoft/awesome-hosting
vps2day.com
https://vps.one
frantech.ca
https://hostvds.com/
https://4vps.su/
https://www.netcup.eu/vserver/vps.php#v-server-details
my.spectraip.net
https://www.namesilo.com/
https://www.hostinger.com/payments
https://bluevps.com/
```

## با کریپتو دامنه بخریم؟

```
https://www.spaceship.com/
```


با 0.6$ دامین shop. و 0.18$ کارمزد ICANN جمعا 0.78$ هزینه خرید

[خرید VPS با کریپتو؛ بهترین VPS های ارزان‌قیمت و با کیفیت برای VPN شخصی](https://ivpn.pro/vps-offers/buy-vps-by-crypto/)

## باریال چجوری کریپتو بخرم 

اگر هیچ دارایی کریپتو ندارید اول با ریال  نوبیتکس خرید کنید

[نحوه خرید کریپتو از نوبیتکس](https://www.youtube.com/watch?v=j2gDuIHKIko)

نوبیتکس آدرس ولت شما رو ذخیره می کنه و چون  می تونند با هویت شما تطابق دهند.


وقتی از درگاه های کریپتو خرید می کنید پول شما وارد استخر می شود و رهگیری اش سخت هست
ولی اگر بازم اگر خواستید می تونید از تبدیل های زیر استفاده کنید و به یک  ولت دیگر انتقال دهید.

### سایت های ایرانی خرید رمز ارز
```
https://arzanpay724.com/
https://nobitex.ir/
https://tetherland.com/
https://bit24.cash/
https://ok-ex.io/
```


### توجه
هرگز آدرس پرداخت رو مستقیم در نوبیتکس نزنید. و در ابتدا به متامسک یا تراست ولت انتقال دهید.

## Exchange
برای تبدیل دارایی خود می توانید از سایت زیر استفاده کنید

```
https://swapspace.co
https://fixedfloat.com/
https://www.thorswap.finance/
```

# Buy VPS and Domain just with 10$ for One Year! with iSegaro
[Buy VPS and Domain just with 10$ for One Year! with iSegaro](https://telegra.ph/Buy-VPS-and-Domain-just-with-10-for-One-Year-with-iSegaro-03-29)


[ آموزش خرید دامین (دامنه) از هاستینگر Hostinger با ارز دیجیتال و ساخت اکانت کلادفلر ](https://www.youtube.com/watch?v=sZzXI7BGClI)

# Namizun - نامیزون
با استفاده از نامیزون مقدار مصرف ترافیک رو نامتعادل کنید اینطوری هم دیرتر شناسایی میشه هم اگه جایی مشکل مصرف منصفانه داشتید میتونید بااین روش دورش بزنید:

[گیتهاب پروژه](https://github.com/salehi/namizun)

[آموزش](https://www.youtube.com/watch?v=rFXG6SdcqWw)

# افزایش سرعت SSH
معمولا سرعت اتصال به ssh خیلی کمه و  اختلال بالایی داره با ۲راه میتونید تا حد زیادی مشکل رو حل کنید که یکیش عوض کردنه پورت اتصال هستش یکیش عوض کردن نحوه رمزنگاری این پروتکل

```
sudo nano /etc/ssh/sshd_config
```
برای تغییر پورت کافیه قسمت Port رو از کامنت در بیارید و عوضش کنید
و برای تغییر نحوه رمزنگاری این کد رو اضافه کنید:
```
Ciphers aes128-gcm@openssh.com,aes128-ctr
```
(میتونید الگوریتم های دیگرو از گوگل پیدا کرده و تست کنید که کودوم سرعت بهتری دارن)
و درنهایت برای اعمال شدن تغییرات دستور زیر رو میزنیم
```
sudo systemctl restart sshd
```

## اتصال امن و راحت به سرور

برای اتصال به سرور از ای پی ایران استفاده نکنید.
می تونید حتی از این پراکسی ها استفاده کنید.

https://ssheasy.com/



## درگاه کریپتو برای فروشندگان

به جای پرداخت ریالی پرداخت با ترون راه اندازی کنید.


```
http://Nowpayments.io
http://Coinpayments.net
http://Bitpay.com
```

[ آموزش ثبت نام و تنظیمات درگاه پرداخت NOWPayments ](https://www.youtube.com/watch?v=cIR8VTHFyn0)


# اگر فیلترشکن با ریال بخریم چه اطلاعاتی رو می توانند به دست بیاورند؟ 

برخی از فروشندگان فیلترشکن حکومتی هستند . تشخیص اینکه آیا این فیلترشکن حکومتی هست یا نه به سادگی نیست.

## اگر از فیلترشکن حکومتی با ریال خرید کنید چه اطلاعاتی از شما رو به دست می آورند:

* نام و نام خانوادگی
* کدملی
* آدرس محل سکونت
* کدپستی
* آی پی
* نوع دستگاه و بروزی که استفاده می کنید
* لیست سایت هایی که مشاهده می کنید
* لیست خرید های آنلاین از پلتفرم های بزرگ
* لیست مکان هایی که با اسنپ یا تپسی رفتید


## درآمد فیلترشکن

درآمد ایرانسل حدودا ۳۰ همت
</br>
اسنپ حدودا ۳۲ همت
</br>
و گردش سالانه فیلترینگ حدودا ۵۰-۶۰ همت
</br>
بدون درگیری مجوز و سرمایه‌گذاری و پرداخت حق لایسنس و استخدام نیرو و بیمه و مالیات و حساب و کتاب.
</br>
خودشان به همین سادگی و به هزینه‌ی مردم به اندازه‌ی دو اپراتور اصلی کشور درآمد کسب می‌کنند.





# نکات خرید سرور

[آنچه باید قبل از خرید VPS بدانید؛ چک لیست نکات مهم در خرید سرور برای VPN شخصی!](https://ivpn.pro/how-to/what-you-should-know-before-buying-a-vps-for-vpn/)

Choose a server:
</br>

* سیستم عامل سرور Ubuntu 22 
* پینگ کم (80 تا 100 میلی‌ثانیه) برای اروپا، 160 تا 180 میلی‌ثانیه برای آمریکا
* دیتاسنترهای اروپایی (فرانکفورت، آمستردام، لوکزامبورگ) بهترین گزینه
* از اروپای شرقی، ترکیه و امارات دوری کنید
* مراقب فروشندگان روس و هندی باشید
* قیمت مناسب: 5 دلار در ماه برای یک VPS نرمال
  
</br>
Server Configuration:
</br>

* پورت 1Gbps
* CPU: حداقل اینتل E5 ورژن 3 یا 4، AMD Ryzen یا EPYC
* رم: DDR4 یا DDR5
* فضای ذخیره: SSD NVMe (نه HDD)
* 

</br>
Traffic:
</br>


* ترافیک 1000GB در عمل 500GB ترافیک برای کل یوزرهای VPN شما است.

خرید از صرافی‌های کریپتو:

* با VPN و آدرس اروپایی خرید کنید.
*با کارت ویزا یا مستر کارت گزینه‌های بیشتر و ارزانتری هست.


[نکات مهم برای عبور از فیلترینگ!](https://threadreaderapp.com/thread/1754472982687150413.html)

# speedtest - تست سرعت
[Client]
* https://fiber.google.com/speedtest/
* https://speed.cloudflare.com/
* https://www.speedtest.net/

[Server]
```
wget -qO- bench.sh | bash
```

# روش استفاده مجدد از دامنه های فیلتر شده یا کند شده

[روش استفاده مجدد از دامنه های فیلتر شده یا کند شده](https://telegra.ph/%D8%B1%D9%88%D8%B4-%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%D9%85%D8%AC%D8%AF%D8%AF-%D8%A7%D8%B2-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D9%87%D8%A7%DB%8C-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%B4%D8%AF%D9%87-%DB%8C%D8%A7-%DA%A9%D9%86%D8%AF-%D8%B4%D8%AF%D9%87-02-16)

# مخزن دانلود فیلترشکن
[Mark Pashmfouroush](https://fdroid.noql.net/)


# آموزش ترکیب v2rayNG و nekobox و با استفاده از فرگمنت داخلی xray فعال کردن کانیفگ های ورکر داخل nekobox

[amin](https://twitter.com/amin_o__o/status/1758258329514598534)

# نرم افزار secure dnsعبور از فیلتر سایتهای بر پایه sni/dns فیلتر شدند مثل یوتیوب،توییتر و.در ویندوز 

نرم افزار secure dnsعبور از فیلتر سایتهای بر پایه sni/dns فیلتر شدند مثل یوتیوب،توییتر و.در ویندوز 
افرادی  بدون نیاز به تغییر ای پی می خواهند از این سایتها استفاده کنند

https://threadreaderapp.com/thread/1757688129648013538.html


# پنل علیرضا

[An Advanced Web Panel • Built on SagerNet/Sing-Box](https://github.com/alireza0/s-ui)

پورت ۲۰۹۵ و admin برای یوزر/پسورد

[ نصب و بررسی پنل S-UI جایگزین پنل X-UI (ساپورت از تمام پروتکل ها) ](https://www.youtube.com/watch?v=Vwg5OOI8J_w)

# Spotify

برای حل مشکل اسپاتیفای باید از دامنه و سرور استفاده کنید
و این کانفیگ رو به افراد متعدد ندهید. یک راه گران هم خرید وی پی ان نورد و گذاشتن در لایه آخر تونل هست.


# Open VPN

برای این روش یک سرور نیاز دارید.

[ آموزش ساخت openvpn روی سرور مجازی ](https://www.youtube.com/watch?v=X8GOExnqPCY)


[برنامه OpenVPN را با v2rayNG ترکیب کنم](https://threadreaderapp.com/thread/1761155128487448961.html)

# PowerTunnel for Android

 Simple, scalable, cross-platform and effective solution against government censorship for Android 

https://threadreaderapp.com/thread/1757432205570187325.html

 https://github.com/krlvm/PowerTunnel-Android


 # معرفی یک سری فیلترشکن روی اندروید 
 معرفی یک سری فیلترشکن روی اندروید خوب کار می کنند لینک گوگل پلی برای افرادی دیدن آموزش براشون سخته و میخوان برای توییتر ایسنتا وصل بشن روی همراه مخابرات تست شده در ریپلای پست جوابش
در رپیلای پست عکسشون به همراه لینک دانلود هست

[آموزش](https://threadreaderapp.com/thread/1759572051084382496.html)

# Brook

[ روش جدید دورزدن فیلترینگ با استفاده از Brook ](https://youtu.be/0YR4ZpnoYUY?si=Xs1BPq98XuNxtiUt)
[آموزش](https://twitter.com/kevinzakarian/status/1753403463608730017)

از لینک زیر پلاگین Brook برای نکوباکس رو دانلود و نصب کنید. با این پلاگین می‌تونین بُروک رو در گوشی اندروید با نکوباس اجرا کنین و در کنار اپ اصلی برنامه داشته باشین. (برای تشخیص v8a یا v7a پردازنده گوشی=> تلگرام در منوی setting اون پائین نوع CPU رو زده)


[plugin](https://github.com/MatsuriDayo/plugins/releases/tag/Brook-v20220707-1)


[ آموزش نصب و کانفیگ Brook VPN روی سرور به 2 روش ](https://www.youtube.com/watch?v=2IiJM6jyAUs)


# Hysteria 2  and TUIC

[ آموزش راه اندازی Hysteria 2 و TUIC با یک کلیک همراه با مدیریت کاربران (سرعت بالا و پینگ پایین) ](https://www.youtube.com/watch?v=T_p9VqngfY8&t=69s)

[ آموزش راه اندازی Hysteria 2 با یک کلیک (سرعت بالا و پینگ پایین) ](https://www.youtube.com/watch?v=Tj-zM0yT62A&t=5s)


[aio-proxy All-In-One Proxy Tools](https://github.com/hrostami/aio-proxy)

[reality-ezpz](https://github.com/aleskxyz/reality-ezpz)

[How run Hysteria V2 Protocol with iSegaro](https://telegra.ph/How-run-Hysteria-V2-Protocol-with-iSegaro-09-02)

[How run Hysteria Protocol with iSegaro](https://telegra.ph/How-run-Hysteria-Protocol-with-iSegaro-04-07)

[How to start the TUIC v5 protocol with iSegaro](https://telegra.ph/How-to-start-the-TUIC-v5-protocol-with-iSegaro-08-26)


# آموزش راه‌اندازی Home Server با VPN مرکزی


شما در پایان این آموزش توانایی راه‌اندازی یک Home Server با امکانات زیر را خواهید داشت:
-VPN Server (Xray, Sing-Box, OpenVPN, WireGuard)
-Media Center (DLNA/Plex/Emby)
-Home Cloud/NAS
-MultiWAN
-Ad Blocker
-Docker


[Home Server](https://threadreaderapp.com/thread/1757862582717759721.html)

[آموزش راه‌اندازی Home Server با VPN مرکزی(قسمت دوم)](https://threadreaderapp.com/thread/1758165072625451522.html)


[راه‌اندازی Home Server با VPN مرکزی – قسمت ۳](https://ivpn.pro/openwrt/how-to-deploy-home-server-with-built-in-vpn/)


[وبلاگ کوین](https://ivpn.pro/)

# invisible pro

[invisible pro](https://threadreaderapp.com/thread/1758395708925784320.html)


# chiselBox

با استفاده از اپ chiselBox به‌سادگی از کانفیگ‌های چیزل در دیوایس‌های اندرویدی استفاده کنین.
چیزل یک تانل سریع WS/TCP/UDP از طریق HTTP هست، که چندی‌پیش توسط سگارو معرفی شد؛


[ircfspace](https://threadreaderapp.com/thread/1759832792236491136.html)
[ChiselBox ](https://github.com/PsrkGrmez/ChiselBox)

[اتصال به وارپ از طریق تانل چیزل..](https://threadreaderapp.com/thread/1759985555725598930.html)

# Net4people

 [ net4people ](https://github.com/net4people/bbs/issues?q=is%3Aissue+is%3Aopen+label%3AIran) 

# Investigation on Blocking of Reality in IRAN

[Investigation on Blocking of Reality in IRAN](https://github.com/XTLS/Xray-core/issues/2778)


# آینده فیلترینگ

[سیستم فیلترینگ جدید همراه اول چجوری کار میکنه؟](https://threadreaderapp.com/thread/1753357101001265309.html)


[ماشین لرنینگ ها چجوری کار می کنند؟](https://threadreaderapp.com/thread/1753405311921078406.html)


[داستان dns و فیلترینگ](https://threadreaderapp.com/thread/1721555866875257190.html)


[Conjure](https://www.youtube.com/watch?v=Um881kkzJuk)


[Fingerprinting Obfuscated Proxy Traffic with Encapsulated TLS Handshakes](https://www.usenix.org/conference/usenixsecurity24/presentation/xue)


[اینترنت، فیلترینگ و IPv6](https://threadreaderapp.com/thread/1755968930433093941.html)


# پروژه امید

ما در پروژه امید خواهان فراهم آوردن اینترنت آزاد برای همه ایران هستیم. هدف ما ساده‌سازی و همگانی کردن دانش عبور از فیلترینگ جمهوری اسلامی است. اینجا محفلی است برای به اشتراک گذاری تکنولوژی‌هایی که برای عبور از فیلترینگ حاکمیت ایران موثر هستند. هویت ما هیچگاه مشخص نخواهد شد و تا روز آزادی تلاش‌مان را برای گسترش اینترنت آزاد در ایران ادامه خواهیم داد.

[پروژه امید](https://github.com/iranxray/hope)

# بات تلگرام IRAN_VPN_Guide_bot

با درود
این مجموعه آموزش های و تنظیمات تخصصی اپلیکیشن های VPN مختص به XRay و V2Ray و به زبان فارسی برای کاربران ایرانی تهیه و تنظیم شده است.

هم یاد بگیریم و هم به بقیه یاد بدهیم
دست‌های هم رو بگیرید، تنهایی از این جا نمی‌تونیم گذر کنیم.
به امید پیروزی که خیلی دور نیست🤞🏽

[bot telegram](https://t.me/IRAN_VPN_Guide_bot)


# iSegaro

[تمام آموزش های سگارو](https://www.google.com/search?q=iSegaro+site:https://telegra.ph)


# ircf.space

[ircf.space](https://ircf.space/linkbox.php)

# geo-location routing

This is an Enhanced and All-in-One set of geo-location routing files optimized for Iranian users to use in v2ray/xray and all their compatible clients.

[Iran-v2ray-rules](https://github.com/Chocolate4U/Iran-v2ray-rules)


# تاثیرات فیلترینگ

خیلی خلاصه بگم به دلیل وجود #فیلترینگ:
* ۱. دستگاه‌ها و برنامه‌ها به سختی امکان آپدیت دارن و در نتیجه دچار ضعف امنیتی شدن.
* ۲. وجود vpnهای بدون هویت باعث افزایش زامبی در شبکه شده.
* ۳. خرید سرور داخلی جهت عبور از محدودیت‌ها توسط افراد غیر متخصص باعث افزایش آسیب‌پذیری شبکه و دیوایس‌های زامبی شده.
* ۴. الگوی غلط #ایران_اکسس که توهم امنیت ایجاد میکنه باعث عدم توجه جدی به مقوله‌ی امنیت شده.
* ۵. کوچ متخصصان و سپردن کار به افراد غیر متخصص که این هم بخشیش به خاطر فیلترینگ


</br>

و این موارد خیلی زیاده، عمدتا نتایج فیلترینگ و البته بخشیش هم تبعات تحریم و شرایط بد اقتصادی کشوره.

# Free V2ray Config 

This repository contains a collection of free V2ray configuration files that you can use with your V2ray client to access the internet securely and anonymously.

[V2ray-Configs](https://github.com/barry-far/V2ray-Configs)

#  Shadowsocks + cloak server - آموزش و کانفیگ شادوساکس 

[ Shadowsocks + cloak server - آموزش و کانفیگ شادوساکس ](https://www.youtube.com/watch?v=wrPP0V32rxc)

# xray

مهم ترین پروژه که تمام روش های بر اساس این پروژه هست.

[Xray-core](https://github.com/XTLS/Xray-core)


[computerscot.github.io](https://computerscot.github.io/)

## آشنایی و نحوه کلی کار با هسته Xray و نوشتن کانفیگ برای آن
[آشنایی و نحوه کلی کار با هسته Xray و نوشتن کانفیگ برای آن](https://telegra.ph/%D8%A2%D8%B4%D9%86%D8%A7%DB%8C%DB%8C-%D9%88-%D9%86%D8%AD%D9%88%D9%87-%DA%A9%D9%84%DB%8C-%DA%A9%D8%A7%D8%B1-%D8%A8%D8%A7-%D9%87%D8%B3%D8%AA%D9%87-Xray-%D9%88-%D9%86%D9%88%D8%B4%D8%AA%D9%86-%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%AF-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%A2%D9%86-01-08)


## WebSocket

[WebSocket](https://xtls.github.io/Xray-docs-next/en/config/transports/websocket.html#websocket)

پرامتر early data برای کاهش تاخیر (پینگ) هستش و اون عدد 2048 هم که پیشنهاد project x بوده برای ارسال حداکثر اولین پکت


# آموزش مقدماتی و نصب پنل

[نقشه راه دسترسی به اینترنت آزاد - از کانال یوتیوب ایمان آقاپور](https://iaghapour.github.io/freehope/)

[آموزش کامل پنل مرزبان](https://www.youtube.com/watch?v=2yWopaxdkM0&t=211s)

[آموزش جامع پنل سنایی](https://www.youtube.com/watch?v=pDfUWzCLb6I)

[ V2ray, Cloudflare, SSL, CDN, Proxy آموزش کامل ](https://www.youtube.com/watch?v=yIkJvmQjVr0)

[ آموزش ساخت سریعترین وی پی ان ایران - فیلترشکن XRay و V2Ray ](https://www.youtube.com/watch?v=MjqZ--zYrdc)


#   آموزش لینوکس و شبکه

[دوره الپیک جادی](https://www.youtube.com/watch?v=cqfrsmg4BKo&list=PL-tKrPVkKKE0kM18Sg5fqaZW1V2nidAeU)


[آموزش برنامه نویسی شبکه با Go](https://git.ir/packtpub-network-programming-with-go-video/)

[دانلود کتاب برنامه نویسی شبکه با زبان Go ](https://bibis.ir/network-programming-with-go-language-essential-skills-for-programming-using-and-securing-networks-2nd-edition-by-jan-newmarch/)


[Udemy – Learn Programming in GO (golang): A Rich Guide for Beginners 2022-8](https://downloadly.ir/elearning/video-tutorials/learn-programming-in-go-golang-a-rich-guide-for-beginners/)


[کتاب Network Programming with Go](https://faghatketab.ir/product/%DA%A9%D8%AA%D8%A7%D8%A8-network-programming-with-go/)


[web_ethical](https://www.youtube.com/watch?v=oV_yD-tuFLM)

[DNSSEC – Domain Name System Security Extensions Explained](https://www.socinvestigation.com/dnssec-domain-name-system-security-extensions-explained/)

[ Git Command Line Tutorial for Beginners , Git CLI Complete Crash Course , Learn Git in 45 Minutes ](https://www.youtube.com/watch?v=e5wY8G00OfI)

# اگر دانش فنی کامپیوتر ندارید از این بخش شروع کنید


اول از همه سعی کنید از این حوزه نترسید. شما فقط قرار چند تا مرحله رو پیش ببرید و عینا کپی کنید.
لازم نیست که به همه مفاهیم عمیق بشوید فقط تلاش کنید که به اینترنت آزاد متصل بشید.
من تلاشم رو می کنم که این متن در حد دانش یک بچه ی ده ساله تنظیم بشود.
</br>

اگر تازه کار هستید زمانی بین ۷ تا ۱۰ روز زمان میبره که بتونید این کار رو بکنید.
یادبگیرید میشه ۱۰ دقیقه
</br>

اول یکبار تمام مراحل رو ببنید بعد عملی اقدام کنید.
</br>

به طور کلی دو تا روش داریم:


* با سرور
* بدون سرور



## روش بدون سرور


این روش نیازی به خرید سرور ندارد و معمولا برای چند نفر اتصال همزمان کاملا کار آمد هست.
بهشون کانفیگ رایگان هم می گویند.

## warp on warp


### اول یک جیمیل بسازید 
[ آموزش ساخت Gmail / آموزش ساخت ایمیل ](https://www.youtube.com/watch?v=tZPt45qnxC4)

### اطلاعات فیک داشته باشید
وارد این سایت بشید و اطلاعات فیک به دست بیاورید.
https://www.fakexy.com/

### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)

### warp on warp

[ دور زدن رایگان فیلترینگ با یک روش قدرتمند اما ساده، بسیار سریع و ضد تحریم , Warp-on-Warp ](https://www.youtube.com/watch?v=VnsjxHl41mU)

## Worker

### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)

### روش ورکر

[کد آپدیت شده‌ی ورکر تولید ساب برای کلاینت‌های v2ray رو آپدیت کردم و میتونید از روی گیت‌هاب نسخه‌ی ۱.۷ رو دریافت و روی ورکرهاتون جایگزین کنید.
](https://threadreaderapp.com/thread/1656027952746823681.html)

[ ساخت فیلترشکن رایگان بدون سرور و دامین با استفاده از ورکر Cloudflare-Worker ](https://www.youtube.com/watch?v=9v57JYYn-Ww)

[امروز میخوام یه داستان بگم برای کسانی که میخوان vpn یا کانفیگ خودشون رو درست کنن و نمیدونن از کجا شروع کنن؟](https://threadreaderapp.com/thread/1639220465477492738.html)

[cf-ip-scanner](https://vfarid.github.io/cf-ip-scanner/)

[راهکار جامع کانفیگ‌های v2ray روی ورکر](https://github.com/vfarid/v2ray-worker/blob/main/README-fa.md)

[v2ray-worker](https://github.com/vfarid/v2ray-worker)

[کانال وحید](https://www.youtube.com/@vahidfarid)


## Oblivion - Unofficial Warp Client for Android
Oblivion provides secure, optimized internet access through a user-friendly Android app.
[Oblivion](https://github.com/bepass-org/oblivion/releases/)

https://twitter.com/seramo_ir/status/1756738507446366380

https://t.me/generatewarpplusbot


[Oblivion](https://www.youtube.com/watch?v=MJ6l4CVeDBg)


[لینک گرفتن کلید وارپ در تلگرام](https://t.me/generatewarpplusbot)

[فیلترشکن با پروتکل وارپ](https://www.youtube.com/watch?v=Xjy6hpgJBC8)

# روش سرور

اگر نمی دونید سرور چی هست اول این ویدیو رو ببنید.
[سرور چیه](https://www.youtube.com/watch?v=A_J8oLH4RN0)


در این روش باید سرور و دامنه خریداری کنید. سرور ها معمولا ۵ دلار در ماه و دامنه معمولا ۱ دلار در سال هزینه دارند.

</br>

هر سرور برای ۳۰۰ نفر راحت کار می کند و شما می توانید با این روش کل خانواده و دوستان رو وصل کنید.

تو این روش بهتون یه ای پی ثابت داده میشود.


[آموزش 0 تا 100 راه اندازی پنل و ساخت کانفیگ](https://www.youtube.com/watch?v=hV5s0Eqzei0)

### اول یک جیمیل بسازید 
[ آموزش ساخت Gmail / آموزش ساخت ایمیل ](https://www.youtube.com/watch?v=tZPt45qnxC4)

### اطلاعات فیک داشته باشید
وارد این سایت بشید و اطلاعات فیک به دست بیاورید.
https://www.fakexy.com/

### ولت رمز دیجیتال بسازید

[کیف پول متامسک](https://www.youtube.com/watch?v=aLDtocc8kWw)

### سرور بخرید

[ خرید بهترین سرورهای جایگزین هتزنر برای راه اندازی پروکسی - vps ](https://www.youtube.com/watch?v=5d5n0yP_JYQ)

[لیست سرور فروشی](https://github.com/majidrezarahnavard/way_of_freedom?tab=readme-ov-file#%D8%A7%D8%B2-%DA%A9%D8%AC%D8%A7-%D8%B3%D8%B1%D9%88%D8%B1-%D9%88-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D8%A8%D8%A7-%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA%D9%88-%D8%A8%D8%AE%D8%B1%D9%85)

حواستون باشه سرور لینوکس اوبونتو ۲۲ خرید کنند
</br>
ubuntu 22

### دامنه بخرید

[ خرید دامنه با کریپتو , خرید دامنه با بیت کوین , خرید دامنه با ارز دیجیتال ](https://www.youtube.com/watch?v=3fUx7Em_-C8)



[ساخت اکانت روی هاتزنر ](https://www.youtube.com/watch?v=Q0n2rLAZ_Ac)


### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)


### وب سوکت 

[ آموزش پروتکل وب سوکت در v2ray پروتکل خوب و پایدار با sni سریع ](https://www.youtube.com/watch?v=ygE4DL9t1zQ)


### روش فرگمنت رو استفاده کنید

[ استفاده از دامین فیلتر شده با فرگمنت , دامنه مردتو زنده کن ](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[ تحلیل فنی فیلترینگ کلودفلر و بی اثر کردن کامل آن با یک vless/vmess ساده و سرعت عالی حتی بدون TLS ](https://www.youtube.com/watch?v=aBaEOJLfUkg&t=925s)


[ آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها (تست شده) / Fragment ](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=579s)


لزومی ندارد از تونل کلود فلیر استفاده کنید.
