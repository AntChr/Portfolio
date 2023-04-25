import FlexBetween from './FlexBetween';
import { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import plus from "../images/plus.png"
import moins from "../images/moins.png"

const SkillList = ({data, addToCart, removeFromCart}) => {
  const isDesktopScreens = useMediaQuery("(min-width: 1024px)")
  const isTabletScreens = useMediaQuery("((min-width: 768px) and (max-width: 1024px))")
  const isMobileScreens = useMediaQuery("(max-width: 767.9px)")
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dots = [];
  for (let i =0; i < data.rating; i++) {
      dots.push(<div style={{display:"flex",marginRight:"13px", width:"16px", height:"16px", backgroundColor:"#FFB300", borderRadius:"50%"}}></div>);
  }
  const dotsempty =[];
  for (let i =0; i < (5-data.rating); i++) {
      dotsempty.push(<div style={{display:"flex",marginRight:"13px", width:"13px", height:"13px", backgroundColor:"transparent",border:"2px solid #FFB300", borderRadius:"50%"}}></div>);
  }

  const handleAddToCartClick = () => {
    setIsAddedToCart(true);
    addToCart();
  };

  const handleRemoveFromCartClick = () => {
    setIsAddedToCart(false);
    removeFromCart();
  };

  return (
    <>
    {/* Desktop Device */}
    {isDesktopScreens && (
    <Box key={data.id} sx={{
      display:"flex",
      flexDirection:"column",
      width:"30%",
      height:"316px",
      backgroundColor:"rgba(0, 32, 139, 0.86)",
      borderRadius:"48px 48px 48px 0px",
      margin:"0px 30px 30px 0px"
      }}>
        <Box sx={{width:"100%", height:"80%",}}>
        <img src={data.cover} alt={data.title} style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"48px 48px 0px 0px", backgroundColor:"#FFFFFF"}}/>
        {data.add && (
            isAddedToCart ? (
            <button onClick={handleRemoveFromCartClick} style={{
              position:"relative",
              bottom:"95%",
              left:"79%",
              backgroundColor:"transparent",
              border:"none",
              width:"45px",
              height:"45px",
              cursor:"pointer",
              padding:"0"
           }}><img src={moins} alt="moins" style={{width:"100%", height:"100%", objectFit:"cover"}}/></button>
          ) : (  
          <button onClick={handleAddToCartClick} style={{
            position:"relative",
            bottom:"95%",
            left:"79%",
            backgroundColor:"transparent",
            border:"none",
            width:"45px",
            height:"45px",
            cursor:"pointer",
            padding:"0"
             }}><img src={plus} alt="plus" style={{width:"100%", height:"100%", objectFit:"cover"}}/></button>
          )
          )} 
          </Box>
        <Box sx={{padding:"5px 0px 0px 21px"}}>
          <Typography variant="h2" style={{color:"#FFFFFF", fontSize:"19px", marginBottom:"5px", height:"auto"}}>{data.title}</Typography>
          <Box sx={{display:"flex"}}>
            {dots}
            {dotsempty}
          </Box>
        </Box>
      </Box>
      )}
      
    {/* Tablet Device */}
    {isTabletScreens && (
    <Box key={data.id} sx={{
      display:"flex",
      flexDirection:"column",
      width:"100%",
      height:"316px",
      backgroundColor:"rgba(0, 32, 139, 0.86)",
      borderRadius:"48px 48px 48px 0px",
      margin:"0px 30px 30px 0px"
      }}>
        <Box sx={{width:"100%", height:"80%",}}>
        <img src={data.cover} alt={data.title} style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"48px 48px 0px 0px", backgroundColor:"#FFFFFF"}}/>
        {data.add && (
            isAddedToCart ? (
            <button onClick={handleRemoveFromCartClick} style={{
              position:"relative",
              bottom:"95%",
              left:"79%",
              backgroundColor:"transparent",
              border:"none",
              width:"45px",
              height:"45px",
              cursor:"pointer",
              padding:"0"
           }}><img src={moins} alt="moins" style={{width:"100%", height:"100%", objectFit:"cover"}}/></button>
          ) : (  
          <button onClick={handleAddToCartClick} style={{
            position:"relative",
            bottom:"95%",
            left:"79%",
            backgroundColor:"transparent",
            border:"none",
            width:"45px",
            height:"45px",
            cursor:"pointer",
            padding:"0"
             }}><img src={plus} alt="plus" style={{width:"100%", height:"100%", objectFit:"cover"}}/></button>
          )
          )} 
          </Box>
        <Box sx={{padding:"5px 0px 0px 21px"}}>
          <Typography variant="h2" style={{color:"#FFFFFF", fontSize:"19px", marginBottom:"5px", height:"auto"}}>{data.title}</Typography>
          <Box sx={{display:"flex"}}>
            {dots}
            {dotsempty}
          </Box>
        </Box>
      </Box>
      )}

      {/* Mobile Device */}
      {isMobileScreens && (
        <FlexBetween key={data.id} sx={{
          display:"flex",
          flexDirection:"column",
          width:"318px",
          height:"280px",
          backgroundColor:"rgba(0, 32, 139, 0.86)",
          borderRadius:"48px 48px 48px 0px",
          marginBottom:"15px",
          }}>
        <Box sx={{height:"200px", width:"100%"}}>
        <img src={data.cover} alt={data.title} style={{ width:"100%", height:"200px", objectFit:"cover", borderRadius:"48px 48px 0px 0px", backgroundColor:"#FFFFFF"}}/>
        {data.add && (
            isAddedToCart ? (
            <button onClick={handleRemoveFromCartClick} style={{
            backgroundColor:"transparent",
            display:"flex",
            position:"relative",
            bottom:"92%",
            left:"78%",
            width:"60px",
            height:"50px", 
            alignItems:"center",
            border:"none",
            borderRadius:"50%",
            cursor:"pointer",
            padding:"0px",
            }}><img src={moins} alt="moins" style={{width:"100%", height:"100%", objectFit:"cover"}}/></button>
          ) : (  
          <button onClick={handleAddToCartClick} style={{
            position:"relative",
            bottom:"92%",
            left:"78%",
            width:"55px",
            border:"none",
            height:"50px",
            marginLeft:"0px", 
            backgroundColor:"transparent",
            borderRadius:"50%",
            cursor:"pointer",
            padding:"0px",
             }}><img src={plus} alt="plus" style={{width:"100%", height:"100%"}}/></button>
          )
        )} 
        </Box>
        <Box sx={{padding:"10px 0px 0px 21px", width:"100%", height:"100%"}}>
          <Typography variant="h2" style={{color:"#FFFFFF", fontSize:"19px", marginBottom:"10px", height:"40%"}}>{data.title}</Typography>
          <Box sx={{display:"flex"}}>
            {dots}
            {dotsempty}
          </Box>
        </Box>
      </FlexBetween>
      )}
      </>
  )
}

export default SkillList






