import { hairData } from "../data/hairdata.mjs";

const container = document.querySelector("#tips");

try {
    const filtered = hairData.filter(item => item.category !== "");

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Benefit:</strong> ${item.benefit}</p>
            <p><strong>Usage:</strong> ${item.usage}</p>
        `;

        container.appendChild(card);
    });

} catch (error) {
    console.log(error);
}