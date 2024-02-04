#  روش های اتصال به اینترنت

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
```
احتمال زیاد سربرگ clientHello همراه sni در یک تکه سالم افتادند و امکان خواندنش بوده؛ بهتر اولین تکه کمتر از ۴۰ بایت باشه تا مطمن بشید این اتفاق نمیافته.


[آموزش دور زدن فیلترینگ دامنه توسط فرگمنت در تمام دیوایس ها](https://www.youtube.com/watch?v=LXJIcLa1v6Y&t=66s)


[اخرین آموزش سگارو](https://telegra.ph/How-to-use-Argo-Cloudflare-tunnel-with-iSegaro-12-15)

[نصب آرگو](https://telegra.ph/%D9%86%D8%B5%D8%A8-%D8%A2%D8%B1%DA%AF%D9%88-01-07)


[ابزار فرگمنت ircfspace ](https://ircfspace.github.io/fragment/)

[misaturo tools ](https://misaturo.github.io/Xray-Fragment-Configurator/)

[ جدیدترین روش استفاده از کانفیگ FRAGMENT با لینک سابسکریشن بدون نیاز به ویرایش کد ساخت بینهایت کاربر ](https://www.youtube.com/watch?v=4L7zajnLtOs)


## کلود فلیر
از هر دامنه از کلود فلیر که فیلتر نیست می تونید استفاده کنید این لینک های خزنده هم جالب هست
https://ircf.space/list.php#

لیست سایت های چینی که می تونید جای اسپید تست استفاده کنید
https://trends.builtwith.com/cdn/Cloudflare/China



# بستن ای پی های کشور کمونیست

ایران اکسس نکنید.
فقط ای پی کشور های چین روسیه کوبا و رومانی و قزاقستان و اوکراین و کشور هایی که ریکوست زیاد  دارند رو ببندید.

[ آموزش جلوگیری از حمله به سرور و ایران اکسس کردن با 2 روش ساده ](https://www.youtube.com/watch?v=U90a43fTyL0)


# warp on warp

[warp-on-warp](https://www.youtube.com/watch?si=bJq3Wn6bxD9wNruP&v=VnsjxHl41mU&feature=youtu.be)

[wiregaurd-go](https://github.com/bepass-org/wireguard-go)

[code](https://github.com/Elfiinaa/ConfigFiles/blob/main/WarpOnWarp-HiddifyNext.json)

[warp-phiphon](https://www.youtube.com/shorts/y1Cqo0Ru0vI)

[warp kian](https://twitter.com/lowercase_1978/status/1752285825789034927)

[ اتصال به وارپ روی اکثر اینترنت ها | حل مشکل وارپ ](https://www.youtube.com/watch?v=KT_cxcKesS0)

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

# از پرداخت با ریال جدا خودداری کنید

برای خرید سرور و دامنه و فیلترشکن و تلفن تلگرام هرگز از ریال استفاده نکنید.


[آموزش کیف پول متامسک](https://www.youtube.com/watch?v=DE4iA1-vLrU)

## از کجا سرور با کریپتو بخرم؟

```
https://www.ethernetservers.com/vps-hosting
https://my.kuroit.com/
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


## Exchange
برای تبدیل دارایی خود می توانید از سایت زیر استفاده کنید

```
https://swapspace.co
https://fixedfloat.com/
```



## درگاه کریپتو برای فروشندگان

به جای پرداخت ریالی پرداخت با ترون راه اندازی کنید.


```
http://Nowpayments.io
http://Coinpayments.net
http://Bitpay.com
```

[ آموزش ثبت نام و تنظیمات درگاه پرداخت NOWPayments ](https://www.youtube.com/watch?v=cIR8VTHFyn0)



# Brook

[ روش جدید دورزدن فیلترینگ با استفاده از Brook ](https://youtu.be/0YR4ZpnoYUY?si=Xs1BPq98XuNxtiUt)
[آموزش](https://twitter.com/kevinzakarian/status/1753403463608730017)

از لینک زیر پلاگین Brook برای نکوباکس رو دانلود و نصب کنید. با این پلاگین می‌تونین بُروک رو در گوشی اندروید با نکوباس اجرا کنین و در کنار اپ اصلی برنامه داشته باشین. (برای تشخیص v8a یا v7a پردازنده گوشی=> تلگرام در منوی setting اون پائین نوع CPU رو زده)


[plugin](https://github.com/MatsuriDayo/plugins/releases/tag/Brook-v20220707-1)

# آینده فیلترینگ

[سیستم فیلترینگ جدید همراه اول چجوری کار میکنه؟](https://threadreaderapp.com/thread/1753357101001265309.html)


[ماشین لرنینگ ها چجوری کار می کنند؟](https://threadreaderapp.com/thread/1753405311921078406.html)


[داستان dns و فیلترینگ](https://threadreaderapp.com/thread/1721555866875257190.html)


[Conjure](https://www.youtube.com/watch?v=Um881kkzJuk)


[Fingerprinting Obfuscated Proxy Traffic with Encapsulated TLS Handshakes](https://www.usenix.org/conference/usenixsecurity24/presentation/xue)