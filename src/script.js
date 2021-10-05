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

	const	menuList = document.querySelectorAll(".menu-content-list-item");
	let		i;

	menuList.forEach(i => {
		i.addEventListener('click', () => {
			menuOpen = false;
			menu.classList.remove("open");
			menuContent.classList.remove("open");
		})
})})
