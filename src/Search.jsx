import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Showing from './showingArea.jsx';
import './Searcharea.css'

export default function Searcharea({Updateinfo}){
      
    let[Citys,setCitys] = useState("");
    

     let Api_Key = "42183418c658cafb12e0a08865e48559"
     
    async function handleApi() {
          const SecondApi =`https://api.openweathermap.org/data/2.5/weather?q=${Citys}&appid=${Api_Key}&units=metric`
           let responce = await fetch(SecondApi);
           let jsonresponce = await responce.json();

           let result =  {
            Name : jsonresponce.name,
           Tempeture  :jsonresponce.main.temp,
           feelLike : jsonresponce.main.feels_like,
           humidity : jsonresponce.main.humidity,
            Tempeture_max :jsonresponce.main.temp_max,
            Tempeture_min :jsonresponce.main.temp_min,
            Weather : jsonresponce.weather[0].description,
            Wind_Speed : jsonresponce.wind.speed,
            sunrise : jsonresponce.sys.sunrise,
            sunset : jsonresponce.sys.sunset,
            visibility : jsonresponce.visibility
           }
           console.log(result);
            return result
            

    }


    function handlechage(event){
         setCitys(event.target.value);
    };


   async function handlesubmit(event){
        event.preventDefault();
        console.log(Citys);
       setCitys("");

       let info = await handleApi();
       Updateinfo(info)

     }


    return(
    
        <div className="Searcharea">
        
        <form onSubmit={handlesubmit}>
            <TextField id="city" label="Seach City" variant="outlined" value={Citys} onChange={handlechage} required/>
            <br></br><br></br>
            <Button variant="contained" type='Submit'>Search</Button>

        </form>
        <br></br><hr></hr><br></br>

        </div>
    )
}