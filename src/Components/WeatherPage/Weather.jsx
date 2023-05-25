
import React, { useMemo,memo } from 'react'
 
import { Grid, Box, Typography, Paper } from '@mui/material';

// import axios from 'axios'

const WeatherComp = memo(({ images, name, value }) => {
    const paperStyle = {padding:10, alignItems:'center',height: '60px', width: "135px",background:'#7408FF00' };
    return (
        <Paper elevation={1} style={paperStyle}>
            <Grid  container direction='row'>
                <Grid item sx={{width:'50%'}}>
                    <img width='80%' height='90%' src={images} alt="weather" />
                </Grid>
                <Grid item sx={{width:'50%'}}>
                <Typography variant='body2'>{value}</Typography>
                    <Typography variant='body1'>{name}</Typography>
                    
                </Grid>
            </Grid>
        </Paper>
    )
})

const Weather = ({ data, images }) => {

    const {
        sys: { sunrise },
        main: { temp, humidity,pressure},
        wind:{speed},
        weather,
        name,       
        sys: { country },
      } = data;
 
 const sunTime=useMemo(()=>
 {
    const date= new Date(sunrise*1000)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
 },[sunrise])
 
 
    return (
        <Grid container >
            <Grid container mt={2} justifyContent="center">
                <Typography variant='h5'>Weather APP</Typography>
            </Grid>
            <Grid height="60px" container justifyContent='space-between' direction='row'>
                <Box display="flex" justifyContent='center' alignItems='center' width='30%' >
                    <Typography variant='h5'>{Math.floor(temp-273.15)}&deg;C&nbsp; </Typography> |
                    <Typography variant='caption'>&nbsp;{weather[0]?.main}</Typography>
                    </Box>
                <Box display="flex" justifyContent='center' alignItems='center' width='70%'>
                    <img height='50px' src={images.sun} alt="weather" />
                    </Box>

            </Grid>

                <Grid p={1} justifyContent="center" container>
                    <Typography color='#FC0A12' variant='h4'>{name},&nbsp;{country}</Typography>
                </Grid>

            <Grid container mt={2}>
                <Typography variant='body1'>Weather Info</Typography>
            </Grid>
            <Grid spacing={2} sx={{margin:'4px auto'}} container direction="row">
                <Grid item lg={6} >
                <WeatherComp name="Sun Rise" value={sunTime} images={images.sunrise} />
                </Grid>
                <Grid item lg={6}>
                <WeatherComp name="Humidity" value={humidity} images={images.humid} />
                </Grid> 
                <Grid item lg={6}>
                <WeatherComp name="Wind Speed" value={speed} images={images.wind} />
                </Grid>
                <Grid item lg={6}>
                <WeatherComp name="Pressure" value={pressure} images={images.pre} />
                </Grid>
                
            </Grid>


        </Grid>
    )
}

export default Weather


/*data to be extracted
1 sun rise sys.sunrise
2. humidity  main.humidity
3 wind speed  wind.speed
4 temperature  main.temp
5. weather type weather        
6. city Name    name
*/