import { useState } from "react"
import Searcharea from "./Search.jsx"
import Showing from "./showingArea.jsx"
import './WeatherInfo.css'
export default function WeatherInfo(){
    let [CurrentData,setCurrentData] = useState({
            Name : "Ranchi",
            Tempeture : 23.8,
            Weather : "overcast clouds",
            humidity : 90,
            Wind_Speed : 5.31,
            Tempeture_max : 23.8,
            Tempeture_min : 23.8,
            feelLike : 24.59
    });

    function Updateinfo(result){
        setCurrentData(result)
    }
    return(
        <div className="WeatherInfo">
            <h1>Weather Information Application</h1>
            <br></br>
            <Searcharea Updateinfo={Updateinfo}/>
            <Showing info={CurrentData}/>
            <p></p>
        </div>
    )
}