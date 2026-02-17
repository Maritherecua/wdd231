const STORAGE_KEY = 'contactFormData';

const form = document.querySelector('form');

if (form) {
    const formFields = ['first', 'last', 'phone', 'date'];
    const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    formFields.forEach((fieldName) => {
        const input = form.querySelector(`[name="${fieldName}"]`);
        if (!input) return;

        if (savedFormData[fieldName]) {
            input.value = savedFormData[fieldName];
        }

        input.addEventListener('input', () => {
            const currentFormData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            currentFormData[fieldName] = input.value;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentFormData));
        });
    });

    form.addEventListener('submit', () => {
        const latestFormData = {};
        formFields.forEach((fieldName) => {
            const input = form.querySelector(`[name="${fieldName}"]`);
            latestFormData[fieldName] = input ? input.value : '';
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(latestFormData));
    });
}