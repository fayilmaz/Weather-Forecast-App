import { weatherConstant } from "../constants/weatherConstant";

const INITIAL_STATE = {
  city: "Istanbul",
  weatherForecastLoading: false,
  weatherForecastLoaded: false,
  weatherForecastFail: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherConstant.UPDATE_WEATHER_LOADING:
      return {
        ...state,
        weatherForecastLoading: true,
        weatherForecastLoaded: false,
        weatherForecastFail: false,
      };
    case weatherConstant.UPDATE_WEATHER_SUCCESS:
      return {
        ...state,
        weatherForecastLoading: false,
        weatherForecastLoaded: true,
        weatherForecastFail: false,
        weather: action.payload,
      };
    case weatherConstant.UPDATE_WEATHER_FAIL:
      return {
        ...state,
        weatherForecastLoading: false,
        weatherForecastLoaded: false,
        weatherForecastFail: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
