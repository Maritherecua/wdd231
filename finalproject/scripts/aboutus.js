import { offers } from "../data/offer.js"
console.log("Offers loaded:", offers)

const showHere = document.querySelector("#offer")
const mydialog = document.querySelector("#offerdialog")
const mytitle = document.querySelector("#offerdialog h2")
const mylist = document.querySelector("#offerdialog ul")
const myclose = document.querySelector("#offerdialog button")
myclose.addEventListener("click", () => { mydialog.close(); })

function displayOffer(data) {
    data.forEach(x => {
        const offer = document.createElement("section")
        const learnmore = document.createElement("button")
        learnmore.textContent = "Learn More"
        offer.innerHTML = `
    <div>${x.offer}</div>
    <h2>${x.title}</h2>`
        offer.appendChild(learnmore)
        learnmore.addEventListener("click", () => showstuff(x))
        showHere.appendChild(offer)
    }) //endloop
}
displayOffer(offers)
function showstuff(x) {
    //console.log(x)
    mytitle.textContent = x.title
    mylist.innerHTML = ""
    //console.log(x.details)
    x.details.forEach(y => {
        //console.log(y)
        const item = document.createElement("li")
        item.textContent = y
        mylist.appendChild(item)
    })
    mydialog.showModal()
}
