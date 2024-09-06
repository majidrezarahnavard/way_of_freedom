# BPB


# Install


## youtube

دور زدن فیلترینگ با پنل BPB کاملا رایگان (ضد فیلتر همراه با فرگمنت) 

https://www.youtube.com/watch?v=SSGt303DzVg

در ادامه ویدیو قبلی رسیدیم به آموزش دور زدن فیلترینگ با پنل BPB کاملا رایگان (ضد فیلتر همراه با فرگمنت) که میتونه بسیار براتون کاربردی باشه.


پنل فرگمنت / پنل fragment / vpn / فیلترشکن / پنل BPB / فیلترشکن ضد فیلتر / آموزش ورکر / اموزش pages کلودفلر / چندی از کلمات کلیدی این ویدیو هستن :)


با حمایت کردن من توسط سابسکرایب و لایک و کامنت منو تو ادامه مسیر همراهی کنید :)



لینک های مورد نیاز:
https://github.com/bia-pain-bache/BPB-Worker-Panel

ویدیوهای اشاره شده:
   • تمام روش های رایگان دسترسی به اینترنت...  


# آموزش ها

آموزش ساخت به روش Pages (پیشنهادی):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md
آموزش ساخت به روش Workers:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md
نحوه‌ی انجام تنظیمات و استفاده:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md
سوالات متداول (خیلی مهم):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/faq.md

# github

https://github.com/bia-pain-bache/BPB-Worker-Panel/tree/main

## نصب از طریق Cloudflare Pages

حتمالاً میدونید که دو روش استفاده Worker و Pages برای ساخت پروکسی روی کلادفلر مورد استفاده قرار میگیره، نکته جالب توجه اینه که روش Worker که مرسوم‌تره یه محدودیت داره که روزانه اجازه ارسال بیشتر از صدهزار Request به شما نمیده. البته این محدودیت برای مصرف ۲-۳ نفر کافیه . برای دور زدن این محدودیت در روش worker یه دامنه به ورکر وصل میکردیم و اینجوری نامحدود میشد (که ظاهرا باگ کلادفلر هست). اما Pages این محدودیت رو نداره. البته چون ما در این روش از امکانی به اسم Pages functions استفاده میکنیم کماکان مشابه Worker شما ایمیلی دریافت خواهید کرد که پر شدن ظرفیت مصرف 100k رو به شما اطلاع میده، در این روش حتی اگر از دامنه شخصی هم استفاده کنید باز این ایمیل رو دریافت می کنید. ولی در نهایت تجربه نشون داده که سرویس شما قطع نخواهد شد.

مزیت مهم دیگه‌ش سهولت در یروزرسانی هست. وقتی کد پروژه به روز بشه شما هم به راحتی و بدون نیاز به طی مجدد مراحل میتونید پنلتون رو به روزرسانی کنید. توضیحات بیشتر در بخش بروزرسانی اومده.

ضمنا مراحل استفاده از Pages بسیار ساده‌تر است و به راحتی روی گوشی موبایلتون میتونید این کارها رو انجام بدید.

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md

## نصب از طریق Cloudflare Workers

خب اول کد Worker رو از اینجا دانلود کنید و ببرید توی داشبورد ورکر کلادفلرو فایل رو آپلود کنید (چون کد خیلی زیاد شده Copy Paste کردن با گوشی خیلی سخت شده، با توجه به عکس زیر آپلود کنید). توی مویایل منوی کناری رو باز کنید و تاح کنید روش نگه دارید و آپلود کنید.

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md



## نحوه استفاده

فرض کنید اسم worker یا pages شما هست worker-polished-leaf-d022:

شما میتونید Panel رو با اضافه کردن panel/ انتهاش مثل زیر ببینید:

    https://worker-polished-leaf-d022.workers.dev/panel

ازتون میخواد پسورد جدید بذارید و لاگین کنید و تمام.


https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md


# v2.5

 نسخه‌ی ۲.۵ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای رشتو و آموزشا رو بخونید و برای خودتون بسازید.
اما تغییرات جدید:
۱- ساب‌های Warp Pro به پنل اضافه شده که برای استفاده روی NikaNG و Hiddify هست. بچه‌های این دو


https://threadreaderapp.com/thread/1824435454336208968.html



# quick install


برای آپدیت پنل bpb لازمه که به آدرس 
http://github.com/apps/pull
برید و install رو بزنید 
بعد دسترسی به repository که میخواهید sync بشه بدید (برای آپدیتbpb)
و تمام !



## BPB + Worker Serverless + Fragment


 نسخه‌ی ۲.۴.۷ BPB Panel منتشر شد.

بیشتر تمرکز روی امنیت و عدم وابستگی منابع بوده. تغییرات اصلی:
۱- از این به بعد نمیشه با پسورد پیشفرض admin وارد شد. همون اول ازتون میخواد پسورد بذارید و لاگین کنید.
۲- ساب وارپ اینجوری بود که هر بار آپدیت میکردید...


https://threadreaderapp.com/thread/1819372193052037612.html




ورژن ۲.۳.۴ پنل BPB منتشر شد!

تغییرات عمده: اضافه شدن QR code برای دریافت ساب.
در نظر داشته باشید هیچکدوم آپدیت‌ها اجباری نیستن بجز ۲.۳.۳ که مشکل دپلوی روی ورکر رو برطرف کرد. اکثرشون اضافه شدن امکانات جدید هستن و تا جای ممکن به هسته‌ی اصلی کاری ندارم.


[دور زدن فیلترینگ با پنل BPB کاملا رایگان (ضد فیلتر همراه با فرگمنت)](دور زدن فیلترینگ با پنل BPB کاملا رایگان (ضد فیلتر همراه با فرگمنت))


[ دور زدن رایگان فیلترینگ با pages کلودفلر و پنل BPB | قدرتمندترین روش و فیلترشکن رایگان ](https://www.youtube.com/watch?v=vWxlgIjEkZk)

در این ویدیو به بررسی و آموزش آخرین نسخه پنل BPB از طریق روش Pages پرداختم. این روش مزایای خوبی در مقابل ورکر(worker) دارد که قبلا به آن پرداختم. همچنین در این ویدیو آخرین تغییرات و امکانات اضافه شده در این پنل را بررسی و آموزش داده ام. این روش کاملا رایگان و نامحدود، ضد فیلتر به دلیل وجود فرگمنت و ضد تحریم به دلیل استفاده از آیپی های کلودفلر است.



[✅ ورژن ۲.۳.۳ پنل BPB منتشر شد!](https://twitter.com/bia_pain_bache/status/1780601903338099022)

[نسخه‌ی ۲.۳ پنل BPB ریلیز شد!](https://threadreaderapp.com/thread/1777729570692628977.html)

[ عبور از فیلترینگ با Edge Tunnel و بررسی پنل BPB و پنل وحید فرید , فیلترشکن رایگان، سریع و ضد تحریم ](https://www.youtube.com/watch?v=jvZkHANYfno&t=297s)

[نحوه‌ی راه‌اندازی BPB Worker Panel به همراه Fragment نسخه‌ی 2.1](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87%E2%80%8C%DB%8C-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-BPB-Worker-Panel-%D8%A8%D9%87%E2%80%8C%D9%87%D9%85%D8%B1%D8%A7%D9%87-Fragment-01-28)


[Install BPB Pages ](https://www.youtube.com/watch?v=-LR7cS2ifTQ)


[نصب از طریق Cloudflare Pages](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md)


[لیست آموزش ها](https://twitter.com/bia_pain_bache/status/1782421122245369859)


