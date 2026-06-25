// ===========================================
// D Akhila Reddy Portfolio JavaScript
// ===========================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===========================================
// Active Navigation
// ===========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================================
// Navbar Shadow
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }

});

// ===========================================
// Scroll Reveal Animation
// ===========================================

const revealElements = document.querySelectorAll(
".skill-card,.project-card,.certificate-card,.timeline-item,.contact-card,.about-content"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

// ===========================================
// Scroll To Top Button
// ===========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================================
// Typing Animation
// ===========================================

const typing = document.getElementById("typing");

if (typing) {

    const roles = [

        "Aspiring Software Developer",
        "Java Developer",
        "Python Developer",
        "Web Developer",
        "Data Analytics Enthusiast"

    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const current = roles[roleIndex];

        if (!deleting) {

            typing.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            typing.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length) {

                    roleIndex = 0;

                }

                charIndex = 0;

            }

        }

        setTimeout(type, deleting ? 50 : 100);

    }

    type();

}

// ===========================================
// Contact Form
// ===========================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you for contacting me! I'll get back to you soon.");

        form.reset();

    });

}

// ===========================================
// Button Hover Animation
// ===========================================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

// ===========================================
// Footer Year
// ===========================================

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

// ===========================================

console.log("Welcome to D Akhila Reddy Portfolio");