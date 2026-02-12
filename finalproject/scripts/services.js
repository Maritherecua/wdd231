// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('#services');
    const buttons = document.querySelectorAll('.mybuttons button');

    if (!cardsContainer) {
        console.error("ERROR: #services container not found");
        return;
    }

    let allServices = [];

    // Fetch services data
    async function fetchServices() {
        try {
            console.log("📡 Fetching services from: ./data/services.json");
            const response = await fetch('./data/services.json');
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: Server returned error`);
            }
            
            const data = await response.json();
            
            if (!data.services || !Array.isArray(data.services)) {
                throw new Error("Invalid JSON structure");
            }
            
            allServices = data.services;
            console.log("✅ Loaded", allServices.length, "services");
            displayServices(allServices);
            setupFilters();
            
        } catch (error) {
            console.error("❌ Failed to load services:", error.message);
            console.log("Make sure: http://localhost:8000/finalproject/services.html is running");
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
                <img src="images/${service.photo}" alt="${service.name}" width="400" height="300" loading="lazy">
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