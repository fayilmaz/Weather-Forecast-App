import { weatherConstant } from "../constants/weatherConstant";

const getWeather = (payload = "Istanbul") => {
  return {
    type: weatherConstant.GET_WEATHER,
    payload,
  };
};

const updateWeather = (payload = null) => {
  return {
    type: weatherConstant.UPDATE_WEATHER,
    payload,
  };
};

const updateWeatherLoading = (payload = null) => {
  return {
    type: weatherConstant.UPDATE_WEATHER_LOADING,
    payload,
  };
};

const updateWeatherSuccess = (payload = {}) => {
  return {
    type: weatherConstant.UPDATE_WEATHER_SUCCESS,
    payload,
  };
};

const updateWeatherFail = (payload = {}) => {
  return {
    type: weatherConstant.UPDATE_WEATHER_SUCCESS,
    payload,
  };
};

export const weatherActions = {
  getWeather,
  updateWeather,
  updateWeatherLoading,
  updateWeatherSuccess,
  updateWeatherFail,
};
