
# امنیت سرور

### بستن ای پی های کشور کمونیست

ایران اکسس نکنید.
فقط آی‌پی کشورهای چین، روسیه، کوبا، رومانی، قزاقستان، اوکراین و کشورهایی که درخواست‌های زیاد دارند رو ببندید.

[ آموزش جلوگیری از حمله به سرور و ایران اکسس کردن با ۲ روش ساده ](https://www.youtube.com/watch?v=U90a43fTyL0)


[اعمال محدودیت برای دسترسی‌های مشکوک به دامین از طریق کلودفلر](https://telegra.ph/%D8%A7%D8%B9%D9%85%D8%A7%D9%84-%D9%85%D8%AD%D8%AF%D9%88%D8%AF%DB%8C%D8%AA-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AF%D8%B3%D8%AA%D8%B1%D8%B3%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C-%D9%85%D8%B4%DA%A9%D9%88%DA%A9-%D8%A8%D9%87-%D8%AF%D8%A7%D9%85%DB%8C%D9%86-%D8%A7%D8%B2-%D8%B7%D8%B1%DB%8C%D9%82-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-01-14)

### مسدودسازی سایت‌ها و اپلیکیشن‌های ایرانی

سیستم فیلترینگ از روش‌های متنوعی استفاده می‌کند تا بتواند «حدس بزند» یک IP متعلق به پروکسی سرور می‌باشد یا نه. در چین، یکی از روش‌هایی که GFW استفاده می‌کند این است که اگر از یک سرور خارجی درخواستی به سمت سایت‌های داخلی چینی بیاید، آن را مسدود می‌کند. حدس می‌زنیم که در ایران هم از سیستم مشابهی استفاده می‌شود.


[iranxray](https://github.com/iranxray/hope/blob/main/routing.md#%D9%85%D8%B3%D8%AF%D9%88%D8%AF%D8%B3%D8%A7%D8%B2%DB%8C-%D8%A7%D8%B2-%D8%B3%D9%85%D8%AA-%D8%B3%D8%B1%D9%88%D8%B1)


### بستن دامنه‌های ایران و چین

برای این کار فقط کافیه این رو به انتهای پیکربندی‌تون اضافه کنید.

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

### مخفی سازی

این روش به تنهایی باعث فیلترشدن دامنه می‌شود.
پهنای باند مصرفی و بات‌های چینی رو هم باید در نظر بگیرید.

پروژهٔ [NginxReverseProxy](https://github.com/Ptechgithub/NginxReverseProxy)

قابلیت‌ها:
- نصب سایت (170 قالب آماده)
- اعمال محدویت ترافیک
- تغییر path 
- تغییر درگاه HTTPS


[ آموزش ایجاد سایت روی دامنه و زیر دامنه با استفاده از انجینیکس ](https://youtu.be/xFMh8F3JGrA?si=SJuNI1hOn2tl4S8i)



### از پورت های دیفالت پنل ها استفاده نکنید

[ اینکارو نکنی سرورت هک میشه! ](https://www.youtube.com/watch?v=Oiag_izb5wk)


## بستن سایت های غیر اخلاقی و پورن

``` json
{ "type": "field", "outboundTag": "blocked","domain": [ "geosite:category-porn" ] } 


"routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "domain": [
          "geosite:category-porn",
        ],
        "outboundTag": "BLOCK",
        "type": "field"
      },
    ]
  },
```



## دریافت گواهینامه SSL (Certificate) برای دامین و ساب‌دامین

[دریافت گواهینامه SSL (Certificate) برای دامین و ساب‌دامین](https://ivpn.pro/how-to/how-to-get-ssl-certificate-for-domain-and-subdomain/)

## افزایش سرعت SSH
معمولا سرعت اتصال به ssh خیلی کمه و  اختلال بالایی داره با ۲راه میتونید تا حد زیادی مشکل رو حل کنید که یکیش عوض کردنه پورت اتصال هستش یکیش عوض کردن نحوه رمزنگاری این پروتکل

```
sudo nano /etc/ssh/sshd_config
```
برای تغییر پورت کافیه قسمت Port رو از کامنت در بیارید و عوضش کنید
و برای تغییر نحوه رمزنگاری این کد رو اضافه کنید:
```
Ciphers aes128-gcm@openssh.com,aes128-ctr
```
(میتونید الگوریتم های دیگرو از گوگل پیدا کرده و تست کنید که کودوم سرعت بهتری دارن)
و درنهایت برای اعمال شدن تغییرات دستور زیر رو میزنیم
```
sudo systemctl restart sshd
```

### اتصال امن و راحت به سرور

برای اتصال به سرور از ای پی ایران استفاده نکنید.
می تونید حتی از این پراکسی ها استفاده کنید.

[ssheasy](https://ssheasy.com/)



### مخفی سازی پنل 

[ GateKeeper راه‌حل مدیریت و امنیت لینک‌های V2ray و VPN ](https://www.youtube.com/watch?v=b0rMI8boAiI)


##  آموزش دایرکت کردن سایت ها و برنامه های ایرانی در تمام دیوایس ها 

[ آموزش دایرکت کردن سایت ها و برنامه های ایرانی در تمام دیوایس ها ](https://www.youtube.com/watch?v=78DKbSuNk30)


## geo-location routing

This is an Enhanced and All-in-One set of geo-location routing files optimized for Iranian users to use in v2ray/xray and all their compatible clients.

[Iran-v2ray-rules](https://github.com/Chocolate4U/Iran-v2ray-rules)

## Iran Hosted Domains

دوست داشتید اینو ببینید جالبه
برای تعریف rule روی برنامه های مختلف توضیح داده
و میتونید ترافیک ایران و خارج رو تفکیک کنید تا نیازی به قطع و وصل وی پی ان برای مراجعه به سایت هایی که روزانه استفاده می کنید نداشته باشید

</br>

بسیاری از سرویس‌ها و دامنه‌های خارج از ایران سانسور و مسدود شده‌اند و باید برای دسترسی به آن‌ها از VPN و Proxy هایی با امنیت بالا استفاده کنیم، جدای از این مسئله دسترسی به بعضی سرویس‌های ایرانی از طریق IP خارجی مسدود شده است. حال برای رد کردن این سرویس ها لیستی از دامنه‌های داخلی را جمع کرده‌ایم تا با اضافه کردن آن‌ به کلاینت‌های مورد استفاده، دیگر نیاز به قطع کردن VPN برای دسترسی به سرویس‌های داخلی نباشد.

[Iran Hosted Domains](https://github.com/bootmortis/iran-hosted-domains?tab=readme-ov-file)


## تمیزی IP

[تست تمیزی IP و هر آنچه در مورد IP تمیز یا فیلتر شده باید بدانید!](https://ivpn.pro/how-to/how-to-test-clean-ip-for-vpn/)


## شناسایی سرورهای کاربران ssh

[markpash.me](https://markpash.me/blog/fa-ssh-key-identity-discovery)