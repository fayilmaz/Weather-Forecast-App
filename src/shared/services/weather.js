import axios from "axios";
import {API_KEY} from "../constants/constant";

class WeatherService {
    async loadWeathers(city) {
        const result = await axios
            .get(`forecast?q=${city}&mode=json&appid=${API_KEY}&units=metric`, {
                method: "get",
                baseURL: `https://api.openweathermap.org/data/2.5/`,
                timeout: 2000,
                responseType: "json",
                responseEncoding: "utf8",
            })
            .then((res) => {
                return res.data;
            });
        return result;
    }
}

export default new WeatherService;
