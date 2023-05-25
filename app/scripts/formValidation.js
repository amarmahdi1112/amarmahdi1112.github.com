const contact = document.querySelector('#contact');
const fullnameErr = document.querySelector('#fullname-err');
const emailErr = document.querySelector('#email-err');
const msgErr = document.querySelector('#msg-err');
const successMsg = document.querySelector('#success-message');
const fullnameField = document.getElementById('fullname');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

window.onload = () => {
  const storedFullname = localStorage.getItem('fullname');
  const storedEmail = localStorage.getItem('email');
  const storedMessage = localStorage.getItem('message');
  if (storedFullname.length !== 0 || storedEmail.length !== 0 || storedMessage.length !== 0) {
    emailField.value = storedEmail;
    fullnameField.value = storedFullname;
    messageField.value = storedMessage;
  }
};

contact.addEventListener('submit', (e) => {
  e.preventDefault();
  const elements = e.target;
  const fullname = elements[0].value;
  const email = elements[1].value;
  const message = elements[2].value;
  const fullnameCount = fullname.split(' ').length;
  if (fullnameCount < 2) {
    fullnameErr.innerText = 'Please provide your first and last name!';
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
    msgErr.innerText = 'Please leave a message!';
  } else {
    msgErr.innerText = '';
  }
  if (fullnameCount >= 2 && email === lwEmail && message.trim().length > 0) {
    const data = {
      fullname,
      email,
      message,
    };
    fetch('https://formspree.io/f/xgebqege', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        return data;
      }
      throw new Error('Response error!');
    }).then((json) => {
      if (json.ok) {
        successMsg.classList.remove('invisible');
        localStorage.clear();
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);
      }
    });
  }
});
