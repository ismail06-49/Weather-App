import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContetxt";
import '../../assets/style/forecast.css'
import { WeatherContext } from "../../context/WeatherContext";

export default function HourlyWidget({ data }) {
    
    const {url} = useContext(ThemeContext)
    const {
        date,
        icon,
        summary,
        temperature,
        precipitation,
        wind,
    } = data;
    const {units} = useContext(WeatherContext)

    // date format
    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date().setMinutes(0)),
    }
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date(date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date).setMinutes(0)),
    }

    weather_date.day = weather_date.day === now_date.day &&
        weather_date.time === now_date.time ?'Today' :
        weather_date.time === '00:00' ? weather_date.day : ''

    return (
        <div className="widget d-flex flex-column justify-content-between align-items-center my-5">
            <div className="day">{weather_date.day}</div>
            <div className="time">{weather_date.time}</div>
            <div className="icon-temp d-flex flex-column justify-content-between align-items-center">
                <div className="icon">
                    <img src={`${url}/${icon}.png`} alt={summary} draggable={false} />
                </div>
                <div className="temp">{Math.round(temperature)} {units.temperature}</div>
            </div>
            <div className="percipitation">{Math.round(precipitation.total)} {units.precipitation}</div>
            <div className="wind d-flex flex-row">
                <div className="wind-speed">{Math.round(wind.speed)} {units.wind_speed}</div>
                <div className="wind-direction" style={{transform: `rotate(${-45 + wind.angle}deg)`}}>
                    <i className="bi bi-send-fill"></i>
                </div>
            </div>
        </div>
    )
}