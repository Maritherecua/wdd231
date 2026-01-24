document.querySelector('#lastModified').textContent = "Last Modification: "+document.lastModified;

const rightNow = new Date();
//console.log(rightNow);
//console.log(rightNow.getFullYear());
document.querySelector('#currentYear').textContent = rightNow.getFullYear();