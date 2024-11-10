import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContetxt";
import { WeatherContext } from "../../context/WeatherContext";

export default function DailyWidget({ data }) {

    const {url} = useContext(ThemeContext)
    const {
        day,
        icon,
        summary,
        temperature_max,
        temperature_min,
        precipitation, } = data;
    const {units} = useContext(WeatherContext)
    
    // date format
    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date()),
    }
    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit'
        }).format(new Date(day)),
    }

    weather_date.day = weather_date.day === now_date.day ? 'Today' : weather_date.day

    return (
        <div className="widget d-flex flex-column justify-content-between align-items-center my-5">
            <div className="day">{weather_date.day}</div>
            <div className="icon-temp d-flex flex-column justify-content-between align-items-center">
                <div className="icon">
                    <img src={`${url}/${icon}.png`} alt={summary} draggable={false} />
                </div>
                <div className="temp">
                    <div className="max mt-3">{Math.round(temperature_max)} {units.temperature}</div>
                    <div className="min">{Math.round(temperature_min)} {units.temperature}</div>
                </div>
            </div>
            <div className="percipitation">{Math.round(precipitation.total)} {units.precipitation}</div>
        </div>
    )
}