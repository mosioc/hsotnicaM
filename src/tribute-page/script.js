// smooth section reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

// quote slider
const quotes = document.querySelectorAll(".quote");
const dotsContainer = document.getElementById("dots");
let current = 0;

// create dots
quotes.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToQuote(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function goToQuote(n) {
  quotes[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (n + quotes.length) % quotes.length;
  quotes[current].classList.add("active");
  dots[current].classList.add("active");
}

document.getElementById("next").onclick = () => goToQuote(current + 1);
document.getElementById("prev").onclick = () => goToQuote(current - 1);

// auto-play every 7 seconds
setInterval(() => goToQuote(current + 1), 7000);

// counter animation
const counters = document.querySelectorAll(".number");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = +entry.target.getAttribute("data-target");
        let count = 0;
        const inc = target / 80;
        const timer = setInterval(() => {
          count += inc;
          if (count >= target) {
            const display =
              target >= 1000 ? `${(target / 1000).toFixed(1)}B` : target;
            entry.target.textContent = display;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.ceil(count);
          }
        }, 30);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((c) => counterObserver.observe(c));

// back to top button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 600);
});
toTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// console easter egg
console.log(
  "%cstay hungry. stay foolish.",
  "font-size: 2rem; color: #268bd2; font-weight: bold;"
);
