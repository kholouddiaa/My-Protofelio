# 💼 Kholoud Diaa – Portfolio Website

Modern Full-Stack Developer Portfolio built with clean UI design, smooth animations, and responsive layout.

This portfolio represents my work, skills, experience, and projects as a **Full-Stack .NET Developer**.

---

## 🚀 Live Demo

🔗 https://kholouddiaa.github.io/portfolio-website/

---

## 🛠️ Built With

- HTML5
- CSS3 (Modern UI + Glassmorphism + Animations)
- JavaScript (ES6)
- Intersection Observer API
- Responsive Design
- Font Awesome Icons

---

## ✨ Features

- 🔥 Modern Dark UI with Glow Effects
- 📱 Fully Responsive Design
- 🎯 Smooth Scroll Navigation
- 🍔 Interactive Burger Menu
- 🎬 Reveal-on-Scroll Animations
- 💼 Projects Section with GitHub & Live Demo Links
- 📄 Downloadable CV
- 📞 Contact Section with Direct Links (WhatsApp, GitHub, LinkedIn, Email)

---

## 🧠 JavaScript Functionality

### Burger Menu Toggle
```javascript
burger.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
```

### Smooth Reveal Animation (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });
```

### Smooth Scroll Navigation
```javascript
targetSection.scrollIntoView({
  behavior: "smooth"
});
```

---

## 📂 Project Structure

```
portfolio/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── CV.pdf
└── images/
    └── me.png
```

---

## 📌 Sections Included

- Hero Section
- About Me
- Skills
- Projects
- Education
- Experience
- Certificates
- Contact
- Footer

---

## 🎯 Purpose

This portfolio showcases:

- My Full-Stack .NET skills
- Real-world projects
- Clean UI/UX design
- Responsive web development
- Modern JavaScript usage

---

## 👩‍💻 About Me

I’m a Full-Stack Developer specialized in building scalable web applications using:

- ASP.NET Core
- REST APIs
- SQL Server
- JavaScript

I build secure backend architectures and integrate them with clean, responsive user interfaces.

I don’t just write code — I build systems that grow with your business.

---

## 📫 Contact

- GitHub: https://github.com/kholouddiaa
- LinkedIn: https://www.linkedin.com/in/kholoud-diaa-8b0b0a306/
- Email: kholouddiaaelbaz@gmail.com
- WhatsApp: +20 1080147166

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub!

---

© 2026 Kholoud Diaa – Full-Stack Developer
