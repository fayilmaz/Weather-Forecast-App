import { createSelector } from "reselect";

export const getState = (state) => {
  return state.root;
};

export const getWeatherState = createSelector(getState, (state) => {
  return state.weather;
});

export const getWeatherLoading = createSelector(getState, (state) => {
  return state.weatherForecastLoading;
});

export const getWeatherLoaded = createSelector(getState, (state) => {
  return state.weatherForecastLoaded;
});

export const getWeatherLoadFail = createSelector(getState, (state) => {
  return state.weatherForecastLoadFail;
});
