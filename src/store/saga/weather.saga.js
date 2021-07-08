import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { weatherActions } from "../actions/weatherActions";
import { weatherConstant } from "../constants/weatherConstant";

const city = "Izmir";
const API_KEY = "e34a9c6a3f0d53dcaa8e81a343a8bc29";

const getWeatherForecast = () => {
  return axios
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
};

function* weatherSaga(action) {
  try {
    const data = yield call(getWeatherForecast);
    yield put(weatherActions.updateWeatherLoading());
    if (data.cod === 200) {
      yield put(weatherActions.updateWeatherSuccess(data));
    } else {
      yield put(weatherActions.updateWeatherFail(data));
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
}

// eslint-disable-next-line no-unused-vars
function* weatherWatcherSaga(action) {
  yield takeLatest(weatherConstant.GET_WEATHER, weatherSaga);
}

export { weatherWatcherSaga };
