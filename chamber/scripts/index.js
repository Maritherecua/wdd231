// Fetch and display company members
async function displayMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        const spotlightContainer = document.getElementById('spotlight-container');

        // Get 3 random gold or silver companies for spotlight
        const goldSilverMembers = data.members.filter(member => member.level.toLowerCase() === 'gold' || member.level.toLowerCase() === 'silver');
        const randomMembers = goldSilverMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        // Display each spotlight member
        randomMembers.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'showCompanies';

            memberCard.innerHTML = `
                <div class="comp-heading">
                    <h3>${member['company-name']}</h3>
                </div>
                <div class="companyInfo">
                    <img src="images/${member.image}" alt="${member['company-name']} logo" width="100" height="100" onerror="this.src='images/placeholder.webp'">
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><strong>Membership Level:</strong> <span class="level-${member.level.toLowerCase()}">${member.level}</span></p>
                    <a href="${member.url}" target="_blank" class="visit-btn">Visit Website</a>
                </div>
            `;

            spotlightContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error('Error loading members:', error);
    }
}

// Display sample events
function displayEvents() {
    const eventsSection = document.getElementById('events-section');
    const events = [
        {
            title: 'Monthly Networking Breakfast',
            date: 'February 15, 2026',
            time: '8:00 AM - 9:30 AM'
        },
        {
            title: 'Chamber Annual Gala',
            date: 'March 20, 2026',
            time: '6:00 PM - 10:00 PM'
        }
    ];

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
        `;
        eventsSection.appendChild(eventDiv);
    });
}

// Display current weather (sample)
function displayWeather() {
    const weatherSection = document.getElementById('weather-section');
    const reportSpan = document.getElementById('report');

    // Sample weather data
    reportSpan.innerHTML = `
        <div>
            <p><strong>Temperature:</strong> 72°F</p>
            <p><strong>Condition:</strong> Partly Cloudy</p>
            <p><strong>Humidity:</strong> 65%</p>
        </div>
    `;
}

// Display forecast (sample)
function displayForecast() {
    const forecastSpan = document.getElementById('forecast');

    forecastSpan.innerHTML = `
        <div>
            <p><strong>Tomorrow:</strong> Sunny, 75°F</p>
            <p><strong>Friday:</strong> Cloudy, 70°F</p>
            <p><strong>Saturday:</strong> Rainy, 65°F</p>
        </div>
    `;
}

// Call the functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    displayWeather();
    displayForecast();
    displayMembers();
});
