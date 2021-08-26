import { all } from "redux-saga/effects";
import { weatherWatcherSaga } from "./weather.saga";

export default function* rootSaga() {
  yield all([weatherWatcherSaga()]);
}
