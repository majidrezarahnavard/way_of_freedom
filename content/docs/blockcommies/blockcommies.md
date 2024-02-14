---
weight: 500
title: بلاک کردن آی‌پی کشورهای کمونیست
description: ""
icon: article
date: 2024-02-14T20:52:43+03:30
lastmod: 2024-02-14T20:52:43+03:30
draft: false
toc: true
---
# بستن ای پی های کشور کمونیست

ایران اکسس نکنید. فقط ای پی کشور های چین روسیه کوبا و رومانی و قزاقستان و اوکراین و کشور هایی که ریکوست زیاد دارند رو ببندید.

[آموزش جلوگیری از حمله به سرور و ایران اکسس کردن با 2 روش ساده](https://www.youtube.com/watch?v=U90a43fTyL0)

# 

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