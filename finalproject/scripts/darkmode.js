const darkbtn = document.querySelector('#dark');
const pageBody = document.body;
const DARK_MODE_KEY = 'darkmode';

function applyDarkMode(isEnabled) {
    pageBody.classList.toggle('dark-mode', isEnabled);

    if (darkbtn) {
        darkbtn.setAttribute('aria-pressed', String(isEnabled));
        darkbtn.textContent = isEnabled ? '☀️' : '🌙';
    }
}

const savedDarkMode = localStorage.getItem(DARK_MODE_KEY);
applyDarkMode(savedDarkMode === 'on');

if (darkbtn) {
    darkbtn.addEventListener('click', () => {
        const isEnabled = !pageBody.classList.contains('dark-mode');
        applyDarkMode(isEnabled);
        localStorage.setItem(DARK_MODE_KEY, isEnabled ? 'on' : 'off');
    });
}