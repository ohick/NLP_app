const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const AYLIENTextAPI = require('aylien_textapi');

/* Dependencies and middelware*/
const app = express();
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* Local server */
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))


var textAPI = new AYLIENTextAPI({
    application_id: "YOUR_APP_ID",
    application_key: "YOUR_APP_KEY"
  });


  console.log(`Your API key is ${process.env.API_KEY}`);