#   روش های اتصال به اینترنت آزاد

در اینجا روش هایی که کارکرد دارند رو می نویسم.
اگر روشی دارید که کار می کند و در اینجا نیست لطفا به من بگید تا اضافه کنم.


# فرگمنت
فرگمنت به معنی تکه تکه ریکوست های هست که تشخیص رو برای گریت فایر وال سخت می کند.
xray این قابلیت رو پشتیبانی می کند

لزومی نداره حتما از تونل استفاده کنید از CDN هم میشه استفاده کرد.

سرور و دامنه کثیف نیاز دارد.

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


[آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=66s)


[ استفاده از دامین فیلتر شده با فرگمنت | دامنه مردتو زنده کن ](https://www.youtube.com/watch?v=kdd2wSrCDxc)

[اخرین آموزش سگارو](https://telegra.ph/How-to-use-Argo-Cloudflare-tunnel-with-iSegaro-12-15)

[نصب آرگو](https://telegra.ph/%D9%86%D8%B5%D8%A8-%D8%A2%D8%B1%DA%AF%D9%88-01-07)


[ابزار فرگمنت ircfspace ](https://ircfspace.github.io/fragment/)

[misaturo tools ](https://misaturo.github.io/Xray-Fragment-Configurator/)

[ جدیدترین روش استفاده از کانفیگ FRAGMENT با لینک سابسکریشن بدون نیاز به ویرایش کد ساخت بینهایت کاربر ](https://www.youtube.com/watch?v=4L7zajnLtOs)


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
1. نصب پنل سنایی
 bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
</br>
2.سرتیفیکیت دامنه 
</br>
3.نصب warp go 
</br>
bash <(curl -Ls https://gitlab.com/rwkgyg/CFwarp/raw/main/CFwarp.sh)
</br>
4.ساخت کانفینگ 
</br>
5.زدن فرگمنت 
</br>
please be advised the best choice for the server is ubuntu 22 , 




## کلود فلیر
از هر دامنه از کلود فلیر که فیلتر نیست می تونید استفاده کنید این لینک های خزنده هم جالب هست
https://ircf.space/list.php#

لیست سایت های چینی که می تونید جای اسپید تست استفاده کنید
https://trends.builtwith.com/cdn/Cloudflare/China

[سایت پیدا کردن ای پی تمیز](https://www.itdog.cn/ping/russian.people.com.cn)

# بستن ای پی های کشور کمونیست

ایران اکسس نکنید.
فقط ای پی کشور های چین روسیه کوبا و رومانی و قزاقستان و اوکراین و کشور هایی که ریکوست زیاد  دارند رو ببندید.

[ آموزش جلوگیری از حمله به سرور و ایران اکسس کردن با 2 روش ساده ](https://www.youtube.com/watch?v=U90a43fTyL0)


# مخفی سازی


این روش به تنهایی باعث فیلترشدن دامنه میشود.
پهنای باند مصرفی و بات های چینی رو هم باید در نظر بگیرید.

[NginxReverseProxy](https://github.com/Ptechgithub/NginxReverseProxy)

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

# Mahsa NG

[Mahsa NG Application](https://play.google.com/store/apps/details?id=com.MahsaNet.MahsaNG)


# Data leak

هرکانفیگی که استفاده می کنید حتما یکبار با سایت زیر چک کنید که دیتا لیک نداشته باشد

https://browserleaks.com/




WebRTC in Firefox

    To disable WebRTC in Firefox:
    Type about:config in the address bar and press Enter.
    In the search bar, type media.peerconnection.enabled and double-click the preference to set its value to false.

WebRTC in Chrome

    The recommended solution to limit the risk of IP leakage via WebRTC is to use the official Google extension called WebRTC Network Limiter, which provides a range of options with varying levels of protection.




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


## نکات مهم برای عبور از فیلترینگ!

[نکات مهم برای عبور از فیلترینگ!](https://threadreaderapp.com/thread/1754472982687150413.html)


# Open VPN

برای این روش یک سرور نیاز دارید.

[ آموزش ساخت openvpn روی سرور مجازی ](https://www.youtube.com/watch?v=X8GOExnqPCY)

# Brook

[ روش جدید دورزدن فیلترینگ با استفاده از Brook ](https://youtu.be/0YR4ZpnoYUY?si=Xs1BPq98XuNxtiUt)
[آموزش](https://twitter.com/kevinzakarian/status/1753403463608730017)

از لینک زیر پلاگین Brook برای نکوباکس رو دانلود و نصب کنید. با این پلاگین می‌تونین بُروک رو در گوشی اندروید با نکوباس اجرا کنین و در کنار اپ اصلی برنامه داشته باشین. (برای تشخیص v8a یا v7a پردازنده گوشی=> تلگرام در منوی setting اون پائین نوع CPU رو زده)


[plugin](https://github.com/MatsuriDayo/plugins/releases/tag/Brook-v20220707-1)


[ آموزش نصب و کانفیگ Brook VPN روی سرور به 2 روش ](https://www.youtube.com/watch?v=2IiJM6jyAUs)

# Investigation on Blocking of Reality in IRAN

[Investigation on Blocking of Reality in IRAN](https://github.com/XTLS/Xray-core/issues/2778)


# آینده فیلترینگ

[سیستم فیلترینگ جدید همراه اول چجوری کار میکنه؟](https://threadreaderapp.com/thread/1753357101001265309.html)


[ماشین لرنینگ ها چجوری کار می کنند؟](https://threadreaderapp.com/thread/1753405311921078406.html)


[داستان dns و فیلترینگ](https://threadreaderapp.com/thread/1721555866875257190.html)


[Conjure](https://www.youtube.com/watch?v=Um881kkzJuk)


[Fingerprinting Obfuscated Proxy Traffic with Encapsulated TLS Handshakes](https://www.usenix.org/conference/usenixsecurity24/presentation/xue)


# xray

مهم ترین پروژه که تمام روش های بر اساس این پروژه هست.

https://github.com/XTLS/Xray-core


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