// Select button and navigation
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// Toggle navigation menu
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});