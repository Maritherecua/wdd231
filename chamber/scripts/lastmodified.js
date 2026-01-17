const dateObject = new Date();
document.querySelector("#currentYear").textContent = dateObject.getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${new Date(document.lastModified).toLocaleDateString()}`