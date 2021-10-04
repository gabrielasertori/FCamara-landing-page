'use strict'

const	menu = document.getElementById("menu");
const	menuContent = document.getElementById("menu-content");
let		menuOpen = false;

menu.addEventListener('click', () => {
	if (!menuOpen) {
		menuOpen = true;
		menu.classList.add("open");
		menuContent.classList.add("open");
	} else {
		menuOpen = false;
		menu.classList.remove("open");
		menuContent.classList.remove("open");
	}
})
