const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const btnScrollToTop = document.querySelector("#btnScrollToTop");


navToggle.addEventListener("click" , () => {
    primaryNav.hasAttribute("data-visible") ? navToggle.setAttribute("aria-expanded", false) : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
})

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);

    // window,scrollTo ({
    //     top:0,
    //     left:0,
    //     behavior: "smooth"
    // });   
});

