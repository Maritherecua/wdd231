// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Services script loaded")
    
    const cardsContainer = document.querySelector('#services');
    const buttons = document.querySelectorAll('.mybuttons button');
    const path = "./data/services.json";

    console.log("Current location:", window.location.href)
    console.log("Fetching from path:", path)
    console.log("cardsContainer:", cardsContainer)
    console.log("buttons found:", buttons.length)

    if (!cardsContainer) {
        console.error("#services container not found")
        return
    }

    let allServices = [];

    // Fetch services data
    async function fetchServices() {
        try {
            console.log("Attempting to fetch:", path)
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            allServices = data.services;
            console.log("Services loaded:", allServices.length, "services");
            displayServices(allServices);
            setupFilters();
        } catch (error) {
            console.error("Error fetching services:", error);
            // Try alternate path
            console.log("Trying alternate path: /finalproject/data/services.json")
            try {
                const response = await fetch("/finalproject/data/services.json");
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
                const data = await response.json();
                allServices = data.services;
                console.log("Alternate path worked! Services loaded:", allServices.length);
                displayServices(allServices);
                setupFilters();
            } catch (err) {
                console.error("Alternate path also failed:", err)
            }
        }
    }

    // Display services cards
    function displayServices(services) {
        cardsContainer.innerHTML = "";
        console.log("Displaying", services.length, "service cards")

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
});