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

const  handleSubmit = async (event) => {
  event.preventDefault();
  result.classList.remove('blinking');
  resultText.classList.remove('blinking');
  const formURL = document.getElementById('url').value;
  if (Client.urlCheck(formURL)) {
    const response = await postData('http://localhost:8081/add', {url: formURL,})
    resultText.innerHTML = response.text;
    result.innerHTML = response.polarity;
  } else {
    result.innerHTML = 'Please enter a valid url.';
  }
};



export { 
  handleSubmit
}
