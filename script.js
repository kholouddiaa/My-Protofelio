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
  ".section, .skill-card, .project-card, .about-box, .experience-box, .education-box, .cert-box, .section-title, .about p, .contact-box, .footer, .profile-card"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      if (entry.target.classList.contains("section")) {
        entry.target.classList.add("show-section");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.add("active");
      }

    }
  });
}, { threshold: 0.15 });



revealElements.forEach(el => {
  observer.observe(el);
});


/* =========================
   Smooth Section Animation on Click
========================= */
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    // scroll smooth
    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    // restart animation after scroll
    setTimeout(() => {
      targetSection.classList.remove("show-section");

      void targetSection.offsetWidth; // force reflow

      targetSection.classList.add("show-section");
    }, 600);
  });
});


