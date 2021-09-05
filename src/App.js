import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherActions } from "./shared/store/actions/weatherActions";
import selectors from "./shared/store/selectors";
import WeatherItem from "./components/WeatherItem/WeatherItem";
import CityName from "./components/CityName/CityName";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.getWeatherLoading);
  const loaded = useSelector(selectors.getWeatherLoaded);
  const loadFail = useSelector(selectors.getWeatherLoadFail);
  const weatherData = useSelector(selectors.getWeatherState);

  const getWeatherHandle = () => {
    dispatch(weatherActions.getWeather("Istanbul"));
  };

  useEffect(() => {
    getWeatherHandle();
  }, []);

  return (
    <div className="App">
      {loading ? <div>Loading Data...</div> : null}
      {loadFail ? <div>Loading Data Error!</div> : null}
      {weatherData ? <CityName weatherData={weatherData} /> : ""}
      {loaded ? (
        <WeatherForecast>
          {weatherData.list.map((item, i) => (
            <WeatherItem key={i} item={item} />
          ))}
        </WeatherForecast>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
