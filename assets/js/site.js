const pathSegments = location.pathname.split("/").filter(segment => segment.trim() !== "");
const path = pathSegments.length > 0 ? pathSegments.join("/") : "index";

const fileUrl = `https://raw.githubusercontent.com/majidrezarahnavard/way_of_freedom/main/docs/${path}.md`;

let contentContainer = document.querySelector(".md-content__inner.md-typeset");

if (!fileUrl.endsWith("index.md")) {
    const createButton = (text, onClick) => {
        const btn = document.createElement("button");
        Object.assign(btn.style, {
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "fit-content", padding: "10px 20px",
            fontSize: "1em", cursor: "pointer", transition: "0.3s",
            border: "none", borderRadius: "5px", background: "#007bff",
            color: "white"
        });
        btn.textContent = text;
        btn.onclick = onClick;
        btn.onmouseover = () => btn.style.opacity = "0.8";
        btn.onmouseleave = () => btn.style.opacity = "1";
        return btn;
    };

    const container = document.createElement("div");
    Object.assign(container.style, {
        display: "flex", justifyContent: "start", alignItems: "start",
        flexWrap: "wrap", gap: "10px", width: "100%", marginTop: "20px"
    });
    container.classList.add("no-print");
    const downloadBtn = createButton("⬇️ دانلود این صفحه", async () => {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) throw new Error("خطا در دریافت فایل");
            const blob = await response.blob();
            const link = Object.assign(document.createElement("a"), {
                href: URL.createObjectURL(blob), download: fileUrl.split("/").pop()
            });
            document.body.appendChild(link); link.click(); link.remove();
            URL.revokeObjectURL(link.href);
        } catch (e) {
            alert("مشکلی در دانلود فایل وجود دارد.");
        }
    });

    const shareBtn = createButton("🔗 اشتراک‌گذاری", () => {
        if (navigator.share) {
            navigator.share({ title: document.title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert("لینک صفحه کپی شد!");
        }
    });

    const printBtn = createButton("🖨 چاپ صفحه", () => window.print());

    container.append(downloadBtn, shareBtn, printBtn);
    contentContainer.appendChild(container);
    const filterTag = document.querySelector("filtershekan[name='category']");

    if (filterTag) {
        console.log("breadcrumb");

        const categoryContent = filterTag.getAttribute("content");
        const categories = categoryContent.split(",").map(cat => cat.trim());

        const breadcrumb = document.createElement("nav");
        breadcrumb.setAttribute("aria-label", "breadcrumb");
        breadcrumb.innerHTML = `
                <ul class="breadcrumb">
                    <li><a href="/">صفحه اصلی</a></li>
                    <li><a href="/categories">دسته‌بندی‌ها</a></li>
                    <li class="active">
                        ${categories.map(cat => `<a href="/categories/${cat}">${cat}</a>`).join("&nbsp;  |  &nbsp; ")}
                    </li>
                </ul>
            `;

        document.querySelector(".md-main").prepend(breadcrumb);
    }
    else {
        console.log("not found filterTag");
    }
}
