#   روش های اتصال به اینترنت آزاد

در اینجا روش هایی که کارکرد دارند رو می نویسم.
اگر روشی دارید که کار می کند و در اینجا نیست لطفا به من بگید تا اضافه کنم.

> [!TIP]
> :+1:  اگر دانش کامپیوتر کمی دارید یا برنامه نویس نیستید یا شبکه بلد نیستید بخش مخصوص شما داریم. به آخرین قیمت داکیومنت بروید 

[اگر دانش کافی ندارید از این بخش شروع کنید](https://github.com/majidrezarahnavard/way_of_freedom?tab=readme-ov-file#%D8%A7%DA%AF%D8%B1-%D8%AF%D8%A7%D9%86%D8%B4-%D9%81%D9%86%DB%8C-%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%D9%86%D8%AF%D8%A7%D8%B1%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%A7%DB%8C%D9%86-%D8%A8%D8%AE%D8%B4-%D8%B4%D8%B1%D9%88%D8%B9-%DA%A9%D9%86%DB%8C%D8%AF)



[صحبت های سارینا اسماعیل زاده](https://www.youtube.com/watch?v=gpRnvFZ3vTU&t=52s)
[ زادروز مجیدرضا رهنورد، روز ملی شیروخورشید ](https://www.youtube.com/watch?v=N3Yo009a7Uc)

# فرگمنت
فرگمنت به معنی تکه تکه ریکوست های هست که تشخیص رو برای گریت فایر وال سخت می کند.
xray این قابلیت رو پشتیبانی می کند

لزومی نداره حتما از تونل استفاده کنید از CDN هم میشه استفاده کرد.

سرور و دامنه کثیف نیاز دارد.



[آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=66s)


[ استفاده از دامین فیلتر شده با فرگمنت | دامنه مردتو زنده کن ](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[اخرین آموزش سگارو](https://telegra.ph/How-to-use-Argo-Cloudflare-tunnel-with-iSegaro-12-15)

[نصب آرگو](https://telegra.ph/%D9%86%D8%B5%D8%A8-%D8%A2%D8%B1%DA%AF%D9%88-01-07)


[ابزار فرگمنت ircfspace ](https://ircfspace.github.io/fragment/)

[misaturo tools ](https://misaturo.github.io/Xray-Fragment-Configurator/)

[ جدیدترین روش استفاده از کانفیگ FRAGMENT با لینک سابسکریشن بدون نیاز به ویرایش کد ساخت بینهایت کاربر ](https://www.youtube.com/watch?v=4L7zajnLtOs)


[آموزش کامل کلودفلر ورکر+فرگمنت کردن کانفیک برای عبور از فیلترینگ شدید مخصوصا در همراه اول](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D8%A7%D9%85%D9%84-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-%D9%88%D8%B1%DA%A9%D8%B1%D9%81%D8%B1%DA%AF%D9%85%D9%86%D8%AA-%DA%A9%D8%B1%D8%AF%D9%86-%DA%A9%D8%A7%D9%86%D9%81%DB%8C%DA%A9-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B9%D8%A8%D9%88%D8%B1-%D8%A7%D8%B2-%D9%81%DB%8C%D9%84%D8%AA%D8%B1%DB%8C%D9%86%DA%AF-%D8%B4%D8%AF%DB%8C%D8%AF-%D9%85%D8%AE%D8%B5%D9%88%D8%B5%D8%A7-%D8%AF%D8%B1-%D9%87%D9%85%D8%B1%D8%A7%D9%87-%D8%A7%D9%88%D9%84-02-09)


[آموزش کلودفلر ورکر از نوع pages+fragment بدون نیازبه تست ip و SNI !](https://telegra.ph/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-%D9%88%D8%B1%DA%A9%D8%B1-%D8%A7%D8%B2-%D9%86%D9%88%D8%B9-pagesfragment-%D8%A8%D8%AF%D9%88%D9%86-%D9%86%DB%8C%D8%A7%D8%B2%D8%A8%D9%87-%D8%AA%D8%B3%D8%AA-ip-%D8%AA%D9%85%DB%8C%D8%B2-02-10)


[  راه حل تضمینی فرگمنت روی IOS ](https://www.youtube.com/watch?v=Q8_K_GRmEbU)


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


## Random Fragment Sub Worker 

ترکیب Edge Tunnel و Fragment فوق العادس

[آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه MahsaNG اندروید](https://twitter.com/seramo_ir/status/1753080310982701493)

[آموزش اتصال به کانفیگ ها با استفاده از فرگمنت در برنامه V2Box آیفون](https://twitter.com/seramo_ir/status/1753080558127869976)

 این فقط یه دونه خروجی جیسون بر اساس اون اطلاعات میسازه که کاستوم کانفیگ دارای فرگمنته
 این کلا ربطی به اون ورکر نداره
فقط میاد بر اساس دامنه و آیدی کانفیگ جیسونش رو میسازه

[کانفیگ های کاستوم رو توی V2rayNG](https://twitter.com/seramo_ir/status/1754959963187712478)

[worker.js](https://github.com/seramo/random-fragment-sub-worker/blob/main/worker.js)

برای استفاده از ورکر ساخت ساب فرگمنت
میتونید دامنه خودتون رو جایگزین domain و uuid کانفیگ رو جایگزین userUUID کنید

نکته: این برای Edge Tunnel نوشته شده و میتونید متناسب با کانفیگ خودتون port، path و ... رو تغییر بدید

## Worker Serverless + Fragment

[ عبور از فیلترینگ با Edge Tunnel و بررسی پنل BPB و پنل وحید فرید | فیلترشکن رایگان، سریع و ضد تحریم ](https://www.youtube.com/watch?v=jvZkHANYfno&t=297s)

[نحوه‌ی راه‌اندازی BPB Worker Panel به‌همراه Fragment نسخه‌ی 2.1](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87%E2%80%8C%DB%8C-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-BPB-Worker-Panel-%D8%A8%D9%87%E2%80%8C%D9%87%D9%85%D8%B1%D8%A7%D9%87-Fragment-01-28)


## vless warp fragment 
۱. نصب پنل سنایی
</br>
 bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
</br>
۲.سرتیفیکیت دامنه 
</br>
۳.نصب warp go 
</br>
bash <(curl -Ls https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh)
</br>
۴.ساخت کانفینگ 
</br>
۵.زدن فرگمنت 
</br>
please be advised the best choice for the server is ubuntu 22 , 


## Streisand IOS
اپ #Streisand یکی‌از استیبل‌ترین کلاینت‌ها برای #آیفون هست، که متاسفانه در رابطه با واردکردن کانفیگ JSON از URL با مشکل مواجه بود؛ این‌مهم زمانی اهمیت بیشتری پیدا میکرد که درحال‌حاضر #فرگمنت در ایران به‌عنوان یکی‌از روش‌های کاربردی برای دسترسی آزاد به اینترنت به‌شمار میره /تب

https://apps.apple.com/us/app/streisand/id6450534064?platform=iphone


## کلود فلیر
از هر دامنه از کلود فلیر که فیلتر نیست می تونید استفاده کنید این لینک های خزنده هم جالب هست
https://ircf.space/list.php#

لیست سایت های چینی که می تونید جای اسپید تست استفاده کنید
https://trends.builtwith.com/cdn/Cloudflare/China

[سایت پیدا کردن ای پی تمیز](https://www.itdog.cn/ping/russian.people.com.cn)


[آموزش پیدا کردن آی پی سالم کلودفلر برای تمامی اپراتورها](https://www.youtube.com/watch?v=tXNeirkJJjA)

## اگر فرگمنت نزنیم چی میشه؟

رو دامنه های قدیمی که از قبل اینجوری وصلن احتمال فیلتر شدن کمه ولی دامنه های جدیدی که تازه بخوان از این روش استفاده کنن کمتر از ۲۴ ساعت و ترافیک زیر ۱۰ گیگ برای خودم دوتا دامنه اینجوری فیلتر شد و حتی دوستان و .
.اطرافیان هم همینطور ترافیک شون به ۱۰ گیگ نرسیده دامنه فیلتر شده
حتی اگر یک وبسایت داشته باشید و رشد نمایی ترافیک داشته باشد فیلتر می شود.
</br>
但是我们收到了 REALITY 被伊朗 GFW 封锁的报告 XTLS/Xray-core#2778 ，并且 Cloak 似乎没有过于流行以至于会被单独针对，所以伊朗 GFW 可能尚未针对上述小众特征，更有可能是在针对普遍的 IP、域名、流量特征等，它们也会导致 Cloak 被封锁。

</br>

خصیصه های آماری و الگویی اتصال و ای پی و پهنای باند مصرفی و تعداد کانکشن مورد ارزیابی قرار می گیرد و بر اساس آنها فیلتر می شوند هم چنین ربات هایی برای تشخیص سرور وجود دارند که عملیات شناسایی رو سریع تر می کنند.


## برای ساخت فیلترشکن حتما از TLS استفاده کنید

عده ای به من خرده گرفتن که پروتکل Vless امنه و چرا میگی روی پورت 80 بودن اون میتونه #خطرناک باشه ، متاسفانه جامعه ایران از عدم تحقیق رنج زیادی میبره و این یک نمونه ، پروتکل Vless بدون TLS هیچ #امنیت ای برای داده های شما تا #سرور ایجاد نمیکنه.

</br>
از پورت ۸۰ بدون TLS استفاده نکنید.

https://twitter.com/Nima__Nikjoo/status/1756866122123452520

</br>

که هر کانفیگ که tls نداشته باشه امن نیست . حالا روی هر پورتی که میخواد باشه . 
تنها در صورتی امن هست که از رمزنگاری داخلی استفاده کرده باشه 
مثل پروتکل هایی vmess , shadowsocks که از tls استفاده نمیکنن ولی امن هستن چون دیتا کاربر رو encrypt میکنن و plain ارسال نمیشه


</br>

فاجعه بعدی این هست که خیلی ها چون گوشی هاشون قدیمی هست یا از self signed استفاده میکنن میاد تیک insecure رو فعال میکنن تا کانفیگ وصل بشه . این خودش سوراخ امنیتی هست . خیلی ها هم توی آموزش دیدم این رو به غلط میکن روشن کنید . در صورتی که خیلی راحت میشه فایل cert رو داخل کانفیگ قرار داد تا این مشکل حل بشه . فایل cert میشه همون کلید عمومی . توی نکوباکس و نکوری راحت میشه قرار داد



# بستن ای پی های کشور کمونیست

ایران اکسس نکنید.
فقط ای پی کشور های چین روسیه کوبا و رومانی و قزاقستان و اوکراین و کشور هایی که ریکوست زیاد  دارند رو ببندید.

[ آموزش جلوگیری از حمله به سرور و ایران اکسس کردن با 2 روش ساده ](https://www.youtube.com/watch?v=U90a43fTyL0)


# بستن دامنه های ایران و چین

برای این کار فقط کافیه این رو به انتهای کانفیگتون اضافه کنید.

```
    "routing": {
        "domainStrategy": "IPOnDemand",
        "rules": [
            {
                "type": "field",
                "ip": [
                    "geoip:cn",
                    "geoip:ir"
                ],
                "outboundTag": "block"
            },
            {
                "type": "field",
                "domain": [
                    "geosite:category-porn"
                ],
                "outboundTag": "block"
            }
        ]
    },
```

# مخفی سازی

این روش به تنهایی باعث فیلترشدن دامنه میشود.
پهنای باند مصرفی و بات های چینی رو هم باید در نظر بگیرید.

[NginxReverseProxy](https://github.com/Ptechgithub/NginxReverseProxy)

قابلیت های: 
</br>
نصب سایت (170 قالب آماده)
</br>
اعمال محدویت ترافیک
</br>
تغییر path 
</br>
تغییر پورت HTTPS
</br>

[ آموزش ایجاد سایت روی دامنه و ساب دامنه با استفاده از انجینیکس ](https://youtu.be/xFMh8F3JGrA?si=SJuNI1hOn2tl4S8i)

# warp on warp

[warp-on-warp](https://www.youtube.com/watch?si=bJq3Wn6bxD9wNruP&v=VnsjxHl41mU&feature=youtu.be)

[wiregaurd-go](https://github.com/bepass-org/wireguard-go)

[code](https://github.com/Elfiinaa/ConfigFiles/blob/main/WarpOnWarp-HiddifyNext.json)

[warp-phiphon](https://www.youtube.com/shorts/y1Cqo0Ru0vI)

[warp kian](https://twitter.com/lowercase_1978/status/1752285825789034927)

[ اتصال به وارپ روی اکثر اینترنت ها | حل مشکل وارپ ](https://www.youtube.com/watch?v=KT_cxcKesS0)

حالا اگر از وارپ استفاده میکنید 
اعداد IFP رو تغییر بدید دوباره وصل میشه 

```
نمونه :
ifp=5-10
warp://auto/?ifp=5-10
```

# وارپ+سایفون

وارپ+سایفون ترکیب طلایی
وارپ در حالت عادی توسط سیستم فیلترینگ مسدود شد با ترکیب وارپ و سایفون روی ویندوز فیلترینگ را با سرعت  دور بزنیم . وای فای مخابرات تست شده

https://threadreaderapp.com/thread/1757057880295903274.html


# Oblivion - Unofficial Warp Client for Android
Oblivion provides secure, optimized internet access through a user-friendly Android app.
[Oblivion](https://github.com/bepass-org/oblivion/releases/)

https://twitter.com/seramo_ir/status/1756738507446366380

https://t.me/generatewarpplusbot



# Worker

[ ساخت فیلترشکن رایگان بدون سرور و دامین با استفاده از ورکر Cloudflare-Worker ](https://www.youtube.com/watch?v=9v57JYYn-Ww)

[cf-ip-scanner](https://vfarid.github.io/cf-ip-scanner/)

[راهکار جامع کانفیگ‌های v2ray روی ورکر](https://github.com/vfarid/v2ray-worker/blob/main/README-fa.md)

[v2ray-worker](https://github.com/vfarid/v2ray-worker)



# تونل معکوس

زمانی که حداقل دو تا سرور دارید. یکی  ایران و یکی هم خارج لازم هست.


[آموزش تانل معکوس](https://www.youtube.com/watch?v=jCg6Yci7a5U)

[chain](https://www.youtube.com/watch?v=0SBtJ11EcjA)

# Bepass

Bepass: A DPI-nightmare proxy
[bepass](https://github.com/bepass-org/bepass)

[Bepass-worker](https://www.youtube.com/watch?v=1UG8g9-6XUc&t=161s)

</br>
برای کمک به این پروژه کتاب 
</br>
Network Programming with Go
</br>
را مطالعه کنید

# Yebekhe

[TelegramV2rayCollector](https://github.com/yebekhe/TelegramV2rayCollector)

[cf-clean-ip-resolver](https://github.com/yebekhe/cf-clean-ip-resolver)

[v2hub](https://github.com/sarinaesmailzadeh/V2Hub/blob/main/merged)


# Hiddify

[Hiddify Next](https://www.youtube.com/watch?v=EjHjLQbC40E)

[hiddify-next github](https://github.com/hiddify/hiddify-next/releases/v0.15.6)

# Mahsa NG

[Mahsa NG Application](https://play.google.com/store/apps/details?id=com.MahsaNet.MahsaNG)


# Amnezia VPN

[ آموزش نصب و کانفیگ Amnezia VPN روی سرور (نصب ساده با پینگ مناسب - مناسب ترید) ](https://www.youtube.com/watch?v=JIgMNK_oQYk)


https://threadreaderapp.com/thread/1757093989616947356.html


بله، زمان ترید ساعت سیستم رو به سوئد تغییر بدین.
البته به شرطی که ژئولوکیشن ip سرورتون هم سوئد باشه.
از سایت http://ipinfo.io لوکیشن ip تون رو چک کنین.


# Data leak

هرکانفیگی که استفاده می کنید حتما یکبار با سایت زیر چک کنید که دیتا لیک نداشته باشد

https://browserleaks.com/




WebRTC in Firefox

    To disable WebRTC in Firefox:
    Type about:config in the address bar and press Enter.
    In the search bar, type media.peerconnection.enabled and double-click the preference to set its value to false.

WebRTC in Chrome

    The recommended solution to limit the risk of IP leakage via WebRTC is to use the official Google extension called WebRTC Network Limiter, which provides a range of options with varying levels of protection.


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


# نکات مهم برای عبور از فیلترینگ!

[نکات مهم برای عبور از فیلترینگ!](https://threadreaderapp.com/thread/1754472982687150413.html)

# تست سرعت

https://fiber.google.com/speedtest/
https://speed.cloudflare.com/
https://www.speedtest.net/

# مخزن دانلود فیلترشکن
[fdroid.noql.net](fdroid.noql.net)


# Spotify

برای حل مشکل اسپاتیفای باید از دامنه و سرور استفاده کنید
و این کانفیگ رو به افراد متعدد ندهید. یک راه گران هم خرید وی پی ان نورد و گذاشتن در لایه آخر تونل هست.


# Open VPN

برای این روش یک سرور نیاز دارید.

[ آموزش ساخت openvpn روی سرور مجازی ](https://www.youtube.com/watch?v=X8GOExnqPCY)

# Brook

[ روش جدید دورزدن فیلترینگ با استفاده از Brook ](https://youtu.be/0YR4ZpnoYUY?si=Xs1BPq98XuNxtiUt)
[آموزش](https://twitter.com/kevinzakarian/status/1753403463608730017)

از لینک زیر پلاگین Brook برای نکوباکس رو دانلود و نصب کنید. با این پلاگین می‌تونین بُروک رو در گوشی اندروید با نکوباس اجرا کنین و در کنار اپ اصلی برنامه داشته باشین. (برای تشخیص v8a یا v7a پردازنده گوشی=> تلگرام در منوی setting اون پائین نوع CPU رو زده)


[plugin](https://github.com/MatsuriDayo/plugins/releases/tag/Brook-v20220707-1)


[ آموزش نصب و کانفیگ Brook VPN روی سرور به 2 روش ](https://www.youtube.com/watch?v=2IiJM6jyAUs)

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



# xray

مهم ترین پروژه که تمام روش های بر اساس این پروژه هست.

https://github.com/XTLS/Xray-core


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

[ دور زدن رایگان فیلترینگ با یک روش قدرتمند اما ساده، بسیار سریع و ضد تحریم | Warp-on-Warp ](https://www.youtube.com/watch?v=VnsjxHl41mU)


## روش سرور

اگر نمی دونید سرور چی هست اول این ویدیو رو ببنید.
[سرور چیه](https://www.youtube.com/watch?v=A_J8oLH4RN0)


در این روش باید سرور و دامنه خریداری کنید. سرور ها معمولا ۵ دلار در ماه و دامنه معمولا ۱ دلار در سال هزینه دارند.

</br>

هر سرور برای ۳۰۰ نفر راحت کار می کند و شما می توانید با این روش کل خانواده و دوستان رو وصل کنید.

تو این روش بهتون یه ای پی ثابت داده میشود.

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

[ خرید دامنه با کریپتو | خرید دامنه با بیت کوین | خرید دامنه با ارز دیجیتال ](https://www.youtube.com/watch?v=3fUx7Em_-C8)



[ساخت اکانت روی هاتزنر ](https://www.youtube.com/watch?v=Q0n2rLAZ_Ac)


### اکانت کلود فلیر بسازید

[ آموزش کامل کلودفلر و ایجاد ساب دامنه بی نهایت (فرار از فیلترینگ) ](https://www.youtube.com/watch?v=BM3T_8qKcuo&t=61s)


### web socket 

[ آموزش پروتکل وب سوکت در v2ray پروتکل خوب و پایدار با sni سریع ](https://www.youtube.com/watch?v=ygE4DL9t1zQ)


### روش فرگمنت رو استفاده کنید

[ استفاده از دامین فیلتر شده با فرگمنت | دامنه مردتو زنده کن ](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[ تحلیل فنی فیلترینگ کلودفلر و بی اثر کردن کامل آن با یک vless/vmess ساده و سرعت عالی حتی بدون TLS ](https://www.youtube.com/watch?v=aBaEOJLfUkg&t=925s)


[ آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها (تست شده) / Fragment ](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=579s)


لزومی ندارد از تونل کلود فلیر استفاده کنید.