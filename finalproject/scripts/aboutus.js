import { offers } from "../data/offer.js"

console.log("Offers loaded:", offers)

const showHere = document.querySelector("#offer")
const mydialog = document.querySelector("#offerdialog")
const mytitle = document.querySelector("#offerdialog h2")
const mylist = document.querySelector("#offerdialog ul")
const myclose = document.querySelector("#offerdialog button")

console.log("showHere:", showHere)
console.log("mydialog:", mydialog)

if (!showHere) {
    console.error("#offer container not found")
} else {
    function displayOffer(data) {
        console.log("Displaying", data.length, "offers")
        const fragment = document.createDocumentFragment()
        data.forEach(x => {
            const offer = document.createElement("section")
            const learnmore = document.createElement("button")
            learnmore.textContent = "Learn More"
            offer.innerHTML = `
        <div>${x.offer}</div>
        <h2>${x.title}</h2>`
            offer.appendChild(learnmore)
            learnmore.addEventListener("click", () => showstuff(x))
            fragment.appendChild(offer)
        })
        showHere.replaceChildren(fragment)
    }
    displayOffer(offers)
    
    function showstuff(x) {
        mytitle.textContent = x.title
        mylist.innerHTML = ""
        x.details.forEach(y => {
            const item = document.createElement("li")
            item.textContent = y
            mylist.appendChild(item)
        })
        mydialog.showModal()
    }

    if (myclose) {
        myclose.addEventListener("click", () => { mydialog.close(); })
    }
}
