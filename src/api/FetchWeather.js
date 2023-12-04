import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '54ecba17153fa85d53fa601c755627aa';


export const fetchWeather = async (cityName)=>{
    const {data} = await axios.get(URL, {
        params:{
            q : cityName,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}


