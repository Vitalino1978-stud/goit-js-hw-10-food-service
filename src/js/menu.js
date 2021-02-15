import menuTemplates from "../templates/menu-items.hbs";
import menuData from "../menu.json";

const markup = menuTemplates(menuData);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup)

