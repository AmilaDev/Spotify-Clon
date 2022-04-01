const navToggle = document.querySelector('.nav-toggle');
const toggleX = document.querySelector('.toggleX');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('nav-menu_visible');
});
toggleX.addEventListener('click', () => {
	navMenu.classList.toggle('nav-menu_visible');
});
