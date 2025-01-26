# Singbox


## sing-box

https://github.com/SagerNet/sing-box

Welcome to the wiki page for the sing-box project.

The universal proxy platform.

https://sing-box.sagernet.org/


## sing-box Android

https://play.google.com/store/apps/details?id=io.nekohasekai.sfa&hl=en&pli=1

##  نحوه اضافه کردن کانفیگهای سینگ باکس در ویندوز و اندروید + پنل علیرضا 

بنا به درخواستی تعدادی از دوستان رکورد این ویدیو انجام شده جهت اضافه کردن و نصب نرم افزار v2rayn-pro که داخل کانال تلگرام هم قرار گرفته و نرم افزار اندرویدی سینگ باکس
امیدوارم به دردتون بخوره
لینک کانال تلگرام تو بیو پیج و پایین توضیحات هستش

https://www.youtube.com/watch?v=Z8XOoPbHuVw



##  راه اندازی Vless-TCP-Reality با هسته Sing-Box 

https://faridsguide.com/%D8%B1%D8%A7%D9%87-%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-vless-tcp-reality-%D8%A8%D8%A7-%D9%87%D8%B3%D8%AA%D9%87-sing-box/

بحث راه اندازی پروکسی داغه و چون یک شیوه جدید برای دور زدن سیستم فیلترینگ اومده، گفتم یه آموزش سریع بذارم تا بتونید راه اندازیش کنید.

اول از همه یکم قصه بگم که این آموزش با هسته sing-box هست. این هسته نسبت به Xray سبک تر و پرسرعت تره. اینم بگم که همین کانفیگی که در ادامه میذارم رو با هسته Xray پیاده کردم و بعضی از ساعت ها اصلا وصل نمی‌شد اما با سینگ باکس بدون مشکل وصل میشه. برای خوندن مستندات سینگ باکس به این لینک برید. این آموزش واسه کسایی هست که همین الان xray Reality اجرا دارن و میخوان مهاجرت کنن به سینگ باکس.

خب آموزش رو با دانلود هسته سینگ باکس روی سرور شروع میکنیم. برای اینکار به صفحه ریلیزهای سینگ باکس برید و متناسب با سرورتون که در 99 درصد موارد amd64 هست، لینکش رو کپی کنید و با دستور wget در سرورتون دانلود کنید. در حال حاضر ورژن 1.3.4 جدیدترین نسخه هست و چون سرورم ubuntu 20.04 هست من اونو دانلود میکنم:
1
	
wget https://github.com/SagerNet/sing-box/releases/download/v1.4.1/sing-box_1.4.1_linux_amd64.deb

بعد از دانلود با استفاده از دستور زیر نصبش کنید:
1
	
sudo dpkg -i  sing-box_1.4.1_linux_amd64.deb

بعد از نصب، توی مسیر کانفیگ ها، کانفیگ اصلی رو ویرایش کنید با دستور زیر:
1
	
sudo nano /etc/sing-box/config.json

و کانفیگ زیر رو بندازید داخلش:


```json
	
//wget https://github.com/SagerNet/sing-geoip/releases/latest/download/geoip.db
//wget https://github.com/SagerNet/sing-geosite/releases/latest/download/geosite.db
// cd /var/lib/sing-box folder of dat files
// nano /etc/sing-box/config.json
//https://github.com/SagerNet/sing-box/releases
//Public: generated_public_key
 
 
{
  "log": {
    "level": "info",
    "timestamp": true,
    "disabled": true
  },
  "dns": {
    "servers": [
      { 
        "tag": "local",
        "address": "https://1.1.1.1/dns-query",
        "detour": "direct"
      }
    ]
  },
  "inbounds": [
    {
      "type": "vless",
      "tag": "vless-in",
      "listen": "::",
      "listen_port": 443,
      "users": [
        {
      "name": "user1",
      "uuid": "8227fa54-d602-46f0-8da6-67816ab4c6a7",
      "flow": "xtls-rprx-vision"
        },
        {
      "name": "user2",
      "uuid": "1a458dc5-6292-4a92-1111-b448835166b7",
      "flow": "xtls-rprx-vision"
        }   
    ],
      "tls": {
        "enabled": true,
        "min_version": "1.3",
        "server_name": "discord.com",
        "reality": {
          "enabled": true,
          "handshake": {
            "server": "discord.com",
            "server_port": 443
          },
          "private_key": "generated_private_key",
          "short_id": [
            "f2f6000e855"
          ],
          "max_time_difference": "5m"
        }
      }
    }
  ],
  "outbounds": [
    {
      "type": "direct",
      "tag": "direct"
    },
    {
      "type": "block",
      "tag": "block"
    }
  ],
  "route": {
    "geosite": {
      "path": "/var/lib/sing-box/geosite.db",
      "download_url": "https://github.com/SagerNet/sing-geosite/releases/latest/download/geosite.db"
    },
    "geoip": {
      "path": "/var/lib/sing-box/geoip.db",
      "download_url": "https://github.com/SagerNet/sing-geoip/releases/latest/download/geoip.db"
    },
    "rules": [
      {
        "domain_keyword": [
          "snapp", "digikala","tapsi", "blogfa", "bank", "sb24.com", "sheypoor.com", "tebyan.net", "beytoote.com", "telewebion.com", "Film2movie.ws", "Setare.com", "Filimo.com", "Torob.com", "Tgju.org", "Sarzamindownload.com", "downloadha.com", "P30download.com", "Sanjesh.org", "irancell"
        ],
        "domain_suffix": [
          ".ir"
        ],
        "geoip": [
          "ir"
        ],
        "invert": false,
        "outbound": "block"
      }
    ]
  }
}

```

شما میتونید به هرتعداد که نیاز دارید کاربر بسازید تا هر کاربر اکانت خودشو داشته باشه. اینجوری نیازی به پنل ثنایی و X-UI هم ندارید. همون بالا user1 و user2 رو اسمشون رو تغییر بدید و یا user3 بسازید. هر کاربر هم uuid خودشو داره.

برای uuid هم از دستور sing-box generate uuid و برای keyها هم از دستور sing-box generate reality-keypair استفاده کنید که بهتون private و public key میده. هردوتا رو داشته باشید.

private key همینجا بمونه و public key میره توی سمت کاربر. درباره سرور هم باید سرور هایی رو انتخاب کنید که رمزنگاری x25519 داشته باشن، فیلتر نباشن و ترافیک زیادی داشته باشن تا فیلترشدن سرور به حداقل برسه. برای مطالعه بیشتر این جا رو ببنید. من اینجا discord.com رو انتخاب کردم.

همه رو ذخیره کنید و با دستور sudo systemctl start sing-box.service سرویس رو راه اندازی کنید.
در ضمن فراموش نکنید که دستور زیر رو بزنید تا موقعی که سرور به هردلیلی ریستارت شد، سینگ باکس خودکار اجرا بشه:
1
	
sudo systemctl enable sing-box.service

ببینید ما هنوز نمیدونیم که سیستم فیلترینگ واکنشش به Reality چیه. میگن یکی از راه های شناسایی اینه که میان نگاه میکنن اگر با آی پی خارجی وارد سایت ایرانی شدی و مثلا لاگین کردی بگن این فیلترشکنه و آی پی رو ببندن. درنتیجه بخش آخر کانفیگ مربوط به routing هست که زمانی که به سرور وصلید برای اینکه آی پی سرور فیلتر نشه یا شناساییش خیلی کم بشه سایت های ایرانی رو اصلا باز نکنه.


##  اتصال warp بوسیله sing box در آیفون واندروید بهترین روش جایگزین Hiddify بهمراه روش استفاده درویندوز 

https://www.youtube.com/watch?v=nrhnw6JBENc&t=12s

تو این ویدیو به وسیله نرم افزار sing box در آیفون و اندروید رو گفتیم چطوری میشه به وارپ وصل شد همچنین روش استفاده از لینک کانفیگ رو هم که در نرم افزار hiddify در ویندوز و بقیه سیستم ها استفاده کنیم رو هم گفتم

مرسی از اینکه این ویدیو رو دیدید
لایک، کامنت و سابسکرایب یادتون نره
و برای اینکه زودتر از همه متوجه بشید که ویدیو آپلود شده حتما حتما زنگوله رو روشن کنید

Social Media



##  پنل SSH همراه با پنل سینگ باکس با قابلیت (مدیریت کاربران و حجم و انقضا و...) 

با پنل SSH همراه با پنل سینگ باکس با قابلیت (مدیریت کاربران و حجم و انقضا و...) در خدمت شما هستم که حتی قابلیت پروتکل های tuic و هیستریا و ریلیتی و وب سوکت رو به شما میده در کنار SSH و حتی قابلیت ایجاد فیک سایت و…


[ پنل SSH همراه با پنل سینگ باکس با قابلیت (مدیریت کاربران و حجم و انقضا و...) ](https://www.youtube.com/watch?v=S6pQ5F3ZmCE)



## sing-box-plus

داداش اگه بدونی چه‌ها کردی با میکروتیک 🤩✌️

اجرای سینگ‌باکس پلاس با کانتاینر میکروتیک 🫶

اگه توی لاگها دقت کنی می‌بینی که اسکن کرده و ip تمیز پیدا کرده، دمت گرم 🙏

Cloudflare IP Scanner
TLS Fragmentation


https://github.com/kyochikuto/sing-box-plus

یک ریپوزیتوری جدید دارم در مورد سینگ باکس

https://github.com/kyochikuto/sing-box-plus

  @0xKyochikuto
  ,  @Eagle_1157
 
دارند بر همین اساس توسعه می دهند.

Cloudflare IP Scanner
Cloudflare WARP blocking bypass
TLS Fragmentation

به سینگ باکس این موارد رو اضافه کردند که حالا از همین روش میشه توی میکروتک هم استفاده کرد.


## Singbox

https://4n0nymou3.github.io/Singbox/Json

شاید بعدا اگه وقت کنم کامل‌تر کنم این ابزار جدید رو
فعلا همین رو داشته باشید


## این برنامه هم خیلی خوبه مخصوصا قسمت تست DNS

 Karing - Simple & Powerful proxy utility 


    Compatible with Clash, V2ray/V2fly, Sing-box, Shadowsocks, Sub, Github Subscriptions.
    Full clash config supported, Partial clash.meta config supported.
    Simple UI and supports custom theme color.
    Built-in support singbox core.
    System proxy setting and guard.
    Plan to support all platforms.

[github](https://github.com/KaringX/karing)



##  آپدیت جدید و خفن هدیفای منیجر X پشتیبانی از SINGBOX+V2RAY درکنار هم 


سلام رفقا این نسخه جدید هدیفای به معنای واقعی کلمه عالیه و از همه پروتکل های موجود پشتیبانی میکنه 
پیشنهاد میکنم این ویدیو رو از دست ندید
سوالی داشتید داخل کامنها بپرسید در اسرع وقت جواب میدم


لینک دستورات

https://t.me/biteasypro/385

https://www.youtube.com/watch?v=GY0qJQd9WcA


## وایرگارد با همراه اول 

وایرگارد با همراه اول 
ابتدا یک کانفیگ وایرگارد singbox config رو طبق کلیپ درست میکنیم 
بعد تبدیلش میکنیم به کانفیگ
singbox outbound
اما چطور؟ طبق کلیپ هیچ حرکت اضافه ای لازم نیس
تنها چیزی که برای ما مهمه همین ساختن
 singbox outbound

 
[وایرگارد با همراه اول ](https://threadreaderapp.com/thread/1776976000032604597.html)


##  آموزش نصب سینگ باکس در ویندوز 

سلام با آموزش نصب سینگ باکس در ویندوز در خدمتتون هستم کانفیگهای هیستریا در این نرم  
به توضیحات ویدئو هم دقت کنید

 نصب اپلیکیشن سینگ باکس در ویندوز+install sing box windows client 

 نصب آپ سینک باکس داخل ویندوز رو تو این ویدیو با هم یاد میگیریم
یه آموزش ناب و عالی برای سینگ باکس
برای استفاده از کانفیگهای سینک باکس سعی کنین از این نرم افزار استفاده کنید
( اصلاحیه :  اگر برای شما به این شیوه کار نکرد فقط قسمت پلاگین رو انجام ندین پس فقط کرنل رو در سینگ آپدیت کنین و کانفیگ رو اضافه کنید و تمام )

لینک کانال تلگرام تو بیو پیج و پایین توضیحات هستش


https://www.youtube.com/watch?v=v6_z4BUUZSs

