import { Box } from '@mui/material'
import React from 'react'

const Message = (props) => {
    const {text} = props
  return (
    <Box sx={{backgroundColor: '#69C9AB', color:'#FFFFFF', width:'90%', height:'40px', position:'absolute', top:'20px', display:'flex', justifyContent:'center', alignContent:'center'}}>
        {text}
    </Box>
  )
}

export default Message