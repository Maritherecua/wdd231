const cardsContainer = document.querySelector('#services');
const buttons = document.querySelectorAll('.mybuttons button');
const path = "./data/services.json";

let allServices = [];

// Fetch services data
async function fetchServices() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        allServices = data.services;
        displayServices(allServices);
        setupFilters();
    } catch (error) {
        console.error("Error fetching services:", error);
    }
}

// Display services cards
function displayServices(services) {
    cardsContainer.innerHTML = "";

    services.forEach(service => {
        const servicecard = document.createElement('section');
        servicecard.classList.add('scard');

        servicecard.innerHTML = `
            <h2>${service.name}</h2>
            <img src="images/${service.photo}" alt="${service.name}" width="300" height="200" loading="lazy">
            <p>${service.description}</p>
            <span>${service.cost}</span>
        `;

        cardsContainer.appendChild(servicecard);
    });
}

// Setup filter buttons
function setupFilters() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.id;
            if (filter === 'all') {
                displayServices(allServices);
            } else {
                const filtered = allServices.filter(service =>
                    service.name.toLowerCase().includes(filter)
                );
                displayServices(filtered);
            }
        });
    });
}

// Initialize
fetchServices();