const cards = document.querySelectorAll('#services .card');
const path = "./data/services.json";

let services = [];
//function to fetch data
async function fetchServices() {
    try {
        const response = await fetch(path);
        services = await response.json();
        displayServices();
    } catch (error) {
        console.error("Error fetching services:", error);
    }
}

function displayServices() {
    cards.forEach((card, index) => {
        if (services[index]) {
            card.querySelector('h3').textContent = services[index].title;
            card.querySelector('p').textContent = services[index].description;
        }
    });
}

fetchServices();

const displayServices= (services) => {cards.innerHTML = "";

    services.forEach(service => {
        const servicename= document.createElement('h2');
        const servicedescription= document.createElement('p');
        const servicecost = document.createElement('span');
        const serviceimage = document.createElement('img');

        servicename.textContent = service.name;
        servicedescription.textContent = service.description;
        servicecost.textContent = service.cost;
        serviceimage.src = `images/${service.photo_url}`;
        serviceimage.alt = service.name;
        serviceimage.loading = "lazy";

        const servicecard = document.createElement('section');
        servicecard.classList.add('card');
        servicecard.appendChild(servicename);
        servicecard.appendChild(servicedescription);
        servicecard.appendChild(servicecost);
        servicecard.appendChild(serviceimage);
        cards.appendChild(servicecard);
    });
}