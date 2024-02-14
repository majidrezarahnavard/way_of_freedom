// ToC Mobile Menu (Bootstrap 5 Dropdown with ScrollSpy)
const scrollArea = document.getElementById('content');
const tocBtn = document.getElementById('toc-dropdown-btn');
scrollArea.addEventListener("activate.bs.scrollspy", function(){
    var currentItem = document.querySelector('.dropdown-menu li > a.active').innerHTML;
    tocBtn.innerHTML = currentItem;
})

tocBtn.addEventListener('shown.bs.dropdown', event => {
    tocBtn.style.borderBottom = 'none'
    tocBtn.style.borderRadius = '4px 4px 0 0'
    // console.log("dropdown opened");
})
tocBtn.addEventListener('hidden.bs.dropdown', event => {
    tocBtn.style.borderBottom = '1px solid var(--alert-border-color)'
    tocBtn.style.borderRadius = '4px'
    // console.log("dropdown closed");
});