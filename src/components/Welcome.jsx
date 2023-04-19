import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 768px)")
    const [isDelayed, setIsDelayed] = useState(false);
    const [isDelayed2, setIsDelayed2] = useState(false);

    useEffect(() => {
      const delay = 5000;
      setTimeout(() => {
        setIsDelayed(true);
      }, delay);
    }, []);

    useEffect(() => {
      const delay2 = 11000;
      setTimeout(() => {
        setIsDelayed2(true);
      }, delay2);
    }, []);
  
    const shootingStarClassName = `shooting-star${isDelayed ? ' delayed' : ''}`;
    const shootingStarClassName2 = `shooting-star2${isDelayed2 ? ' delayed' : ''}`;



  return (
    <Box sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"150px",
        width:"100%",
        marginBottom:"70px"
      }}>
        <div className={shootingStarClassName}>
        </div>
        <div className={shootingStarClassName2}>
        </div>
        {isNonMobileScreens && ( 
        <Box sx={{
            display:"flex",
            alignItems:"center",
            width:"75%",
            height:"118px"
        }}>
        <Typography variant='h1' sx={{
          width:"100%",
          fontSize:"97px",
          fontWeight:"bold",
          color:"#FFFFFF", 
          textTransform:"uppercase",
          marginRight:"30px"
        }}>
          Bienvenue
        </Typography>
        <p style={{
          display:"flex",
          width:"200vh",
          height:"81px",
          justifyContent:"wrap",
          marginLeft:"5%",
          fontSize:"22px",
          color:"#FFFFFF"
        }}>
          Voici mon portfolio qui reprend mon histoire, ma reconversion et mes réalisations en tant que développeur front-end. Je vous laisse découvrir mon monde en défilant vers le bas.
        </p>
        </Box>
        )}

        {!isNonMobileScreens && ( 
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            margin:"auto",
            padding:"0px 20px 0px 20px"
        }}>
        <Typography variant='h1' sx={{
          display:"flex",
          justifyContent:"center",
          width:"100%",
          fontSize:"40px",
          color:"#FFFFFF",
          marginBottom:"15px"
        }}>
          Bienvenue
        </Typography>
        <p style={{
          display:"flex",
          width:"100%",
          height:"81px",
          justifyContent:"center",
          alignItems:"center",
          textAlign:"center",
          fontSize:"16px",
          color:"#FFFFFF"
        }}>
          Voici mon portfolio qui reprend mon histoire, ma reconversion et mes réalisations en tant que développeur front-end. Je vous laisse découvrir mon monde en défilant vers le bas.
        </p>
        </Box>
        )}
        
      </Box>
  )
}

export default Welcome