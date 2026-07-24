document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hero Buttons

const exploreBtn = document.querySelector(".primary");
const uploadBtn = document.querySelector(".secondary");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        window.location.href = "notes.html";
    });
}

if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
        window.location.href = "upload.html";
    });
}

// Hero Search

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

function searchNotes() {
    if (!searchInput) return;
    let keyword = searchInput.value.trim();
    if (keyword === "") {
        alert("Please enter a course, subject or note.");
        return;
    }
    alert("Searching for: " + keyword);
}

if (searchButton) {
    searchButton.addEventListener("click", searchNotes);
}

if (searchInput) {
    searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchNotes();
        }
    });
}

// Statistics Counter

const counters = document.querySelectorAll(".stat-box h2");
counters.forEach(counter => {
    const target = Number(counter.innerText.replace(/\D/g, ""));
    const hasPlus = counter.innerText.includes("+");
    let count = 0;
    const speed = Math.ceil(target / 100);
    const timer = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        counter.innerText = hasPlus ? count + "+" : count;
    }, 20);
});

// Active Navbar

const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Newsletter Validation

const emailInput = document.querySelector(".newsletter input");
const subscribeBtn = document.querySelector(".newsletter button");

if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        if (!pattern.test(email)) {
            alert("Please enter a valid email.");
            return;
        }
        alert("Thank you for subscribing!");
        emailInput.value = "";
    });
}

// Download Buttons

const downloadButtons = document.querySelectorAll(".note-card button");
downloadButtons.forEach(button => {

    if (button.innerText.toLowerCase().includes("download")) {
        button.addEventListener("click", () => {
            alert("Download started...");
        });
    }
});
// FAQ Accordion

const faqQuestions = document.querySelectorAll(".question");
faqQuestions.forEach(question => {

    const answer = question.querySelector("p");
    const title = question.querySelector("h3");

    if (!answer || !title) return;

    answer.style.display = "none";
    title.addEventListener("click", () => {
        faqQuestions.forEach(item => {
            const p = item.querySelector("p");
            if (item !== question) {
                p.style.display = "none";
            }
        });

        answer.style.display =
            answer.style.display === "block"
                ? "none"
                : "block";
    });
});

// Contact Form Validation

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent successfully!");
        this.reset();
    });
}

// Upload Form Validation

const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
    uploadForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Notes uploaded successfully!");
        this.reset();
    });
}

// Preview PDF Buttons

document.querySelectorAll(".preview-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert("PDF Preview feature will be available soon.");
    });
});

// Search Categories

document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        const course = card.querySelector("h3").innerText;
        alert("Opening " + course + " notes...");
    });
});

// Highlight Current Section

window.addEventListener("scroll", () => {

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
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

// Scroll to Top Button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#2563eb";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.2)";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Welcome Message

window.addEventListener("load", () => {
    console.log("Study Access Loaded Successfully");
});

function downloadPDF(file) {
    const link = document.createElement("a");
    link.href = file;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}