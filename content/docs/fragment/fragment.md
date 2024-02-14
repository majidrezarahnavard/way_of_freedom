---
weight: 400
title: فرگمنت
description: ""
icon: article
date: 2024-02-14T20:48:46+03:30
lastmod: 2024-02-14T20:48:46+03:30
draft: false
toc: true
---
# فرگمنت

فرگمنت به معنی تکه تکه ریکوست های هست که تشخیص رو برای گریت فایر وال سخت می کند. xray این قابلیت رو پشتیبانی می کند

لزومی نداره حتما از تونل استفاده کنید از CDN هم میشه استفاده کرد.

سرور و دامنه کثیف نیاز دارد.

[آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=66s)

[استفاده از دامین فیلتر شده با فرگمنت | دامنه مردتو زنده کن](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[اخرین آموزش سگارو](https://telegra.ph/How-to-use-Argo-Cloudflare-tunnel-with-iSegaro-12-15)

[نصب آرگو](https://telegra.ph/%D9%86%D8%B5%D8%A8-%D8%A2%D8%B1%DA%AF%D9%88-01-07)

[ابزار فرگمنت ircfspace](https://ircfspace.github.io/fragment/)

[misaturo tools](https://misaturo.github.io/Xray-Fragment-Configurator/)

[جدیدترین روش استفاده از کانفیگ FRAGMENT با لینک سابسکریشن بدون نیاز به ویرایش کد ساخت بینهایت کاربر](https://www.youtube.com/watch?v=4L7zajnLtOs)

[آموزش کامل کلودفلر ورکر+فرگمنت کردن کانفیک برای عبور از فیلترینگ شدید مخصوصا در همراه اول](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D8%A7%D9%85%D9%84-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-%D9%88%D8%B1%DA%A9%D8%B1%D9%81%D8%B1%DA%AF%D9%85%D9%86%D8%AA-%DA%A9%D8%B1%D8%AF%D9%86-%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%A9-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B9%D8%A8%D9%88%D8%B1-%D8%A7%D8%B2-%D9%81%DB%8C%D9%84%D8%AA%D8%B1%DB%8C%D9%86%DA%AF-%D8%B4%D8%AF%DB%8C%D8%AF-%D9%85%D8%AE%D8%B5%D9%88%D8%B5%D8%A7-%D8%AF%D8%B1-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%A7%D9%88%D9%84-02-09)

[آموزش کلودفلر ورکر از نوع pages+fragment بدون نیازبه تست ip و SNI !](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-%D9%88%D8%B1%DA%A9%D8%B1-%D8%A7%D8%B2-%D9%86%D9%88%D8%B9-pagesfragment-%D8%A8%D8%AF%D9%88%D9%86-%D9%86%DB%8C%D8%A7%D8%B2%D8%A8%D9%87-%D8%AA%D8%B3%D8%AA-ip-%D8%AA%D9%85%DB%8C%D8%B2-02-10)

[راه حل تضمینی فرگمنت روی IOS](https://www.youtube.com/watch?v=Q8_K_GRmEbU)

اگر دیدید وصل نمیشه این دو تا پارامتر رو تغییر بدید

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

پارامتر packets شماره پکتی که قراره فرگمنت بشه رو تعیین میکنه اینجا "1-1" یعنی پکت اول رو تیکه تیکه کن بفرست، اگه خالی بزاری پارامتر packets رو همه پکت ها رو فرگمنت میکنه، اگه "1-3" بزاری پکت اول، دوم و سوم رو تیکه تیکه میکنه میفرسته.

## 

## Fragment over DNS

می تونید به کانفیگ تون DNS های شکن رو اضافه کنی

[کانفیگ امین با استفاده از DNS](https://github.com/amin4139/share_file/blob/main/Test_config)

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

## 

## Random Fragment Sub Worker

ترکیب Edge Tunnel و Fragment فوق العادس

[آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه MahsaNG اندروید](https://twitter.com/seramo_ir/status/1753080310982701493)

[آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه V2Box آیفون](https://twitter.com/seramo_ir/status/1753080558127869976)

این فقط یه دونه خروجی جیسون بر اساس اون اطلاعات میسازه که کاستوم کانفیگ دارای فرگمنته این کلا ربطی به اون ورکر نداره فقط میاد بر اساس دامنه و آیدی کانفیگ جیسونش رو میسازه

[کانفیگ های کاستوم رو توی V2rayNG](https://twitter.com/seramo_ir/status/1754959963187712478)

[worker.js](https://github.com/seramo/random-fragment-sub-worker/blob/main/worker.js)

برای استفاده از ورکر ساخت ساب فرگمنت میتونید دامنه خودتون رو جایگزین domain و uuid کانفیگ رو جایگزین userUUID کنید

نکته: این برای Edge Tunnel نوشته شده و میتونید متناسب با کانفیگ خودتون port، path و ... رو تغییر بدید

## 

## Worker Serverless + Fragment

[عبور از فیلترینگ با Edge Tunnel و بررسی پنل BPB و پنل وحید فرید | فیلترشکن رایگان، سریع و ضد تحریم](https://www.youtube.com/watch?v=jvZkHANYfno&t=297s)

[نحوه‌ی راه‌اندازی BPB Worker Panel به‌همراه Fragment نسخه‌ی 2.1](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87%E2%80%8C%DB%8C-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-BPB-Worker-Panel-%D8%A8%D9%87%E2%80%8C%D9%87%D9%85%D8%B1%D8%A7%D9%87-Fragment-01-28)

## 

## ChainWireguard_v2ray_(DNS Fragment)

[https://threadreaderapp.com/thread/1757369865550135679.html](https://threadreaderapp.com/thread/1757369865550135679.html)

[ChainWireguard_v2ray_(DNS Fragment)](https://github.com/amin4139/share_file/blob/main/ChainWireguard_v2ray_(DNS%20Fragment))

## 

## ChainWireguard_v2ray

[https://threadreaderapp.com/thread/1757369865550135679.html](https://threadreaderapp.com/thread/1757369865550135679.html)

[ChainWireguard_v2ray](https://github.com/amin4139/share_file/blob/main/ChainWireguard_v2ray)

## 

## ChainWireguard_v2ray_(IRDNS Fragment)

[https://threadreaderapp.com/thread/1757369865550135679.html](https://threadreaderapp.com/thread/1757369865550135679.html)

[ChainWireguard_v2ray_(IRDNS Fragment)](https://github.com/amin4139/share_file/blob/main/ChainWireguard_v2ray_(IRDNS%20Fragment))

##

## Vless warp fragment

۱. نصب پنل سنایی  
bash <(curl -Ls [https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh](https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh))  
۲.سرتیفیکیت دامنه  
۳.نصب warp go  
bash <(curl -Ls [https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh](https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh))  
۴.ساخت کانفینگ  
۵.زدن فرگمنت  
please be advised the best choice for the server is ubuntu 22 ,

## 

## رفع فیلتر دامنه و ای پی با فرگمنت و وارپ روی تروجان

فقط به جای vless ws لطفا trojan ws بسازید .

[رفع فیلتر دامنه و ای پی با فرگمنت و وارپ روی تروجان](https://telegra.ph/%D8%B1%D9%81%D8%B9-%D9%81%DB%8C%D9%84%D8%AA%D8%B1-%D8%AF%D8%A7%D9%85%D9%86%D9%87-%D9%88-%D8%A7%DB%8C-%D9%BE%DB%8C-%D8%A8%D8%A7-%D9%81%D8%B1%DA%AF%D9%85%D9%86%D8%AA-%D9%88-%D9%88%D8%A7%D8%B1%D9%BE-%D8%B1%D9%88%DB%8C-%D8%AA%D8%B1%D9%88%D8%AC%D8%A7%D9%86-02-14)

## 

## Streisand IOS

اپ #Streisand یکی‌از استیبل‌ترین کلاینت‌ها برای #آیفون هست، که متاسفانه در رابطه با واردکردن کانفیگ JSON از URL با مشکل مواجه بود؛ این‌مهم زمانی اهمیت بیشتری پیدا میکرد که درحال‌حاضر #فرگمنت در ایران به‌عنوان یکی‌از روش‌های کاربردی برای دسترسی آزاد به اینترنت به‌شمار میره /تب

[https://apps.apple.com/us/app/streisand/id6450534064?platform=iphone](https://apps.apple.com/us/app/streisand/id6450534064?platform=iphone)

## 

## آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه MahsaNG اندروید

[https://threadreaderapp.com/thread/1753080310982701493.html](https://threadreaderapp.com/thread/1753080310982701493.html)

## 

## آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه Nekoray ویندوز و لینوکس

لینک‌ دانلود Nekoray : [https://github.com/MatsuriDayo/nekoray/releases](https://github.com/MatsuriDayo/nekoray/releases)

[https://twitter.com/seramo_ir/status/1757698224897294818](https://twitter.com/seramo_ir/status/1757698224897294818)

## 
## DNS over HTTPS (DOH) with Adguard on personal server

هدف ما از این آموزش اینه که به کمک ادگاردی که روی سرورمون ران میکنیم درخواست های DNS رو به صورت رمزنگاری شده برسونیم به سرور خودمون و از اونجا از DOH های معتبر مثه گوگل کلاودفلر ادگارد نکست دی‌ان‌اس استفاده کنیم.بدون اختلال امن و کلی قابلیت دیگه مثه بلاک کردن تبلیغات انتخاب اتوماتیک سریعترین DNS برای جواب دادن و ...

  
چیزایی که نیاز داریم :  
1.یه سرور با حداقل یه هسته CPU و 2گیگ RAM (آیپی سرور باید تمیز باشه)  
2.یه دامنه‌ی تمیز  

[DNS over HTTPS (DOH) with Adguard on personal server](https://telegra.ph/DNS-over-HTTPS-DOH-with-Adguard-on-personal-server-02-14)

## 

## کلود فلیر

از هر دامنه از کلود فلیر که فیلتر نیست می تونید استفاده کنید این لینک های خزنده هم جالب هست [https://ircf.space/list.php#](https://ircf.space/list.php#)

لیست سایت های چینی که می تونید جای اسپید تست استفاده کنید [https://trends.builtwith.com/cdn/Cloudflare/China](https://trends.builtwith.com/cdn/Cloudflare/China)

[سایت پیدا کردن ای پی تمیز](https://www.itdog.cn/ping/russian.people.com.cn)

[آموزش پیدا کردن آی پی سالم کلودفلر برای تمامی اپراتورها](https://www.youtube.com/watch?v=tXNeirkJJjA)

[مجموعه سایتهای معتبر برای دریافت ای پی تمیز کلودفلر ورکر با کارکرد بالا و طولانی مدت](https://threadreaderapp.com/thread/1757395742434505118.html)

## 

## اگر فرگمنت نزنیم چی میشه؟

رو دامنه های قدیمی که از قبل اینجوری وصلن احتمال فیلتر شدن کمه ولی دامنه های جدیدی که تازه بخوان از این روش استفاده کنن کمتر از ۲۴ ساعت و ترافیک زیر ۱۰ گیگ برای خودم دوتا دامنه اینجوری فیلتر شد و حتی دوستان و . .اطرافیان هم همینطور ترافیک شون به ۱۰ گیگ نرسیده دامنه فیلتر شده حتی اگر یک وبسایت داشته باشید و رشد نمایی ترافیک داشته باشد فیلتر می شود.  
但是我们收到了 REALITY 被伊朗 GFW 封锁的报告 [XTLS/Xray-core#2778](https://github.com/XTLS/Xray-core/issues/2778) ，并且 Cloak 似乎没有过于流行以至于会被单独针对，所以伊朗 GFW 可能尚未针对上述小众特征，更有可能是在针对普遍的 IP、域名、流量特征等，它们也会导致 Cloak 被封锁。

  

خصیصه های آماری و الگویی اتصال و ای پی و پهنای باند مصرفی و تعداد کانکشن مورد ارزیابی قرار می گیرد و بر اساس آنها فیلتر می شوند هم چنین ربات هایی برای تشخیص سرور وجود دارند که عملیات شناسایی رو سریع تر می کنند.