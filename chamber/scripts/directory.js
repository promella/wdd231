const membersContainer = document.querySelector("#members");

async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    displayMembers(data);
}
const displayMembers = (members) => {

    members.forEach((member) => {

        // Create card
        const card = document.createElement("section");
        card.classList.add("member-card");

        // Business image container
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image-container");

        const image = document.createElement("img");
        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", `${member.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");
        image.setAttribute("height", "200");

        imageDiv.appendChild(image);

        // Business info container
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("member-info");

        // Business name
        const name = document.createElement("h3");
        name.textContent = member.name;

        // Address
        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${member.address}`;

        // Phone
        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone:</strong> ${member.phone}`;

        // Website
        const website = document.createElement("a");
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit Website";

        // Membership level
        const membership = document.createElement("p");

        let level = "";

        if (member.membership === 1) {
            level = "Member";
        } else if (member.membership === 2) {
            level = "Silver";
        } else {
            level = "Gold";
        }

        membership.innerHTML = `<strong>Membership:</strong> ${level}`;

        // Description
        const description = document.createElement("p");
        description.textContent = member.description;

        // Append everything
        infoDiv.appendChild(name);
        infoDiv.appendChild(address);
        infoDiv.appendChild(phone);
        infoDiv.appendChild(website);
        infoDiv.appendChild(membership);
        infoDiv.appendChild(description);

        card.appendChild(imageDiv);
        card.appendChild(infoDiv);

        membersContainer.appendChild(card);
    });
};

getMembers();


// Footer
document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;



// Grid/List Buttons
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});