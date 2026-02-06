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
