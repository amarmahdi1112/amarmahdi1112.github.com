const contact = document.querySelector('#contact');
const fullnameErr = document.querySelector('#fullname-err');
const emailErr = document.querySelector('#email-err');
const msgErr = document.querySelector('#msg-err');
const successMsg = document.querySelector('#success-message');

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
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Response error!');
    }).then((json) => {
      if (json.ok) {
        successMsg.classList.remove('invisible');
        elements[0].value = '';
        elements[1].value = '';
        elements[2].value = '';
      }
    }).catch((error) => {
      console.log(error);
    });
  }
});