# Funds

پروژه هایی که فاند دریافت کرده اند

https://www.opentech.fund/projects-we-support/supported-projects/?sc=&filter1=&filter2=&order-by-selector=date-desc&pageno=1


## v2ray


V2Ray – Security Audit

About

V2Ray is a versatile network utility that provides a platform for building proxies to bypass network restrictions—enabling users to access the internet safely and privately in restricted contexts where surveillance and censorship are prevalent. In addition to being open source, V2Ray is designed with encryption and obfuscation functions that make it harder for surveillance forces to detect instances of the service by observing its network traffic. Because V2Ray supports multiple transport protocols and can run natively on Windows, Mac OS, and Linux, it is highly adaptable for different uses and users. This flexibility also increases the difficulty of profiling by potential attackers.
Audit Description

Through OTF’s Security Lab, 7ASecurity conducted a security review of V2Ray in March 2024, including the first-ever penetration test for the tool. The “whitebox” audit (a form of testing in which auditors have complete knowledge of the item being tested) and penetration testing focused on the key components and most commonly used features of the V2Ray toolset. The reviewers were provided with access to a reference server, documentation, and the V2Ray source code.
Scope

The assessment included whitebox tests against V2Ray servers and clients and a V2Ray server runtime analysis via the Secure Shell (SSH) protocol (a method for securely sending commands to a computer over an unsecure network). Reviewers also conducted a separate whitebox review of V2Ray’s supply chain implementation, audited against the SLSA framework—a security framework that entails a checklist of standards and controls to prevent tampering, improve integrity, and secure packages and infrastructure.
Findings

The auditors reported three notable vulnerabilities, all categorized at the “Medium” level. They also included seven recommended areas where V2Ray can harden its security surface to remove weaknesses that, while less significant than the primary vulnerabilities, could be exploited when combined with other weaknesses, or if an attacker has greater access, or in other edge cases. 

Overall, the audit showed that V2Ray is well-protected against a broad range of attack vectors. No “critical” or “high severity” issues were identified. The strengths of the system noted by 7ASecurity included:

    Resilience against common web application security threats such as command injection or SQL injection (a cyber attack that uses malicious SQL code to access sensitive data from a database)
    Robustness against malformed request headers and stress scenarios
    The presence of an extensive test suite, which can make an application easier to maintain and easier to integrate with outside tools
    Good maintenance, update, and release practices by the development team and “meticulously organized and documented” source code

The main vulnerabilities detected were related to “fingerprinting” attacks, in which attackers use device and network behaviors to target the sources of encrypted traffic. The report named three areas flagged as “Medium”-level vulnerabilities:

    The Golang programming framework V2Ray is based on does not support sending empty User Agent Header, which allows V2Ray to be distinguished as a Golang HTTP Client.
    The standard Golang TLS implementation is distinguishable from other implementations. This makes V2Ray network traffic easier to identify when assessed in combination with other behaviors, unless integrated uTLS support is enabled.
    Failure to remove Keep-Alive headers, which make V2Ray connections easier to detect 

The security audit also noted several less significant areas of exposure, many of which would require an additional vulnerability in order to be exploited:

    A vulnerability in the Mac OS version of V2Ray that could allow the injection of malicious code from V2Ray processes created by attackers (Medium)
    Unnecessary vulnerability to Denial of Service (DoS) attacks due to missing timeout settings in HTTP services (Medium)
    A lack of enforcement against older, deprecated versions of TLS, which could permit Man-in-the-Middle attacks on V2Ray users (Low)
    Use of the weaker random number generator math/rand instead of the more secure crypto/rand alternative (Low)
    Less restrictive file permission settings, which could make it too easy for attackers to access configuration files, for instance in a shared hosting scenario (Low)
    Components with known vulnerabilities in packages used directly or as underlying dependencies in V2Ray (Low)
    Exposure to memory corruption risks because V2Ray’s Linux binaries do not leverage a number of compiler flags that could mitigate potential vulnerabilities (Informational)

The final portion of the report assessed the supply chain integrity implementation of the V2Ray project, as audited against the SLSA framework. Supply chain integrity seeks to help ensure that every step in the software development process and infrastructure is secure and free from tampering. The audit found that V2Ray satisfies the requirements of SLSA v1.0 and met some but not all of the requirements of SLSA v0.1. The report details recommended steps for V2Ray to reach full compliance with SLSA v0.1, including integrating automated tools like slsa-github-generator and slsa-verifier into the build process.
Remediation

Of the issues noted above, the V2Ray team addressed the following, which 7ASecurity confirmed through retesting:

    Failure to remove Keep-Alive headers, which make V2Ray connections easier to detect (Medium)
    Use of the weaker random number generator math/rand instead of the more secure crypto/rand alternative (Low)
    Components with known vulnerabilities in packages used directly or as underlying dependencies in V2Ray (Low)
    A lack of enforcement against older, deprecated versions of TLS, which could permit Man-in-the-Middle attacks on V2Ray users (Low)
    Less restrictive file permission settings, which could make it too easy for attackers to access configuration files, for instance in a shared hosting scenario (Low)
    Unnecessary vulnerability to Denial of Service (DoS) attacks due to missing timeout settings in HTTP services (Medium)
    Exposure to memory corruption risks because V2Ray’s Linux binaries do not leverage a number of compiler flags that could mitigate potential vulnerabilities (Informational)



https://www.opentech.fund/security-safety-audits/v2ray-security-audit/

https://www.opentech.fund/wp-content/uploads/2024/07/V2R-01-V2Ray-Audit-Public-RC1.1.pdf

## فاند آمریکا

آدرس سایتی که پروژه‌های فاند شده رو لیست کرده معرفی کردم و توی اون‌سایت خیلی شفاف میشه اسامی، جزییات و مبالغی که بهشون کمک شده رو بررسی کرد.

فارغ از موافقت یا مخالفت با تصمیم اخیر ترامپ، یا وجود یه سری پروژه ناموفق در لیست از دیدگاه من و سایرین، این خبری نبود که بشه نادیده گرفت و خیلی راحت ازش عبور کرد؛ ابعاد و تاثیرات اون در آینده نزدیک احتمالا روشن‌تر میشه.

سایفون، اوت‌لاین، لنترن، وایرگارد، رستم، تور، اپن‌وی‌پی‌ان، سیگنال و ...، از جمله پروژه‌هایی هستن که مشمول تصمیم اخیر ترامپ برای متوقف‌کردن کمک‌های خارجی شدن!


https://x.com/ircfspace/status/1883962665820709214

https://www.opentech.fund/projects-we-support/supported-projects/?sc=&filter1=&filter2=&order-by-selector=date-desc&pageno=1

ابراز نگرانی فعالان ایرانی از قطع کمک‌های خارجی آمریکا: «هدیه ترامپ به مستبدان در تهران»

تصمیم رییس‌جمهوری آمریکا برای متوقف کردن تمامی کمک‌های خارجی موجی از نگرانی را در میان فعالان ایرانی برانگیخته است. آن‌ها بیم دارند که این اقدام، برنامه‌های مرتبط با ایران را تحت تاثیر قرار دهد و موجب شود جمهوری اسلامی دسترسی شهروندان به اطلاعات را بیش از پیش محدود کند.

ایران‌اینترنشنال مطلع شده است شماری از سازمان‌های حقوق بشری ایرانی، برنامه‌های مرتبط با آزادی اینترنت و فعالان حوزه رسانه و جامعه مدنی، پیام‌هایی دریافت کرده‌اند که از تعلیق سه ماهه بودجه آنان حکایت دارد.

دونالد ترامپ، اول بهمن در نخستین روز از آغاز دوره ریاست‌جمهوری خود، با صدور یک فرمان اجرایی، کمک‌‌های خارجی ایالات متحده را به مدت ۹۰ روز به حالت تعلیق درآورد تا کارآیی و همسویی آن‌ها با سیاست «اول آمریکا» مورد بررسی قرار گیرد.

یک یادداشت داخلی که میان مقام‌ها و سفارتخانه‌های آمریکا توزیع شده، نشان می‌دهد وزارت خارجه این کشور اکثر برنامه‌های جاری کمک‌های خارجی را متوقف کرده و آغاز کمک‌های جدید را نیز به حالت تعلیق درآورده است.

بر اساس آمار رسمی دولتی، واشینگتن بزرگ‌ترین اهداکننده کمک‌های بین‌المللی در جهان است و تنها در سال مالی ۲۰۲۴، بالغ بر ۳۹ میلیارد دلار در این مسیر هزینه کرده که از این مبلغ، ۶۵ میلیون دلار به تامین مالی برنامه «دموکراسی منطقه‌ای خاور نزدیک» موسوم به NERD، تحت مدیریت وزارت خارجه آمریکا اختصاص یافته است.

بنا بر گزارش سرویس تحقیقات کنگره، این برنامه از سال ۲۰۰۹ تا کنون منبع اصلی حمایت آمریکا از حقوق بشر و جامعه مدنی در ایران بوده است.

یکی از دریافت‌کنندگان کمک‌های وزارت خارجه آمریکا در رابطه با تصمیم اخیر ترامپ گفت: «به ما به‌صورت کتبی اطلاع داده شد که باید تمامی فعالیت‌های مرتبط با این برنامه را متوقف کنیم، از پنجم بهمن هیچ هزینه جدیدی ایجاد نکنیم و تا حد امکان، تعهدات خود را لغو کنیم.»

او افزود: «به نظر نمی‌رسد کسی به پیامدهای این تصمیم اندیشیده باشد. ابهامی که در اطلاعیه دریافتی [درباره قطع کمک‌ها] وجود دارد، واقعا غیرقابل باور است. مشخص نیست این فرآیند چقدر به طول خواهد انجامید.»

وزارت خارجه ایالات متحده به درخواست برای اظهار نظر درباره این تصمیم، پاسخ نداد.

https://www.iranintl.com/202501271897


شاخص ترین پروژهایی که توسط OTF ساپورت شدن تا VPN برسونن به ایرانیا در سال 2024 و 2023 رو در OTF میتونید ببینید, برای اولین بار با سرویس NoteBookLM گوگل کار کردم که ببینم چیه
23 میلیون دلار در سال 2024 و 18.4 میلیون در 2023 و مجموعا 41.3 میلیون دلار در 2سال
http://opentech.fund


![pic](https://pbs.twimg.com/media/GiZSrUkWIAYhh6k?format=jpg&name=small)


##  ایرانسک (IranSec)

گروهی به نام ایرانسک (IranSec) با دریافت فقط یک فقره فاند سال 2023 از OTF ، به عنوان تولید محتوای مربوط به امنیت کاربرها و فعالین در اینترنت 40875 دلار پول دریافت کرده.
اکانت توییتر: @IranSecurity

![pic](https://pbs.twimg.com/media/GiepsbUWYAA8aXU.jpg)

سال 2013 ایجاد شده و احتمالا تو این بازه زمانی ده‌ساله فاندهای دیگه هم گرفته. این فاندی که OTF داده تو گزارش سالیانه‌شون بود و سرچ کردن پول‌های مربوط به اینجور پروژه‌ها سخته چون به خاطر مسائل امنیتی یا اصلا منتشر نمیکنن یا با تاخیر منتشر میشن و بعضا با عناوین غیرمستقیم. 




https://threadreaderapp.com/thread/1884674257390588302.html


## Rostam VPN



Rostam VPN is an established and reliable censorship-circumvention tool that has supported a huge surge of monthly users in Iran over the last few years, responding to an increase in censorship events. The VPN app does not require account creation and relies on the open source WireGuard protocol, which has a lean codebase—allowing for easier security audits and enhanced security. The efficiency of the protocol translates into faster connection times and more responsive performance, even on networks with high latency.

The app is designed to be lightweight, especially in terms of battery usage. This is a significant advantage for mobile users who rely on VPNs throughout the day, as it ensures their device can last longer on a single charge compared to other VPN solutions that might drain the battery more quickly.

Through the Surge and Sustain Fund, OTF is supporting user-carrying costs for non-monetizable users of Rostam VPN to ensure that citizens living in repressive information environments have access to this critical anti-censorship technology. 

Rostam VPN is developed and managed by a US-based nonprofit organization, cyber security experts, and veteran advocates of internet freedom. They have been working for more than a decade to increase digital security, free circulation of information, and uncensored access to digital content for users around the world.



Funding to date
$480,000
2024$480,000 12 months
(Surge and Sustain Fund)


## Tor


Tor Secure Access Project: Maintenance

The Tor Secure Access Package is a holistic solution for each United States Agency for Global Media (USAGM) entity website to pass over the Tor network, and provides an end-to-end solution for USAGM networks’ web content to be distributed in censored or surveilled areas. 

Tor .onion addresses have proven to be one of the most successful mechanisms in overcoming censorship and protecting those doing so. Each USAGM entity received a .onion address, point-of-entry for the user to the Secure Access Package, translation and localization of custom landing pages and training materials, and training and support from Tor on censorship circumvention best practices.

The latest round of funding supports the necessary maintenance of USAGM Tor infrastructure and the launching of a limited number or new USAGM onion sites. 


Funding to date
$792,784
2024$464,174 18 months
2023$328,610 12 months


## همکاری فیلترینگ با فاند بگیران از آمریکا

طبق گزارش های @ir_gfw
  از چند روز گذشته شاهد شدت گرفتن فیلترینگ و قطع ارتباطی روش های همچون oblivion و غیره هستیم. همچنین اختلال شدید روی DNS ها قابل مشاهده است و بسیار از افراد در این اپدیت جدید قطع شده اند.

این متن نشان دهنده موضوع مهمی است که فاند بگیران در ارتباط با سیستم فاسد فیلترینگ و مافیای آن هستند.

جالب است بدانید که oblivion اصلا جز موارد فاندی از آمریکا نبوده است.

وقتی از فساد در ج.ا صحبت می کنیم از یک فساد گسترده و همه گیر در همه ابعاد صحبت می کنیم.

![pic](https://pbs.twimg.com/media/GiwdkLpWsAA4u_N?format=png&name=small)