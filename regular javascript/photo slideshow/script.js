let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) { slideIndex = document.getElementsByClassName("slide").length - 1; }
    showSlides();
}

function nextSlide() {
    showSlides();
}
