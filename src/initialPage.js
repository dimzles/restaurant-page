import chefPlating from './chef-plating.jpg';

const createHeader = () => {
    const header = document.createElement('div')
    header.textContent = 'Very nice restaurant';
    header.classList.add('header');

    return header;
}

const createMain = () => {
    const main = document.createElement('div');
    const mainText = document.createElement('p');
    const img = document.createElement('img');
    img.src = chefPlating;
    main.classList.add('main');
    mainText.textContent = 'Very nice food'
    main.appendChild(img)
    main.appendChild(mainText);

    return main;
}

const createPage = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain())
}

export default createPage;