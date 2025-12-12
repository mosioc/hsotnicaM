// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 90,
        behavior: "smooth",
      });
    }
  });
});

// mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.style.background =
    window.scrollY > 100 ? "rgba(238,232,213,0.98)" : "rgba(253,246,227,0.95)";
});

// make images smaller + fade in when loaded
function handleImages() {
  document.querySelectorAll("img").forEach((img) => {
    // smaller size control
    if (img.classList.contains("hero-image")) {
      if (window.innerWidth <= 640) img.style.maxWidth = "340px";
      else if (window.innerWidth <= 768) img.style.maxWidth = "420px";
      else if (window.innerWidth <= 1024) img.style.maxWidth = "560px";
      else img.style.maxWidth = "680px";
    }

    if (img.classList.contains("design-img")) {
      img.style.maxWidth = window.innerWidth <= 768 ? "360px" : "520px";
    }

    // fade in when loaded
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add("loaded");
    } else {
      img.addEventListener("load", () => img.classList.add("loaded"));
    }
  });
}

window.addEventListener("load", handleImages);
window.addEventListener("resize", handleImages);
