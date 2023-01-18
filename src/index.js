import './style.css';
import { createPage } from './initialPage';
import { createAboutPage } from './aboutPage';
import { createMenuPage } from './menuPage';

function addEvents() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'home':
                    createPage()
                    addEvents()
                    break;
                case 'about':
                    createAboutPage()
                    addEvents()
                    break;
                case 'menu':
                    createMenuPage();
                    addEvents();
                    break;
                case 'contact':
                    console.log('contact');
                    break;
                default:
                    break;
            }
        })
    })
}


createPage();
addEvents();