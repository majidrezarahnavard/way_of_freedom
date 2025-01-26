# فرگمنت

## مقدمه

مقدمه:

این گزارش به بررسی متن "فرگمنت" می‌پردازد که به روش جدیدی برای عبور از فیلترینگ اینترنت می‌پردازد.

مفاهیم کلیدی:

    فرگمنت: تکه تکه کردن درخواست‌ها برای عبور از دیوار آتش بزرگ و سخت‌تر کردن تشخیص برای آن.
    CDN: شبکه توزیع محتوا که می‌توان از آن به جای تونل برای فرگمنت استفاده کرد.
    دامنه و سرور کثیف: استفاده از دامنه و سرورهایی که قبلاً توسط فیلترشکن‌ها استفاده شده‌اند.

مزایای فرگمنت:

    عبور از فیلترینگ شدید
    کار با دامنه و سرور کثیف
    عدم نیاز به تونل
    قابل استفاده در انواع دستگاه‌ها



فرگمنت به معنی تکه تکه کردن درخواست‌هاست که تشخیص رو برای «[دیوار آتش بزرگ](https://fa.wikipedia.org/wiki/%D8%AF%DB%8C%D9%88%D8%A7%D8%B1_%D8%A2%D8%AA%D8%B4_%D8%A8%D8%B2%D8%B1%DA%AF_%DA%86%DB%8C%D9%86)» سخت می‌کند.
این قابلیت در xray هم پشتیبانی می‌شود.

لزومی نداره حتما از تونل استفاده کنید از CDN هم میشه استفاده کرد.


# روش فرگمنت

[ استفاده از روش فرگمتیشن , دامین فیلترشده رو قابل استفاده کن🚀 ](https://www.youtube.com/watch?v=5LOYVbSL23U)

[ اعمال راحت و متمرکز فرگمنت برای کل کاربران، بررسی آخرین و بهترین روش ها و کانفیگ ها ](https://www.youtube.com/watch?v=qeD1jwOXW4A&t=303s)


در این ویدیو به بررسی آخرین تحولات، ابزار ها، امکانات فراهم شده حول فرگمنت، نحوه اعمال متمرکز فرگمنت برای کل کاربران پرداخته ایم. کاربران iOS، اندروید و سایر سیستم عامل ها. با پنل و بدون پنل!



[ استفاده از دامنهٔ فیلتر شده با فرگمنت](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=66s)

[اخرین آموزش سگارو](https://telegra.ph/How-to-use-Argo-Cloudflare-tunnel-with-iSegaro-12-15)

[نصب آرگو](https://telegra.ph/%D9%86%D8%B5%D8%A8-%D8%A2%D8%B1%DA%AF%D9%88-01-07)

[ابزار فرگمنت ircfspace ](https://ircfspace.github.io/fragment/)

[ابزارهای misaturo](https://misaturo.github.io/Xray-Fragment-Configurator/)

[ جدیدترین روش استفاده از پیکربندی FRAGMENT با پیوند اشتراک بدون نیاز به ویرایش کد ساخت بی‌نهایت کاربر ](https://www.youtube.com/watch?v=4L7zajnLtOs)

[آموزش کامل کلودفلر ورکر+فرگمنت کردن پیکربندی برای عبور از فیلترینگ شدید مخصوصا در همراه اول](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D8%A7%D9%85%D9%84-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-%D9%88%D8%B1%DA%A9%D8%B1%D9%81%D8%B1%DA%AF%D9%85%D9%86%D8%AA-%DA%A9%D8%B1%D8%AF%D9%86-%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%A9-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B9%D8%A8%D9%88%D8%B1-%D8%A7%D8%B2-%D9%81%DB%8C%D9%84%D8%AA%D8%B1%DB%8C%D9%86%DA%AF-%D8%B4%D8%AF%DB%8C%D8%AF-%D9%85%D8%AE%D8%B5%D9%88%D8%B5%D8%A7-%D8%AF%D8%B1-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%A7%D9%88%D9%84-02-09)

[آموزش کلودفلر ورکر از نوع pages+fragment بدون نیازبه تست ip و SNI !](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-%D9%88%D8%B1%DA%A9%D8%B1-%D8%A7%D8%B2-%D9%86%D9%88%D8%B9-pagesfragment-%D8%A8%D8%AF%D9%88%D9%86-%D9%86%DB%8C%D8%A7%D8%B2%D8%A8%D9%87-%D8%AA%D8%B3%D8%AA-ip-%D8%AA%D9%85%DB%8C%D8%B2-02-10)

[  راه حل تضمینی فرگمنت روی IOS ](https://www.youtube.com/watch?v=Q8_K_GRmEbU)

در زیر دو نمونه کانفگیگ قرار داده شده است مقادیر فارسی رو تعویض کنید:

[نمونه کانفیگ مصطفی با فرگمنت](https://raw.githubusercontent.com/majidrezarahnavard/way_of_freedom/main/fragment/mostafa.json)

[ نمونه کانفیگ مصطفی با فرگمنت ۲](https://raw.githubusercontent.com/majidrezarahnavard/way_of_freedom/main/fragment/mostafa2.json)

[اگر همچنان توی دریافت کانفیگ های فرگمنت دار با لینک در اندروید مشکل دارید](https://twitter.com/seramo_ir/status/1758228777006453240)

[آموزش اتصال به کانفیگ ها با استفاده از قابلیت فرگمنت برنامه V2rayNG اندروید](https://twitter.com/seramo_ir/status/1758394849349218471)

[ ترکیب ARGO - MUX - FRAGMENT افزایش سرعت ](https://www.youtube.com/shorts/cA3knbaqUjk)

[نحوه عملکرد فرگمنت](https://www.youtube.com/watch?v=NKPMH10jbvM)

[حل مشکل ایرانسل](https://www.youtube.com/watch?v=4tRjRUXrGZQ)

[ساخت VPN با سرور دارای IP فیلترشده، بدون نیاز به دامنه، بدون نیاز به اکانت کلاودفلر، حتی با یک IPv6](https://ivpn.pro/how-to/vpn-with-filtered-ip-without-domain/)

[فعالسازی فرگمنت در ios / android / windows](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87-%D9%81%D8%B9%D8%A7%D9%84%D8%B3%D8%A7%D8%B2%DB%8C-%D9%81%D8%B1%DA%AF%D9%85%D9%86%D8%AA-%D8%AF%D8%B1-ios--android--windows-01-10)

[ساخت کانفیگ بدون دامنه و با ای پی فیلتر شده](https://telegra.ph/%D8%B3%D8%A7%D8%AE%D8%AA-%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%AF-%D8%A8%D8%AF%D9%88%D9%86-%D8%AF%D8%A7%D9%85%D9%86%D9%87--%D8%A8%D8%A7-%D8%A7%DB%8C-%D9%BE%DB%8C-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%B4%D8%AF%D9%87-02-20)

[یه دامنه دراز انتخاب کنید](https://threadreaderapp.com/thread/1759982865297588554.html)

[فرگمنت روی x-ui و بالا بردن امنیت پنل x-ui](https://www.youtube.com/watch?v=EXRsHjWtXpM)



[چون در مورد #فرگمنت کمتر صحبت شده و دوستان زیادی نمیدونن چطور استفاده کنن یه داستان بگم براش، یه مدته داستان نگفتم :)](https://threadreaderapp.com/thread/1767652392034533608.html?utm_campaign=topunroll)



[ تحلیل فنی فیلترینگ کلودفلر و بی اثر کردن کامل آن با یک vless/vmess ساده و سرعت عالی حتی بدون TLS ](https://www.youtube.com/watch?v=aBaEOJLfUkg)



[استفاده مستقیم از فرگمنت روی V2rayNG ](https://private-user-images.githubusercontent.com/23278340/304508567-3589354b-b412-4649-8c44-2883186dc396.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTAxNDE2NjgsIm5iZiI6MTcxMDE0MTM2OCwicGF0aCI6Ii8yMzI3ODM0MC8zMDQ1MDg1NjctMzU4OTM1NGItYjQxMi00NjQ5LThjNDQtMjg4MzE4NmRjMzk2Lm1wND9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAzMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMzExVDA3MTYwOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlNjI3YTQ1ZDY5NmU2ZjU1Mzk5MGQ0MDg3ZmI5ZTcwYjZmMzEzMDliY2M1NDhiODY4ZmEzMWYwNDI1MjBmOWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gIM-R3feV3djiR7qbIcavdEsV2OAqVWUIYW3OpUnFxU)


[ اعمال راحت و متمرکز فرگمنت برای کل کاربران، بررسی آخرین و بهترین روش ها و کانفیگ ها ](https://www.youtube.com/watch?v=qeD1jwOXW4A)

اگر دنبال الگوی تنظیمات #فرگمنت هستین، میتونین از این ۳ نمونه که مربوط به کانفیگ‌های اپ مهسا [اپلیکشن مهسا](https://play.google.com/store/apps/details?id=com.MahsaNet.MahsaNG) هستن کمک بگیرین.
در این کانفیگ‌ها از آی‌پی تمیز کلودفلر به‌همراه دامنه فیلترشده استفاده‌شده و توصیه‌میشه شما هم دامنه‌های مرده‌تون رو این‌مدلی زنده‌کنین!

```
"fragment": { 
    "packets": "1-1", 
    "length": "3-5", 
    "interval": "5" 
}
```
💡 فیلد packets در کانفیگ فاقد TLS باید برابر ۱ و دارای TLS برابر با tlshello باشه. فیلد length اندازه پکت‌های خردشده برحسب بایت و فیلد interval تاخیر ارسال پکت‌ها برحسب میلی‌ثانیه هست. مثلن اگر اندازه پکت ۴۰۰ بایت باشه، با تنظیمات بالا به حدودن ۱۰۰ تکه خرد و در مدت ۵*۱۰۰ میلی‌ثانیه ارسال میشه؛ یعنی ۵۰۰ میلی‌ثانیه به پینگ اضافه میشه
💡 با افزایش تاخیر از ۵ به ۱۰، قدرت عبور از فیلتر بیشتر، اما پینگ هم بیشتر خواهد شد

[✅ دور زدن فیلترینگ دامنه با فرگمنت](https://t.me/ircfspace/345)


اگر دیدید وصل نمی‌شه این دو تا پارامتر رو تغییر بدید:
```
length , interval

"fragment": {
          "packets": "tlshello",
          "length": "100-200",
          "interval": "10-20"
        }

"fragment": {
          "packets": "tlshello",
          "length": "20-30",
          "interval": "30-40"
        }

"fragment": {
      "interval" : "5", 
      "length" : "3-5", 
      "packets" : "1-1"
}

```
پارامتر packets شماره بسته‌ای که قراره تکه تکه بشه رو تعیین می‌کنه اینجا "1-1" یعنی بستهٔ اول رو تیکه تیکه کن بفرست، اگه خالی بزاری پارامتر packets رو همه بسته‌ها رو تکه تکه می‌کنه، اگه "1-3" بزاری بستهٔ اول، دوم و سوم رو تیکه تیکه می‌کنه می‌فرسته.



## Fragment over DNS

می‌تونید به پیکربندی‌تون DNSهای شکن رو اضافه کنید

[پیکربندی امین با استفاده از DNS](https://github.com/amin4139/share_file/blob/main/Test_config)

```
"dns": {
    "tag": "dns",
    "hosts": {
      "dns.403.online": [
        "10.202.10.202",
        "10.202.10.102"
      ],

     "free.shecan.ir": [
        "178.22.122.100",
        "185.51.200.2"
      ]
    },
    "servers": [
      "https://free.shecan.ir/dns-query",
      "https://dns.403.online/dns-query",
      "10.202.10.11",
      "10.202.10.10",
      "85.15.1.15",
      "85.15.1.14"
    ]
  },
```


```
"dns": {
        "hosts": {
            "extended.dns.mullvad.net": [
                "194.242.2.5",
                "194.242.2.6"
            ],
            "all.dns.mullvad.net": [
                "194.242.2.8",
                "194.242.2.9"
            ]
        },
        "servers": [
            "https://extended.dns.mullvad.net/dns-query",
            "https://all.dns.mullvad.net/dns-query",
            "194.242.2.5",
            "194.242.2.6",
            "194.242.2.8",
            "194.242.2.9"
        ],
        "tag": "dns"
    },
```


```
    "dns": {
        "hosts": {
            "dns.adguard-dns.com": [
                "94.140.14.14",
                "94.140.15.15"
            ],
            "family.adguard-dns.com": [
                "94.140.14.15",
                "94.140.15.16"
            ]
        },
        "servers": [
	    "https://dns.adguard-dns.com/dns-query",
            "https://family.adguard-dns.com/dns-query",
            "94.140.14.14",
            "94.140.15.15",
            "94.140.14.15",
            "94.140.15.16"
        ],
        "tag": "dns"
    },
```



## Random Fragment Sub Worker 

ترکیب Edge Tunnel و Fragment فوق العادس

[آموزش اتصال به پیکربندی‌ها با استفاده از فرگمنت در برنامه MahsaNG اندروید](https://twitter.com/seramo_ir/status/1753080310982701493)

[آموزش اتصال به پیکربندی‌ها با استفاده از فرگمنت در برنامه V2Box آیفون](https://twitter.com/seramo_ir/status/1753080558127869976)

این فقط یه دونه خروجی جیسون بر اساس اون اطلاعات می‌سازه که پیکربندی سفارشی دارای فرگمنته.
این کلا ربطی به اون ورکر نداره.
فقط میاد بر اساس دامنه و آیدی، پیکربندی جیسونش رو می‌سازه.

[پیکربندی‌های سفارشی توی V2rayNG](https://twitter.com/seramo_ir/status/1754959963187712478)

[نمونه‌ای از worker.js](https://github.com/seramo/random-fragment-sub-worker/blob/main/worker.js)

برای استفاده از ورکر ساخت ساب فرگمنت می‌تونید دامنه خودتون رو جایگزین domain و uuid پیکربندی رو جایگزین userUUID کنید.

نکته: این برای Edge Tunnel نوشته شده و می‌تونید متناسب با پیکربندی خودتون port، path و ... رو تغییر بدید.




## Worker Serverless + Fragment


[نحوه‌ی راه‌اندازی BPB Worker Panel به همراه Fragment نسخه‌ی 2.1](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87%E2%80%8C%DB%8C-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-BPB-Worker-Panel-%D8%A8%D9%87%E2%80%8C%D9%87%D9%85%D8%B1%D8%A7%D9%87-Fragment-01-28)


[نحوه‌ی راه‌اندازی BPB Worker Panel به‌همراه Fragment نسخه‌ی 2.2](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87%E2%80%8C%DB%8C-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-BPB-Worker-Panel-%D8%A8%D9%87%E2%80%8C%D9%87%D9%85%D8%B1%D8%A7%D9%87-Fragment-%D9%86%D8%B3%D8%AE%D9%87%E2%80%8C%DB%8C-22-03-22)

## ServerLess_TLSFrag_Xray_Config
 کانفیگ یوتیوب بصورت مستقیم

از آنجایی که تکنولوژی فرگمنت در هسته 1.8.3 xray پیاده سازی شده ، با افزودن این کانفیگ serverless_TLSFrag_xray.json یا این کانفیگ t.me/ircfspace/224 در هر کلاینت با هسته 1.8.3 به بالا میتوانید از یوتیوب بصورت مستقیم و بدون سرور واسطه استفاده کنید

[ServerLess_TLSFrag_Xray_Config.json](https://github.com/GFW-knocker/gfw_resist_HTTPS_proxy/blob/main/ServerLess_TLSFrag_Xray_Config.json)

[README](https://github.com/GFW-knocker/gfw_resist_HTTPS_proxy/blob/main/README.md)

## ChainWireguard_v2ray_(DNS Fragment)

https://threadreaderapp.com/thread/1757369865550135679.html

[ChainWireguard_v2ray_(DNS Fragment)](https://github.com/amin4139/share_file/blob/main/ChainWireguard_v2ray_(DNS%20Fragment))

## ChainWireguard_v2ray

https://threadreaderapp.com/thread/1757369865550135679.html

[ChainWireguard_v2ray](https://github.com/amin4139/share_file/blob/main/ChainWireguard_v2ray)

## ChainWireguard_v2ray_(IRDNS Fragment)

https://threadreaderapp.com/thread/1757369865550135679.html

[ChainWireguard_v2ray_(IRDNS Fragment)](https://github.com/amin4139/share_file/blob/main/ChainWireguard_v2ray_(IRDNS%20Fragment))

## Vless warp fragment 
۱. نصب پنل سنایی
```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```
۲.سرتیفیکیت دامنه 

۳.نصب warp go 
```bash
bash <(curl -Ls https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh)
```

۴.ساخت کانفینگ 

۵.زدن فرگمنت 

توصیه ما این است که بهترین گزینه برای سرور، اوبونتو ۲۲ است.


## رفع فیلتر دامنه و ای پی با فرگمنت و وارپ روی تروجان

فقط به جای vless ws لطفا trojan ws بسازید.

[رفع فیلتر دامنه و ای‌پی با فرگمنت و وارپ روی تروجان](https://telegra.ph/%D8%B1%D9%81%D8%B9-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D9%88-%D8%A7%DB%8C-%D9%BE%DB%8C-%D8%A8%D8%A7-%D9%81%D8%B1%DA%AF%D9%85%D9%86%D8%AA-%D9%88-%D9%88%D8%A7%D8%B1%D9%BE-%D8%B1%D9%88%DB%8C-%D8%AA%D8%B1%D9%88%D8%AC%D8%A7%D9%86-02-14)


## Get A Free Node + Fragment

[Get A Free Node](https://www.youtube.com/watch?v=2QtzmuOjc2Q)


## Streisand IOS
برنامهٔ #Streisand یکی‌از پایدارترین گزینه‌ها برای #آیفون هست که متاسفانه در رابطه با واردکردن پیگربندی JSON از URL با مشکل مواجه بود؛ این زمانی اهمیت بیشتری پیدا می‌کرد که درحال‌حاضر #فرگمنت در ایران به‌عنوان یکی‌از روش‌های کاربردی برای دسترسی آزاد به اینترنت به‌شمار میره /تب

https://apps.apple.com/us/app/streisand/id6450534064?platform=iphone


## آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه MahsaNG اندروید

https://threadreaderapp.com/thread/1753080310982701493.html


## آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه Nekoray ویندوز و لینوکس

نشانی دریافت Nekoray:
https://github.com/MatsuriDayo/nekoray/releases

https://twitter.com/seramo_ir/status/1757698224897294818


# آموزش ترکیب v2rayNG و nekobox و با استفاده از فرگمنت داخلی xray فعال کردن کانیفگ های ورکر داخل nekobox

[amin](https://twitter.com/amin_o__o/status/1758258329514598534)


## اگر فرگمنت نزنیم چی میشه؟

رو دامنه‌های قدیمی که از قبل اینجوری وصلن احتمال فیلتر شدن کمه ولی دامنه‌های جدیدی که تازه بخوان از این روش استفاده کنن کمتر از ۲۴ ساعت و ترافیک زیر ۱۰ گیگ برای خودم دوتا دامنه اینجوری فیلتر شد و حتی دوستان و اطرافیان هم همینطور ترافیک شون به ۱۰ گیگ نرسیده دامنه فیلتر شده
حتی اگر یک وبسایت داشته باشید و رشد نمایی ترافیک داشته باشد فیلتر می شود.


但是我们收到了 REALITY 被伊朗 GFW 封锁的报告 XTLS/Xray-core#2778 ，并且 Cloak 似乎没有过于流行以至于会被单独针对，所以伊朗 GFW 可能尚未针对上述小众特征，更有可能是在针对普遍的 IP、域名、流量特征等，它们也会导致 Cloak 被封锁。

خصیصه‌های آماری و الگویی اتصال و آی‌پی و پهنای باند مصرفی و تعداد اتصال‌ها مورد ارزیابی قرار می گیرد و بر اساس آنها فیلتر می شوند. هم چنین ربات‌هایی برای تشخیص سرور وجود دارند که عملیات شناسایی رو سریع‌تر می کنند.


## خطرات امنیتی پروتکل Vless بدون TLS

نکات کلیدی:

* پروتکل Vless بدون TLS، داده‌های شما را تا سرور رمزنگاری نمی‌کند و در معرض خطر است.
* استفاده از درگاه 80 بدون TLS خطرناک است.
* اگر از پیکربندی Vless بدون TLS استفاده می‌کنید، گزینه "insecure" را فعال نکنید.
* به جای فعال کردن insecure، پرونده cert (کلید عمومی) را در پیکربندی قرار دهید.
* شیوه‌نامه‌های Vmess و Shadowsocks بدون TLS امن هستند زیرا داده‌ها را رمزنگاری می‌کنند.

راه حل:

* از Vless با TLS استفاده کنید.
* از درگاه‌های امن مانند 443 استفاده کنید.
* پرونده cert را در پیکربندی Vless خود قرار دهید.
* از شیوه‌نامهٔ Vmess یا Shadowsocks به جای Vless بدون TLS استفاده کنید.
  

هشدار:
* عدم تحقیق در مورد امنیت سایبری می‌تواند خطرناک باشد.
* فعال کردن گزینهٔ "insecure" امنیت پیکربندی شما را به خطر می‌اندازد.

# IPv6 TunnelBroker
[اگر سرور مجازی شما ipv6 نداره ، این اسکریپت به شما کمک میکنه تا براحتی IPv6 که با استفاده از سرویس های تانل بروکر دریافت کردید رو روی سرور مجازیتون ست کنید. همینطور به راحتی میتونید تنظیمات رو مشاهده کنید یا اون رو به حالت قبل برگردونید. ](https://github.com/azavaxhuman/IPv6-TunnelBroker)


# Iphone

گوشیت آیفونه؟ فیلترشکن میخری؟ تنبلی؟
نخر آقا
https://apps.apple.com/us/app/streisand/id6450534064
اینو نصب کن ، بازش کن بعد + بالا رو بزن و اینو کپی کن:
https://raw.githubusercontent.com/barry-far/V2ray-Configs/main/Sub9.txt

بعدش import from clipboard رو بزن و تامام!🎉

برای وصل شدن هم فقط دستت رو روی کلمه Subscription نگه دار و auto connect رو بزن. 🫡




# ساخت سرور از اول


توی آموزش زیر می تونید از اول یک سرور رو راه اندازی کنید.
ولی روش فرگمنت نیست و در ادامه روش فرگمنت رو بهش اضافه کنید.

[روش جدید ساخت کانفیگ ویتوری ](https://www.youtube.com/watch?v=HX7WKGLnjMI)

##  سرور تهیه کنید

می تونید از AEZA سرور بگیرید

لیست جاهایی که سرور می فروشند رو توی بخش خرید سرور و دامنه گذاشتم.


## کانفیگ اولیه
تغییر پورت سرور

```
echo "Port 42547" >> /etc/ssh/sshd_config
systemctl restart sshd
service ssh restart
sudo ufw allow 42547
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

## سرتفیتیکت

طبق آموزش دامنه روی کلود فلیر ست کنید و. سرتیفیکت هم بگیرید.

[روش جدید ساخت کانفیگ ویتوری ](https://www.youtube.com/watch?v=HX7WKGLnjMI)


path و مابقی موارد امنیتی رو استفاده کنید



## کانفیگ


ساخت کانفیگ فرگمنت روی پنل 
[video](https://www.youtube.com/watch?v=qeD1jwOXW4A&t=309s)


# batch-fragment-scanner 

توسط این‌اسکریپت میتونین با استفاده از کانفیگ فرگمنت‌شده و هسته Xray عملیات اسکن انجام داده و مقادیر مناسب Packets, Length, Interval رو متناسب با اینترنتتون پیدا کنین.

http://github.com/Surfboardv2ray/batch-fragment-scanner
http://t.ly/qjncc



# مبدل فرگمنت

مبدل فرگمنت
fragment convertor:
1-
https://rrouzbeh.github.io/ray2fragment/

2-
https://ircfspace.github.io/fragment/

3-
https://misaturo.github.io/Xray-Fragment-Configurator/
4-
https://69learn.github.io/Xray-Fragment-converter                                      
   

اسکریپت پیدا کردن فرگمنت بهینه :

http://github.com/Surfboardv2ray/batch-fragment-scanner

توسط این‌اسکریپت میتونین با استفاده از کانفیگ فرگمنت‌شده و هسته Xray عملیات اسکن انجام داده و مقادیر مناسب Packets, Length, Interval رو متناسب با اینترنتتون پیدا کنین.

👉 http://github.com/Surfboardv2ray/batch-fragment-scanner
🎥 http://youtube.com/watch?v=WiGgnZLI8cU&t=8s
💡 http://t.ly/qjncc
© Surfboardv2ray


https://github.com/Surfboardv2ray/batch-fragment-scanner

https://ptechgithub.github.io/abzar/index2.html


🔍 http://ircf.space
@ircfspace