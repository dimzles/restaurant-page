import { createHeader } from "./initialPage"

const createContactInfo = () => {
    const contactContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const phoneContainer = document.createElement('div');
    const phoneIcon = document.createElement('span');
    const phoneText = document.createElement('p');
    const addressContainer = document.createElement('div');
    const addressIcon = document.createElement('span');
    const addressText = document.createElement('p');
    const map = document.createElement('iframe');

    contactContainer.classList.add('contact-container');
    infoContainer.classList.add('info-container');
    phoneContainer.classList.add('phone-container');
    addressContainer.classList.add('address-container');
    phoneIcon.classList.add('material-symbols-outlined');
    addressIcon.classList.add('material-symbols-outlined');
    phoneText.classList.add('phone-text');
    addressText.classList.add('address-text');
    map.classList.add('contact-map');

    phoneIcon.innerHTML = 'phone_in_talk';
    addressIcon.innerHTML = 'location_on';
    phoneText.textContent = '123456789';
    addressText.textContent = 'Trafalgar Sq, London WC2N 5DN'
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.6396508041867!2d-0.1302885621931533!3d51.50809169799377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1674059808963!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phoneText);
    addressContainer.appendChild(addressIcon);
    addressContainer.appendChild(addressText);
    infoContainer.appendChild(phoneContainer);
    infoContainer.appendChild(addressContainer);
    infoContainer.appendChild(map);
    contactContainer.appendChild(infoContainer);
    return contactContainer;
}

const createContactMain = () => {
    const contact = document.createElement('div');
    const contactTitle = document.createElement('div');
    const titleText = document.createElement('h3');

    titleText.textContent = 'Contact Us!';

    contact.classList.add('contact-main');
    contactTitle.classList.add('contact-title');
    titleText.classList.add('contact-header');
    
    contactTitle.appendChild(titleText);
    contact.appendChild(contactTitle);
    contact.appendChild(createContactInfo())

    return contact;
}

const createContactPage = () => {
    const content = document.getElementById('content');

    content.textContent = '';



    content.appendChild(createHeader());
    content.appendChild(createContactMain());
}

export { createContactPage }