import { places } from "../data/places.js";
//Reference to the container where the places will be displayed
const placesContainer = document.querySelector("#allplaces")
//Loop through the places and create HTML elements to display them
function displayItems(list) {
    list.forEach((place) => {
        //build the card for each place
        const thecard = document.createElement("div")
        //build the image element
        const theimage = document.createElement("img")
        theimage.src = `images/${place.image_link}`
        theimage.alt = place.name
        theimage.loading = "lazy"
        theimage.width = 150
        theimage.height = 150
        //build the name element
        const thename = document.createElement("h2")
        thename.textContent = place.name
        thecard.appendChild(thename)
        thecard.appendChild(theimage)
        //build the description element
        const thedescription = document.createElement("p")
        thedescription.textContent = place.description
        thecard.appendChild(thedescription)
        //build the address element
        const theaddress = document.createElement("address")
        theaddress.textContent = place.address
        thecard.appendChild(theaddress)
        //build the cost element
        if (place.cost) {
            const thecost = document.createElement("p")
            thecost.className = "cost"
            thecost.textContent = `Cost: ${place.cost}`
            thecard.appendChild(thecost)
        }
        //build the button element
        const thebutton = document.createElement("button")
        thebutton.textContent = "Learn More"
        thecard.appendChild(thebutton)
        placesContainer.appendChild(thecard)
    })
} //end of displayItems function
displayItems(places)

// Track visitor's last visit using localStorage
const timeBetweenElement = document.querySelector("#timeBetween");
const lastVisit = localStorage.getItem("lastVisit");
const currentVisit = Date.now();

if (!lastVisit) {
    // First visit
    timeBetweenElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = currentVisit - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        // Less than a day
        timeBetweenElement.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        // Exactly 1 day
        timeBetweenElement.textContent = "You last visited 1 day ago.";
    } else {
        // More than 1 day
        timeBetweenElement.textContent = `You last visited ${daysDifference} days ago.`;
    }
}

// Store current visit timestamp
localStorage.setItem("lastVisit", currentVisit);
