const postData = async (url = '', data = {}) => {
  console.log("postData func");
  let res = await fetch(url, {
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
const resultText = document.getElementById('resultText');

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  const formURL = document.getElementById('url').value;
  if (Client.urlCheck(formURL)) {
    postData('/add', formURL)
      .then(postedData => {
        console.log(postedData);
        resultText.innerHTML = postedData;
        //result.innerHTML = postedData.polarity;
      });
  } else {
    result.innerHTML = 'Please enter a valid zip code.';
  }
}

export { 
  handleSubmit,
  postData
}
