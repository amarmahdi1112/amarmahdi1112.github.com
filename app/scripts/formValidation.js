const contact = document.querySelector('#contact');
const fullnameErr = document.querySelector('#fullname-err');
const emailErr = document.querySelector('#email-err');
const msgErr = document.querySelector('#msg-err');
const successMsg = document.querySelector('#success-message');
const fullnameField = document.getElementById('fullname');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const info = {
  fullname: '',
  email: '',
  message: '',
};

window.onload = () => {
  const data = localStorage.getItem('userData');
  if (data !== null) {
    const parsedData = JSON.parse(data);
    fullnameField.value = parsedData.fullname;
    emailField.value = parsedData.email;
    messageField.value = parsedData.message;
  }
};

const storeData = (info) => {
  const convert = JSON.stringify(info);
  localStorage.setItem('userData', convert);
};

emailField.addEventListener('change', (e) => {
  info.email = e.target.value;
  storeData(info);
});

fullnameField.addEventListener('change', (e) => {
  info.fullname = e.target.value;
  storeData(info);
});

messageField.addEventListener('change', (e) => {
  info.message = e.target.value;
  storeData(info);
});

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
      }
    });
  }
});
