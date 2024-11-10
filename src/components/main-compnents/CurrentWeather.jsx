import { useContext } from 'react'
import '../../assets/style/current.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ThemeContext } from '../../context/ThemeContetxt'
import { WeatherContext } from '../../context/WeatherContext'

export default function CurrentWeather({data}) {

    const {url} = useContext(ThemeContext)
    const {
        cloud_cover,
        feels_like,
        humidity,
        icon_num,
        precipitation,
        summary,
        temperature,
        uv_index,
        visibility,
        wind,
    } = data;

    const {units} = useContext(WeatherContext)

    const otherInfo = [
        {
            id: 0,
            icon: 'droplet',
            name: 'Precipitation',
            value: Math.round(precipitation.total),
            unit: units.precipitation,
        },
        {
            id: 1,
            icon: 'wind',
            name: 'Wind',
            value: Math.round(wind.speed),
            unit: units.wind_speed,
        },
        {
            id: 2,
            icon: 'moisture',
            name: 'Humidity',
            value: Math.round(humidity),
            unit: units.humidity,
        },
        {
            id: 3,
            icon: 'sunglasses',
            name: 'Uv index',
            value: Math.round(uv_index),
            unit: units.uv_index,
        },
        {
            id: 4,
            icon: 'clouds-fill',
            name: 'clouds cover',
            value: Math.round(cloud_cover),
            unit: units.cloud_cover,
        },
        {
            id: 5,
            icon: 'eye',
            name: 'Visibility',
            value: Math.round(visibility),
            unit: units.visibility,
        },
    ]
    

    return (
        <div className="currentWeather container">
            <div className="row px-3">
                <div className="temperature mb-4 col-md-4 d-flex flex-column justify-content-between p-3">
                    <div className="weather-icon">
                        <img src={`${url}/${icon_num}.png`} alt={summary} />
                    </div>
                    <div className="value">
                        <div className="real">{Math.round(temperature)} {units.temperature}</div>
                        <div className="feels_like">Feels like: {Math.round(feels_like)} {units.temperature}</div>
                    </div>
                    <div className="summary">
                        {summary}
                    </div>
                </div>
                <div className="other-info ms-auto col-md-6 d-flex align-items-center flex-wrap">
                    {otherInfo.map(({id, icon, name, value, unit}) => (
                        <div className="w-50 text-center" key={id}>
                            <div className="info d-flex flex-row justify-content-center align-items-center">
                                <div className="icon me-3">
                                    <i className={`bi bi-${icon}`}></i>
                                </div>
                                <div className="value">{value} {unit}</div>
                            </div>
                            <div className="name">{name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}