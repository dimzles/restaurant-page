import './style.css';
import { createPage } from './initialPage';
import { createAboutPage } from './aboutPage';

function addEvents() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            switch (btn.id) {
                case 'about':
                    createAboutPage();
            }
        })
    })
}


createPage();
addEvents();