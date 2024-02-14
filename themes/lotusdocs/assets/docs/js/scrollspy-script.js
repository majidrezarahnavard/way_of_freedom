//ScrollSpy - via https://github.com/kimyvgy/simple-scrollspy
window.onload = function () {
    scrollSpy('toc', {
        sectionClass: 'h1,h2,h3,h4',
        //   menuActiveTarget: 'href',
        offset: 100,
        // scrollContainer: null,
        // smooth scroll
        // smoothScroll: true,
        //   smoothScrollBehavior: function(element) {
        //     console.log('run "smoothScrollBehavior"...', element)
        //     element.scrollIntoView({ behavior: 'smooth' })
        //   }
    })
}