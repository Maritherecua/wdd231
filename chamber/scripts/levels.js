const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
closeModal.addEventListener('click', () => mlModal.close());

const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');

// Modal 1 - not for profit
const ml1Btn = document.querySelector('#ml1Btn');
ml1Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Non Profit Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>You'll get a special recognition at the annual gala</li>
    <li>You get to attend a special networking event</li>
    </ul>
    <p>COST: Free</p>
    `
    mlModal.showModal();
});

// Modal 2 - not for profit
const ml2Btn = document.querySelector('#ml2Btn');
ml2Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Bronze Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Discount tickets to specific Games</li>
    <li>You'll get a award recognition</li>
    <li>You get to attend a special networking event</li>
    </ul>
    <p>COST: $25 annual</p>
    `
    mlModal.showModal();
});

// Modal 3 - not for profit
const ml3Btn = document.querySelector('#ml3Btn');
ml3Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Silver Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Free soda at the snack bar</li>
    <li>Discount tickets to seasonal Games</li>
    <li>You'll get a nice recognition plaque</li>
    <li>You get a special recognition at the annual gala</li>
    </ul>
    <p>COST: $40 annual</p>
    `
    mlModal.showModal();
});

// Modal 4 - non profit
const ml4Btn = document.querySelector('#ml4Btn');
ml4Btn.addEventListener('click', () => {
    mltitle.innerHTML = "Gold Membership"
    mldetails.innerHTML = `<p>Benefits include:</p>
    <ul>
    <li>Home Page Spotlight</li>
    <li>Invitation to special events</li>
    <li>Free drink at the snack bar</li>
    <li>Discount tickets to all Games</li>
    <li>You'll get a nice recognition plaque</li>
    <li>You get a special recognition at the annual gala</li>
    </ul>
    <p>COST: $60 annual</p>
    `
    mlModal.showModal();
});

//Add a hidden date input with today's date
document.querySelector('#today').value = new Date();