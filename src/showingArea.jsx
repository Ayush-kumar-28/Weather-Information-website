import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import './Showing.css'

export default function Showing({info}) {
    let rain_url = "https://images.unsplash.com/photo-1562173207-22a10322f0fc?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_url = "https://plus.unsplash.com/premium_photo-1671490809136-ef694acc76d2?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Hot_url  ="https://images.unsplash.com/photo-1575443532202-e4843904bd5f?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(

        <div className="Abc">
            <h1>Weather Info</h1>
            <div className="CardComponent">
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? rain_url  :(info.Tempeture > 23 ? Hot_url : cold_url)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.Name} &nbsp;{info.humidity > 80 ? <ThunderstormIcon/>  :(info.Tempeture > 23 ? <SunnyIcon/> : <AcUnitIcon/>)}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Tempeture : {info.Tempeture}&deg;C</p>
            <p>Weather : {info.Weather} </p>
            <p>humidity : {info.humidity}&deg;C</p>
            <p>Wind Speed : {info.Wind_Speed} </p>
            <p>Max Tempeture : {info.Tempeture_max}&deg;C</p>
            <p>Min Tempeture : {info.Tempeture_min}&deg;C</p>
            <p>The Weather can be describe as {info.Weather} and feelLike {info.feelLike}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
    )
}