import { createHeader } from "./initialPage";

const createAboutPage = () => {
    const content = document.getElementById('content');

    content.textContent = '';

    content.appendChild(createHeader());

    return
}

export { createAboutPage };