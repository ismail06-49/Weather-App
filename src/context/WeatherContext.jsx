import { useEffect, useState } from "react";
import { createContext } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEM, UNITS } from '../constant'
import {getWeatherData} from'../api'

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {

    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] = useState({})
    const [hourlyForecast, setHourlyForecast] = useState([])
    const [dailyForecast, setDailyForecast] = useState([])
    const [measurementSystem, setMeasurementSystem] = useState(MEASUREMENT_SYSTEM.AUTO)
    const [units, setUnits] = useState({})

    useEffect(() => {
        async function _getWeatherData() {
            setLoading(true)

            const cw = await getWeatherData('current', place.place_id, measurementSystem);
            setCurrentWeather(cw.current)
            setUnits(UNITS[cw.units])

            const hf = await getWeatherData('hourly', place.place_id, measurementSystem);
            setHourlyForecast(hf.hourly.data)

            const df = await getWeatherData('daily', place.place_id, measurementSystem);
            setDailyForecast(df.daily.data)

            setLoading(false)
        }
        _getWeatherData()
    }, [place, measurementSystem])

    return (
        <WeatherContext.Provider value={{place, setPlace, loading, currentWeather, hourlyForecast, dailyForecast, measurementSystem, setMeasurementSystem, units}}>
            {children}
        </WeatherContext.Provider>
    )
}