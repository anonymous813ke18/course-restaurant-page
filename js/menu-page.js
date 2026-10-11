import "../css/menu-page.css";
import friedrice from "../assests/images/friedrice.jpg";
import garlicbread from "../assests/images/garlicbread.jpg";
import pizza from "../assests/images/pizza.jpg";

function renderMenuPage () {
    const content = document.querySelector('#content');
    const menuHeading = document.createElement("h1");
    menuHeading.textContent = 'MENU ITEMS';
    menuHeading.classList.add('menu-heading');
    content.appendChild(menuHeading);

    const menuItemsContainer = document.createElement('div');
    menuItemsContainer.classList.add('menu-items-container');

    const friedRiceDiv = document.createElement('div');
    friedRiceDiv.classList.add('menu-item');
    const friedRiceImg = document.createElement('img');
    friedRiceImg.src = friedrice;
    const friedRiceHeading = document.createElement('h1');
    friedRiceHeading.textContent = 'Fried Rice';
    friedRiceDiv.appendChild(friedRiceImg);
    friedRiceDiv.appendChild(friedRiceHeading);
    menuItemsContainer.appendChild(friedRiceDiv);

    const garlicBreadDiv = document.createElement('div');
    garlicBreadDiv.classList.add('menu-item');
    const garlicBreadImg = document.createElement('img');
    garlicBreadImg.src = garlicbread;
    const garlicBreadHeading = document.createElement('h1');
    garlicBreadHeading.textContent = 'Garlic Bread';
    garlicBreadDiv.appendChild(garlicBreadImg);
    garlicBreadDiv.appendChild(garlicBreadHeading);
    menuItemsContainer.appendChild(garlicBreadDiv);

    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('menu-item');
    const pizzaImg = document.createElement('img');
    pizzaImg.src = pizza;
    const pizzaHeading = document.createElement('h1');
    pizzaHeading.textContent = 'Chicken Pizza';
    pizzaDiv.appendChild(pizzaImg);
    pizzaDiv.appendChild(pizzaHeading);
    menuItemsContainer.appendChild(pizzaDiv);

    content.appendChild(menuItemsContainer);
}

export {renderMenuPage};