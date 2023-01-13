import chefPlating from './chef-plating.jpg';

const createHeaderLinks = () => {
    const headerLinks = document.createElement('div');
    headerLinks.classList.add('header-links');

    const homeLink = document.createElement('button');
    const aboutLink = document.createElement('button');
    const menuLink = document.createElement('button');
    const contactLink = document.createElement('button');

    homeLink.setAttribute('id', 'home')
    aboutLink.setAttribute('id', 'about')
    menuLink.setAttribute('id', 'menu')
    contactLink.setAttribute('id', 'contact');

    homeLink.textContent = 'Home';
    aboutLink.textContent = 'About';
    menuLink.textContent = 'Menu';
    contactLink.textContent = 'Contact';

    headerLinks.appendChild(homeLink);
    headerLinks.appendChild(aboutLink);
    headerLinks.appendChild(menuLink);
    headerLinks.appendChild(contactLink);

    return headerLinks;
}

const createHeader = () => {
    const header = document.createElement('div')
    const headerText = document.createElement('p');

    headerText.textContent = "Restaurant Name";
    headerText.classList.add('header-text');
    header.classList.add('header');
    header.appendChild(headerText);
    header.appendChild(createHeaderLinks())

    return header;
}

const createMain = () => {
    const main = document.createElement('div');
    const mainText = document.createElement('p');
    const img = document.createElement('img');

    img.src = chefPlating;
    main.classList.add('main');
    mainText.classList.add('text');
    mainText.textContent = 'Very nice food';

    main.appendChild(img);
    main.appendChild(mainText);

    return main;
}

const createPage = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
}

export default createPage;