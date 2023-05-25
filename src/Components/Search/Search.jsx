import React, { useState } from 'react'
import {Box,TextField,InputAdornment,Button} from '@mui/material'
// 

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Search = ({getApi,setCity}) => {

 let handlePress=(e)=>
 {
  if(e.key==='Enter'){
    getApi();
}
 
 }

  return (
      <Box>
        <TextField placeholder='City' onChange={(e)=>{setCity(e.target.value)}} onKeyPress={handlePress} fullWidth color="success" size="small" variant='filled'
        InputProps={{endAdornment:(<InputAdornment position="end">
        <Button onClick={()=>{getApi()}}  disableRipple><ArrowRightAltIcon/></Button>
      </InputAdornment>)}}
        />
      </Box>
    
  )
}

export default Search