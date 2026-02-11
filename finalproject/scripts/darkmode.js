// Store the selected elements that we are going to use. 
const darkbtn = document.querySelector('#dark');
const mainarea = document.querySelector('main')
let darkmode = localStorage.getItem("darkmode");
if (darkmode === "on") {
    mainarea.classList.add('darkon');
}


//Toggle the show class off and on
darkbtn.addEventListener('click', () => {
	mainarea.classList.toggle('darkon');
    if (mainarea.classList.contains('darkon')) {
    localStorage.setItem("darkmode", "on");
    } else{
        localStorage.setItem("darkmode", "off");
    }
    
});