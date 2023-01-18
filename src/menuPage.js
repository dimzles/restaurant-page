import { createHeader } from "./initialPage";
import burgerImg from './images/burger.jpg';
import curryImg from './images/curry.jpg';
import pastaImg from './images/pasta.jpg';
import saladImg from './images/salad.jpg';
import salmonImg from './images/salmon.jpg';
import tacoImg from './images/taco.jpg';

const createMenuCards = (text, imgSrc, id) => {
    const card = document.createElement('div');
    const img = document.createElement('img');
    const menuTextContainer = document.createElement('div');
    const menuText = document.createElement('p');

    menuTextContainer.classList.add('menu-text-container');
    menuText.classList.add('menu-text');
    img.classList.add('menu-img')
    card.classList.add('menu-card');

    img.setAttribute('id', `card-${id}`);
    
    menuText.textContent = text
    menuTextContainer.appendChild(menuText);



    img.src = imgSrc;

    card.appendChild(img);
    card.appendChild(menuTextContainer)

    return card;
}

const createMenuContent = () => {
    const menuContainer = document.createElement('div');
    const menuGrid = document.createElement('div');
    
    menuContainer.classList.add('menu-container');
    menuGrid.classList.add('menu-grid')
    menuGrid.setAttribute('id', 'menu-grid');
    
    menuContainer.appendChild(menuGrid)

    menuGrid.appendChild(createMenuCards('Burger', burgerImg, '1'));
    menuGrid.appendChild(createMenuCards('Curry', curryImg, '2'));
    menuGrid.appendChild(createMenuCards('Pasta', pastaImg, '3'));
    menuGrid.appendChild(createMenuCards('Salad', saladImg, '4'));
    menuGrid.appendChild(createMenuCards('Salmon', salmonImg, '5'));
    menuGrid.appendChild(createMenuCards('Tacos', tacoImg, '6'));

    return menuContainer;
}

const createMenuPage = () => {
    const content = document.getElementById('content');

    content.textContent = '';

    content.appendChild(createHeader());
    content.appendChild(createMenuContent());

    return content;
}

export { createMenuPage };