# سایر
# Bepass

Bepass: A DPI-nightmare proxy
[bepass](https://github.com/bepass-org/bepass)

[Bepass-worker](https://www.youtube.com/watch?v=1UG8g9-6XUc&t=161s)


# تذکر
اپلیکشن Beepass ربطی به این اپلیکشن ندارد و.

</br>
برای کمک به این پروژه کتاب 
Network Programg with Go
را مطالعه کنید


# Yebekhe

[TelegramV2rayCollector](https://github.com/yebekhe/TelegramV2rayCollector)

[cf-clean-ip-resolver](https://github.com/yebekhe/cf-clean-ip-resolver)



سینگ باکس بریز، لینک وارپ رو از اینجا بردار و لذتشو ببر ( ایرانسل باشی که چه بهتر)
لایسنس داری؟ جلو key بنویسش
```
https://api.yebekhe.link/warp?key=&device_name=WARP+&singbox=true&ip=188.114.98.224&port=908
```

[برا ایفونت #فیلترشکن میخوای خب بیا این مراحل رو برو و حالشو ببر](https://threadreaderapp.com/thread/1771404783330443591.html)


آموزش دریافت آی‌پی پورت تمیز warp در آیفون با کلاینت ish shell:
اول نصب برنامه ish shell: https://apps.apple.com/us/app/ish-shell/id1436902243
بعد از نصب دستورات رو بترتیب اجرا کنید:
1: apk update
2: apk upgrade
3: apk add neofetch
4: apk add curl
5: curl -o http://install.sh https://raw.githubusercontent.com/Ptechgithub/warp/main/endip/install.sh
Quote
6: chmod +x http://install.sh
7: ./install.sh

توجه داشته باشید، یکبار که این مراحل رو اجرا کردید و آیپی تمیز گرفتید برای دفعات بعد فقط کافیه همین دستور رو اجرا کنید: ./install.sh
با تشکر از تمام عزیزانی که جهت کمک به دیگران برای دسترسی آزاد اینترنت تلاش می‌کنند


# Home_Server

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

# Open_VPN

برای این روش یک سرور نیاز دارید.

[ آموزش ساخت openvpn روی سرور مجازی ](https://www.youtube.com/watch?v=X8GOExnqPCY)

[برنامه OpenVPN را با v2rayNG ترکیب کنم](https://threadreaderapp.com/thread/1761155128487448961.html)


[ساخت کانفیگ رایگان ](https://www.youtube.com/watch?v=cN4YD8X35nQ)

[نصب داکر روی میکروتیک و اجرای اپلیکیشین‌های لینوکسی قسمت اول](https://lowercase78.github.io/mikrotik/2024/03/29/%D9%86%D8%B5%D8%A8-%D8%AF%D8%A7%DA%A9%D8%B1-%D8%B1%D9%88%DB%8C-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%AA%DB%8C%DA%A9-%D9%88-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3%DB%8C-%D9%82%D8%B3%D9%85%D8%AA-%D8%A7%D9%88%D9%84.html)

[نصب داکر روی میکروتیک و اجرای اپلیکیشین‌های لینوکسی قسمت دوم](https://lowercase78.github.io/mikrotik/2024/03/30/%D9%86%D8%B5%D8%A8-%D8%AF%D8%A7%DA%A9%D8%B1-%D8%B1%D9%88%DB%8C-%D9%85%DB%8C%DA%A9%D8%B1%D9%88%D8%AA%DB%8C%DA%A9-%D9%88-%D8%A7%D8%AC%D8%B1%D8%A7%DB%8C-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%DB%8C%D9%86-%D9%87%D8%A7%DB%8C-%D9%84%DB%8C%D9%86%D9%88%DA%A9%D8%B3%DB%8C-%D9%82%D8%B3%D9%85%D8%AA-%D8%AF%D9%88%D9%85.html)

# Brook

[ روش جدید دورزدن فیلترینگ با استفاده از Brook ](https://youtu.be/0YR4ZpnoYUY?si=Xs1BPq98XuNxtiUt)

[آموزش](https://twitter.com/kevinzakarian/status/1753403463608730017)

از لینک زیر پلاگین Brook برای نکوباکس رو دانلود و نصب کنید. با این پلاگین می‌تونین بُروک رو در گوشی اندروید با نکوباس اجرا کنین و در کنار اپ اصلی برنامه داشته باشین. (برای تشخیص v8a یا v7a پردازنده گوشی=> تلگرام در منوی setting اون پائین نوع CPU رو زده)

[plugin](https://github.com/MatsuriDayo/plugins/releases/tag/Brook-v20220707-1)

[ آموزش نصب و کانفیگ Brook VPN روی سرور به 2 روش ](https://www.youtube.com/watch?v=2IiJM6jyAUs)


[ساخت VPN با IP فیلتر شده با پروتکل Brook](https://ivpn.pro/how-to/brook-vpn-with-filtered-ip-and-cloudflare/)

[اسکریپت نصب brook](https://github.com/Ptechgithub/Brook)


[ آموزش ساخت brook vpn با ایپی فیلتر شده و کلودفلر ](https://www.youtube.com/watch?v=1AVXSNQdJtg)

# UDP

## Hysteria 2  and TUIC

[ آموزش راه اندازی Hysteria 2 و TUIC با یک کلیک همراه با مدیریت کاربران (سرعت بالا و پینگ پایین) ](https://www.youtube.com/watch?v=T_p9VqngfY8&t=69s)

[ آموزش راه اندازی Hysteria 2 با یک کلیک (سرعت بالا و پینگ پایین) ](https://www.youtube.com/watch?v=Tj-zM0yT62A&t=5s)


[aio-proxy All-In-One Proxy Tools](https://github.com/hrostami/aio-proxy)

[reality-ezpz](https://github.com/aleskxyz/reality-ezpz)

[How run Hysteria V2 Protocol with iSegaro](https://telegra.ph/How-run-Hysteria-V2-Protocol-with-iSegaro-09-02)

[How run Hysteria Protocol with iSegaro](https://telegra.ph/How-run-Hysteria-Protocol-with-iSegaro-04-07)

[How to start the TUIC v5 protocol with iSegaro](https://telegra.ph/How-to-start-the-TUIC-v5-protocol-with-iSegaro-08-26)


[ترکیب hysteria2 با فرگمنت یا وایرگارد برای عبور از فیلترینگ!](https://telegra.ph/%D8%AA%D8%B1%DA%A9%DB%8C%D8%A8-hysteria2-%D8%A8%D8%A7-fragment-%D9%88-%D9%88%D8%A7%DB%8C%D8%B1%DA%AF%D8%A7%D8%B1%D8%AF-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B9%D8%A8%D9%88%D8%B1-%D8%A7%D8%B2-%D9%81%DB%8C%D9%84%D8%AA%D8%B1%DB%8C%D9%86%DA%AF-03-13)


# Cloak

##  Shadowsocks + cloak server - آموزش و کانفیگ شادوساکس 

[ Shadowsocks + cloak server - آموزش و کانفیگ شادوساکس ](https://www.youtube.com/watch?v=wrPP0V32rxc)


# NordVPN

## Spotify

برای حل مشکل اسپاتیفای باید از دامنه و سرور استفاده کنید
و این کانفیگ رو به افراد متعدد ندهید. یک راه گران هم خرید وی پی ان نورد و گذاشتن در لایه آخر تونل هست.

[nordvpn](https://nordvpn.com/)

# Tips


## روش استفاده مجدد از دامنه های فیلتر شده یا کند شده

[روش استفاده مجدد از دامنه های فیلتر شده یا کند شده](https://telegra.ph/%D8%B1%D9%88%D8%B4-%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%D9%85%D8%AC%D8%AF%D8%AF-%D8%A7%D8%B2-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D9%87%D8%A7%DB%8C-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%B4%D8%AF%D9%87-%DB%8C%D8%A7-%DA%A9%D9%86%D8%AF-%D8%B4%D8%AF%D9%87-02-16)


[برای خلاص شدن از خاموش/روشن کردن فیلترشکن وقتی سایت‌های داخلی باز نمیشه، راحت‌ترین روش مستقیم کردن ترافیک داخلیه که آموزشش برای نرم‌افزار v2rayN (ویندوز) رو در ادامه میگم](https://threadreaderapp.com/thread/1776630039833936285.html)


# Gcore


[amin](https://threadreaderapp.com/thread/1667191394887163906.html)

[ اموزش استفاده از gcore و پیدا کردن ای پی تمیز gcore. #cdn ](https://www.youtube.com/watch?v=fIBnImTUY_M)


[ کلودفلر؟ نه ممنون من از اینا استفاده میکنم! معرفی جایگزین های رایگان کلادفلر ](https://www.youtube.com/watch?v=STe5s-xjEF0)


# Telegram

[ آموزش ساخت پروکسی تلگرام روی سرور شخصی و اسپانسر کردن کانال تبلیغاتی|How can create mtproto Telegram ](https://www.youtube.com/watch?v=RQXFaDUofOQ)


[ ساخت پروکسی تلگرام (Mtproto) به روش کانال های تلگرام + کانال اسپانسری💥⚡ ](https://www.youtube.com/watch?v=8i63EewMTv0)

[ توضیح پروتکل MTProto و رمزنگاری دو طرفه در تلگرام ](https://www.youtube.com/watch?v=JKabA7Ed7Ks)


[ آموزش گذاشتن تبلیغ در کانال دلخواه تلگرام | توی هر کانالی دوست داری تبلیغ بزار ](https://www.youtube.com/watch?v=16YZFJE8s1U)


[ آموزش کامل کسب درآمد از تلگرام : مانیتایز کردن کانال تلگرام در 2 ساعت و شروع درآمدزایی ](https://www.youtube.com/watch?v=JCuemNOettI)

[ تلگرام برای هر هزار بازدید چقدر میده : آموزش کسب درآمد از تلگرام و شروع درآمدزایی - CPM تلگرام چقدره ](https://www.youtube.com/watch?v=T4HWqpKBZEo)


# VPNHood

[Github](https://github.com/vpnhood/VpnHood)

[آموزش دور زدن فیلترینگ با VpnHood](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%AF%D9%88%D8%B1-%D8%B2%D8%AF%D9%86-%D9%81%DB%8C%D9%84%D8%AA%D8%B1%DB%8C%D9%86%DA%AF-%D8%A8%D8%A7-VpnHood-03-31)