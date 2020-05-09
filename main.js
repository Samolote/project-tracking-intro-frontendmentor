const hamburger = document.querySelector('.hamburger');
const { body } = document;

const hamburgerHandler = () => {
	hamburger.classList.toggle('hamburger--active');
	if (!body.style.overflowY && hamburger.classList.contains('hamburger--active')) {
		body.style.overflowY = 'hidden';
	} else {
		body.style.overflowY = '';
	}
};

hamburger.addEventListener('click', hamburgerHandler);
