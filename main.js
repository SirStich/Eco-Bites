document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("scroll", function() {
        scrollFunction();
    });

    function scrollFunction() {
        const scrollToTopButton = document.getElementById("scroll-to-top");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    }

    document.getElementById("scroll-to-top").addEventListener("click", function() {
        scrollToTop();
    });

    function scrollToTop() {
        const homeSection = document.getElementById("hero-section");
        if (homeSection) {
            homeSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

});

const aboutSection = document.getElementById("about");
const contactSection = document.getElementById("contact");


const aboutLinkBtn = document.getElementById("about-btn");
const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

aboutLinkBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
