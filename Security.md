
# امنیت سرور

## بستن ای پی های کشور کمونیست

ایران اکسس نکنید.
فقط آی‌پی کشورهای چین، روسیه، کوبا، رومانی، قزاقستان، اوکراین و کشورهایی که درخواست‌های زیاد دارند رو ببندید.

[ آموزش جلوگیری از حمله به سرور و ایران اکسس کردن با ۲ روش ساده ](https://www.youtube.com/watch?v=U90a43fTyL0)


[اعمال محدودیت برای دسترسی‌های مشکوک به دامین از طریق کلودفلر](https://telegra.ph/%D8%A7%D8%B9%D9%85%D8%A7%D9%84-%D9%85%D8%AD%D8%AF%D9%88%D8%AF%DB%8C%D8%AA-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AF%D8%B3%D8%AA%D8%B1%D8%B3%DB%8C%E2%80%8C%D9%87%D8%A7%DB%8C-%D9%85%D8%B4%DA%A9%D9%88%DA%A9-%D8%A8%D9%87-%D8%AF%D8%A7%D9%85%DB%8C%D9%86-%D8%A7%D8%B2-%D8%B7%D8%B1%DB%8C%D9%82-%DA%A9%D9%84%D9%88%D8%AF%D9%81%D9%84%D8%B1-01-14)

## مسدودسازی سایت‌ها و اپلیکیشن‌های ایرانی

سیستم فیلترینگ از روش‌های متنوعی استفاده می‌کند تا بتواند «حدس بزند» یک IP متعلق به پروکسی سرور می‌باشد یا نه. در چین، یکی از روش‌هایی که GFW استفاده می‌کند این است که اگر از یک سرور خارجی درخواستی به سمت سایت‌های داخلی چینی بیاید، آن را مسدود می‌کند. حدس می‌زنیم که در ایران هم از سیستم مشابهی استفاده می‌شود.


[iranxray](https://github.com/iranxray/hope/blob/main/routing.md#%D9%85%D8%B3%D8%AF%D9%88%D8%AF%D8%B3%D8%A7%D8%B2%DB%8C-%D8%A7%D8%B2-%D8%B3%D9%85%D8%AA-%D8%B3%D8%B1%D9%88%D8%B1)


## بستن دامنه‌های ایران و چین

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

## مخفی سازی

این روش به تنهایی باعث فیلترشدن دامنه می‌شود.
پهنای باند مصرفی و بات‌های چینی رو هم باید در نظر بگیرید.

پروژهٔ [NginxReverseProxy](https://github.com/Ptechgithub/NginxReverseProxy)

قابلیت‌ها:
- نصب سایت (170 قالب آماده)
- اعمال محدویت ترافیک
- تغییر path 
- تغییر درگاه HTTPS


[ آموزش ایجاد سایت روی دامنه و زیر دامنه با استفاده از انجینیکس ](https://youtu.be/xFMh8F3JGrA?si=SJuNI1hOn2tl4S8i)



## از پورت های دیفالت پنل ها استفاده نکنید

[ اینکارو نکنی سرورت هک میشه! ](https://www.youtube.com/watch?v=Oiag_izb5wk)


# بستن سایت های غیر اخلاقی و پورن

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