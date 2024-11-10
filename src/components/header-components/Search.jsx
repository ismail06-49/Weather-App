import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContetxt'
import {searchPlaces} from '../../api'
import { WeatherContext } from '../../context/WeatherContext'

export default function Search() {

    const { dark } = useContext(ThemeContext)
    const {setPlace} = useContext(WeatherContext)
    const [text, setText] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [openSearch, setOpenSearch] = useState(false)

    async function onSearch(e) {
        setText(e.target.value)
        const data = await searchPlaces(e.target.value)
        setSearchResult(data)
        setOpenSearch(data.length)
    }

    const changePlaces = (place) => {
        setPlace(place)
        setText('')
        setOpenSearch(false)
    }

    return (
        <div className="search col-8 col-md-3 d-flex flex-row align-items-center">
            <div className="search-icon">
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div className="search-input w-100">
                <input type="text" className={`w-100 border border-2 ${dark ? 'border-with' : 'border-black'}`} placeholder='Search City...' value={text} onChange={onSearch} />
            </div>
            {openSearch && (<div className={`search-result ${dark ? 'light-main' : 'dark-main'}`}>
                {
                    searchResult.map((result) => (
                        <div className="result p-2" key={result.place_id} onClick={() => changePlaces(result)}>
                            {result.name}, {result.adm_area1}, {result.country}
                        </div>
                    ))
                }
            </div>)}
        </div>
    )
}