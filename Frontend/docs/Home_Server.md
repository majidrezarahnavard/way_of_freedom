# میکروتیک

راه اندازی سرور خانگی مخصوص استفاده گروهی در یک مکان 


### توماج صالحی

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1368259381&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/toomajsalehi" title="Toomaj" target="_blank" style="color: #cccccc; text-decoration: none;">Toomaj</a> · <a href="https://soundcloud.com/toomajsalehi/faal" title="Faal" target="_blank" style="color: #cccccc; text-decoration: none;">Faal</a></div>

## آموزش راه‌اندازی Home Server با VPN مرکزی
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

[نصب و راه‌اندازی OpenWrt روی کامپیوتر و رزبری با یک کارت شبکه](https://ivpn.pro/openwrt/how-to-install-openwrt-on-a-pc-or-raspberry-with-one-ethernet-port/)

[وبلاگ کوین](https://ivpn.pro/)


[راه‌اندازی Home Server با VPN مرکزی – قسمت ۶ – راه‌اندازی DLNA Server و Share Drive](https://ivpn.pro/openwrt/how-to-install-dlna-server-on-openwrt/)


تو این ویدیو نصب وطریقه راه اندازی سرور vpn خونگی روی دار هست رو توضیح دادم اسم این برنامه v2raya هست که میتونید کانفیگ های v2ray های خودتون رو بهش اضافه کنید تا اعضای خانواده بهش متصل بشن

[ سرور vpn خونگی خودتو روی داکر نصب کن با پنل v2raya راحت فیلترینگ رو دور بزن ](https://www.youtube.com/watch?v=qNLS590GrBg)



قسمت ۸ از سری آموزش‌های
"راه‌اندازی Home Server با VPN مرکزی"
منتشر شد:

نصب و راه‌اندازی Plex روی OpenWrt


[راه‌اندازی Home Server با VPN مرکزی – قسمت ۸ – نصب و راه‌اندازی Plex روی سرور خانگی OpenWrt](https://ivpn.pro/openwrt/how-to-install-plex-on-openwrt/)


 "راه‌اندازی WARP روی OpenWrt"

کردیت این آموزش تقدیم به مارک پشم‌فروش
@markpash


لینک آموزش:
https://ivpn.pro/openwrt/cloudflare-warp-on-openwrt/

در ساخت این آموزش از Warp Plus که مارک،  یوسف_قبادی و همکاران‌شان ساخته‌اند؛ استفاده شده است.


["راه‌اندازی WARP روی OpenWrt"](https://x.com/kevinzakarian/status/1795868295767138396)


[این OpenWrt چیه و به چه درد می‌خوره؟](https://threadreaderapp.com/thread/1796471460887965714.html)

## کنسول بازی

[ اشترک گذاری فیلترشکن رو کنسول با کمک برنامه Hiddify با استتفاده از warp بصورت رایگان ](https://www.youtube.com/watch?v=ZIOuMJGXr-Q)

## OpenWrt

عزیزانی که OpenWrt و PassWall 2 دارند، از طریق SSH با ۳ خط دستور زیر PassWall 2 را آپدیت کنید.
از پنل Luci و منوی System\Software امکان آپدیت نیست!

```
wget https://github.com/xiaorouji/openwrt-passwall2/releases/download/1.28-1/luci-23.05_luci-app-passwall2_1.28-1_all.ipk
opkg install luci-23.05_luci-app-passwall2_1.28-1_all.ipk
opkg update
```

رای سرور خانگی ما از سیستم‌عامل OpenWrt استفاده می‌کنیم و برای عبور از فیلترینگ اپ PassWall 2 رو روی OpenWrt نصب می‌کنیم. آپدیت‌ها از درون خود پنل OpenWrt انجام میشه ولی در مورد این آپدیت باید به سرور خونگی (همون OpenWrt) ارتباط SSH بزنیم و آپدیت رو انجام بدیم.

## Mikro tik

[اتصال با روش میکروتیک](https://www.youtube.com/watch?v=d2ou-XCLr4g)

[ آموزش نصب و راه اندازی پنل سنایی در میکروتیک | نصب Pihole در میکروتیک ](https://www.youtube.com/watch?v=zSCbAHpSXa0)


آموزش راه اندازی IPv6 در میکروتیک
در این ویدیو نحوه راه اندازی و اتصال به اینترنت از طریق IPv6 را به طور کامل آموزش داده ام
آدرس IP ورژن 6 دریافت شده به صورت Public می باشد که می توان با استفاده از آن سرویس هایی مبتنی بر IPv6 را راه اندازی و استفاده نمود.
لین

[ راه اندازی IPv6 در میکروتیک ](https://www.youtube.com/watch?v=1HYwi3eYRJ0)



[نصب میکروتیک در سرور مجازی aeza](https://telegra.ph/%D9%86%D8%B5%D8%A8-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%AA%DB%8C%DA%A9-%D8%AF%D8%B1-%D8%B3%D8%B1%D9%88%D8%B1-%D9%85%D8%AC%D8%A7%D8%B2%DB%8C-aeza-10-28)


## تبدیل سرور اوبونتو به میکروتیک -SIXTININELEARN 

سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت سرور ابونتوی خودتون رو به میکروتیک تبدیل کنین.

[youtube](https://www.youtube.com/watch?v=pz81NiG2STE)



## sing-box-plus

داداش اگه بدونی چه‌ها کردی با میکروتیک 🤩✌️

اجرای سینگ‌باکس پلاس با کانتاینر میکروتیک 🫶

اگه توی لاگها دقت کنی می‌بینی که اسکن کرده و ip تمیز پیدا کرده، دمت گرم 🙏

Cloudflare IP Scanner
TLS Fragmentation


https://github.com/kyochikuto/sing-box-plus

یک ریپوزیتوری جدید دارم در مورد سینگ باکس

https://github.com/kyochikuto/sing-box-plus

  @0xKyochikuto
  ,  @Eagle_1157
 
دارند بر همین اساس توسعه می دهند.

Cloudflare IP Scanner
Cloudflare WARP blocking bypass
TLS Fragmentation

به سینگ باکس این موارد رو اضافه کردند که حالا از همین روش میشه توی میکروتک هم استفاده کرد.


## ✅ نصب Emby روی OpenWrt

- مشابه Plex، مدیا سروری برای OpenWrt
- بدون حساسیت به IP ایران
- نصب سریع و آسان
- بدون محدودیت پخش در کلاینت
- برای انواع دیوایس‌ها از آیفون تا XBox.

لینک آموزش:
https://ivpn.pro/openwrt/how-to-install-emby-on-openwrt/


https://x.com/kevinzakarian/status/1839695617913765960


## نحوه تبدیل سرور اوبونتو به میکروتیک و نصب پنل X-UI

 یه آموزش رکورد کردم امیدوارم خوشتون بیاد - تبدیل سرور اوبونتو به میکروتیک و نصب پنل ثنایی بدون نشت dns
صفر تا صد


فقط من یادم رفت داخل ویدئو اشاره کنم که کانتینر فقط روی روتر های دارای سی پی یو ARM -ARM64 -X86-64  نصب میشه و از روتر او اس ورژن ۷.۷ به بالا اضافه شده .
امکانات خوبی رو میتونید از داکر ریجستری داخلش داشته باشید .
 برای منزل خودتون هم حتما باید آی پی پابلیک داشته باشید تا بتونید از بیرون به روتر خودتون وصل بشید  این پشنهاد منه که میتونید با خرید یک روتر HAP AX 3 میکروتیک که یک گیگ رم داره دقیقا مشابه همین سرور کارتون رو راه میندازه. 
در آینده ویدئو های جالب تری رو سعی میکنم آماده کنم در همین خصوص که کمکی به مردم خودم کرده باشم . کانتینر های جالبی هست که به کارتون میاد .
 ضمن اینکه تو این سروری که تست کردیم حدودا 3 یا 4 تا کانتینر میتونید داشته باشید .


https://www.youtube.com/watch?v=ZwA4ve8q-wI


##  نصب میکروتیک روی سرور مجازی Aeza - Mikrotik Chr Aeza vps 

در تکمیل ویدیوهای  آموزشی مربوط به میکرویتک با تبدیل سرور centos 7  از سایت Aeza در خدمتتون هستم

https://www.youtube.com/watch?v=JySeoXiCt60


##  نصب Pihole در میکروتیک -استفاده ازلینک اصلی سنایی - ثنایی ورژن جدید نصب کامل -Mikrotik Chr 

این سری سنایی رو از لینک اصلی نصب مردم و سرتیفیکیت هم از داخل پنل گرفتم که امکانات خوبی رو جدیدا اضافه کردن

https://www.youtube.com/watch?v=xtm6FwYChV0


روی میکروتیک های سخت افزار پایین مثل haplite خوب جواب نمیده و باعث هنگی زیاد روتر میشه. سعی کنید رو روتری باشه که ۲ کور هسته و ۱۲۸ تا رم داشته باشه. فرکانس ۹۰۰ به بالا هم باشه خوبه.

##  تانل 6to4 بهمراه ipv6 لوکال در میکروتیک - تفکیک ترافیک- پنل ثنایی - 6 to 4 tunnel Mikrotik 


میتونین به این طریق پنل تو خونه خودتون یا سرور داخلی داشته باشین و ترافیک رو به خارج به تفکیک هدایت کنید

کلیه موارد ذکر شده در کانال تلگرام هست ( لینک کانال پایین تر و در بیو پیج هست)

تست شده در ارائه دهنده سرور مجازی
کانتینر فقط روی روتر های دارای سی پی یو ARM -ARM64 -X86-64  نصب میشه و از روتر او اس ورژن ۷ به بالا اضافه شده
 برای منزل خودتون هم حتما باید آی پی پابلیک داشته باشید تا بتونید از بیرون به روتر خودتون وصل بشید  این پشنهاد منه که میتونید با خرید یک روتر HAP AX 3 میکروتیک که یک گیگ رم داره دقیقا مشابه همین سرور کارتون رو راه میندازه

The Shocking Truth About 6to4 Configuration Nobody Tells You
 

 https://www.youtube.com/watch?v=Xw2k4z8ZrZI


 ##  Mikrotik 6 to 4 tunnel training - رفع اشکال تانل میکروتیک 

 تو این آموزش ویدیو قبلی درمورد تانل میکروتیک به خارج رو بررسی و ساده سازی میکنیم
هر گونه ابهام یا سوالی دارید تو کامنتها ذکر کنید پاسخ میدم

لینک کانال تلگرام در بیو پیج و یکم پایین تر هست
لینک ویدیو قبلی در همین مورد :
   • تانل6to4 در میکروتیک + local ipv6 + ت...  

لینک ویدیو تبدیل سرور :
   • آموزش تبدیل سرور مجازی اوبونتو به میک...  


کانتینر فقط روی روتر های دارای سی پی یو ARM -ARM64 -X86-64  نصب میشه و از روتر او اس ورژن ۷ به بالا اضافه شده .
امکانات خوبی رو میتونید از داکر ریجستری داخلش داشته باشید .
 برای منزل خودتون هم حتما باید آی پی پابلیک داشته باشید تا بتونید از بیرون به روتر خودتون وصل بشید  این پشنهاد منه که میتونید با خرید یک روتر HAP AX 3 میکروتیک که یک گیگ رم داره دقیقا مشابه همین سرور کارتون رو راه میندازه. 
در آینده ویدئو های جالب تری رو سعی میکنم آماده کنم در همین خصوص که کمکی به مردم خودم کرده باشم . کانتینر های جالبی هست که به کارتون میاد

https://www.youtube.com/watch?v=hFQuW8nKM0s


##  Get Uptime Kuma Server Monitoring+ مانیتورینگ سرویسها میکروتیک با آپ تایم کوما 

آپ تایم کوما یک سیستم مانیتورینگ عالی برای استفاده شخصی و تجاری جهت مانیتور کردن سرویس هاتون هست و بصورت همزمان در سرور خودتون میتونید داشته باشیدش

به شما پیشنهاد میکنم حتما نصب داشته باشید و تنظیمات نوتیفیکیشن رو هم انجام بدین
1)setup container network 

/interface/bridge/add name=dockers
/ip/address/add address=172.17.0.1/24 interface=dockers
/interface/veth/add name=veth1 address=172.17.0.2/24 gateway=172.17.0.1
/interface/bridge/port add bridge=dockers interface=veth1
/ip/firewall/nat/add chain=srcnat action=masquerade src-address=172.17.0.0/24

______________________
2)mount:
name:uptime
src:uptimekuma
dst:/app/data
_________________________
3)uptimekuma image:

louislam/uptime-kuma


https://github.com/louislam/uptime-kuma

https://hub.docker.com/r/louislam/uptime-kumavvvvvv
______________________________

کانتینر فقط روی روتر های دارای سی پی یو ARM -ARM64 -X86-64  نصب میشه و از روتر او اس ورژن ۷ به بالا اضافه شده .
امکانات خوبی رو میتونید از داکر ریجستری داخلش داشته باشید .
____________________
#میکروتیک: انقلاب در مدیریت شبکه

میکروتیک یک شرکت معتبر در زمینه تولید تجهیزات شبکه و نرم‌افزارهای مرتبط است که در سال ۱۹۹۶ در لتونی تأسیس شد. این شرکت به واسطه محصولات با کیفیت و مقرون به صرفه‌اش، به ویژه روتر‌بورد‌ها (RouterBoard) و سیستم‌عامل پیشرفته RouterOS شناخته شده است.

کاربردهای میکروتیک:

مدیریت شبکه‌های تجاری و خانگی: روترهای میکروتیک با امکاناتی مانند کنترل ترافیک، فایروال، و مدیریت پهنای باند به کاربران امکان مدیریت و نظارت بر شبکه‌های خود را می‌دهند.

شبکه‌های وایرلس: میکروتیک راه‌حل‌های کامل برای ایجاد و مدیریت شبکه‌های بی‌سیم ارائه می‌دهد که شامل روترهای وایرلس، آنتن‌ها، و تجهیزات مرتبط می‌شود.

VPN و امنیت شبکه: با استفاده از قابلیت‌های پیشرفته RouterOS، می‌توان تونل‌های VPN امن ایجاد کرد و از امنیت اطلاعات شبکه اطمینان حاصل کرد.

برپایی سرورهای مختلف: RouterOS امکان نصب و مدیریت سرورهای مختلف مانند DHCP، DNS، و Hotspot را فراهم می‌کند که برای کسب‌و‌کارها و ارائه‌دهندگان خدمات اینترنت بسیار مفید است.

میکروتیک با ارائه راه‌حل‌های پیشرفته و انعطاف‌پذیر، نیازهای مختلف کاربران در سطوح گوناگون را پوشش می‌دهد. از کسب‌و‌کارهای کوچک تا شبکه‌های بزرگ سازمانی، همه می‌توانند از محصولات و خدمات میکروتیک بهره‌مند شوند.

https://www.youtube.com/watch?v=07SuqXAWQSg


## آموزش ssh  در میکروتیک و اتصال به اینترنت آزاد 

 Mikrotik SSH Tunnel EXPERT Shares Top VPN Secrets + در میکروتیک ssh تانل 

 انل ssh یکی از راحت ترین راهها برای دسترسی به اینترنت آزاد هست سرعت خوبی هم داره فقط حواستون باشه تعداد نفر زیاد و یا حجم زیاد استفاده کنید سریع یا محدود میشید یا فیلتر
در آموزشهای بعدی محدود کردن یوزر رو هم با هم یاد میگیریم



میکروتیک یک شرکت معتبر در زمینه تولید تجهیزات شبکه و نرم‌افزارهای مرتبط است که در سال ۱۹۹۶ در لتونی تأسیس شد. این شرکت به واسطه محصولات با کیفیت و مقرون به صرفه‌اش، به ویژه روتر‌بورد‌ها (RouterBoard) و سیستم‌عامل پیشرفته RouterOS شناخته شده است.

کاربردهای میکروتیک:

مدیریت شبکه‌های تجاری و خانگی: روترهای میکروتیک با امکاناتی مانند کنترل ترافیک، فایروال، و مدیریت پهنای باند به کاربران امکان مدیریت و نظارت بر شبکه‌های خود را می‌دهند.

شبکه‌های وایرلس: میکروتیک راه‌حل‌های کامل برای ایجاد و مدیریت شبکه‌های بی‌سیم ارائه می‌دهد که شامل روترهای وایرلس، آنتن‌ها، و تجهیزات مرتبط می‌شود.

VPN و امنیت شبکه: با استفاده از قابلیت‌های پیشرفته RouterOS، می‌توان تونل‌های VPN امن ایجاد کرد و از امنیت اطلاعات شبکه اطمینان حاصل کرد.

برپایی سرورهای مختلف: RouterOS امکان نصب و مدیریت سرورهای مختلف مانند DHCP، DNS، و Hotspot را فراهم می‌کند که برای کسب‌و‌کارها و ارائه‌دهندگان خدمات اینترنت بسیار مفید است.

میکروتیک با ارائه راه‌حل‌های پیشرفته و انعطاف‌پذیر، نیازهای مختلف کاربران در سطوح گوناگون را پوشش می‌دهد. از کسب‌و‌کارهای کوچک تا شبکه‌های بزرگ سازمانی، همه می‌توانند از محصولات و خدمات میکروتیک بهره‌مند شوند.


https://www.youtube.com/watch?v=WvqA2j-1oAA


## یه ايده جالب، نصب سافت‌اتر روی openwrt 👌

هم میشه سرور رو نصب کرد و هم کلاینت..

 Setup and Config SoftEther Client on Openwrt - Using in Edge Mode and VPN Server 

 Part 1: Setup & Configuration for Edge mode
Part 2: Config as VPN Server on the Networks

https://www.youtube.com/watch?v=UKcl2FjcwuU



## My OpenWrt Initial Setup

ستاپ روترم که روش OpenWrt و Passwall با رول‌ست جداکردن ترافیک ایران از vpn هست رو اینجا داکیومنت کردم
لیست دامنه‌های داخلی هم هفتگی آپدیت میشه خودکار تو این ستاپ



My Router Info

    Model: Linksys EA8100
    Memory: 256MB
    Storage: Using 16GB thumb drive as extroot
    OpenWrt Version: OpenWrt 23.05.3 r23809-234f1a2efa / LuCI openwrt-23.05 branch git-24.073.29889-cd7e519


https://gist.github.com/ahbanavi/ef39d70aef6a1778a9c83c5f0fb86dfc



## دانلود و نصب میکروتیک روتر او اس با لایسنس لول 6 👇

با تشکر از مهندس جوانی که لینک رو ارسال کردن 🙏

MikroTik RouterOS Patch [中文]
[Discord] [Telegram] [Keygen(Telegram Bot)]
Download Latest Patched iso file,install it and enjoy.
CHR image is both support BIOS and UEFI boot mode.
Support online upgrade,online license,cloud backup,cloud DDNS

https://github.com/elseif/MikroTikPatch/blob/main/README_EN.md


##  Step-by-Step Guide to Creating OpenVPN with TunnelBear 

Looking to boost your online security with a powerful VPN? In this video, I’ll show you how to easily create your own OpenVPN configuration using the popular TunnelBear service. With this method, you can securely and privately access the internet from anywhere. If you're searching for a simple and effective way to set up a VPN, this tutorial is perfect for you!

🔒 Features:

    Step-by-step guide on creating OpenVPN configuration
    Using TunnelBear for a secure connection
    Enhanced privacy and bypassing restrictions
    Works on all devices

Watch the video and make sure to subscribe for more tutorials and internet security tips!

https://www.youtube.com/watch?v=vdbIVi2ffns

##  4 fast OpenVPN methods on Windows and Android 

In this video, discover 4 easy and quick methods to set up OpenVPN files on Windows and Android devices. If you're looking for secure internet access and freedom online, follow this step-by-step guide using OpenVPN GUI, Windscribe, and HTTP Custom. These methods make it simple to install and run OpenVPN on any device, whether you’re a beginner or an experienced user.

    Introduction to different OpenVPN tools
    4 straightforward setup methods for Windows and Android
    Practical tips for enhanced security and unrestricted access

👁️‍🗨️ Want unrestricted internet? Watch this video now!

https://www.youtube.com/watch?v=YxPsQNaUvnE


## بچه های wrt باز این پروژه رو هم دریابید ..

https://github.com/peditx/PeDitXrt


##  نصب چند کانتینر همزمان در میکروتیک 

نصب چند کانتیر همزمان در میکروتیک- کنار هم میتونید از امکانات مختلفی تو سرور خودتون استفاده کنید بدون هیچ ایرادی تو یک محیط کاملا ایزوله میتونید از pihole که یک دیبیان بیس هست برای نصب پروژه هاتون استفاده کنید
برای سایر کانتینر ها هم میتونید یک نتورک مجزا درست کنید که دردرسری براتون نشه
همچنینی میتونید تانل هاتون رو داشته باشید

https://www.youtube.com/watch?v=gpY2OwKPU4c



##  نصب IPTV در سرور میکروتیک 

امروز نصب کانتینر IPTV در میکروتیک رو با هم یاد میگیریم کانتینرهای دیگه ای هم هست که در ادامه آموزشها براتون قرار میدم 
میکروتیک خوبی های بسیار زیادی به لحاظ همین محیط کانتینر در کنار دیگر قابلیتهاش که همه اوناها رو تو کانال با هم یاد میگیریم

https://www.youtube.com/watch?v=m3B0-qUvGHg



##  در میکروتیک+کانفیگ کاملs-ui نصب پنل 

نصب کامل پنل s-ui علیرضا  در میکروتیک و کانفیک کامل بر اساس کانفیگهای کوین زاکاریان
بدون نیاز به دامین و کلود فلر+ پینگ بسیار عالی+آپلود عالی
فقط اینجا تاکید کنم تو مپ کردن پورتها به کانتینر فقط و فقط پورت پنل رو میتونید تعقیرات دلخواه اعمال کنید در قسمت جنرال dsnat
داخل میکروتیک میتونید همزمان چندین پنل داشته باشید بدون مشکل خاصی
اگر جایی گیر کردید یه ایمیل داخل کانال تلگرام قرار میگیره بتونید مشکلاتتون رو مطرح کنید


https://www.youtube.com/watch?v=Nbo5XdL01JQ


##  آموزش Vpn سرور وایرگارد در میکروتیک| Mikrotik Wiregurd vpn Server 

امروز با هم یاد میگیریم چطوری یک سرور وایرگارد در میکروتیک راه بندازیم و با یک روتر میکروتیک که پشت cgnat مونده به یک سرور متصل بشیم و ترافیک رو به هر جا دلمون خواست رد کنیم
لینک کانال تلگرام تو بیو پیج و پایین توضیحات هستش


https://www.youtube.com/watch?v=k5mJMMYOyBk


##  اورکلاک کردن روتر میکروتیک | Mikrotik Router Over Clock 

تو این ویدیو روتر میکروتیک رو اورکلاک میکنیم که بتونیم فعایلتهای روتر رو با سرعت بیشتری به جریان بیاندازیم

https://www.youtube.com/watch?v=pY2G49Ae8Nw