import './style.css';
import { createPage } from './initialPage';
import { createAboutPage } from './aboutPage';

function addEvents() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'home':
                    console.log('home')
                    createPage()
                    addEvents()
                    break;
                case 'about':
                    console.log('about')
                    createAboutPage()
                    addEvents()
                    break;
                case 'menu':
                    console.log('menu');
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