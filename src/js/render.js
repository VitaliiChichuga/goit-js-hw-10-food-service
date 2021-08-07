import cardMenuTemplate from "../templates/card-menu.hbs";
import dishes from "../menu.json";


const listMenu = document.querySelector(".js-menu");
const renderListMenu = cardMenuTemplate(dishes);
listMenu.insertAdjacentHTML('beforeend', renderListMenu);