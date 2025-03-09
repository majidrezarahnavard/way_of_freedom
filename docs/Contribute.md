<h1>مشارکت در دانشنامه</h1>
همانطور که می دانید، سایت
filtershekan.sbs
رتبه اول گوگل در این کلمات هست : سایت فیلترشکن، اقتصاد فیلترشکن، filtershkan
<br />
قبلا هم بارها اشاره کردم که این سایت کپی لفت هست و شخصا منفعت مالی ازش نمی برم، این سایت متعلق به همه افراد در حوزه
اینترنت_آزاد هست. دوستان می توانید صفحه اختصاصی خودتان را داشته باشید. فقط کافی مرج ریکوست بزنید.
<h2>مراحل مشارکت</h2>
<ul>
    <li>از مخزن سایت fork بگیرید: <a href="https://github.com/majidrezarahnavard/way_of_freedom">مخزن</a></li>
    <li>تغییرات را اعمال کنید برای اضافه کردن صفحه باید یک فایل جدید با پسوند .md در پوشه Docs درست کنید و محتویات مقاله
        را در آن قرار دهید.</li>
    <li>pr باز کنید.</li>
    <li>پایان</li>
</ul>
<h2>اجرای سایت بصورت لوکال</h2>
برای اجرای وبسایت و دوولوپ مراحل زیر را ادامه دهید
<h3> ایجاد codespace گیت هاب</h3>
<ul>
    <li>به <a href="https://github.com/majidrezarahnavard/way_of_freedom">مخزن</a> بروید</li>
    <li>روی کد ضربه بزنید به بخش codespaces بروید</li>
    <li>یک codespace جدید ایجاد کنید</li>
</ul>
<img src="https://private-user-images.githubusercontent.com/114227601/313462946-fbde0a11-f0b7-4669-a79b-eff9026c7249.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE1MzE4NjYsIm5iZiI6MTc0MTUzMTU2NiwicGF0aCI6Ii8xMTQyMjc2MDEvMzEzNDYyOTQ2LWZiZGUwYTExLWYwYjctNDY2OS1hNzliLWVmZjkwMjZjNzI0OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwOVQxNDQ2MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mZDY5MGVlYmQzMzAwNzVhNTRhMjI5YTg3ZjRjNjA5NWRjMGYxMWE1MjI2ODY0MDZjZmRjMGJhY2MyYTIyYTI1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.MZbLUnFOEwHvGGfS4sfkR8eIycaxH3FpZe2TtGn-iO4"
    alt="روش دوولوپ">
<h3>اجرای mkdocs</h3>
کد زیر را در ترمینال vscode بزنید
<pre>
<code>
make prepare
make docs
</code>
</pre>
<h3>مشاهده وبسایت</h3>
بعد یه صفحه میاد که میتوانید سایت را ببینید
<img src="https://private-user-images.githubusercontent.com/114227601/313463005-d156162d-c9ae-41e7-a88e-df85c1999004.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE1MzIxODMsIm5iZiI6MTc0MTUzMTg4MywicGF0aCI6Ii8xMTQyMjc2MDEvMzEzNDYzMDA1LWQxNTYxNjJkLWM5YWUtNDFlNy1hODhlLWRmODVjMTk5OTAwNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMwOVQxNDUxMjNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03YmVjMTU3OTA4NWQ4MTM3MTljYzFhOWEwNDMzMzBjZTYyZTk4MDNlMTBhNDYwMTllZTBjOTJkNWMzNjNmNmJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DCMtHPaST-Qnw0j6JZZ3XgdU4NPw2DlyzCO5ncF-4N8"
    alt="باز کردن پورت"></img>