import HorizontalScrol from "../HorizontalScrol";
import DailyWidget from "./DailyWidget";
import HourlyWidget from "./HourlyWidget";

export default function Forecast({type, title, data}) {
    return (
        <div className="container forecast">
            <div className="forecast-container my-5">
                <h2>{title}</h2>
                <HorizontalScrol className="widget-container overflow-hidden d-flex gap-3 flex-row justify-content-between align-items-center" style={{cursor: 'pointer', overflowX: 'hidden'}}>
                    {data.map((singleData) => (
                        <div key={singleData.date || singleData.day}>
                            {
                                type === 'hourly' ?
                                    <HourlyWidget data={singleData} /> : <DailyWidget data={singleData} />
                            }
                        </div>
                    ))}
                </HorizontalScrol>
            </div>
        </div>
    )
}