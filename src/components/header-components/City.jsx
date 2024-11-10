import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'

export default function City() {

    const {place} = useContext(WeatherContext)

    return (
        <div className="city text-center col-12 col-md-6 me-auto d-flex flex-row align-items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1 className='ms-3'>{place.name}, <span>{place.country}</span></h1>
        </div>
    )
}