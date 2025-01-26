# OpenVPN

این روش‌ها خلاصه‌ای از نحوه راه‌اندازی سرور خانگی با VPN مرکزی و OpenVPN هستند:

1. راه‌اندازی Home Server با VPN مرکزی:
   - نصب OpenWrt روی کامپیوتر یا رزبری پای
   - راه‌اندازی سرورهای VPN مختلف (Xray, Sing-Box, OpenVPN, WireGuard)
   - نصب و پیکربندی سرویس‌هایی مانند DLNA، Plex، NAS و غیره
   - پیکربندی MultiWAN و Ad Blocker

2. نصب و راه‌اندازی OpenVPN:
   - نصب OpenVPN روی سرور مجازی
   - ایجاد کانفیگ‌های OpenVPN
   - ترکیب OpenVPN با V2Ray برای افزایش امنیت

3. استفاده از Docker:
   - نصب Docker روی سیستم‌هایی مانند OpenWrt یا MikroTik
   - اجرای برنامه‌های لینوکسی در کانتینرهای Docker
   - راه‌اندازی سرور VPN خانگی با استفاده از v2raya در Docker

4. پیکربندی‌های پیشرفته:
   - راه‌اندازی Cloudflare WARP روی OpenWrt
   - استفاده از پنل‌های مدیریتی برای OpenVPN
   - ایجاد محدودیت‌های حجمی و کاربری

این روش‌ها به شما امکان می‌دهند یک سرور VPN قدرتمند و انعطاف‌پذیر در خانه یا روی سرور مجازی راه‌اندازی کنید، با قابلیت‌های مختلف برای افزایش امنیت و دور زدن فیلترینگ.


## توماج صالحی

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1095635860&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/toomajsalehi" title="Toomaj" target="_blank" style="color: #cccccc; text-decoration: none;">Toomaj</a> · <a href="https://soundcloud.com/toomajsalehi/soorakh-moosh" title="Soorakh Moosh" target="_blank" style="color: #cccccc; text-decoration: none;">Soorakh Moosh</a></div>


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

در ساخت این آموزش از Warp Plus که مارک،یوسف_قبادی و همکاران‌شان ساخته‌اند؛ استفاده شده است.


["راه‌اندازی WARP روی OpenWrt"](https://x.com/kevinzakarian/status/1795868295767138396)


[این OpenWrt چیه و به چه درد می‌خوره؟](https://threadreaderapp.com/thread/1796471460887965714.html)


معرفی بهترین پنل OpenVpn + آموزش (تک کاربره + محدودیت حجم و…)

🔸 طبق درخواست هایی که داشتید ویدیو معرفی بهترین پنل OpenVpn + آموزش (تک کاربره + محدودیت حجم و…) رو آماده کردیم و دیدنش رو به همه توصیه میکنم.

🔗 تماشا ویدیو در یوتیوب 👇👇
https://youtu.be/kscVZUmEwuQ


## Open_VPN

برای این روش یک سرور نیاز دارید.

[ آموزش ساخت openvpn روی سرور مجازی ](https://www.youtube.com/watch?v=X8GOExnqPCY)

[برنامه OpenVPN را با v2rayNG ترکیب کنم](https://threadreaderapp.com/thread/1761155128487448961.html)


[ساخت کانفیگ رایگان ](https://www.youtube.com/watch?v=cN4YD8X35nQ)

[نصب داکر روی میکروتیک و اجرای اپلیکیشین‌های لینوکسی قسمت اول](https://lowercase78.github.io/mikrotik/2024/03/29/%D9%86%D8%B5%D8%A8-%D8%AF%D8%A7%DA%A9%D8%B1-%D8%B1%D9%88%DB%8C-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%AA%DB%8C%DA%A9-%D9%88-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3%DB%8C-%D9%82%D8%B3%D9%85%D8%AA-%D8%A7%D9%88%D9%84.html)

[نصب داکر روی میکروتیک و اجرای اپلیکیشین‌های لینوکسی قسمت دوم](https://lowercase78.github.io/mikrotik/2024/03/30/%D9%86%D8%B5%D8%A8-%D8%AF%D8%A7%DA%A9%D8%B1-%D8%B1%D9%88%DB%8C-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%AA%DB%8C%DA%A9-%D9%88-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3%DB%8C-%D9%82%D8%B3%D9%85%D8%AA-%D8%AF%D9%88%D9%85.html)


## آموزش کانفیگ OpenVpn و تانل با سرور ایران (با سرعت و کیفیت عالی)

🔸 خوب در نهایت با درخواست زیاد دوستان ویدیو آموزش کانفیگ OpenVpn و تانل با سرور ایران آماده شد و پلی لیست فیلترشکن از این هم کامل تر شد.

🔗 تماشا ویدیو در یوتیوب 👇👇
https://youtu.be/3KTkwIJIVbg


##  4 fast OpenVPN methods on Windows and Android 


In this video, discover 4 easy and quick methods to set up OpenVPN files on Windows and Android devices. If you're looking for secure internet access and freedom online, follow this step-by-step guide using OpenVPN GUI, Windscribe, and HTTP Custom. These methods make it simple to install and run OpenVPN on any device, whether you’re a beginner or an experienced user.

    Introduction to different OpenVPN tools
    4 straightforward setup methods for Windows and Android
    Practical tips for enhanced security and unrestricted access

https://www.youtube.com/watch?v=YxPsQNaUvnE


##  تبدیل سرور هتزنر به میکروتیک+فعال کردن کانتینر 

ضمن اینکه لینک کانال تلگرام تو بیو پیج هست

کانتینر فقط روی روتر های دارای سی پی یو ARM -ARM64 -X86-64  نصب میشه و از روتر او اس ورژن ۷ به بالا اضافه شده .
امکانات خوبی رو میتونید از داکر ریجستری داخلش داشته باشید .


میکروتیک: انقلاب در مدیریت شبکه

میکروتیک یک شرکت معتبر در زمینه تولید تجهیزات شبکه و نرم‌افزارهای مرتبط است که در سال ۱۹۹۶ در لتونی تأسیس شد. این شرکت به واسطه محصولات با کیفیت و مقرون به صرفه‌اش، به ویژه روتر‌بورد‌ها (RouterBoard) و سیستم‌عامل پیشرفته RouterOS شناخته شده است.

کاربردهای میکروتیک:

مدیریت شبکه‌های تجاری و خانگی: روترهای میکروتیک با امکاناتی مانند کنترل ترافیک، فایروال، و مدیریت پهنای باند به کاربران امکان مدیریت و نظارت بر شبکه‌های خود را می‌دهند.

شبکه‌های وایرلس: میکروتیک راه‌حل‌های کامل برای ایجاد و مدیریت شبکه‌های بی‌سیم ارائه می‌دهد که شامل روترهای وایرلس، آنتن‌ها، و تجهیزات مرتبط می‌شود.

VPN و امنیت شبکه: با استفاده از قابلیت‌های پیشرفته RouterOS، می‌توان تونل‌های VPN امن ایجاد کرد و از امنیت اطلاعات شبکه اطمینان حاصل کرد.

برپایی سرورهای مختلف: RouterOS امکان نصب و مدیریت سرورهای مختلف مانند DHCP، DNS، و Hotspot را فراهم می‌کند که برای کسب‌و‌کارها و ارائه‌دهندگان خدمات اینترنت بسیار مفید است.

میکروتیک با ارائه راه‌حل‌های پیشرفته و انعطاف‌پذیر، نیازهای مختلف کاربران در سطوح گوناگون را پوشش می‌دهد. از کسب‌و‌کارهای کوچک تا شبکه‌های بزرگ سازمانی، همه می‌توانند از محصولات و خدمات میکروتیک بهره‌مند شوند.

https://www.youtube.com/watch?v=0nb4tLwg7zg