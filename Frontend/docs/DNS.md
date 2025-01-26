# DNS


اگر  فیلترشکن کار می کند ولی بعضی از سایت های باز نمیشود یا عکس های توییتر یا جاهای دیگر باز نمیشود از این روش استفاده کنید.


## مقدمه

این متن حاوی اطلاعات متنوعی درباره DNS و استفاده از آن برای عبور از فیلترینگ است. نکات کلیدی عبارتند از:

1. توضیح مفهوم DNS و اهمیت آن در دسترسی به وب سایت ها

2. معرفی روش های مختلف تنظیم DNS از جمله:
   - استفاده از نرم افزارهایی مانند Rethink DNS، YogaDNS و SecureDNSClient
   - ساخت DNS شخصی با استفاده از سرویس هایی مانند Cloudflare Workers
   - استفاده از سرویس های DNS امن مانند NextDNS و AdGuard DNS

3. آموزش نحوه تنظیم DNS در دستگاه های مختلف از جمله گوشی های هوشمند و کامپیوترها

4. معرفی چند آدرس DNS معتبر و کارآمد برای استفاده

5. توضیح نحوه ترکیب DNS با VPN برای بهبود عملکرد و دور زدن فیلترینگ

6. اشاره به مزایای استفاده از DNS امن مانند حذف تبلیغات و افزایش امنیت

7. لینک به چندین ویدیو و مقاله آموزشی در مورد تنظیم و استفاده از DNS

هدف اصلی این اطلاعات، کمک به کاربران برای بهبود دسترسی به اینترنت و عبور از محدودیت های دسترسی با استفاده از تکنیک های مرتبط با DNS است.


## توضیح فنی DNS

آموزش DNS از پایه رو توی این ویدیو توضیح دادند.
متاسفانه ج.ا دشمنی خاصی با DNS دارد و شما مجبور هستید که این اطلاعات رو به عنوان یک کاربر عادی ! داشته باشید.

توی این فصل سعی می‌کنم مفاهیم شبکه که توی هک و امنیت به دردتون می‌خوره رو به زبان ساده توضیح بدم.، با همدیگه
DNS
رو مرور می‌کنیم، آخرش هم میریم یه سری به
Wireshark
میزنیم، امیدوارم خوشتون بیاد


https://www.youtube.com/watch?v=Flo5VoesxRY


## نحوه ست کردن دائمی DNS در سرور لینوکسی

```
#nameserver 51.91.204.69
#nameserver 146.59.189.113
#nameserver 178.22.122.100
#nameserver 185.51.200.2
nameserver 10.202.10.202
nameserver 10.202.10.102
#nameserver 10.202.10.10
#nameserver 10.202.10.11
#nameserver 9.9.9.13
#nameserver 8.8.4.4
```

https://www.tecmint.com/set-permanent-dns-nameservers-in-ubuntu-debian/

## Rethink 


این هم آموزش اتصال v2ray ng=mahsang به rethink. برای برطرف کردن مشکل کانفیگ هایی که فرگمنت نیاز دارن.

نکات:

اول اینکه این دو تا با doh روی rethink کار نمی کنن. از قسمت dns 53 انتخاب کنین.

خواستین dns adblocker یا امثال این بزارین میتونین قسمت domestic dns داخل کلاینت قرار بدین


[twitter]](https://x.com/Server_5oo/status/1795103778640691282)


آموزش استفاده از rethink در کنار hiddify برای عبور از مشکل فرگمنت

نکاتی که باید توجه کنین

-ترکیب dns ها با خودتون. روی همراه اگر کار نکرد میتونین تو قسمت dns53 نرم افزار rethink یک dns انتخاب کنین.

-اول rethink روشن کنین بعد هیدیفای

[twitter]](https://x.com/Server_5oo/status/1793972985768091824)


اگر روی آسیاتک هستید به این روش می‌تونید توییتر و یوتیوب را باز کنید.برنامه rethink را نصب کنید یک DNSCrypt بسازید یا پیدا کنید یا از نمونه هایی که گذاشتم استفاده کنید بعد مانند عکس وارد برنامه rethink وارد کنید و strat را بزنید

[twitter](https://threadreaderapp.com/thread/1795056178134737149.html)

## DNS client V2RayNG

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


## DNS چیه داستانش

ه روش آقا وحید استاد عزیز میخوام براتون یه قصه بگم البته نه با اون کیفیت..

-همونطور که میدونید دی‌ان‌اس کارش تبدیل نام دامنه به ip آدرسه

[twitter](https://threadreaderapp.com/thread/1790015865401798738.html)


## DNS چه تاثیری دارد

این ویدیو کاملاً تاثیر DNS را بهتون نشون می‌ده 🤷 کانفیگ وصل هستش یوتیوب و تلگرام باز میشه اما توییتر باز نمیشه فقط DNS را تغییر می دم همه‌چیز درست میشه

[twitter](https://x.com/amin_o__o/status/1795685907020066898)

## SDC - Secure DNS Client

بچه‌ها برای فرگمنت روی ویندوز از Secure DNS Client استفاده کنید هم DNS ردیف میشه هم فرگمنت بسیار حرفه‌ای داره خیلی حرفه ای تر از چیزی که روی گوشی هستش برای ترکیب کردن هم نیاز به کار خاصی نیست کنارش v2rayNG را باز کنید کانفیگ ها از فرگمنت و DNS استفاده میکنند

[SecureDNSClient](https://github.com/msasanmh/SecureDNSClient)

دولوپر  Secure DNS Client ، 
 Library های مورد استفاده رو منتشر کرده که می‌تونه برای  
توسعه اندروید و دیگر سیستم عامل ها مفید باشه 


برای ویندوز از این ریپوزیتوری استفاده کنید

[github](https://github.com/msasanmh/SecureDNSClient)

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



## نرم افزار secure dnsعبور از فیلتر سایتهای بر پایه sni/dns فیلتر شدند مثل یوتیوب،توییتر و.در ویندوز 

نرم افزار secure dnsعبور از فیلتر سایتهای بر پایه sni/dns فیلتر شدند مثل یوتیوب،توییتر و.در ویندوز 
افرادی  بدون نیاز به تغییر ای پی می خواهند از این سایتها استفاده کنند

https://threadreaderapp.com/thread/1757688129648013538.html


## سرویس DNS چیه و چرا باید تغییرش داد؟


[سرویس DNS چیه و چرا باید تغییرش داد؟](https://twitter.com/ShahrSakhtAfzar/status/1769059543298838724)


## وارپ زیروتراست

[بریم یک آموزش کوچک بزنیم و DNS بسازیم](https://threadreaderapp.com/thread/1771566490656915457.html)


[نحوه ایجاد DNS شخصی به‌کمک سرویس Zero Trust کلودفلر](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87-%D8%A7%DB%8C%D8%AC%D8%A7%D8%AF-DNS-%D8%A8%D9%87%E2%80%8C%DA%A9%D9%85%DA%A9-%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-Zero-Trust-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-03-25)


اینم تست کنید من اینجا از همون DNS که آموزش داده بودم (zero trust) استفاده می‌کنم بعد خود آدرس DNS را دارم به چندتا IP تمیز cloudflare وصل می‌کنم 🫠

[twitter](https://twitter.com/amin_o__o/status/1788341110227566860)

لطفاً بچه‌ها تست کنید ببینید اینجوری جواب میده 😔 متأسفانه اصلا حتی نمی‌شه تست کرد چند دقیقه خوبه بعد دوباره مشکل داره 

[twitter](https://twitter.com/amin_o__o/status/1788333932649304152)

## ساخت DNS رایگان با کلادفلر و گیتهاب

ساخت DNS رایگان با کلادفلر و گیتهاب
*سلام رفقا! *
یه آموزش خفن از امین دیدم  که میتونستید یه DNSرایگان بسازید.
این روش خیلی سادست و توی چند قدم انجام میشه:
یه اکانت توی کلادفلر و گیتهاب بسازید. (اگه ندارید)
و مراحل تو ویدیو رو قدم به قدم برید

[twitter](https://twitter.com/mahiciyah/status/1772843083765514480)


## آموزش ساخت DNS شخصی به 3 روش

[آموزش ساخت DNS شخصی به 3 روش](https://www.youtube.com/watch?v=rduDbydGUQk)


##  آموزش ساخت DNS شخصی 

🔸تو این ویدیو نحوه ی ساخت دی ان اس شخصی رو با استفاده از کلودفلر توضیح دادم که امیدوارم به کارتون بیاد.


[ آموزش ساخت DNS شخصی ](https://www.youtube.com/watch?v=kFfw4FuQd34)


## blocky

اگر مثل من در وضعیتی هستید که نیاز دارید DNS-Server اختصاصی خودتان را داشته باشید و شبیه شکن نیز عمل کند (Custom DNS resolution/Conditional forwarding) و از DoH پشتیبانی کند، به نظرم باید Blocky را تست کنیم.


[blocky](https://github.com/0xERR0R/blocky)


##  The ULTIMATE Guide to Mastering NextDNS! 

NextDNS is an insanely powerful privacy and security tool allowing you to reclaim control across various devices via DNS. In this guide/tutorial, I will be explaining what NextDNS is and how it differs from most other DNS providers, all the settings offered, some of my suggested use-cases, blocklist recommendations, set-up, and many other things so you can feel confident using NextDNS. Enjoy!

[ The ULTIMATE Guide to Mastering NextDNS! ](https://www.youtube.com/watch?v=WUG57ynLb8I)


## dnscrypt-proxy

یکی از DNSسرورهای خوب موجود dnscrypt است که از انواع encryptionها مثل Blocky که قبلا معرفی کردم پشتیبانی می‌کند و چند ویژگی جالب مثل Time-based filtering و Cloaking همراه با Load balancing دارد که بر اساس سرعت بهترین DNS resolver را خودکار انتخاب می‌کند.

[dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)

## dnscrypt

اگر به جز dns های معروف دنبال گزینه دیگه ای هستین این منبع خوبی هست

[dnscrypt](https://dnscrypt.info/public-servers/)




## serverless-dns

It's a bird, it's a plane, it's... a self-hosted, pi-hole esque, DNS resolver
serverless-dns is a Pi-Hole esque content-blocking, serverless, stub DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) resolver. Runs out-of-the-box on Cloudflare Workers, Deno Deploy, Fastly Compute@Edge, and Fly.io. Free tiers of all these services should be enough to cover 10 to 20 devices worth of DNS traffic per month.

[serverless-dns](https://github.com/serverless-dns/serverless-dns)


## cf-workers-dns-over-https

A very minimalist DNS-over-HTTPS proxy on Cloudflare Workers.

Sign up for a free Cloudflare Workers account, create a new worker, replace the Script with the content of index.js, deploy the worker, and you're done, use the address anywhere DoH is accepted (AdGuard, browsers secure DNS settings, YogaDNS, Intra, Nebulo etc). Feel free to replace the doh variable with any DNS-over-HTTPS server you want. Confirmed to work with Cloudflare itself, Google, and NextDNS. The rarely supported JSON API is available through the dohjson variable. Some providers use identical URL (Cloudlfare, NextDNS), some use /resolve instead of /dns-query for path (Google, AdGuard).


[cf-workers-dns-over-https](https://github.com/msasanmh/cf-workers-dns-over-https)


## آموزش تنظیم DNS

[twitter](https://threadreaderapp.com/thread/1784432781793103978.html)


## YogaDNS


آموزش استفاده از برنامه YogaDNS برای خلاص شدن از شر DNS Hijacking
و فیلترینگ های مربوط به DNS 


[twitter](https://threadreaderapp.com/thread/1785092535527850292.html)


## این برنامه هم خیلی خوبه مخصوصا قسمت تست DNS

 Karing - Simple & Powerful proxy utility 


    Compatible with Clash, V2ray/V2fly, Sing-box, Shadowsocks, Sub, Github Subscriptions.
    Full clash config supported, Partial clash.meta config supported.
    Simple UI and supports custom theme color.
    Built-in support singbox core.
    System proxy setting and guard.
    Plan to support all platforms.

[github](https://github.com/KaringX/karing)


##  روش جدید دریافت DNSشخصی-SIXTININELEARN 


سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت با استفاده از سایت controld  برای خودتون dns شخصی بگیرین و بتونین روی سرورتون با سرعت بالا استفاده کنین.

[ روش جدید دریافت DNSشخصی-SIXTININELEARN ](https://www.youtube.com/watch?v=ju8b8IepAvk)


https://controld.com/

Stop thinking about DNS  
Control D is a modern and customizable DNS service that blocks threats, unwanted content and ads - on all devices. Onboard in minutes, and forget about it.

##  آموزش ساخت dns شخصی و کاهش پینگ بازی ها | عبور از تحریم مانند سایت شکن 


در این ویدیو با استفاده از یک سرور مجازی و یک دامنه به راحتی یک dns شخصی برای خودمون میسازیم که میتوانیم برای عبور از تحریم ها و کاهش پینگ بازی ها از این سرویس استفاده کنیم. از انجایی که این سرویس کاهش پینگ شخصی هست سرعت بسیار بالایی دار

[ آموزش ساخت dns شخصی و کاهش پینگ بازی ها | عبور از تحریم مانند سایت شکن ](https://www.youtube.com/watch?v=VBtLNR1Dqyo)


## یه موردی رو درباره dns لوکال براتون گفته بودم،

یه موردی رو درباره dns لوکال براتون گفته بودم،

حالا میخوام بگم اگه از دی‌ان‌اس ادگارد استفاده کنید، به خاطر بسته شد تبلیغات علاوه بر بهبود سرعت ترافیک کمتری هم مصرف می‌کنید..

پیشنهاد من اینه:
quic://dns.adguard-dns.com

[twitter](https://twitter.com/Eagle_1157/status/1787326418386305173)


## کلیات قضیه اینه که ما دو جا dns رو نیاز داریم،

کلیات قضیه اینه که ما دو جا dns رو نیاز داریم،

مرحله اول (لوکال dns) برای بدست آوردن ip سرور کانفیگمون هست، که اگه توی کانفیگ از ip استفاده کنیم تو این مرحله نیاز نیست دی‌ان‌اس کاری انجام بده

برای دی‌ان‌اس لوکال معمولا همون
8.8.8.8
کار رو راه میندازه.. 


[twitter](https://threadreaderapp.com/thread/1787495310643618178.html)


## one.dash.cloudflare.com

از لینک زیر وارد پنل کلودفلر بشین ، بخش زیروتراست و DNS اختصاصی خودتون رو دریافت کنید و تمام ..

هم DOH و هم DOT داره !!


[twitter](https://twitter.com/Eagle_1157/status/1789953238185161191)



##  آموزش کامل DNS وBALANCER در پنل ثنایی و علیرضا-SIXTININELEARN 


سلام رفقا توی این ویدیو قراره بهتون یاد بدم چجوری خیلی راحت دو قسمت مهم پنل ثنایی و علیرضا DNS و BALANCER  رو تنظیم کنین ویه سرعت فوق العاده داشته باشین .


[youtube](https://www.youtube.com/watch?v=khPpQkPUkjE)


##  رفع مشکل ایرانسل و همراه اول با CDN fastly آپلود و دانلود V2ray - Fastly 

با سلام در این ویدیو به رفع مشکلات و محدودیت های ایرانسل و همراه اول می پردازیم CDN Fastly یکی از سی دی ان های پر قدرت هست و با کمک این سی دی ان می تونیم محدودید آپلود و دانلود رو برطرف کنیم

[youtube](https://www.youtube.com/watch?v=Fpn6ZIP-8UU)


## DNS all platforms

https://dnscrypt.info/implementations/


## Rethink DNS

https://github.com/celzero/rethink-app/releases

## چه جوری   DNS over HTTPS یا DoH  اختصاصی رایگان و فقط با دو کلیک بسازیم

کافیه تو کلودفلر وارد بشید 
و مشابه تصویر زیر مقادیر را وارد کنید

تامام💪

پیشنهاد: برای لینک ساب و DNS تون یه دامنه متفاوت از پروکسی داشته باشید

اینجوری سرورهاتون فیلتر شد بدون دردسر میتونید آپدیت کنید


[twitter](https://x.com/hiddify_com/status/1795403011013189905)


##  DNS سالم

این سه تا DNS هنوز سالم هستند.اگر DNS مشکل داشته باشه ممکنه کلا کانفیگ وصل نشه یا ممکنه وصل بشه پینگ داشته باشه اما هیچی باز نکنه جز تلگرام. من سعی می‌کنم هرروز تست کنم چندتا بهتون برسونم 😔 
https://dns.nas-server.ru/dns-query
https://yovbak.com/dns-query
https://dns.kernel-error.de/dns-query


## ساخت DNS

خوب بریم برای یک آموزش سریع و ساده تمام مراحل را مثل این آموزش انجام بدید
https://x.com/amin_o__o/stat/amin_o__o/status/1771566490656915457?s=19
آخر بهتون یک DoH و یک DoT و یک ipv6 و اخیرا یک ipv4 می‌ده.ایندفعه با ipv6 و ipv4 کار داریم البته باید بگم نه تنها این IP ها بلکه هر DNS باipv6 و ipv4 سالم هم میتونید به این روش که در


[twitter](https://threadreaderapp.com/thread/1796046660499300689.html)


## ست کردن دی ان اس بر روی مودم 
کاهش نویز و اختلال در اینترنت✌️

[twitter](https://x.com/amirparsapv/status/1796462804352008495)


## دسترسی به بیشتر سایت های پالایش شده فقط با DNS

http://rethinkdns.com


[twitter](https://x.com/kharabam666/status/1798087376784572699)


##  آموزش جدید وایرگارد با آی پی اسکنر 

اگر هنوز بلد نیستید DNS روی اندروید تنظیم کنید این ویدیو رو ببینید

Rethink + wireguard

https://youtu.be/DRLVA9ZHKw4?si=nmCZKGbAUFZgY1sa



## nextdns

استفاده از nextdns
به عنوان dns کارامد در بهبود اتصال وی پی ان افزایش امنیت و حذف تبلیغات


[twitter](https://threadreaderapp.com/thread/1802054041729487253.html)

## DNS for hiddify

quic://dns.adguard-dns.com
quic://family.adguard-dns.com 
quic://unfiltered.adguard-dns.com 
quic://dns.futuredns.me 
quic://doh.tiar.app 
quic://dandelionsprout.asuscomm.com:48582

tls://8.8.4.4



## DNS IPhone


توی این ویدیو برنامه دی ان اس برای آیفون رو که چند مدت پیش ویدیو شو ساخته بودم به همراه دوتا کد IPV4 و یه کد IPV6 معرفی کردم که امیدوارم حسابی به کارتون بیاد و پینگ پایینیو باهاش تجربه کنین💥

کد دی ان اس برای آیفون✅
برنامه دی ان اس برای آیفون✅
کد نسل ششم برای آیفون✅
کد نسل چهارم برای آیفون✅
DNS برای آیفون✅

✔️TELEGRAM 
https://t.me/Nigel_pubg    


https://www.youtube.com/watch?v=lMjCk9H4QvA



## تنظیم دستی و تغییر دی ان اس آیفون


در این ویدئو درباره تنظیم دی ان اس DNS آیفون صحبت میکنیم

https://www.youtube.com/watch?v=HthAOQGtBMw


## DNS finder

وقت تو با ارزشه ، دور زدن تحریم رو بسپار به ابزارها

https://403unlocker.netlify.app


## DNS Hiddify

دوستان هیدی فای با دی ان اس های زیر بسیار خوب عمل میکنه🤍
tcp://185.228.168.9

udp://8.26.56.26

tls://8.26.56.26

این رو زدم توی rethink
https ://8.26.56.26/dns-query

https://x.com/amirparsaxs/status/1819827125211611606


https://9.9.9.13/dns-query


https://x.com/amin_o__o/status/1821153812914073774


دمت گرم دی ان اس حال حاظر با پینگ پایین👇
udp://8.8.4.4
udp://4.2.2.1


##  آموزش ست کردن کانفیگ و دی ان اس 

آموزش ست کردن کانفیگ و دی ان اس  @hiddify_com
 به طور خلاصه🤍
(از وارپ خود هیدی فای در نسخه جدید عالی هستش ممنون از هیدی فای)🔥


https://x.com/amirparsaxs/status/1822374145142775927


## DNS

دی ان اس خوب این چند وقت:
tls://4.4.4.4
udp://208.67.222.222
tcp://1.0.0.1
udp://64.6.64.6

https://x.com/amirparsaxs/status/1823781039954854173


## fake DNS

اگر trojan جواب نداد از تنظیمات fake dns را روشن کنید مشکل حل میشه 🤷 دیگه خیلی ساده گفتم 😑 پیچیده ترش این هست fake dns را روشن کنید fragment هم روشن کنید کانفیگ را تبدیل کنید به sing-box قسمت fake dns را مثل عکس تغییر بدید نتیجه بهتری می‌ده 🤷

[twitter](https://x.com/amin_o__o/status/1800892631960129896)


## DNS

DNS Server: udp://205.171.3.65

این dns استفاده کن عالیه
روی همه اپراتورها


## DNS

VPN DNS = 8.20.247.20
Remote DNS 8.20.247.20
Domestic DNS 223.5.5.5


## DNS hiddify

دوستان توی هیدی فای دی ان اس زیر رو اعمال کنید ببینید خوبه با حالت tls🤍
tls://8.8.4.4
tls://4.4.2.1
tls://9.9.9.9



## تفاوت DNS سیسکو با DNS مخابرات؛


تفاوت DNS سیسکو با DNS مخابرات؛
در حد تفاوت فراریِ انزو و لامبورگینیِ حجت!

اینها رو در مودم سِت کنید:
208.67.222.222
208.67.220.220




## dns4all

https://doh.dns4all.eu/dns-query
با ست کردن dns doh بالا هم میتونی کلی سایت مثل یوتیوب ، توییتر و ... به راحتی باز کنید

http://dns4all.eu

https://x.com/kharabam666/status/1832838170704060455


## ست کردن DNS روی مودم

درود به نکته ها توجه کنید🥰
1-توی مودم های مختلف فرق میکنه مثلا دی لینک توی قسمت چنل کانفیگ هست
یا تی پی لینک شبیه اون ولی همشون گزینه mtu رو دارن باید پیدا کنید بر مبنای مودم خودتون👍
2-اعداد mtu که بهترن:
1280
1492
1306
3- دی ان اس پیشنهادی
9.9.9.13

https://x.com/amirparsaxs/status/1833448790642090370

چه فرقی داره زمانی که روی دستگاه مستقیم ست کنیم؟

فقط یک قدم می‌ره عقب‌تر. یعنی لازم نیست روی هر دیوایسی که قراره به وای‌فای وصل بشه، جداگونه ست بشه. برای راحتی کار وقتی چند نفری قراره از یه نت استفاده بشه.

https://x.com/i/status/1833448790642090370


## DNS

76.76.2.5
76.76.10.5
این دی ان اس ها خیلی خوبن



## DNS Changer windows
 برنامه تغییر DNS


دانلود ورژن آخر:
DNS Changer V1.6.2 (https://github.com/ALIILAPRO/dns-changer/releases/tag/v1.6.2)

لینک گیتهاب پروژه :
GITHUB (https://github.com/ALIILAPRO/dns-changer)


https://t.me/P_tech2024/592


## DNS 

به به عجب dns روی همه نتا کار میکنه🔥
4.2.2.4
4.2.2.5


## پنل DNS آزادی

میتونید با استفاده از ورکر کلادفلر محدودهای DoH DNS رو در ایران از بین ببرید و به راحتی استفاده کنید

دیفالت رو کلادفلره ولی میتونید هر آدرسی ست کنید

https://github.com/AzadiAzadiAzadi/AzadiDNSPanel/blob/main/worker.js

توجه: باید KV بسازید و  قسمت Namespace Bindings حتما Variable name رو SETTINGS بذارید

https://x.com/kharabam666/status/1835967624015970495

![picture](https://pbs.twimg.com/media/GXqn5jzWsAARyDf?format=png&name=900x900)


## راه اندازی DNS مثل شکن  - DNS Forwarder

 خودت شکن بساز!!! 

دی ان اس فورواردینگ فرایندی است که طی آن یک سرور DNS درخواست‌های نام دامنه را به یک سرور DNS دیگر ارسال می‌کند تا به آن‌ها پاسخ دهد. این روش معمولاً زمانی استفاده می‌شود که سرور DNS محلی نتواند یک دامنه را به آدرس IP آن تبدیل کند یا پیکربندی شده تا همیشه درخواست‌ها را به یک سرور خاص ارسال کند.

https://www.youtube.com/watch?v=dDpFUX9WzvA


## چطور DNS Changer کمک می‌کنه؟
 DNS Changer یک نرم افزار متن بازه که با رابط کاربری ساده و عملکرد سریعش، به شما این امکان رو می‌ده که بدون دردسر و بدون نیاز به تغییرات دستی در تنظیمات سیستم، به راحتی دی‌اِن‌اِس‌های مختلف  مثل شکن، الکترون و ... رو تست کنید. این کار باعث می‌شه دسترسی به سایت‌های تحریم شده یا حتی سرویس‌هایی مثل گوگل، راحت‌تر و سریع‌تر بشه.
 اگر شما هم مثل من با تحریم‌ها و محدودیت‌های اینترنتی سر و کله می‌زنید، پیشنهاد می‌کنم حتماً یه بار DNS Changer رو تست کنید. این نرم‌افزار رایگان و اوپن‌سورس هست و استفاده ازش خیلی آسونه.

https://dnschanger.github.io/

https://github.com/DnsChanger/dnsChanger-desktop


##  How to create your own #DNS-over-HTTPS? (complete training) 

https://www.youtube.com/watch?v=MqUvzWkY8JU



## DNS set for linux

```
#nameserver 51.91.204.69
#nameserver 146.59.189.113
#nameserver 178.22.122.100
#nameserver 185.51.200.2
nameserver 10.202.10.202
nameserver 10.202.10.102
#nameserver 10.202.10.10
#nameserver 10.202.10.11
#nameserver 9.9.9.13
#nameserver 8.8.4.4
```

## بهترین DNS برای بازی؛ گیم زدن با سرعتی که رو مخ نباشه!

با توجه به محدودیت های ایجاد شده برای کاربران ایرانی از سمت کشورها و شرکت های مختلف برای اینکه بتونید به سرورهای بازی ها متصل بشید نباید مشخص باشه که از کدوم منطقه وارد میشید و ایرانی بودن شما مخفی بشه. به همین خاطر با اینکه DNS هایی بسیار معروفی مثل کلادفلر و DNS گوگل عملکرد بسیار خوبی، به خصوص برای دانلود بازی ها روی کنسول و یا گوشی همراه داشتند اما در چند سال اخیر با توجه به افزایش تحریم ها، این DNS ها کارایی خودشون رو از دست دادن و بهتره برای اتصال بدون دردسر به سرورهای بازی های تحریم شده از DNS های داخلی استفاده کنید. بهترین DNS برای بازی و دانلود گیم در ایران عبارتند از:

نام سرویس دهنده 	Primary DNS 	Secondary DNS
دی ان اس Cisco (مناسب PS5) 	208.67.222.222 	208.67.222.20
دی ان اس Verisign (مناسب کانکشن بازی) 	64.6.64.6 	64.6.65.6
دی ان اس Electro (مناسب کانکشن بازی و دانلود) 	78.157.42.100 	78.157.42.101
دی ان اس رادار گیم (مناسب کانکشن بازی و دانلود) 	10.202.10.10 	10.202.10.11
دی ان اس شکن (مناسب کانکشن بازی و دانلود) 	178.22.122.100 	185.51.200.2
دی ان اس Cloudflare (مناسب دانلود) 	1.1.1.1 	1.0.0.1
دی ان اس Yandex (مناسب دانلود) 	77.88.8.8 	77.88.8.1
دی ان اس Google (مناسب دانلود) 	8.8.8.8 	8.8.4.4
دی ان اس 403 (مناسب کانکشن بازی و دانلود) 	10.202.10.102 	10.202.10.202
دی ان اس Shelter (مناسب کانکشن بازی و دانلود) 	91.92.255.160 	91.92.255.24


https://mobo.news/best-dns-for-game/


## یه dns پیدا کردم سرعت عشق میکنید

2.56.220.2

https://x.com/amirparsaxs/status/1846292945613606925

## ورژن dns 

ورژن dns 
Ipv6 
سرعتش عالیه تست کنید🔥
2a03:90c0:999d::1


## استفاده از DoH در ویندوز با کمک نرم افزار Acrylic DNS Proxy

قبلا در مورد راه اندازی سرور DoH اختصاصی فقط با PHP نوشته بودم، پیدا کردن این مدل سرور خیلی آسونه ولی استفاده ازش داخل ویندوز بصورتی که نیاز به نصب نرم افزار نباشه هنوز زوده. در ویندوز 10 باید نسخه های آخرش رو دریافت کرده باشید و نصب ویندوز 11 هم برای همه امکانپذیر نیست. در این نوشته توضیح می دهم نرم افزار Acrylic Dns Proxy چطور می تواند بین درخواست های اپلیکیشن های ویندوز و سرور های DNS یا DoH در اینترنت قرار بگیره و درخواست های عادی همه اپلیکیشن های ویندوز رو به اون سرورها هدایت کند. این نرم افزار ابتدا در سال 2010 به زبان دلفی نوشته شده و اول قرار بوده فقط کار یک پروکسی برای دی ان اس ها انجام بده و کارهایی مثل کش کردن درخواستها را هم انجام بدهد ولی از سال 2019 امکان DNS-over-HTTPS protocol یا همون DoH بهش اضافه شد. مراحل کار را به شرح زیر باید انجام بدهیم تا از شر Do53 (DNS over UDP port 53) که مثل سرطان می مونه خلاص بشیم!

https://hamid-kord.ir/posts/using-acrylic-dns-proxy/


## remote DNS

ببین کلا remote DNS از ایران وصل نمیشه، اول به پروکسی وصل میشید بعد از طریق اون وصل میشه، بنابراین مهم نیست روی نت ایران وضعیت DNS چی باشه. تست کردنش روی نت ایران بی‌معنیه.

ولی local DNS مستقیم وصل میشه، اما وظیفه‌ش فقط مسیریابی و وصل شدن اولیه پروکسی هست، یعنی اگر پروکسی شما همون اول وصل شد خیالت راحته که local DNS کار میکنه و بعد از اون خیلی نقش پررنگی نداره، اصلا میتونید یه DNS ایرانی بذارید، مثل همراه اول یا شاتل یا Gareway مودمتون...


## DNS Amin

اول از همه باید از دوست عزیز ساسان تشکر کنم این روش مدیون لطف ایشان هست.من توی ویدیو اول روش سرچ و پیدا کردن DNS را گذاشتم از منو های برنامه فیلم گرفتم دقت کنید من جای آدرس یوتیوب یک سایت خاک بر سری گذاشتم چون می خواستم مطمئن باشم DNS ای که پیدا میشه برای اطفال نباشه


من plain DNS را روشن گذاشتم و حالت legacy DNS+Dns-over....
را روشن کردم که وقتی روشن می‌کنید ازتون می خواد که یک certificate بسازه yes را بزنید می‌سازد. دقت کنید توی آدرس هر خط باید یک DNS باشه برای همین من تیکه های اضافی را توی تکست replace کردم .این روش هم ip شما را

مثل وارپ عوض نمی‌کنه اما تمام کانفیگ های فیلتر شده را زنده می‌کنه 😉 🥂 من قبلاً یک روش گفته بودم که dns را روی ورکر ردیف می‌کردید احتمالا اونجوری نتیجه بهتر داره یعنی DNS را از اینجا پیدا کنید توی ورکر بزارید بعد به ورکر دامنه بدید بیارید اینجا استفاده کنید . DNS ها قابل-


فیلتر شدن هستند لطفاً به اشتراک نگذارید 🙏. 
توی این ویدیو من وصل می‌شم  دقت کنید چندین روش برای DPI وجود داره من medium گذاشتم. 
آدرس ها:
https://github.com/DNSCrypt/dnscrypt-resolvers
https://github.com/cslev/encrypted_dns_resolvers/blob/main/doh_resolvers_data_20230510.json
https://github.com/msasanmh/SecureDNSClient


https://x.com/amin_o__o/status/1666510943998582785


## AmirParsa

اگر مشکلی توی dns پیدا کردید این چند تا رو داشته باشید عالیه👇
2.56.220.2
4.4.2.1
208.67.220.220
8.8.4.4
9.9.9.9

اگر مشکلی توی کانفیگ ها دارید 
وارپ بزنید توی @mahsanet
 و فرگمنت رو روشن کنید عالیه dns هم زیر رو بزنید👇
 
 https://94.140.14.14/dns-query

 208.67.220.220



 ## اگر مشکل سرعت در اینترنت دارید یکی از مشکل ها میتونه dns باشه🥰
👇دی ان اس های پر سرعت👇
8.26.26.56

208.67.220.220

9.9.9.12

4.4.2.1



## Dns: 
های پرسرعت حال حاضر👇🩵
208.67.220.220

208.67.222.222

8.8.8.8

8.8.4.4

4.4.2.1

https://x.com/tkamirparsa/status/1874895465814401233


## Unbound


آموزش نصب و کانفیگ و استفاده از نرم افزار Unbound و کاهش اثر اختلالات و افزایش سرعت resolver بدون تحت تاثیر قرار دادن منابع سرور :
در واقع Unbound یک DNS resolver محلی و caching برای مدیریت درخواست‌های DNS با سرعت و امنیت بیشتر و قابلیت های دیگه هست .


https://www.youtube.com/watch?v=XrvI-AuYs2w


##  چگونه پینگ بازی خود را با DNS شخصی تا حد ممکن کاهش دهیم؟ 🚀 

#ترفند_گیمرها
تا حالا پینگ بالای بازی اعصابتون رو خورد کرده؟ 😤 یا وسط بازی لگ شدید باعث باختتون شده؟ 😓
توی این ویدیو، بهتون یاد میدم چطور با تنظیم DNS شخصی، پینگ بازی‌های آنلاین خودتون رو به حداقل برسونید و تجربه‌ای روان و بدون لگ داشته باشید. 🏆

در این ویدیو یاد می‌گیرید:
✅ DNS شخصی چیه و چرا برای گیمرها ضروریه؟
✅ چطور DNS مناسب پیدا کنیم؟
✅ آموزش گام‌به‌گام تنظیم DNS 
✅ ترفندهایی برای کاهش تأخیر و بهبود سرعت اینترنت

🔥 پس اگه دنبال یه تجربه حرفه‌ای توی بازی هستید و می‌خواید همیشه برنده باشید، این ویدیو رو تا آخر ببینید!
🔔 یادتون نره که لایک کنید، کامنت بذارید و سابسکرایب کنید تا از آموزش‌های جدید جا نمونید!

https://www.youtube.com/watch?v=cuzlbt9w_DM


##  آموزش کاهش پینگ فیلترشکن و افزایش سرعت با ترکیب orbot و dns 

کاهش پینگ فیلترشکن و افزایش سرعت با ترکیب orbot و dns
با این روش میتونید پینگ فیلترشکن خودتون رو تا حد ممکن کاهش بدید ، بهترین روش کاهش پینگ برای گیمر ها و کسانی که زیاد وب گردی می کنند.

https://www.youtube.com/watch?v=7YrRwCJQ-n0