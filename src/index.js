import { aboutCats } from './utils/isEven.js';

const likeCats = document.getElementById('likes-cats');
const isAllergicToCats = document.getElementById('is-allergic');
const isOwnCat = document.getElementById('owns-one');
const btnGetAdvice = document.getElementById('give-advice');
const display = document.getElementById('message');

btnGetAdvice.addEventListener('click', () => {
    const likes = likeCats.checked;
    const allergic = isAllergicToCats.checked;
    const owns = isOwnCat.checked;

    display.innerText = aboutCats(likes, allergic, owns);
});
