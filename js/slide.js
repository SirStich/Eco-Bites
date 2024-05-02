let slideIndex = 0;
carousel();

function carousel() {
    const slides = document.getElementsByClassName("mySlides");
    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(carousel, 3000);
}
