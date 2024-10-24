# توییتر

## خطرات امنیتی استفاده از فیلترشکن

[رشتو: نگاهی مختصر به خطرات امنیتی استفاده از فیلترشکن/تحریم‌شکن ها](https://threadreaderapp.com/thread/1782375834596118656.html)


## امنیت در توییتر

اگربه امنیت خودتون اهمیت میدین این موارد رو تو اتصال به توییتر خودتون حتما لحاظ کنید

[نکاتی در خصوص امنیت پلتفرم توییتر (X) برای فعالین سیاسی، اجتماعی، مدنی و کلا" همه !](https://telegra.ph/%D9%86%DA%A9%D8%A7%D8%AA%DB%8C-%D8%AF%D8%B1-%D8%AE%D8%B5%D9%88%D8%B5-%D8%A7%D9%85%D9%86%DB%8C%D8%AA-%D9%BE%D9%84%D8%AA%D9%81%D8%B1%D9%85-%D8%AA%D9%88%DB%8C%DB%8C%D8%AA%D8%B1-X-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%81%D8%B9%D8%A7%D9%84%DB%8C%D9%86-%D8%B3%DB%8C%D8%A7%D8%B3%DB%8C-%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%DB%8C-%D9%85%D8%AF%D9%86%DB%8C-%D9%88-%DA%A9%D9%84%D8%A7-%D9%87%D9%85%D9%87-02-13)

[ How to Set up 2-Factor Authentication On Twitter Account ](https://www.youtube.com/watch?v=BXLQNr-gaEs)

[ How To Change Email Address In Twitter (2022) ](https://www.youtube.com/watch?v=F-itvjI0r-8)

[ How to set up two-factor authentication (2FA) for ProtonMail ](https://www.youtube.com/watch?v=GgrNWoLyp1g)

[تو این #رشتو می خواهم توضیح بدهم که شیوه کارکرد #عرزشی های #سایبری چجوری هست و چگونه مغز شما رو منفجر می کنند:](https://threadreaderapp.com/thread/1762784314478022916.html?utm_campaign=topunroll)

[اگر از سرور ناشناس استفاده کنیم چه میشود؟](https://threadreaderapp.com/thread/1762770899537690939.html)

[آموزش امنیتی!](https://twitter.com/markpash/status/1765676867296678122)

## Data leak

هرکانفیگی که استفاده می کنید حتما یکبار با سایت زیر چک کنید که دیتا لیک نداشته باشد

[browserleaks](https://browserleaks.com/)


WebRTC in Firefox

    To disable WebRTC in Firefox:
    Type about:config in the address bar and press Enter.
    In the search bar, type media.peerconnection.enabled and double-click the preference to set its value to false.

WebRTC in Chrome

    The recommended solution to limit the risk of IP leakage via WebRTC is to use the official Google extension called WebRTC Network Limiter, which provides a range of options with varying levels of protection.



[ تشخیص ip leak وdns leak و جلوگیری از آن روی اوبونتو](https://www.youtube.com/watch?v=zo7-nJBx-Ss)

[ipleak](https://ipleak.net/)

[dnsleaktest](https://www.dnsleaktest.com)


اگه از proxifire استفاده میکنید این تیک رو بزنید برای جلوگیری از DNS Leak

https://x.com/kharabam666/status/1832486181063336147


##  ترفند حذف کردن همه توییت ها و لایک ها | delete all twittes & likes 



توی این ویدئو بهتون آموزش میدم که چطوری همه توییت ها و لایک هاتونو به یک باره حذف کنید.
in this video you will learn how to delete all of your twittes and likes

[youtube](https://www.youtube.com/watch?v=PSg9WS6-MWo)


[github](https://github.com/alirezakargar1380/delete_tweetes_scripts)


## توییت امنیتی و آموزشی


در موارد زیادی قبلا گفتم که باز کردن لینک های ناشناس خیلی میتونه خطرناک باشه حتی برای پیدا کردن IP شما هم ممکنه لینک به شما بدن تا شما فقط بازش کنید تا IP شما رکورد بشه. بسیاری از لینک ها قابل shorten شدن هستن که قابل بررسی نخواهند بود. وبسایتی که معرفی⬇️ 


[twitter](https://threadreaderapp.com/thread/1694442551472795867.html)



##  پنج اشتباه رایج خانواده‌ها در استفاده از اینترنت | نکات مهم برای ایمنی آنلاین 

در این ویدیو، به بررسی پنج اشتباه بزرگ خانواده‌ها در استفاده از اینترنت می‌پردازیم و راهکارهایی برای حفاظت از امنیت آنلاین اعضای خانواده ارائه می‌دهیم. اینترنت فرصتی عالی برای یادگیری، ارتباط و سرگرمی است، اما اشتباهات رایج می‌توانند مشکلات جدی به همراه داشته باشند. از نحوه مدیریت زمان آنلاین تا حفاظت از حریم خصوصی و جلوگیری از تهدیدات امنیتی، همه نکات لازم برای یک تجربه آنلاین امن‌تر را بررسی خواهیم کرد.


https://www.youtube.com/watch?v=JFqJ3A0Za0Y

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

