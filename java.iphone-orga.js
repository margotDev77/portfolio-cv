
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('visible');

        }

    });

}, { threshold: 0.5 }); // Se déclenche quand 30% de l'élément est visible

// Sélectionne tous les éléments à observer

const elements = document.querySelectorAll('.blocApparition');

// Applique l'observation sur chaque élément

elements.forEach(element => observer.observe(element));



/************************************************************************** Drag screen accueil **************************************************************************/

const draggable = document.getElementById("draggable");
// const animOpenScreen = document.querySelector(".screen-content-app");

let isDraggings = false;
let startY = 0;
let currentY = 0;
let offset = 0;
const threshold = 100;

draggable.addEventListener("mousedown", (e) => {
    isDraggings = true;
    startY = e.clientY;
    draggable.style.transition = "none";
});

document.addEventListener("mousemove", (e) => {
    if (!isDraggings) return;

    currentY = e.clientY;
    offset = startY - currentY;

    if (offset > 0) {
        draggable.style.transform = `translateY(-${offset}px)`;
    }
});

document.addEventListener("mouseup", () => {
    if (!isDraggings) return;
    isDraggings = false;
    draggable.style.transition = "transform 0.3s ease-in-out";

    if (offset > threshold) {
        draggable.style.transform = `translateY(-100%)`;
        setTimeout(() => {
            draggable.style.display = "none";
            animOpenScreen.classList.add("on");
        }, 300);
    } else {
        draggable.style.transform = `translateY(0)`;
    }

});

/**************************** screen close ****************************/

function toggleScreen() {
    const content = document.getElementById('toggleContent');
    const button = document.querySelector('.lock-btn-face');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.classList.add('actve');
    } else {
        content.style.display = 'none';
        button.classList.remove('actve');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleContent').style.display = 'none';
});

let clickCount = 0;

function toggleScreen() {
    const content = document.getElementById('toggleContent');
    const button = document.querySelector('.lock-btn-face');
    const draggable = document.getElementById('draggable');

    clickCount++;

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.classList.add('actve');
    } else {
        content.style.display = 'none';
        button.classList.remove('actve');
    }

    if (clickCount % 2 === 0) {
        draggable.style.display = 'block';
        draggable.style.transform = 'translateY(0)';
    }
}


'use strict';
const tabs = document.querySelectorAll("[data-id^='app-']");
const contents = document.querySelectorAll("[data-content^='app-']");

let activeTab = tabs[0];

tabs.forEach(tab => {
    tab.addEventListener('click', function () {

        activeTab.classList.remove('active');

        tab.classList.add('active');
        activeTab = tab;

        let id = tab.getAttribute("data-id");

        contents.forEach(box => {

            box.classList.add('hide');
            box.classList.remove('show');

            if (box.getAttribute("data-content") == id) {
                box.classList.remove('hide');
                box.classList.add('show');
            }
        });
    });
});

/**************************** heure ****************************/

function updateClockAccueil() {
    const clockElement = document.getElementById('clock-screen');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    clockElement.textContent = currentTime;
}
setInterval(updateClock, 1000);
updateClockAccueil();

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    clockElement.textContent = currentTime;
}
setInterval(updateClock, 1000);
updateClock();


// function updateAppClock() {
//     const clockElement = document.getElementById('appclock');
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const currentTime = `${hours}:${minutes}`;
//     clockElement.textContent = currentTime;
// }
// setInterval(updateClock, 1000);
// updateAppClock();

function updateAppClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    document.getElementById('heures').textContent = hours;
    document.getElementById('mins').textContent = minutes;
}

setInterval(updateAppClock, 1000);

// Exécution au chargement
updateAppClock();


/**************************** heure app clockworld ****************************/

function updateOtherClocks() {
    const now = new Date();

    const otherClock = document.getElementById('clock-other');
    const parisTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
    const parisHours = String(parisTime.getHours()).padStart(2, '0');
    const parisMinutes = String(parisTime.getMinutes()).padStart(2, '0');
    otherClock.textContent = `${parisHours}:${parisMinutes}`;

    const minus6Clock = document.getElementById('clock-minus6');
    const minus6Time = new Date(now.getTime() - 6 * 60 * 60 * 1000);
    const minus6Hours = String(minus6Time.getHours()).padStart(2, '0');
    const minus6Minutes = String(minus6Time.getMinutes()).padStart(2, '0');
    minus6Clock.textContent = ` ${minus6Hours}:${minus6Minutes}`;
}

setInterval(updateOtherClocks, 1000);
updateOtherClocks();

/**************************** date ****************************/

function afficherDateAccueil() {
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const moisAnnee = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const aujourdHui = new Date();
    const jourSemaine = joursSemaine[aujourdHui.getDay()];
    const jour = aujourdHui.getDate();
    const mois = moisAnnee[aujourdHui.getMonth()];
    const jourFormate = jour < 10 ? '0' + jour : jour;
    const dateTexte = `${jourSemaine} ${jourFormate} ${mois}`;
    document.getElementById("date2").innerText = dateTexte;
}

function afficherDate() {
    const joursSemaine = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
    const aujourdHui = new Date();
    const jourSemaine = joursSemaine[aujourdHui.getDay()];
    const jour = aujourdHui.getDate();
    const jourFormate = jour < 10 ? '0' + jour : jour;
    const dateTexte = `${jourSemaine}`;
    const jourTexte = `${jourFormate}`;
    document.getElementById("date").innerText = dateTexte;
    document.getElementById("jour").innerText = jourTexte;
}

/**************************** chronometre ****************************/


let startTime;
let elapsedTime = 0;
let intervalId;
let running = false;

// Fonction pour mettre à jour l'affichage du temps
function updateChrono() {
    const now = Date.now();
    const diff = now - startTime + elapsedTime;
    const minutes = String(Math.floor(diff / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    const milliseconds = String(diff % 100).padStart(2, '0');
    document.getElementById('chrono').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

// Fonction utilitaire pour gérer les styles actifs
function setActiveButton(activeId) {
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    if (activeId) {
        document.getElementById(activeId).classList.add('active');
    }
}

// Démarrer
document.getElementById('startBtn').addEventListener('click', () => {
    if (!running) {
        startTime = Date.now();
        intervalId = setInterval(updateChrono, 10);
        running = true;
        setActiveButton('startBtn');
    }
});

// Pause
document.getElementById('pauseBtn').addEventListener('click', () => {
    if (running) {
        clearInterval(intervalId);
        elapsedTime += Date.now() - startTime;
        running = false;
        setActiveButton('pauseBtn');
    }
});

// Reprendre
document.getElementById('resumeBtn').addEventListener('click', () => {
    if (!running && elapsedTime > 0) {
        startTime = Date.now();
        intervalId = setInterval(updateChrono, 10);
        running = true;
        setActiveButton('resumeBtn');
    }
});

// Réinitialiser
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(intervalId);
    elapsedTime = 0;
    running = false;
    document.getElementById('chrono').textContent = '00:00,00';
    setActiveButton('resetBtn');
});



/************************************************************************** CONTROL PAGE **************************************************************************/

var openCtrl = document.querySelector(".openCtrl");
var overlay = document.querySelector(".container-notif");
var closeLine = document.querySelector(".fillInCtrl");

openCtrl.addEventListener("click", function () {
    overlay.style.display = "flex";
    document.body.classList.add("no-scroll");
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});

closeLine.addEventListener("click", function () {
    overlay.style.display = "none";
    document.body.classList.remove("no-scroll");
});


/**************************** scroll ****************************/

document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const dots = document.querySelectorAll(".dot");

    function updatePagination() {
        let index = 0;

        pages.forEach((page, i) => {
            const rect = page.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
                index = i;
            }
        });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    document.querySelector(".scroll-container").addEventListener("scroll", updatePagination);


    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            pages[i].scrollIntoView({ behavior: "smooth" });
        });
    });
});

/**************************** switch btn ****************************/

function findLabel(switchEl) {
    if (switchEl.previousElementSibling && switchEl.previousElementSibling.classList && switchEl.previousElementSibling.classList.contains('switch-label')) {
        return switchEl.previousElementSibling;
    }
    const container = switchEl.parentElement;
    if (container) {
        const lbl = container.querySelector('.switch-label');
        if (lbl) return lbl;
    }
    return null;
}

function setTargetsHidden(targetString, hidden) {
    if (!targetString) return;
    targetString.split(',').map(s => s.trim()).filter(Boolean).forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.classList.toggle('hidden', Boolean(hidden));
        });
    });
}

// --------- switch ----------
document.querySelectorAll('.switch').forEach(sw => {
    const label = findLabel(sw);

    (function init() {
        const isOn = sw.classList.contains('active');
        if (label) label.textContent = isOn ? (sw.dataset.on ?? sw.dataset.on ?? 'Oui') : (sw.dataset.off ?? sw.dataset.off ?? 'Non');
        setTargetsHidden(sw.dataset.target, !isOn);
    }());

    sw.addEventListener('click', () => {
        const isOn = sw.classList.toggle('active');
        if (label) label.textContent = isOn ? (sw.dataset.on ?? sw.dataset.on ?? 'Oui') : (sw.dataset.off ?? sw.dataset.off ?? 'Non');
        setTargetsHidden(sw.dataset.target, !isOn);
    });
});


// --------- switch2 ----------
document.querySelectorAll('.switch2').forEach(sw => {
    const label = findLabel(sw);

    (function init() {
        const isOn = !sw.classList.contains('desactive');
        if (label) label.textContent = isOn ? (sw.dataset.on ?? sw.dataset.on ?? 'Oui') : (sw.dataset.off ?? sw.dataset.off ?? 'Non');
        setTargetsHidden(sw.dataset.target, !isOn);
    }());

    sw.addEventListener('click', () => {
        sw.classList.toggle('desactive');
        const isOn = !sw.classList.contains('desactive');

        if (label) label.textContent = isOn ? (sw.dataset.on ?? sw.dataset.on ?? 'Oui') : (sw.dataset.off ?? sw.dataset.off ?? 'Non');
        setTargetsHidden(sw.dataset.target, !isOn);
    });
});

// --- LOGIQUE MODE AVION ---
const airplaneSwitch = document.querySelector('[data-master="airplane"]');

function setSwitchState(sw, isOn) {
    const label = sw.previousElementSibling;
    const isType1 = sw.classList.contains("switch");
    const isType2 = sw.classList.contains("switch2");

    if (isType1) {
        sw.classList.toggle("active", isOn);
        if (label) label.textContent = isOn ? sw.dataset.on : sw.dataset.off;
        setTargetsHidden(sw.dataset.target, !isOn);
    }

    if (isType2) {
        sw.classList.toggle("desactive", !isOn);
        if (label) label.textContent = isOn ? sw.dataset.off : sw.dataset.on;
        setTargetsHidden(sw.dataset.target, !isOn);
    }
}

if (airplaneSwitch) {
    airplaneSwitch.addEventListener("click", () => {
        const airplaneOn = airplaneSwitch.classList.contains("active");

        document.querySelectorAll('[data-toggle-group="connectivity"]').forEach(sw => {
            setSwitchState(sw, !airplaneOn);
        });
    });
}

function bindButtonToSwitch(button) {
    const switchSelector = button.dataset.switch;
    if (!switchSelector) return;

    const sw = document.querySelector(switchSelector);
    if (!sw) return;

    button.classList.toggle('active', sw.classList.contains('active') || !sw.classList.contains('desactive'));

    sw.addEventListener('click', () => {
        const isOn = sw.classList.contains('switch') ? sw.classList.contains('active') : !sw.classList.contains('desactive');
        button.classList.toggle('active', isOn);
    });

    button.addEventListener('click', () => {
        if (sw.classList.contains('switch')) {
            const newState = !sw.classList.contains('active');
            setSwitchState(sw, newState);
            button.classList.toggle('active', newState);
        }
        if (sw.classList.contains('switch2')) {
            const newState = sw.classList.contains('desactive');
            setSwitchState(sw, newState);
            button.classList.toggle('active', newState);
        }
    });
}

document.querySelectorAll('[data-switch]').forEach(button => {
    const switchSelector = button.dataset.switch;
    if (!switchSelector) return;

    const sw = document.querySelector(switchSelector);
    if (!sw) return;

    const isOn = sw.classList.contains('switch') ? sw.classList.contains('active') : !sw.classList.contains('desactive');
    button.classList.toggle('active', isOn);

    button.addEventListener('click', () => {
        sw.click();
        const newState = sw.classList.contains('switch') ? sw.classList.contains('active') : !sw.classList.contains('desactive');
        button.classList.toggle('active', newState);
    });
});


const switchesDarkOk = document.querySelectorAll(".switchDarkOk");

switchesDarkOk.forEach(switchButton => {
    switchButton.addEventListener("click", () => {
        switchButton.classList.toggle("desactive");

    });
});

/************************************************************************** FICHIER PAGE **************************************************************************/

/************************* visonneuse img ****************************/
const imagesViz = document.querySelectorAll(".galleryViz img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const imageInfo = document.getElementById("image-info");
const closeBton = document.querySelector(".close-bttn");

imagesViz.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        imageInfo.textContent = image.getAttribute("data-info");
    });
});

closeBton.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

/************************* sous menu img ****************************/

document.getElementById("menu-toggle").addEventListener("click", function () { document.getElementById("dropdown-menu").classList.toggle("active"); });

/**************************** heure ****************************/

function updateClockAccueil() {
    const clockElement = document.getElementById('clock-screen');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    clockElement.textContent = currentTime;
}
setInterval(updateClock, 1000);
updateClockAccueil();

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}`;
    clockElement.textContent = currentTime;
}
setInterval(updateClock, 1000);
updateClock();


/**************************** date ****************************/

function afficherDateAccueil() {
    const joursSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const moisAnnee = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const aujourdHui = new Date();
    const jourSemaine = joursSemaine[aujourdHui.getDay()];
    const jour = aujourdHui.getDate();
    const mois = moisAnnee[aujourdHui.getMonth()];
    const jourFormate = jour < 10 ? '0' + jour : jour;
    const dateTexte = `${jourSemaine} ${jourFormate} ${mois}`;
    document.getElementById("date2").innerText = dateTexte;
}

function afficherDate() {
    const joursSemaine = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
    const aujourdHui = new Date();
    const jourSemaine = joursSemaine[aujourdHui.getDay()];
    const jour = aujourdHui.getDate();
    const jourFormate = jour < 10 ? '0' + jour : jour;
    const dateTexte = `${jourSemaine}`;
    const jourTexte = `${jourFormate}`;
    document.getElementById("date").innerText = dateTexte;
    document.getElementById("jour").innerText = jourTexte;
}



/**************************** vibr bouton neum ****************************/


const vibrBtn = document.getElementById('moveVibr');
let moved = false;

vibrBtn.addEventListener('click', function () {
    if (!moved) {
        vibrBtn.style.left = '10px';
    } else {
        vibrBtn.style.left = '0px';
    }
    moved = !moved;
});
