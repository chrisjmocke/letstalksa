const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const revealEls = document.querySelectorAll(".reveal-group");

const observer = new IntersectionObserver(
  (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealEls.forEach((el, idx) => {
  el.style.transitionDelay = `${Math.min(idx * 65, 340)}ms`;
  observer.observe(el);
});
