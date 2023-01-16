import { createHeader } from "./initialPage";
import aboutImg from './about-img.jpg';

const createImageContainer = () => {
    const img = document.createElement('img');
    const imgContainer = document.createElement('div');
    const imgTextBackground = document.createElement('div');
    const imgText = document.createElement('h3');

    img.src = aboutImg;
    img.classList.add('about-img');
    imgContainer.classList.add('img-container');
    imgTextBackground.classList.add('about-header');
    imgText.textContent = 'About Us';
    imgText.classList.add('about-header-text');

    imgTextBackground.appendChild(imgText);

    imgContainer.appendChild(img);
    imgContainer.appendChild(imgTextBackground);

    return imgContainer;
}

const createAboutText = () => {
    const textContainer = document.createElement('div');
    const text = document.createElement('p');

    textContainer.classList.add('ab-txt-container');

    text.textContent = 'Established in 2023, our restaurant  serves some of the finest food in the world. Commodo cupidatat culpa in labore cillum occaecat duis sit id ad. Labore non proident nisi laborum consectetur deserunt laborum mollit minim. Adipisicing irure eiusmod commodo reprehenderit laborum reprehenderit Lorem nostrud magna. Amet ea ullamco non cupidatat occaecat id in eu aute eu eu culpa nostrud nulla. Dolore cillum consequat aute ut. Cillum dolore ex est eiusmod est commodo aliqua fugiat id in qui ut.'

    textContainer.appendChild(text);

    return textContainer;
}

const createAboutContent = () => {
    const about = document.createElement('div');

    about.classList.add('about-main');

    about.appendChild(createImageContainer());

    about.appendChild(createAboutText());

    return about;
    
}

const createAboutPage = () => {
    const content = document.getElementById('content');

    content.textContent = '';

    content.appendChild(createHeader());
    content.appendChild(createAboutContent())
}

export { createAboutPage };