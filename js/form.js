//armazenar dados do formulário no localStorage
const form = document.querySelector('form');
const storageKey = 'formData';
const storedData = JSON.parse(localStorage.getItem(storageKey)) || {};
const inputs = form.querySelectorAll('input, select,option');

inputs.forEach(input => {
    const name = input.name;
    if (storedData[name]) {
        input.value = storedData[name];
    }

    input.addEventListener('input', () => {
        storedData[name] = input.value;
        localStorage.setItem(storageKey, JSON.stringify(storedData));
             
    });
    
})
