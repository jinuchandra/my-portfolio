
// ============================
// MOBILE NAVIGATION
// ============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);
    menuToggle.textContent = isExpanded ? "✕" : "☰";
});

// Close menu when a navigation link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// ============================
// AUTOMATIC COPYRIGHT YEAR
// ============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

// ============================
// SCROLL REVEAL ANIMATION
// ============================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, " +
    ".project-card, .cert-card, .contact-content"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(element => {
    observer.observe(element);
});
