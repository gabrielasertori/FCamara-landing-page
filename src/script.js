'use strict'

const	menu = document.getElementById("menu");
let		menuOpen = false;

menu.addEventListener('click', () => {
	if (!menuOpen) {
		menuOpen = true;
		menu.classList.add("open");
	} else {
		menuOpen = false;
		menu.classList.remove("open");
	}
})
