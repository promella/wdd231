const msg = document.querySelector("#visit-msg");

const lastVisit = localStorage.getItem("visit");
const now = Date.now();

if (!lastVisit) {
    msg.textContent = "Welcome! First time visiting.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        msg.textContent = "Back so soon!";
    } else {
        msg.textContent = `You last visited ${days} day(s) ago.`;
    }
}

localStorage.setItem("visit", now);