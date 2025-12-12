// highlight active section in navbar on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".main-section");
  const navLinks = document.querySelectorAll(".nav-link");

  const makeActive = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", makeActive);
  makeActive(); // run on load
});

// smooth scrolling for nav links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 20,
      behavior: "smooth",
    });
  });
});
