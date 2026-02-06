import {places} from '..data/places.js';
console.log(places);
//Reference to the container where the places will be displayed
const placesContainer = document.querySelector("#allplaces")
//Loop through the places and create HTML elements to display them
function displayItems(places) {
places.forEach(x => {
    //build the card for each place
    const thecard = document.createElement("div")
    //build the image element
    const theimage = document.createElement("img")
    theimage.src = `../assets/${x.image_link}`
    theimage.alt = x.name
    //build the name element
    const thename = document.createElement("h3")
    thename.textContent = x.name
    thecard.appendChild(thename)
    //build the description element
    const thedescription = document.createElement("p")
    thedescription.textContent = x.description
    thecard.appendChild(thedescription)
    thecard.appendChild(thedescription)
    //build the address element
    const theaddress = document.createElement("address")
    theaddress.textContent = x.address
    thecard.appendChild(theaddress)
    //build the cost element
    if (x.cost) {
        const thecost = document.createElement("p")
        thecost.textContent = `Cost: ${x.cost}`
        thecard.appendChild(thecost)
    }
    //build the button element
    const thebutton = document.createElement("button")
    thebutton.textContent = "Learn More"
    thecard.appendChild(thebutton)
    showHere.appendchild(thecard)})
} //end of displayItems function
displayItems(places)
//Populate the container with the information when the image is clicked
function showHere(x) {
    myname.textContent = x.name
    myinfo.textContent = `Dedicated ${x.dedicated} by ${x.person} as temple of ${x.number}`
    mydialog.showModal();
}