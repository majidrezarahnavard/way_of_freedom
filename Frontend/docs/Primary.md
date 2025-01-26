# مقدماتی


## ✔️راهنمای گام‌به‌گام بدون نیاز به دانش فنی!

 توی این مجموعه آموزشی که شامل ۴ ویدیو هست، نئو با زبان ساده و غیرفنی به صورت گام‌به‌گام و از صفر تا صد به شما یاد میده که چطور فیلترشکن امن و اختصاصی خودتون رو بسازید و اون‌رو در بستر MahsaNG به اشتراک بذارید تا کاربرا توی ایران بتونن به فیلترشکن شما وصل بشن.

🔴 این آموزش که حدود ۱ ساعت هست، به نحوی طراحی شده که برای انجام اون مطلقا نیازی به هیچ دانش فنی کامپیوتری ندارید؛ فقط با دنبال کردن ویدیو‌ها و «کپی‌پیست» کردن یکسری از دستورات لینوکس که در توضیحات ویدیو براتون آماده کردیم میتونید وی‌پی‌ان سرور خودتون رو بسازید و با اشتراک‌گذاریش به مردم در ایران کمک کنید که از فیلترینگ عبور کنن.


![pic](https://pbs.twimg.com/media/GbtVgQaXEAgLH2a?format=jpg&name=small)

##  گام اول: تهیه دامنه و اتصال آن به سرویس «کلادفلیر» /۱

تو این ویدیوی آموزشی بصورت گام‌به‌گام به تهیه دامنه و اتصال اون به سرویس «کلادفلیر» پرداخته شده. این اولین 
قدم و اولین ویدیوی آموزشی برای ساخت و تهیه فیلترشکن هست.


🔽لینکهای استفاده شده در ویدیو:

🔶سایت کلادفلیر:

http://cloudflare.com

🔶سایت استفاده شده در ویدیو برای خرید دامنه:

http://namesilo.com


https://x.com/joinNASNET/status/1854169972307554361


##  گام دوم: تهیه یک سرور لینوکس برای ساخت VPN اختصاصی :/۲🔻

تو این ویدیو با هم بصورت گام به گام یک سرور لینوکس تهیه میکنیم و اون رو برای ساخت VPN اختصاصی خودمون، آماده میکنیم.

🔽لینکها و دستورات استفاده شده در ویدیوی دوم (کانفیگ و آماده سازی سرور برای #فیلترشکن) به ترتیب:

🔶لینک وبسایت کوین زاکاریان برای تهیه سرور: 

http://ivpn.pro

🔶لینک برنامه Putty برای اتصال به 
سرور: 

https://chiark.greenend.org.uk/~sgtatham/putty/latest.html

🔶لینک برنامه Mobaxterm (برنامه استفاده شده در ویدیو توسط من):

https://mobaxterm.mobatek.net

🔶تغییر پسورد سرور: sudo passwd

🔶آپدیت سرور: sudo apt update

🔶اگر در اجرای دستور بالا به مشکل خوردید ابتدا: apt update و سپس apt install sudo را بزنید و بعد دستور بالا را دوباره اجرا کنید.

🔶آپگرید سرور: sudp apt upgrade

🔶آپدیت اتوماتیک سرور برای دفعات بعد:

sudo bash -c 'for i in update {,full-}upgrade auto{remove,clean}; do apt-get $i -y; done'

🔶برای تغییر پورت ssh سرور:

nano "/etc/ssh/sshd_config"

🔶 برای اعمال تغییرات ssh:

systemctl restart sshd

🔶نصب فایروال بر روی سرور: apt install ufw

🔶باز کردن پورت 4111 در فایروال: ufw allow 4111

🔶فعال کردن فایروال: ufw enable

🔶مشاهده وضعیت فایروال: ufw status

🔶نصب BBR بر روی سرور:
درباره اینکه bbr چیست:
https://tecmint.com/increase-linux-server-internet-speed-with-tcp-bbr/

🔶حالا برای انجامش طبق ویدیو:
فایلی که روی سرور باید ادیت شود:

nano /etc/sysctl.conf

🔶چیزی که در انتهای فایل باید قرار داده شود:
net.core.default_qdisc=fq
net.ipv4.tcp_congestion_control=bbr

🔶چک کردن وضعیت bbr: 
sudo sysctl --system

🔶بستن ترافیک تورنت بر روی سرور با یه دستور:

wget https://github.com/Heclalava/blockpublictorrent-iptables/raw/main/bt.sh && chmod +x http://bt.sh && bash http://bt.sh


https://x.com/joinNASNET/status/1854454787904799090



## 🟢 گام سوم: نصب پنل x-ui و ساخت اولین کانکشن فیلترشکن /۳🔻

تو این ویدیو با هم بصورت گام به گام به نصب پنل x-ui و ساخت اولین کانکشن فیلترشکن میپردازیم. این سومین قدم و سومین ویدیوی آموزشی برای ساخت و تهیه فیلترشکن هست.

🔽مطالب استفاده شده در ویدیو به ترتیب زمانی:

🔶پنل استفاده شده در ویدیو (پنل علیرضا احمدی):

https://github.com/alireza0/x-ui

💡پنل‌های مفید دیگر:

🔶پنل سنایی:

https://github.com/MHSanaei/3x-ui

🔶پنل مرزبان:

https://github.com/Gozargah/Marzban

🔶پورت‌های باز و قابل استفاده در کلادفلیر:

https://developers.cloudflare.com/fundamentals/reference/network-ports/

🔶درباره xray و هسته‌ی فیلترشکنی که از آن استفاده میکنیم:

https://github.com/xtls/xray-core

🔶لیست وبسایت‌های ایرانی که از بستر کلادفلیر استفاده میکنند:

https://trends.builtwith.com/cdn/Cloudflare/Iran

https://x.com/joinNASNET/status/1854455409962021132


##  گام چهارم: ساخت اکانت روی بستر مهساسرور و انتشار کانکشن فیلترشکن‌ برای استفاده کاربران اپلیکیشن MahsaNG 

تو این ویدیو با هم و بصورت گام به گام روی بستر مهساسرور اکانت میسازیم و کانکشن فیلترشکن‌مون رو برای استفاده کاربران اپلیکیشن MahsaNG از اون، منتشر میکنیم.
این چهارمین قدم و آخرین ویدیوی آموزشی برای ساخت و تهیه #فیلترشکن هست.

🔽مطالب مورد استفاده در ویدیو:

🔶وبسایت مهساسرور:

https://mahsaserver.com

🔶اپلیکیشن MahsaNG برای اندروید:

https://play.google.com/store/apps/details?id=com.MahsaNet.MahsaNG&hl=en_CA

🔶توضیح فنی و بیشتر درباره فرگمنت و علت اینکه چرا نمیتوان به این راحتی آن را فیلتر کرد:

https://github.com/GFW-knocker/gfw_resist_tls_proxy

🔶توضیح فنی و بیشتر درباره گزینه mux که در صفحه میبینید:

https://guide.v2fly.org/en_US/advanced/mux.html


https://x.com/joinNASNET/status/1854456276358492297

## اگر دانش فنی کامپیوتر ندارید از این بخش شروع کنید


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



### روش بدون سرور


این روش نیازی به خرید سرور ندارد و معمولا برای چند نفر اتصال همزمان کاملا کار آمد هست.
بهشون کانفیگ رایگان هم می گویند.

### warp on warp


#### اول یک جیمیل بسازید 
[ آموزش ساخت Gmail / آموزش ساخت ایمیل ](https://www.youtube.com/watch?v=tZPt45qnxC4)

#### اطلاعات فیک داشته باشید
وارد این سایت بشید و اطلاعات فیک به دست بیاورید.
https://www.fakexy.com/

#### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)

#### warp on warp

[ دور زدن رایگان فیلترینگ با یک روش قدرتمند اما ساده، بسیار سریع و ضد تحریم , Warp-on-Warp ](https://www.youtube.com/watch?v=VnsjxHl41mU)

### Worker

#### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)

#### روش ورکر

[کد آپدیت شده‌ی ورکر تولید ساب برای کلاینت‌های v2ray رو آپدیت کردم و میتونید از روی گیت‌هاب نسخه‌ی ۱.۷ رو دریافت و روی ورکرهاتون جایگزین کنید.
](https://threadreaderapp.com/thread/1656027952746823681.html)

[ ساخت فیلترشکن رایگان بدون سرور و دامین با استفاده از ورکر Cloudflare-Worker ](https://www.youtube.com/watch?v=9v57JYYn-Ww)

[امروز میخوام یه داستان بگم برای کسانی که میخوان vpn یا کانفیگ خودشون رو درست کنن و نمیدونن از کجا شروع کنن؟](https://threadreaderapp.com/thread/1639220465477492738.html)

[cf-ip-scanner](https://vfarid.github.io/cf-ip-scanner/)

[راهکار جامع کانفیگ‌های v2ray روی ورکر](https://github.com/vfarid/v2ray-worker/blob/main/README-fa.md)

[v2ray-worker](https://github.com/vfarid/v2ray-worker)

[کانال وحید](https://www.youtube.com/@vahidfarid)


### Oblivion - Unofficial Warp Client for Android
Oblivion provides secure, optimized internet access through a user-friendly Android app.
[Oblivion](https://github.com/bepass-org/oblivion/releases/)

https://twitter.com/seramo_ir/status/1756738507446366380

https://t.me/generatewarpplusbot


[Oblivion](https://www.youtube.com/watch?v=MJ6l4CVeDBg)


[لینک گرفتن کلید وارپ در تلگرام](https://t.me/generatewarpplusbot)

[فیلترشکن با پروتکل وارپ](https://www.youtube.com/watch?v=Xjy6hpgJBC8)


### IRCF

[ بهترین فیلترشکن رایگان موبایل | کاملا رایگان با قابلیت انتخاب لوکیشن دلخواه ](https://www.youtube.com/watch?v=MNqsR8F6JWs)

## روش سرور

اگر نمی دونید سرور چی هست اول این ویدیو رو ببنید.
[سرور چیه](https://www.youtube.com/watch?v=A_J8oLH4RN0)


در این روش باید سرور و دامنه خریداری کنید. سرور ها معمولا ۵ دلار در ماه و دامنه معمولا ۱ دلار در سال هزینه دارند.

</br>

هر سرور برای ۳۰۰ نفر راحت کار می کند و شما می توانید با این روش کل خانواده و دوستان رو وصل کنید.

تو این روش بهتون یه ای پی ثابت داده میشود.


[آموزش 0 تا 100 راه اندازی پنل و ساخت کانفیگ](https://www.youtube.com/watch?v=hV5s0Eqzei0)

#### اول یک جیمیل بسازید 
[ آموزش ساخت Gmail / آموزش ساخت ایمیل ](https://www.youtube.com/watch?v=tZPt45qnxC4)

#### اطلاعات فیک داشته باشید
وارد این سایت بشید و اطلاعات فیک به دست بیاورید.
https://www.fakexy.com/

#### ولت رمز دیجیتال بسازید

[کیف پول متامسک](https://www.youtube.com/watch?v=aLDtocc8kWw)

#### سرور بخرید

[ خرید بهترین سرورهای جایگزین هتزنر برای راه اندازی پروکسی - vps ](https://www.youtube.com/watch?v=5d5n0yP_JYQ)

[لیست سرور فروشی](https://github.com/majidrezarahnavard/way_of_freedom?tab=readme-ov-file#%D8%A7%D8%B2-%DA%A9%D8%AC%D8%A7-%D8%B3%D8%B1%D9%88%D8%B1-%D9%88-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D8%A8%D8%A7-%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA%D9%88-%D8%A8%D8%AE%D8%B1%D9%85)

حواستون باشه سرور لینوکس اوبونتو ۲۲ خرید کنند
</br>
ubuntu 22

#### دامنه بخرید

[ خرید دامنه با کریپتو , خرید دامنه با بیت کوین , خرید دامنه با ارز دیجیتال ](https://www.youtube.com/watch?v=3fUx7Em_-C8)



[ساخت اکانت روی هاتزنر ](https://www.youtube.com/watch?v=Q0n2rLAZ_Ac)


#### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)


#### وب سوکت 

[ آموزش پروتکل وب سوکت در v2ray پروتکل خوب و پایدار با sni سریع ](https://www.youtube.com/watch?v=ygE4DL9t1zQ)


#### روش فرگمنت رو استفاده کنید

[ استفاده از دامین فیلتر شده با فرگمنت , دامنه مردتو زنده کن ](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[ تحلیل فنی فیلترینگ کلودفلر و بی اثر کردن کامل آن با یک vless/vmess ساده و سرعت عالی حتی بدون TLS ](https://www.youtube.com/watch?v=aBaEOJLfUkg&t=925s)


[ آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها (تست شده) / Fragment ](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=579s)


لزومی ندارد از تونل کلود فلیر استفاده کنید.
