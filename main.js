
const axios = require('axios');
const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain&timezone=America%2FSao_Paulo&forecast_days=1`


const getClima = async () => {
try {
    const response = await axios.get(url);  // Requisição da URL
    const data = response.data
    console.log(data)
    return data
}
catch (error) {
    console.error(error)
}
}
getClima()