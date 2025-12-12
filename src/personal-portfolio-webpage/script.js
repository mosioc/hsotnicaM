// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// mobile menu 
const navLinks = document.querySelector(".nav-links");
if (window.innerWidth <= 768) {
  document
    .querySelector("#navbar")
    .insertAdjacentHTML("beforeend", '<button id="menu-btn">Menu</button>');
  document.getElementById("menu-btn").addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// subtle fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(30px)";
  sec.style.transition = "all 0.8s ease";
  observer.observe(sec);
});
