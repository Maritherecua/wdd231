const myInfo = new URLSearchParams(window.location.search);
const STORAGE_KEY = 'contactFormData';
const storedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const firstName = myInfo.get('first') || storedFormData.first || '';
const lastName = myInfo.get('last') || storedFormData.last || '';
const appointmentDate = myInfo.get('date') || storedFormData.date || '';
const phone = myInfo.get('phone') || storedFormData.phone || '';

document.querySelector('#message').innerHTML = `<p>We have scheduled an appointment for ${firstName} ${lastName} on ${appointmentDate}.</p>
<p>We will call you back at ${phone}</p>`;

localStorage.removeItem(STORAGE_KEY);

