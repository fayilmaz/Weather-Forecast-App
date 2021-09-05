import { call, put, takeLatest } from "redux-saga/effects";
import { weatherActions } from "../actions/weatherActions";
import { weatherConstant } from "../constants/weatherConstant";
import weatherService from './../../services/weather';

function* weatherSaga(action) {
  try {
    const data = yield call(weatherService.loadWeathers, action.payload);
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
