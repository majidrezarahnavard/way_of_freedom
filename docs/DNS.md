# DNS


اگر #فیلترشکن کار می کند ولی بعضی از سایت های باز نمیشود یا عکس های توییتر یا جاهای دیگر باز نمیشود از این روش استفاده کنید.


# DNS client V2RayNG

توی اغلب پنل‌هایی که بر پایه x-ui هستن یه بخش تنظیمات پشرفته داره که میتونید کدهای جیسون پنل رو ببینید

توی همون قسمت تنظیمات dns سرور رو میتونید تغییر بدین..

البته مشکلی که میگین راهش اصلاح dns تو کلاینته، 

مثلا تنظیمات من رو توی v2rayNG ببینید 

[twitter](https://twitter.com/Eagle_1157/status/1784084062602133996)


خیلی وقتا دوستان میگن vpn وصله ولی چیزی لود نمیشه،
 اغلب دیدم با فعال کردن dns لوکال روی کلاینت مشکل حل شده 

پیشنهاد میکنم این مطلب رو ببینید :

برای کلاینت FOXRAY روی آیفون هم این موضوع تست شده، حالا اسکرین‌شاتهاش رو پیدا کنم میزارم



##  بهترین DNS برای اینترنت خودتو پیدا کن + مخصوص PC 


پیدا کردن بهترین DNS برای اینترنت خودمون بین شاید 10 ها DNS داخلی و خارجی که وجود دارن یکی از کارای وقت گیری هستش که شاید بارها و بارها انجامش دادیم.
و خیلی خوب میشد یه ابزاری باشه که همه DNS های معروف و قدرتمند داخلی و خارجی رو باهم آنالیز و بررسی کنه تا ما راحت تر بتونیم متوجه شیم که کدوم DNS ها برای نت ما مناسب تر هستن.
امروز با کمک برنامه PING Plotter که یه برنامه خیلی خوبه تو حوزه شبکه اومدیم و این آنالیز جامع رو انجام دادیم. و در انتها هم گفته شد چطور DNS مورد نظرمون و میتونیم رو سیستم خودمون اعمال کنیم.


[ بهترین DNS برای اینترنت خودتو پیدا کن + مخصوص PC ](https://www.youtube.com/watch?v=201mrGCHKsY)

## SDC - Secure DNS Client

بچه‌ها برای فرگمنت روی ویندوز از Secure DNS Client استفاده کنید هم DNS ردیف میشه هم فرگمنت بسیار حرفه‌ای داره خیلی حرفه ای تر از چیزی که روی گوشی هستش برای ترکیب کردن هم نیاز به کار خاصی نیست کنارش v2rayNG را باز کنید کانفیگ ها از فرگمنت و DNS استفاده میکنند

[SecureDNSClient](https://github.com/msasanmh/SecureDNSClient)

## استفاده از DNS over HTTPS (DOH) با Adguard روی سرور شخصی

هدف ما از این آموزش اینه که به کمک ادگاردی که روی سرورمون اجرا می‌کنیم درخواست‌های DNS رو به صورت رمزنگاری شده برسونیم به سرور خودمون و از اونجا از DOH های معتبر مثل گوگل، کلاودفلر، ادگارد، و نکست دی‌ان‌اس استفاده کنیم. بدون اختلال، امن و با کلی قابلیت دیگه مثل مسدود کردن تبلیغات، انتخاب خودکار سریع‌ترین DNS برای جواب دادن و...


چیزایی که نیاز داریم:

1.یه سرور با حداقل یه هسته CPU و ۲ گیگ RAM (آی‌پی سرور باید تمیز باشه)

2.یه دامنه‌ی تمیز

مقالهٔ [DNS over HTTPS (DOH) with Adguard on personal server](https://telegra.ph/DNS-over-HTTPS-DOH-with-Adguard-on-personal-server-02-14)


## DOH with NextDNS on Cloudflare Worker

خوب در ادامه‌ی آموزش استفاده از DOH امروز میخوام روش استفاده از DNS قدرتمند NextDNS با کلی قابلیت روی کلاودفلر به صورت رایگان رو بگم...

[DOH with NextDNS on Cloudflare Worker](https://telegra.ph/DOH-with-NextDNS-on-Cloudflare-Worker-02-15)


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



# نرم افزار secure dnsعبور از فیلتر سایتهای بر پایه sni/dns فیلتر شدند مثل یوتیوب،توییتر و.در ویندوز 

نرم افزار secure dnsعبور از فیلتر سایتهای بر پایه sni/dns فیلتر شدند مثل یوتیوب،توییتر و.در ویندوز 
افرادی  بدون نیاز به تغییر ای پی می خواهند از این سایتها استفاده کنند

https://threadreaderapp.com/thread/1757688129648013538.html


# سرویس DNS چیه و چرا باید تغییرش داد؟


[سرویس DNS چیه و چرا باید تغییرش داد؟](https://twitter.com/ShahrSakhtAfzar/status/1769059543298838724)


# وارپ زیروتراست

[بریم یک آموزش کوچک بزنیم و DNS بسازیم](https://threadreaderapp.com/thread/1771566490656915457.html)


[نحوه ایجاد DNS شخصی به‌کمک سرویس Zero Trust کلودفلر](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87-%D8%A7%DB%8C%D8%AC%D8%A7%D8%AF-DNS-%D8%A8%D9%87%E2%80%8C%DA%A9%D9%85%DA%A9-%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-Zero-Trust-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-03-25)



# ساخت DNS رایگان با کلادفلر و گیتهاب

ساخت DNS رایگان با کلادفلر و گیتهاب
*سلام رفقا! *
یه آموزش خفن از امین دیدم  که میتونستید یه DNSرایگان بسازید.
این روش خیلی سادست و توی چند قدم انجام میشه:
یه اکانت توی کلادفلر و گیتهاب بسازید. (اگه ندارید)
و مراحل تو ویدیو رو قدم به قدم برید

[twitter](https://twitter.com/mahiciyah/status/1772843083765514480)


# آموزش ساخت DNS شخصی به 3 روش

[آموزش ساخت DNS شخصی به 3 روش](https://www.youtube.com/watch?v=rduDbydGUQk)


#  آموزش ساخت DNS شخصی 

🔸تو این ویدیو نحوه ی ساخت دی ان اس شخصی رو با استفاده از کلودفلر توضیح دادم که امیدوارم به کارتون بیاد.


[ آموزش ساخت DNS شخصی ](https://www.youtube.com/watch?v=kFfw4FuQd34)


# blocky

اگر مثل من در وضعیتی هستید که نیاز دارید DNS-Server اختصاصی خودتان را داشته باشید و شبیه شکن نیز عمل کند (Custom DNS resolution/Conditional forwarding) و از DoH پشتیبانی کند، به نظرم باید Blocky را تست کنیم.


[blocky](https://github.com/0xERR0R/blocky)


#  The ULTIMATE Guide to Mastering NextDNS! 

NextDNS is an insanely powerful privacy and security tool allowing you to reclaim control across various devices via DNS. In this guide/tutorial, I will be explaining what NextDNS is and how it differs from most other DNS providers, all the settings offered, some of my suggested use-cases, blocklist recommendations, set-up, and many other things so you can feel confident using NextDNS. Enjoy!

[ The ULTIMATE Guide to Mastering NextDNS! ](https://www.youtube.com/watch?v=WUG57ynLb8I)


# dnscrypt-proxy

یکی از DNSسرورهای خوب موجود dnscrypt است که از انواع encryptionها مثل Blocky که قبلا معرفی کردم پشتیبانی می‌کند و چند ویژگی جالب مثل Time-based filtering و Cloaking همراه با Load balancing دارد که بر اساس سرعت بهترین DNS resolver را خودکار انتخاب می‌کند.

[dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)

# dnscrypt

اگر به جز dns های معروف دنبال گزینه دیگه ای هستین این منبع خوبی هست

[dnscrypt](https://dnscrypt.info/public-servers/)




# serverless-dns

It's a bird, it's a plane, it's... a self-hosted, pi-hole esque, DNS resolver
serverless-dns is a Pi-Hole esque content-blocking, serverless, stub DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) resolver. Runs out-of-the-box on Cloudflare Workers, Deno Deploy, Fastly Compute@Edge, and Fly.io. Free tiers of all these services should be enough to cover 10 to 20 devices worth of DNS traffic per month.

[serverless-dns](https://github.com/serverless-dns/serverless-dns)


# cf-workers-dns-over-https

A very minimalist DNS-over-HTTPS proxy on Cloudflare Workers.

Sign up for a free Cloudflare Workers account, create a new worker, replace the Script with the content of index.js, deploy the worker, and you're done, use the address anywhere DoH is accepted (AdGuard, browsers secure DNS settings, YogaDNS, Intra, Nebulo etc). Feel free to replace the doh variable with any DNS-over-HTTPS server you want. Confirmed to work with Cloudflare itself, Google, and NextDNS. The rarely supported JSON API is available through the dohjson variable. Some providers use identical URL (Cloudlfare, NextDNS), some use /resolve instead of /dns-query for path (Google, AdGuard).


[cf-workers-dns-over-https](https://github.com/msasanmh/cf-workers-dns-over-https)


# آموزش تنظیم DNS

[twitter](https://threadreaderapp.com/thread/1784432781793103978.html)


# YogaDNS


آموزش استفاده از برنامه YogaDNS برای خلاص شدن از شر DNS Hijacking
و فیلترینگ های مربوط به DNS 


[twitter](https://threadreaderapp.com/thread/1785092535527850292.html)


# این برنامه هم خیلی خوبه مخصوصا قسمت تست DNS

 Karing - Simple & Powerful proxy utility 


    Compatible with Clash, V2ray/V2fly, Sing-box, Shadowsocks, Sub, Github Subscriptions.
    Full clash config supported, Partial clash.meta config supported.
    Simple UI and supports custom theme color.
    Built-in support singbox core.
    System proxy setting and guard.
    Plan to support all platforms.

[github](https://github.com/KaringX/karing)


#  روش جدید دریافت DNSشخصی-SIXTININELEARN 


سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت با استفاده از سایت controld  برای خودتون dns شخصی بگیرین و بتونین روی سرورتون با سرعت بالا استفاده کنین.

[ روش جدید دریافت DNSشخصی-SIXTININELEARN ](https://www.youtube.com/watch?v=ju8b8IepAvk)


#  آموزش ساخت dns شخصی و کاهش پینگ بازی ها | عبور از تحریم مانند سایت شکن 


در این ویدیو با استفاده از یک سرور مجازی و یک دامنه به راحتی یک dns شخصی برای خودمون میسازیم که میتوانیم برای عبور از تحریم ها و کاهش پینگ بازی ها از این سرویس استفاده کنیم. از انجایی که این سرویس کاهش پینگ شخصی هست سرعت بسیار بالایی دار

[ آموزش ساخت dns شخصی و کاهش پینگ بازی ها | عبور از تحریم مانند سایت شکن ](https://www.youtube.com/watch?v=VBtLNR1Dqyo)


# یه موردی رو درباره dns لوکال براتون گفته بودم،

یه موردی رو درباره dns لوکال براتون گفته بودم،

حالا میخوام بگم اگه از دی‌ان‌اس ادگارد استفاده کنید، به خاطر بسته شد تبلیغات علاوه بر بهبود سرعت ترافیک کمتری هم مصرف می‌کنید..

پیشنهاد من اینه:
quic://dns.adguard-dns.com

[twitter](https://twitter.com/Eagle_1157/status/1787326418386305173)


# کلیات قضیه اینه که ما دو جا dns رو نیاز داریم،

کلیات قضیه اینه که ما دو جا dns رو نیاز داریم،

مرحله اول (لوکال dns) برای بدست آوردن ip سرور کانفیگمون هست، که اگه توی کانفیگ از ip استفاده کنیم تو این مرحله نیاز نیست دی‌ان‌اس کاری انجام بده

برای دی‌ان‌اس لوکال معمولا همون
8.8.8.8
کار رو راه میندازه.. 


[twitter](https://threadreaderapp.com/thread/1787495310643618178.html)