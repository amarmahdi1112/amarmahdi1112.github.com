const contact = document.querySelector('#contact');
const fullnameErr = document.querySelector('#fullname-err');
const emailErr = document.querySelector('#email-err');
const msgErr = document.querySelector('#msg-err');

contact.addEventListener('submit', (e) => {
	e.preventDefault();
	const elements = e.target;
	const fullname = elements[0].value;
	const email = elements[1].value;
	const message = elements[2].value;
	const fullnameCount = fullname.split(' ').length;
	if (fullnameCount < 2) {
		fullnameErr.innerText = 'Please provide your full name!';
	} else {
		fullnameErr.innerText = '';
	}
	const lwEmail = email.toLowerCase();
	if (email !== lwEmail) {
		emailErr.innerText = 'Please provide your valid email address!';
	} else {
		emailErr.innerText = '';
	}
	if (message.trim().length === 0) {
		msgErr.innerText = 'Please say something!';
	} else {
		msgErr.innerText = '';
	}
});