const getCompanyGrid = document.querySelector("#comp-grid");
const getCompanyList = document.querySelector("#comp-list");


const getGridBtn = document.querySelector("#grid-btn");
const getListBtn = document.querySelector("#list-btn");

let allCompanies = [];

const url = "data/members.json"

async function getCompanies() {
    try {
        const response = await fetch(url); // fetch data from the url
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // convert the data to json
        allCompanies = data.members;

        displayGrid(allCompanies)
        displayList(allCompanies)

        // Set initial view to grid only
        getCompanyList.style.display = "none";
        getCompanyGrid.style.display = "grid";
    } catch (error) {
        console.error('Error loading members:', error);
        getCompanyGrid.innerHTML = `<p style="text-align: center; padding: 20px;">Error loading members. Please refresh the page.</p>`;
    }
}
getCompanies();




// Show grid
getGridBtn.addEventListener("click", () => {
    getCompanyList.style.display = "none";
    getCompanyGrid.style.display = "grid";
});


// Build and display grid view
function displayGrid(allCompanies) {
    getCompanyGrid.innerHTML = "";

    allCompanies.forEach(allCompany => {
        let container = document.createElement("div");

        container.innerHTML = `
            ${allCompany.image ? `<img src="images/${allCompany.image}" alt="${allCompany["company-name"]} logo" loading="lazy" width="200" height="200" style="display: block; margin: 0 auto; object-fit: contain; max-width: 100%;">` : ''}
            <h1>${allCompany["company-name"]}</h1>
            <p>${allCompany.address}</p>
            <p>${allCompany.phone}</p>
            <p><a href="${allCompany.url}" target="_blank" style="color:#045241;">${allCompany.url}</a></p>
            ${allCompany.level ? `<p>Membership: ${allCompany.level}</p>` : ''}
        `
        getCompanyGrid.appendChild(container);
    });
}

// Show list
getListBtn.addEventListener("click", () => {
    getCompanyGrid.style.display = "none";
    getCompanyList.style.display = "block";
});

// Build and display list view
function displayList(allCompanies) {
    getCompanyList.innerHTML = "";

    allCompanies.forEach(allCompany => {

        let table = document.createElement("div");
        table.classList.add("table-list");

        table.innerHTML = `
            ${allCompany.image ? `<div><img src="images/${allCompany.image}" alt="${allCompany["company-name"]} logo" loading="lazy" width="100" height="100" style="display: block; margin: 0 auto; object-fit: contain; max-width: 100%;"></div>` : ''}
            <div>${allCompany["company-name"]}</div>
            <div>${allCompany.address}</div>
            <div>${allCompany.phone}</div>
            <div><a href="${allCompany.url}" target="_blank">${allCompany.url}</a></div>
            ${allCompany.level ? `<div>Membership: ${allCompany.level}</div>` : ''}
        `
        getCompanyList.appendChild(table);

    });
}