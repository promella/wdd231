import { places } from "../data/discover.mjs";

// =====================
// DISPLAY DISCOVER CARDS
// =====================

const discoverGrid = document.querySelector("#discover-grid");

places.forEach((place) => {


const card = document.createElement("article");

card.classList.add("card");

card.innerHTML = `
    <h2>${place.name}</h2>

    <figure>
        <img
            src="${place.image}"
            alt="${place.name}"
            loading="lazy"
            width="300"
            height="200">
    </figure>

    <address>${place.address}</address>

    <p>${place.description}</p>

    <button type="button">Learn More</button>
`;

discoverGrid.appendChild(card);


});

// =====================
// VISITOR MESSAGE
// =====================

const visitorMessage =
document.querySelector("#visitor-message");

const lastVisit =
localStorage.getItem("lastVisit");

const currentVisit = Date.now();

if (!lastVisit) {


visitorMessage.textContent =
    "Welcome! Let us know if you have any questions.";


} else {

const millisecondsPerDay =
    1000 * 60 * 60 * 24;

const daysBetween =
    Math.floor(
        (currentVisit - Number(lastVisit))
        / millisecondsPerDay
    );

if (daysBetween < 1) {

    visitorMessage.textContent =
        "Back so soon! Awesome!";

} else if (daysBetween === 1) {

    visitorMessage.textContent =
        "You last visited 1 day ago.";

} else {

    visitorMessage.textContent =
        `You last visited ${daysBetween} days ago.`;
}


}

localStorage.setItem(
"lastVisit",
currentVisit
);
