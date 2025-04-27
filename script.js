document.addEventListener("DOMContentLoaded", function () {
    let slideshows = document.querySelectorAll(".slideshow-container");
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");
    let currentIndex = 0;
    let currentSlides = [];

    slideshows.forEach((slideshow) => {
        let images = slideshow.querySelectorAll(".slide");

        images.forEach((img, index) => {
            img.addEventListener("click", function () {
                currentSlides = [...images]; // Get images only from this slideshow
                currentIndex = index;
                updateLightbox();
                lightbox.style.display = "flex";
            });
        });
    });

    function updateLightbox() {
        lightboxImg.src = currentSlides[currentIndex].src;
    }

    document.querySelector(".next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % currentSlides.length;
        updateLightbox();
    });

    document.querySelector(".prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + currentSlides.length) % currentSlides.length;
        updateLightbox();
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target.classList.contains("close")) {
            lightbox.style.display = "none";
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            lightbox.style.display = "none";
        } else if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % currentSlides.length;
            updateLightbox();
        } else if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + currentSlides.length) % currentSlides.length;
            updateLightbox();
        }
    });
});


// Footer visibility on scroll
const footer = document.querySelector(".footer-section");

window.addEventListener("scroll", function () {
// Check if the user has scrolled to the bottom
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    footer.style.bottom = "0"; // Show footer
} else {
    footer.style.bottom = "-100px"; // Hide footer
}
});

// Home button fade effect
document.querySelector(".home-button").addEventListener("click", function (event) {
event.preventDefault(); // Prevent instant navigation

document.body.classList.add("fade-out"); // Apply fade effect
    setTimeout(() => {
window.location.href = this.getAttribute("href"); // Navigate after fade
    }, 500); // Match transition time
});

document.addEventListener("scroll", function () {
const homeButton = document.querySelector(".home-button");

    if (window.scrollY > 50) {
        homeButton.classList.add("hidden"); // Hide button when scrolling down
    } else {
        homeButton.classList.remove("hidden"); // Show button at the top
    }
});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {  // Only show when scrolled past 100px
        footer.classList.add("show");
    } else {
        footer.classList.remove("show");
    }
});

