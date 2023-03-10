import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem('objectToSave', JSON.stringify(objectToSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  if (email.value === "" || message.value === "") {
    return alert("Please fill in all the fields!");
}
  console.log({ email: email.value, message: message.value });

  form.reset();
  localStorage.removeItem('objectToSave');
});

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTORAGE_KEY);
  if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
  }