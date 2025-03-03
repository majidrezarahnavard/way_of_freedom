const fileUrl =
    "https://raw.githubusercontent.com/majidrezarahnavard/way_of_freedom/refs/heads/main/docs/" +
    (location.href.split("/")[3].split("#")[0] == ""
        ? "index"
        : location.href.split("/")[3].split("#")[0]) +
    ".md";

if (!(fileUrl.split("/").pop() == "index.md")) {
    const downloadDiv = document.createElement("div");
    downloadDiv.style.display = "flex";
    downloadDiv.style.alignItems = "center";
    downloadDiv.classList.add("download-page");
    downloadDiv.style.justifyContent = "center";
    downloadDiv.style.width = "100%";
    downloadDiv.style.height = "50px";
    downloadDiv.style.fontSize = "1.7em";
    downloadDiv.style.cursor = "pointer";
    downloadDiv.style.transition = "all 0.3s ease-in-out";
    downloadDiv.innerHTML = "⬇️ دانلود این صفحه ";

    downloadDiv.onclick = async () => {
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) throw new Error("خطا در دریافت فایل");

            const blob = await response.blob();
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = fileUrl.split("/").pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("دانلود ناموفق بود:", error);
            alert("مشکلی در دانلود فایل وجود دارد.");
        }
    };



    document.getElementsByClassName("md-content__inner md-typeset")[0].appendChild(downloadDiv);
}



