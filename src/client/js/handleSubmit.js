import { urlCheck } from './urlChecker';

const postData = async (url = '', data = {}) => {
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const postedData = await res.json();
    return postedData;
  } catch (error) {
    console.log('Error', error);
  }
};
const result = document.getElementById('result');

function handleSubmit(event) {
  event.preventDefault();
  const formURL = document.getElementById('url').value;
  if (urlCheck(formURL)) {
    postData('/postURL', formURL)
      .then((postback) => {
        result.innerHTML = postback;
      });
  } else {
    result.innerHTML = 'Please enter a valid zip code.';
  };
};

result.addEventListener('click', handleSubmit());