import { hairData } from "../data/hairdata.mjs";

const container = document.querySelector("#products");
const modal = document.querySelector("#modal");
const title = document.querySelector("#m-title");
const text = document.querySelector("#m-text");
const close = document.querySelector("#close");

hairData.forEach(item => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${item.name}</h3>
        <button>View Details</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
        title.textContent = item.name;
        text.textContent = `${item.benefit} - ${item.usage}`;
        modal.showModal();
    });

    container.appendChild(card);
});

close.addEventListener("click", () => {
    modal.close();
});