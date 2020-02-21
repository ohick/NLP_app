const result = document.getElementById('result');
const resultText = document.getElementById('resultText');

const postData = async (url = '', data = {}) => {
  let res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
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

function handleSubmit(event) {
  event.preventDefault();
  const formURL = document.getElementById('url').value;
  if (Client.urlCheck(formURL)) {
    postData('http://localhost:8081/add', {url: formURL,})
      .then(postedData => {
        resultText.innerHTML = postedData.text;
        result.innerHTML = postedData.polarity;
      });
  } else {
    result.innerHTML = 'Please enter a valid url.';
  }
};

export { 
  handleSubmit
}
