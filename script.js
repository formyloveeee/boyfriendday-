/* =========================================
BOYFRIEND DAY WEBSITE
SCRIPT.JS
========================================= */

/* =========================================
ELEMENTS
========================================= */

const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".page-section");

const sectionButtons = document.querySelectorAll("[data-section]");

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

/* =========================================
OPEN SIDEBAR
========================================= */

function openSidebar() {

if (!sidebar) return;

sidebar.classList.add("open");

if (sidebarOverlay) {
    sidebarOverlay.classList.add("open");
}

document.body.style.overflow = "hidden";

}

/* =========================================
CLOSE SIDEBAR
========================================= */

function closeSidebar() {

if (!sidebar) return;

sidebar.classList.remove("open");

if (sidebarOverlay) {
    sidebarOverlay.classList.remove("open");
}

document.body.style.overflow = "";

}

/* =========================================
MOBILE MENU BUTTON
========================================= */

if (menuBtn) {

menuBtn.addEventListener("click", function () {

    openSidebar();

});

}

/* =========================================
CLOSE BUTTON
========================================= */

if (closeBtn) {

closeBtn.addEventListener("click", function () {

    closeSidebar();

});

}

/* =========================================
CLICK OUTSIDE SIDEBAR
========================================= */

if (sidebarOverlay) {

sidebarOverlay.addEventListener("click", function () {

    closeSidebar();

});

}

/* =========================================
SHOW SECTION
========================================= */

function showSection(sectionId) {

if (!sectionId) return;


/* Hide every section */

sections.forEach(function (section) {

    section.classList.remove("active-section");

});


/* Show requested section */

const selectedSection =
    document.getElementById(sectionId);

if (selectedSection) {

    selectedSection.classList.add("active-section");

}


/* Update sidebar active item */

navItems.forEach(function (item) {

    item.classList.remove("active");

    if (item.dataset.section === sectionId) {

        item.classList.add("active");

    }

});


/* Close mobile sidebar */

closeSidebar();


/* Go to top */

window.scrollTo({
    top: 0,
    behavior: "smooth"
});

}

/* =========================================
SIDEBAR NAVIGATION
========================================= */

navItems.forEach(function (item) {

item.addEventListener("click", function () {

    const sectionId =
        item.dataset.section;

    showSection(sectionId);

});

});

/* =========================================
ALL DATA-SECTION BUTTONS
========================================= */

sectionButtons.forEach(function (button) {

button.addEventListener("click", function () {

    const sectionId =
        button.dataset.section;

    showSection(sectionId);

});

});

/* =========================================
SURPRISE BUTTON
========================================= */

if (surpriseBtn && surpriseMessage) {

surpriseBtn.addEventListener("click", function () {

    surpriseMessage.classList.toggle("show");


    if (surpriseMessage.classList.contains("show")) {

        surpriseBtn.innerHTML =
            "You found it ♡";

        surpriseBtn.style.background =
            "var(--rose-dark)";

    } else {

        surpriseBtn.innerHTML =
            "Open your surprise ♡";

        surpriseBtn.style.background =
            "var(--plum)";

    }

});

}

/* =========================================
TOP HEART
========================================= */

const topHeart =
document.querySelector(".top-heart");

if (topHeart) {

topHeart.addEventListener("click", function () {

    createFloatingHeart(
        window.innerWidth / 2,
        70
    );

});

}

/* =========================================
FLOATING HEART
========================================= */

function createFloatingHeart(x, y) {

const heart =
    document.createElement("div");

heart.innerHTML = "♡";

heart.style.position = "fixed";

heart.style.left = x + "px";

heart.style.top = y + "px";

heart.style.zIndex = "9999";

heart.style.pointerEvents = "none";

heart.style.fontSize =
    (16 + Math.random() * 12) + "px";

heart.style.color =
    "rgba(184,111,124,0.75)";

heart.style.transform =
    "translate(-50%, -50%)";

heart.style.transition =
    "all 1.3s ease";

document.body.appendChild(heart);


requestAnimationFrame(function () {

    heart.style.top =
        (y - 90) + "px";

    heart.style.opacity = "0";

    heart.style.transform =
        "translate(-50%, -50%) scale(1.4)";

});


setTimeout(function () {

    heart.remove();

}, 1400);

}

/* =========================================
RANDOM HEARTS ON HERO CLICK
========================================= */

const heroCard =
document.querySelector(".hero-card");

if (heroCard) {

heroCard.addEventListener("dblclick", function (event) {

    for (let i = 0; i < 5; i++) {

        setTimeout(function () {

            createFloatingHeart(
                event.clientX +
                (Math.random() * 80 - 40),

                event.clientY +
                (Math.random() * 40 - 20)
            );

        }, i * 100);

    }

});

}

/* =========================================
ESC KEY
========================================= */

document.addEventListener("keydown", function (event) {

if (event.key === "Escape") {

    closeSidebar();

}

});

/* =========================================
PREVENT SIDEBAR SCROLL LOCK ISSUES
========================================= */

window.addEventListener("resize", function () {

if (window.innerWidth > 700) {

    document.body.style.overflow = "";

    if (sidebar) {
        sidebar.classList.remove("open");
    }

    if (sidebarOverlay) {
        sidebarOverlay.classList.remove("open");
    }

}

});

/* =========================================
PAGE LOADING
========================================= */

window.addEventListener("load", function () {

/* Always start from HOME */

showSection("home");

});

/* =========================================
LITTLE TOUCH:
RANDOM HEART WHEN CLICKING
SPECIAL CARDS
========================================= */

const specialCards =
document.querySelectorAll(
".story-card, .love-card, .little-card"
);

specialCards.forEach(function (card) {

card.addEventListener("click", function (event) {

    if (Math.random() > 0.65) {

        createFloatingHeart(
            event.clientX,
            event.clientY
        );

    }

});

});

/* =========================================
DOUBLE CLICK ON LETTER
========================================= */

const letterCard =
document.querySelector(".letter-card");

if (letterCard) {

letterCard.addEventListener("dblclick", function (event) {

    for (let i = 0; i < 7; i++) {

        setTimeout(function () {

            createFloatingHeart(
                event.clientX +
                (Math.random() * 120 - 60),

                event.clientY +
                (Math.random() * 50 - 25)
            );

        }, i * 100);

    }

});

}

/* =========================================
FINAL CONSOLE MESSAGE
========================================= */

console.log(
"♡ This little world was made with love."
);

console.log(
"Happy Boyfriend Day, Sirr Jii ♡"
);