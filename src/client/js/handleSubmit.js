const result = document.getElementById('result');
const resultText = document.getElementById('resultText');
const resultTable = document.getElementById('resultTable');
const resultConfidence = document.getElementById('resultConfidence');

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
  
  const formURL = document.getElementById('url').value;
  if (Client.urlCheck(formURL)) {
    const response = await postData('http://localhost:8081/add', {url: formURL,})
    console.log(response);
    resultText.classList.remove('hidden');
    resultText.innerHTML = response.text;
    result.innerHTML = response.polarity  
    resultConfidence.innerHTML = response.polarity_confidence;
    resultTable.classList.remove('hidden');
  } else {
    result.innerHTML = 'Please enter a valid url.';
    resultTable.classList.remove('hidden');
    resultText.classList.add('hidden');
  }
};


export { 
  handleSubmit
}
