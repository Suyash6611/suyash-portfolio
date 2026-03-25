
// =====================
// TYPING EFFECT (Hero)
// =====================
const text = "Mechanical Design Engineer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}

document.getElementById("typing").innerHTML = "";
typing();


// =====================
// SMOOTH SCROLL
// =====================
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// =====================
// ACTIVE NAV LINK
// =====================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
if (link.getAttribute("href") === "#" + current) {
    link.classList.add("active");
}

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#38bdf8";
        }
    });
});


// =====================
// FADE-IN ANIMATION
// =====================
const fadeElements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
});

fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});


// =====================
// SCROLL TO TOP BUTTON
// =====================
const btn = document.createElement("button");
btn.innerText = "↑";

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.padding = "10px";
btn.style.fontSize = "18px";
btn.style.borderRadius = "50%";
btn.style.border = "none";
btn.style.cursor = "pointer";
btn.style.background = "#38bdf8";
btn.style.color = "black";
btn.style.display = "none";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =====================
// IMAGE CLICK ZOOM (BONUS 🔥)
// =====================
const images = document.querySelectorAll(".image-grid img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.style.maxWidth = "90%";
        bigImg.style.maxHeight = "90%";
        bigImg.style.borderRadius = "10px";

        popup.appendChild(bigImg);

        popup.addEventListener("click", () => {
            popup.remove();
        });

        document.body.appendChild(popup);
    });
});