const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const forecastDiv = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=-17.82&lon=31.05&units=metric&appid=YOUR_API_KEY';

// WEATHER
async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();

            displayWeather(data);
        } else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {

    const current = data.list[0];

    currentTemp.innerHTML = `${current.main.temp}&deg;C`;

    weatherDesc.textContent = current.weather[0].description;

    forecastDiv.innerHTML = '';

    const filtered = data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
    );

    filtered.slice(0, 3).forEach(day => {

        const card = document.createElement('p');

        const date = new Date(day.dt_txt);

        card.textContent =
            `${date.toLocaleDateString('en-US', { weekday: 'short' })}: ${day.main.temp}°C`;

        forecastDiv.appendChild(card);
    });
}

apiFetch();


// SPOTLIGHTS

const spotlightContainer = document.querySelector('#spotlights');

const membersURL = 'data/members.json';

async function getMembers() {
    const response = await fetch(membersURL);

    const data = await response.json();

    displaySpotlights(data.members);
}

function displaySpotlights(members) {

    const qualified = members.filter(member =>
        member.membership === 'Gold' ||
        member.membership === 'Silver'
    );

    const shuffled = qualified.sort(() => 0.5 - Math.random());

    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {

        const section = document.createElement('section');

        section.classList.add('spotlight');

        section.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.image}" alt="${member.name} logo">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>
            <p><strong>${member.membership} Member</strong></p>
        `;

        spotlightContainer.appendChild(section);
    });
}

getMembers();


// HAMBURGER MENU

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});