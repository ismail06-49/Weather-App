import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContetxt";
import {MEASUREMENT_SYSTEM} from '../../constant'
import { WeatherContext } from "../../context/WeatherContext";

export default function Settings() {

    const { dark, setDark, saveThemeToLocal } = useContext(ThemeContext)
    const [openSetting, setOpenSetting] = useState(false)
    const {measurementSystem, setMeasurementSystem} = useContext(WeatherContext)

    const changeMeasurementSystem = (system) => {
        setMeasurementSystem(system)
        setOpenSetting(false)
    }

    function handleTheme() {
        setDark(!dark)
        saveThemeToLocal(!dark)
    }

    return (
        <div className="settings col-4 col-md-3 ms-auto d-flex flex-row justify-content-end align-items-center">
            <div className="theme me-3" onClick={handleTheme}>
                {dark ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </div>
            <div className="setting" onClick={() => setOpenSetting((perVal) => !perVal)}>
                <i className="bi bi-gear-fill"></i>
            </div>
            <div className={`setting-menu ${openSetting ? 'open' : ''} p-2 ${dark ? 'light-main' : 'dark-main'}`}>
                <h4>Measurement System:</h4>
                <div className="systems d-flex flex-row align-items-center flex-wrap gap-2 mt-4">
                    {Object.values(MEASUREMENT_SYSTEM).map((system) => (
                        <div className={`system ${system === measurementSystem ? 'active' : ''}`} onClick={() => changeMeasurementSystem(system)} key={system}>{system}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}