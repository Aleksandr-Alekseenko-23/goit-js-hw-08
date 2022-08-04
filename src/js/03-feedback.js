const throttle = require('lodash.throttle');
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const copy = {
  email: '',
  message: '',
};

saveData();

const getDataForm = e => {
  try {
    if (e.target.name === 'email') {
      copy.email = e.target.value.trim();
    } else {
      copy.message = e.target.value.trim();
    }

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(copy));
  } catch (error) {}
};

function saveData() {
  const test = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (test) {
    copy.email = test.email;
    copy.message = test.message;
    emailRef.value = copy.email;
    messageRef.value = copy.message;
  }
}
function resetForm() {
  formRef.reset();
}
const submitForm = e => {
  e.preventDefault();
  if (emailRef.value && messageRef.value) {
    resetForm();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  } else alert('Заповни дані');
};

emailRef.addEventListener('input', throttle(getDataForm, 500));
messageRef.addEventListener('input', throttle(getDataForm, 500));
formRef.addEventListener('submit', submitForm);
