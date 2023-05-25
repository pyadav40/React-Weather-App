import {useState } from 'react';
import Search from './Components/Search/Search';
import Weather from './Components/WeatherPage/Weather'; 
import {Grid, Box,Paper} from '@mui/material'
import axios from 'axios';
import Humidity from './Images/Humidity.svg'
import Pressure from './Images/Pressure.svg'
import RainCloud from './Images/Rain-cloud.svg'
import Snow from './Images/Snow.svg'
import Sun from './Images/Sun.svg'
import Wind from './Images/Wind.svg'
import Sunrise from './Images/Sunrise.svg'
import WeatherImage from './Images/WeatherImage.svg'

const images={WeatherImage:WeatherImage ,humid:Humidity,pre:Pressure,rain:RainCloud,snow:Snow,sun:Sun,wind:Wind,sunrise:Sunrise}
  
function App() {
  const paperStyle={minHeight:'75vh',width:380, padding:10, margin:'70px auto', background: 'linear-gradient(180deg, rgba(155,69,172,0.40940126050420167) 6%, rgba(228,238,240,1) 100%)' };


let [cityName,setCity]=useState("Mumbai")
let [data, setData] = useState(null)
 

const getApi=async function () {
  
  try { 
    const fetchdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=2757e7303d1d10327820df42057c4612`)
    setData(fetchdata.data);
  }
  catch (error) {
    console.log(error)
  }
}
 
  return (
    <div>
      <Box component='div' sx={{position:'fixed', bgcolor: '#cfe8fc',width:'100vw', height: '100vh' }}>
        
        <Paper component='div'  style={paperStyle} elevation={5} >
            <Grid container justifyContent="center" sx={{marginBottom:"10px"}}>
            {/* <ThunderstormIcon color="primary"  sx={{fontSize: 50, margin:"10px"}}/> */}
            <img height='60px' src={images.WeatherImage} alt="main"/>
            </Grid>
      <Search setCity={setCity} getApi={getApi}/>
      {cityName && data?<Weather data={data} images={images}/>:null}
      
          </Paper>
    </Box>
    
    </div>
   
  );
}

export default App;
 