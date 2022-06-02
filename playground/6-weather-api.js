const axios = require('axios');
const params = {
  access_key: '701ecc19f157753ebcf7b4be3925bb79',
  query: 'New York'
}

axios.get('https://api.weatherstack.com/current', {params})
  .then(response => {
    const apiResponse = response.data;
    console.log(`Current temperature is ${apiResponse.current.temperature}℃`);
  }).catch(error => {
    console.log(error);
  });