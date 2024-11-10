import { useContext } from "react";
import CurrentWeather from "./main-compnents/CurrentWeather";
import { ThemeContext } from './../context/ThemeContetxt';
import Forecast from "./main-compnents/Forecast";
import { WeatherContext } from "../context/WeatherContext";
import Loader from "./main-compnents/Loader";

export default function Main() {
    
    const { dark } = useContext(ThemeContext)
    const {loading, currentWeather, hourlyForecast, dailyForecast} = useContext(WeatherContext)

    return (
        <div className={`main ${dark ? 'dark-main' : 'light-main'} py-5`}>
            {
                loading ? <Loader /> : <div>
                    <CurrentWeather data={currentWeather} />
                    <Forecast type='hourly' title='HOURLY FORECAST' data={hourlyForecast} />
                    <Forecast type='daily' title='21 DAYS FORECAST' data={dailyForecast} />
                </div>
            }
        </div>
    )
}