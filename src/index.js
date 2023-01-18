import './style.css';
import { createHomePage } from './initialPage';
import { createAboutPage } from './aboutPage';
import { createMenuPage } from './menuPage';
import { createContactPage } from './contactPage';

function addEvents() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'home':
                    createHomePage()
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
                    createContactPage();
                    addEvents();
                    break;
                default:
                    break;
            }
        })
    })
}


createHomePage();
addEvents();