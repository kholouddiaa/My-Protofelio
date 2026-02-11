/* =========================
   BURGER MENU
========================= */
const burger = document.getElementById("burger");
const dropdown = document.getElementById("dropdown");

burger.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});

// Close menu when clicking link
document.querySelectorAll("#dropdown a").forEach(link => {
  link.addEventListener("click", () => {
    dropdown.classList.remove("show");
  });
});


/* =========================
   SMOOTH REVEAL ANIMATION
========================= */
const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .about-box, .experience-box, .education-box, .cert-box"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => {
  observer.observe(el);
});
