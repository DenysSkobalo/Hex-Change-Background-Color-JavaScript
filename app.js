const btn = document.getElementById('btn');
const body = document.querySelector('body');
const hex_value = document.getElementById('hex-tag');

// Array of symbols for color
// Масив з символів для кольора
const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Set the background when loading the page
// Задаємо фон при загрузці сторінки
body.style.backgroundColor = '#000000';

// We set the event to the button
// Встановлюємо подію на кнопку
btn.addEventListener('click', changeColor);

// Function
function changeColor(){
    let hex_key = '#';
    for(let i=0; i<6; i++){
        // Creating a random color
        // Створюємо рандомний колір
        const index = Math.floor(Math.random() * hex.length);
        hex_key = hex_key + hex[index];
    };
    // The created random color is passed to the span
    // Створений випадковий колір передається span
    hex_value.innerHTML = hex_key;
    // Random color is used
    // Застосовується рандомний колір
    body.style.background= hex_key;
    // Animation of random color application
    // Анімація застосування рандомного кольору
    body.style.transition = '1s';
};