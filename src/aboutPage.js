import { createHeader } from "./initialPage";

const aboutContent = () => {
    const about = document.createElement('div');

    
}

const createAboutPage = () => {
    const content = document.getElementById('content');

    content.textContent = '';

    content.appendChild(createHeader());
}

export { createAboutPage };