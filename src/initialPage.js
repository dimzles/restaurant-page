import chefPlating from './chef-plating.jpg';

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


const createMain = () => {
    const main = document.createElement('div');
    const mainHero = document.createElement('div');
    const textContainer = document.createElement('div');
    const heroHeader = document.createElement('h3');
    const heroSubtext = document.createElement('h4');
    const img = document.createElement('img');
    
    img.src = chefPlating;

    main.classList.add('main');
    mainHero.classList.add('hero');
    img.classList.add('main-img');
    textContainer.classList.add('hero-container');
    heroHeader.classList.add('hero-header');
    heroSubtext.classList.add('hero-subtext');

    heroHeader.textContent = 'Fine Dining Excellence';
    heroSubtext.textContent = 'Some very nice copy about how lovely this restaurant is. Culpa eiusmod fugiat incididunt ipsum eiusmod. Consectetur ipsum ipsum culpa laborum cillum adipisicing aliquip laborum esse nulla aliqua. Deserunt nostrud exercitation culpa reprehenderit sit elit proident et sit officia. Voluptate aliqua Lorem laboris pariatur sunt duis labore duis pariatur reprehenderit sit ad elit. Sit ad tempor exercitation ullamco ut irure excepteur voluptate voluptate proident eu. Esse dolore reprehenderit sint commodo ullamco aliqua ullamco do in sunt esse. Cillum non Lorem officia velit.';

    textContainer.appendChild(heroHeader);
    textContainer.appendChild(heroSubtext);

    mainHero.appendChild(img)
    mainHero.appendChild(textContainer);

    main.appendChild(mainHero);

    return main;
}

const createPage = () => {
    const content = document.getElementById('content');

    content.textContent = '';

    content.appendChild(createHeader());
    content.appendChild(createMain());

    return content;
}

export { createPage, createHeader };