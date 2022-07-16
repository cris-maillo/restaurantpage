import {homeDOM} from "./homepage.js";
import {menuDOM} from "./menu.js";
import {contactDOM} from "./contact.js";

document.getElementById("home").addEventListener("click", switchHome);
document.getElementById("menu").addEventListener("click", switchMenu);
document.getElementById("contact").addEventListener("click", switchContact);

const content = document.getElementById("content");

homeDOM();

function clearDOM(){
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function switchHome(){
    clearDOM();
    homeDOM();
}

function switchMenu(){
    clearDOM();
    menuDOM();
}

function switchContact(){
    clearDOM();
    contactDOM();
}

