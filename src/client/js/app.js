const textAPI = new AYLIENTextAPI({
    application_id: "6931f065",
    application_key: "b3fc5142eff1c92776da5d42e24f7d17"
  });

const URL = "https://api.aylien.com/api/v1";
const sentiment = "/sentiment";

console.log(`Your API key is ${process.env.API_KEY}`);