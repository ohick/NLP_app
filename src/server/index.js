const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AYLIENTextAPI = require('aylien_textapi');

/* Dependencies and middelware */
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* Local server */
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  res.sendFile('dist/index.html', { root: `${__dirname}/..` });
});

const textAPI = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

app.post('/add', (req, res) => {
  /* console.log(req.body);
  textAPI.sentiment({
    url: req.body,
  }, (error, response) => {
    if (error === null) {
      console.log(response);
      res.send(response);
    }
  });  */
  alert('Hello')
});
