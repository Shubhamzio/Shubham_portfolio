const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
})

document.querySelectorAll('.menu').forEach(n => n.addEventListener('click', ()=> {
	hamburger.classList.remove('active');
	menu.classList.remove('active');
}))



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior:'smooth'
		})
	})
})
