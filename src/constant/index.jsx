export const DEFAULT_PLACE = {
    name:"Marrakech", 
    place_id:"marrakech",
    adm_area1:"Marrakesh-Safi",
    adm_area2:"Marrakech",
    country:"Morocco",
    lat:"31.63623N",
    lon:"8.01041W",
    timezone:"Africa/Casablanca",
    type:"administrative_area",
};

export const MEASUREMENT_SYSTEM = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
};

export const UNITS = {
    metric: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'm/s',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    us: {
        temperature: '°F',
        precipitation: 'in/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    uk: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'mph',
        visibility: 'mi',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
    ca: {
        temperature: '°C',
        precipitation: 'mm/h',
        wind_speed: 'km/h',
        visibility: 'km',
        humidity: '%',
        uv_index: '',
        cloud_cover: '%',
    },
};