# BPB

سرویس‌های VPN، بر روی اره فیلترینگ و تحریم کلودفلر

در هفته اخیر گزارش‌های متعددی درخصوص به مشکل برخوردن میزبانی VPNها، عمدتا بر روی سرویس pages/workers کلودفلر مطرح شده بود، که برخی از کاربران با انتقال دامنه خود به یک اکانت جدید، برخی با شارژ دلاری حساب و برخی توسط پیگیری از طریق سامانه پشتیبانی کلودفلر، مشکل رو به طور موقت حل کردن.

کلودفلر در پاسخ به پیگیری کاربرانی که با مشکل مواجه شدن، گفته در آینده نزدیک قوانین مربوط به مسدودسازی اکانت‌هایی که در دسته‌بندی v2ray یا VPN قرار بگیرن طی یک فرایند خودکار صورت میگیره، که این‌دسته که بخش وسیعی از فعالیت کاربران ایرانی رو بر روی این‌سرویس شامل میشه، به تعبیری مشمول تحریم خواهند شد.

از طرف دیگه، امروز IR-GFW که وضعیت اختلال‌های اینترنت ایران رو مورد بررسی قرار میده، از فیلتر شدن مجدد سرویس pages کلودفلر خبر داده، که پیش‌تر نیز شاهد این‌مساله و رفع فیلتر اون بودیم.

##  رفع ارور 1101 تضمینی و تست شده 

https://github.com/bia-pain-bache/BPB-Worker-Panel/issues/633


اگر هر نفر یک ورکر برای خودش داشته باشه احتمالا این روش کار کنه و جواب بده یعنی از هر پنل یکنفر استفاده کنه

بچه‌ها این روش رو امتحان کنید شاید جواب بده. فقط نکته‌ش اینه که این روش Preview نسبت به حالت عادی که production هست ممکنه یه مقدار ناپایدار باشه ولی شاید ۱۱۰۱ رو برطرف کنه.



## سخه‌ی ۲.۷.۸ BPB Panel منتشر شد.

این ورژن تفاوتی با ۲.۷.۷ نداره، فقط یکی از مراحل ساخت با آموزش‌های جدید جور در نمیومد که درستش کردم. الان اگر بهتون ارور ۱۱۰۱ نده، اول پنل یه ارور میبینید که لینک تولید UUID و پسورد Trojan داخلشه. از اونجا این دو تا رو برمیدارید، میرید تو داشبورد کلادفلر میذارید، KV رو هم ست میکنید و دوباره دپلوی میکنید و تمام. (برای ورکر نیازی به دوباره دپلوی کردن نیست.


## نسخه‌ی ۲.۷.۷ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای توییت و آموزشا رو بخونید و برای خودتون و اطرافیان پروکسی رایگان بسازید.

توضیحات این نسخه:
همینطور که میدونید کلادفلر چند وقتیه به پروژه‌های پراکسی گیر داده و برای بعضی‌ها ارور ۱۱۰۱ برمیگردونه. چند بار تغییراتی دادم ولی نتیجه‌ی ۱۰۰٪ حاصل نشد، بنابراین روش جدید ساخت رو اضافه کردم و به آموزش‌ها هم اضافه شده که خیلی بهتر جواب داده اما کماکان نمیتونم بگم ۱۰۰٪ هست، و مشخص هم نیست تا کی دوام بیاره.

اما نکات اصلی:
۱- ممکنه این روش Pages روی اکانت‌های کلادفلر قدیمی که ۱۱۰۱ گرفته بودن هم کار کنه، اما خیلی بهش دل خوش نکنید، ترجیحا یه اکانت جدید کلادفلر با ایمیل معتبر مثل Gmail بسازید و روش جدید رو تست کنید، این روش نیازی به گیتهاب نداره، فقط کلادفلر میخواد.

۲-  عده‌ای گزارش کردن پروژه‌های Pages مثل سابق نامحدود نیست، بنابراین خودتون تست کنید قبل از اهدا کردن. کماکان Workers با دامنه‌ی شخصی نامحدوده.

۳- یه قسمتی به پنل اضافه کردم که میتونید UUID و پسورد Trojan رو از اونجا بگیرید، بخاطر مسائل امنیتی دیگه مثل سابق نمیتونید با مقادیر پیشفرض پنل رو بالا بیارید، بنابراین از هر روشی که میساختید باید مجدد آموزشش رو بخونید چون روش‌ها تغییر کرده.

۴- برای روش جدید فایل zip کل پروژه رو دانلود نکنید، با هر آپدیت یه فایل مجزا هم منتشر میشه که لینکش داخل آموزش هست.

#یوسف_قبادی 
#سگارو

آموزش ساخت به روش جدید Pages با آپلود مستقیم (پیشنهادی):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_upload_installation_fa.md

آموزش ساخت به روش Pages با گیتهاب:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md

آموزش ساخت به روش Workers:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md

نحوه‌ی انجام تنظیمات و استفاده:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md

سوالات متداول (خیلی مهم):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/faq.md

## Change UUID

دوستان UUID ها را عوض کنید و default نزارید چینی ها راحت این کانفیگ‌ ها را می‌زنند 


##  نسخه‌ی ۲.۷.۵ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای توییت و آموزشا رو بخونید و برای خودتون و اطرافیان پروکسی رایگان بسازید. 

تغییرات خیلی زیاد داشته از ۲.۷، اما تغییرات اصلی این نسخه:

۱- بخاطر ارور ۱۱۰۱ کلادفلر مجبور شدم عجله‌ای این آپدیت رو بدم، بنابراین اگر باگی داشت صبور باشید و توی گیتهاب issue ثبت کنید تا بررسی کنم.

۲- قسمت My IP به انتهای پنل اضافه شده که نیاز نباشه از جای دیگه چک کنید، دو قسمت داره که هم IP رو برای سایتای کلادفلری نشون میده (تاثیر Proxy IP) و هم بقیه‌ی آدرس‌ها.

۳- صرفا جهت اطلاعات عمومی: کسی درخواست نکرده بود ولی برای شفافیت بیشتر و امنیت شما، تولید کد نهایی پروژه یا build کردن به Github Actions منتقل شد و من از این به بعد دخل و تصرفی درش نخواهم داشت، اتوماتیک انجام میشه.

۴- با تنظیمات IPv6 هم کانفیگ‌های IPv6 کم و زیاد میشن هم تنظیمات DNS کاملا بهینه میشه، توصیه میکنم اگر اینترنت شما از IPv6 پشتیبانی نمیکنه غیر فعالش کنید.

۵- در صورت لزوم میتونید چندتا Proxy IP با فرمت دامنه و IP همزمان وارد کنید.

۶- از این نسخه به بعد حداقل ورژن Sing-box باید 1.10.1 باشه بخاطر تغییرات هسته، بنابراین قبل از آپدیت پنل حتما برنامه رو آپدیت کنید.

۷- تنظیمات DNS برای Chain Proxy و کانفیگای WoW کاملا بهینه شدن و عملکرد بهتری دارن.

۸- گزینه‌ی Custom rules به قسمت قوانین مسیریابی اضافه شده که میتونید دامنه‌ها یا IP های دلخواه رو اتصال مستقیم یا بلاک کنید.

۹- اسکنر IP تمیز تغییر کرده، طبق آموزش خیلی راحت در ویندوز اسکن کنید تا سر فرصت برای بقیه سیستم‌عامل‌ها هم آموزش بنویسم.

۱۰- اسکنرهای چینی قدیمی از پروژه حذف شدن، چه IP تمیز چه Proxy IP چون کارکردشون رو از دست دادن و Windows security خطرناک تلقی میکردشون. میتونید از IP های دامنه خودمون استفاده کنید که هر نیم ساعت توسط یه سرور همشون چک میشن.

۱۱- کانفیگ‌های Clash بهتر شدن و فایل‌های مسیریابیشون هم مثل Sing-box شده و پیشفرض Malware و Phishing و ... رو بلاک میکنن.

۱۲- و در نهایت مشکل ارور ۱۱۰۱ کلادفلر موقتا برطرف شده. برای ورکر همه‌ی فایل‌ها رو از نوار سمت چپ پاک کنید و فایل جدید رو آپلود کنید.

خواهش میکنم آموزش‌های زیر رو مطالعه کنید، مخصوصا برای تغییرات جدیدی که به پنل اضافه شده، ممکنه من فرصت نکنم جواب همه رو بدم.

آموزش ساخت به روش Pages (پیشنهادی):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md

آموزش ساخت به روش Workers:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md

نحوه‌ی انجام تنظیمات و استفاده:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md

سوالات متداول (خیلی مهم):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/faq.md


## نسخه‌ی ۲.۷ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای توییت و آموزشا رو بخونید و برای خودتون بسازید. 


##  نسخه‌ی ۲.۶.۳ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای رشتو و آموزشا رو بخونید و برای خودتون بسازید. اما تغییرات اصلی:

۱- مشکل کانفیگای وارپ که تو آپدیت اخیر بوجود اومده بود برطرف شد.


آموزش ساخت به روش Pages (پیشنهادی):

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md

آموزش ساخت به روش Workers:

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md

نحوه‌ی انجام تنظیمات و استفاده:

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md

سوالات متداول (خیلی مهم):

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/faq.md


https://threadreaderapp.com/thread/1841791681382715527.html


##  آموزش نصب پنل BPB و… بدون اکانت گیت هاب و با چند مرحله ساده 

از اونجایی که آموزش های کلودفلر و پنل bpb برای ساخت فیلترشکن رایگان خیلی محبوب شده از این رو با آموزش نصب پنل BPB و… بدون اکانت گیت هاب و با چند مرحله ساده در خدمت شما هستیم.

https://www.youtube.com/watch?v=qVYfXvLi6II



##  نسخه‌ی ۲.۵.۹ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای رشتو و آموزشا رو بخونید و برای خودتون بسازید.

اما تغییرات اصلی:

۱- از این به بعد Chain Proxy روی همه ساب‌ مثل Clash و Singbox به جز وارپ اعمال میشه.

![picture](https://pbs.twimg.com/media/GYaZOyDbYAAVLfn?format=jpg&name=large)

https://threadreaderapp.com/thread/1839325980097483248.html


##  آموزش پنل BPB و بردن دامنه پشت CDN سایت Fastly (ضد فیلترش کن) 


یه آموزش فوق العاده کاربردی و محبوب رو آپدیت کردیم و پیشنهاد میکنم آموزش پنل BPB و بردن دامنه پشت CDN سایت Fastly (ضد فیلترش کن) رو از دست ندین.


آموزش پنل bpb / آموزش سایت فستلی / آموزش سایت fastly / پنل bpb با fastly / دامنه فیک با fastly / دامنه فیک در پنل fastly / چندی از کلمات کلیدی این ویدیو هستن :)


با حمایت کردن من توسط سابسکرایب و لایک و کامنت منو تو ادامه مسیر همراهی کنید :)


https://www.youtube.com/watch?v=O3cl5MifBZo
https://www.youtube.com/watch?v=SSGt303DzVg


##  آموزش کامل و کاربردی ترکیب PBP پنل با جیکور و فستلی 


در این آموزش کامل و کاربردی نحوه ترکیب pbp پنل با دو سی دی ان فستلی و جیکور رو داریم 
تا جایی که امکان داشت به سوالات شما پاسخ داده شده امیدوارم به دردتون بخوره
گیت هاب و لینک کدها
https://t.me/v2rayiranioriginal/414

کانال تلگرام
https://t.me/v2rayiranioriginal

https://www.youtube.com/watch?v=CsG_ErAutvY

## ضد فیلتر همراه با فرگمنت

دور زدن فیلترینگ با پنل BPB کاملا رایگان (ضد فیلتر همراه با فرگمنت) 

https://www.youtube.com/watch?v=SSGt303DzVg

در ادامه ویدیو قبلی رسیدیم به آموزش دور زدن فیلترینگ با پنل BPB کاملا رایگان (ضد فیلتر همراه با فرگمنت) که میتونه بسیار براتون کاربردی باشه.


پنل فرگمنت / پنل fragment / vpn / فیلترشکن / پنل BPB / فیلترشکن ضد فیلتر / آموزش ورکر / اموزش pages کلودفلر / چندی از کلمات کلیدی این ویدیو هستن :)


با حمایت کردن من توسط سابسکرایب و لایک و کامنت منو تو ادامه مسیر همراهی کنید :)



لینک های مورد نیاز:
https://github.com/bia-pain-bache/BPB-Worker-Panel

ویدیوهای اشاره شده:
   • تمام روش های رایگان دسترسی به اینترنت...  


## آموزش ها

آموزش ساخت به روش Pages (پیشنهادی):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md
آموزش ساخت به روش Workers:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md
نحوه‌ی انجام تنظیمات و استفاده:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md
سوالات متداول (خیلی مهم):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/faq.md

## github

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



## v2.5.5

 نسخه‌ی ۲.۵.۵ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای رشتو و آموزشا رو بخونید و برای خودتون بسازید.
اما تغییرات جدید:
۱- پروتکل Trojan اضافه شده، پسوردشو با توجه به آموزش عوض کنید و نکاتشو بخونید.

https://threadreaderapp.com/thread/1834568669814260180.html

## v2.5

 نسخه‌ی ۲.۵ BPB Panel منتشر شد.

اگر اولین باره با این پنل آشنا میشید لطفا یه راست برید انتهای رشتو و آموزشا رو بخونید و برای خودتون بسازید.
اما تغییرات جدید:
۱- ساب‌های Warp Pro به پنل اضافه شده که برای استفاده روی NikaNG و Hiddify هست. بچه‌های این دو


https://threadreaderapp.com/thread/1824435454336208968.html



## quick install


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


[نحوه‌ی راه‌اندازی BPB Worker Panel به همراه Fragment نسخه‌ی 2.1](https://telegra.ph/%D9%86%D8%AD%D9%88%D9%87%E2%80%8C%DB%8C-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-BPB-Worker-Panel-%D8%A8%D9%87%E2%80%8C%D9%87%D9%85%D8%B1%D8%A7%D9%87-Fragment-01-28)


[Install BPB Pages ](https://www.youtube.com/watch?v=-LR7cS2ifTQ)


[نصب از طریق Cloudflare Pages](https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md)


[لیست آموزش ها](https://twitter.com/bia_pain_bache/status/1782421122245369859)


## آموزش ساخت پنل bpb به روش pages توسط elfina

پیج سازنده

داخل یوتیوب هم سرچ کنید آموزش تا دلت بخواد هست 

پیج و اموزش خود سازنده و فورک زدنش
https://github.com/bia-pain-bache/BPB-Worker-Panel

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md

از اینم میتونید فورک بگیرید
با روش worker
با روش pages

https://github.com/NiREvil/bia-pain-bache/

آموزش ساخت به روش Pages (پیشنهادی):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md
آموزش ساخت به روش Workers:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md
نحوه‌ی انجام تنظیمات و استفاده:
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md
سوالات متداول (خیلی مهم):
https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/faq.md

https://t.me/freeebirdss/11/8678


##  Building a free vpn with Workers is simple and fast bpb

https://www.youtube.com/watch?v=KEGwz49Q-DY


##  آموزش پیدا کردن ریموت DNS برای استفاده در پنل BPB 

نسخه 64 بیتی
دانلود Runtime پیشنیاز اول برنامه
https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-desktop-6.0.35-windows-x64-installer

دانلود Runtime پیشنیاز دوم برنامه
https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-aspnetcore-6.0.35-windows-x64-installer




## آموزش مراحل BPB and fastly

آموزش نصب BPB

https://www.youtube.com/watch?v=SSGt303DzVg

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/README_fa.md

نحوه استفاده 

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/configuration_fa.md


### نصب از طریق Cloudflare Pages

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/pages_installation_fa.md


### fastly

https://www.youtube.com/watch?v=O3cl5MifBZo


### email fake

https://temp-mail.org/en/



## 1101

کلادفلر هر چند وقت اکانت‌های پرمصرف BPB رو شناسایی میکنه و ارور ۱۱۰۱ میده. جدیدا سختگیرتر هم شده و ممکنه برای اکانت کم مصرف هم این اتفاق بیافته. اکانت‌های گیتهاب و کلادفلر جدید بسازید و حتما با یه ایمیل رسمی مثل Gmail اکانت‌ها رو بسازید، از ایمیل‌های موقت و فیک دوری کنید. اگه بازم نشد دیگه نمیدونم، باید سر فرصت بررسی کنم.

https://x.com/bia_pain_bache/status/1860384620472135933

ed tunnel یه سری کارهایی داشت میکرد که ظاهرا شناسایی نشه
اولش اسم متغیرا رو از حروف عجیب غریب هندی طور استفاده میکرد
بعد اومد مبهمش کرد کلا

https://github.com/seramo/ed-tunnel

بعد نمیدونم چیشد کلا حذف شد
الان همه از همین فورک میکنن

## آموزش ساخت پنل BPB با فستلی

### اموزش پنل BPB
اگر کلا با این پنل آشنایی ندارید اول ویدیو زیر رو ببینید

https://www.youtube.com/watch?v=SSGt303DzVg

### ایمیل یکبار مصرف

https://temp-mail.org/en

از این سایت استفاده کنید و یک اکانت آنلاین بهتون میده

دقت کنید حتما کلودفلیر و فستلی رو برای هر اکانت بسازید چون ممکن هست که بسته بشوند

### اکانت کلوفلیر

خیلی ساده می تونید یک اکانت بسازید. اگر سختتون بود این ویدیو رو ببنید.

https://www.youtube.com/watch?v=ltCe31Y3wgg&t=158s

لازم نیست با جیمیل حتما بسازید با همون یکبار مصرف هم کار در میاد

### BPB Worker

حالا از طرق ورکر و طبق آموزش زیر نصب کنید.

نصب از طریق Cloudflare Workers

https://github.com/bia-pain-bache/BPB-Worker-Panel/blob/main/docs/worker_installation_fa.md

من این ورژن رو نصب کردم

BPB Panel 2.7.3

https://github.com/bia-pain-bache/BPB-Worker-Panel/releases/download/v2.7.3/worker.js

### تغییر UUID

دقت کنید این بخش دلخواهی نیست و حتما باید تغییرش بدید

  userID = env.UUID || "123XXXXXXXXXXXXXXXX";

https://www.uuidgenerator.net/

با این سایت حتما مقدارش رو عوض کنید.

### ساخت اکانت فستلی

fastly.com

https://www.youtube.com/watch?v=O3cl5MifBZo

حالا یک اکانت فستلی را با همون ایمیل فیک بسازید.


## Change UUID

دوستان UUID ها را عوض کنید و default نزارید چینی ها راحت این کانفیگ‌ ها را می‌زنند 
