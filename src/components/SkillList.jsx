import FlexBetween from './FlexBetween';
import { useState } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

const SkillList = ({data, addToCart, removeFromCart}) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 768px)")
  const isTabletScreens = useMediaQuery("(max-width: 992px)")
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
    {isNonMobileScreens && (
    <FlexBetween sx={{
      display:"flex",
      flexWrap:"wrap",
      width:"316px",
      margin:"0px 30px 15px 0px",
      height:"316px",
      backgroundColor:"rgba(0, 32, 139, 0.86)",
      borderRadius:"48px 48px 48px 0px",
      }}>

      <Box key={data.id} sx={{width:"100%", height:"100%"}}>
        <img src={data.cover} alt={data.title} style={{ width:"100%", height:"80%", objectFit:"cover", borderRadius:"48px 48px 0px 0px", backgroundColor:"#FFFFFF"}}/>
        <Box sx={{padding:"5px 0px 0px 21px"}}>
          <Typography variant="h2" style={{color:"#FFFFFF", fontSize:"19px", marginBottom:"5px"}}>{data.title}</Typography>
          <Box sx={{display:"flex"}}>
            {dots}
            {dotsempty}
          </Box>
          {data.add && (
            isAddedToCart ? (
              <Box sx={{position:"relative",
              bottom:"292px",
              left:"228px" }}>
            <button onClick={handleRemoveFromCartClick} style={{
            color:"#000000",
            width:"45px",
            height:"45px",
            backgroundColor:"transparent",
            display:"flex",
            alignItems:"center",
            paddingLeft:"12px",
            border:"2px solid #000000",
            borderRadius:"50%",
            fontSize:"50px",
            cursor:"pointer",
            }}>-</button>
            </Box>
          ) : (  
            <Box sx={{
            position:"relative",
            bottom:"292px",
            left:"228px"}}>
          <button onClick={handleAddToCartClick} style={{
            color:"#000000",
            width:"45px",
            height:"45px",
            backgroundColor:"transparent",
            border:"2px solid #000000",
            borderRadius:"50%",
            fontSize:"40px",
            cursor:"pointer",
             }}>+</button>
            </Box>
          )
          )} 
        </Box>
      </Box>
      </FlexBetween>
      )}
      
      {/* Mobile Device */}
      {!isNonMobileScreens && (
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
            color:"#000000",
            backgroundColor:"transparent",
            display:"flex",
            position:"relative",
            bottom:"92%",
            left:"78%",
            width:"45px",
            height:"45px", 
            alignItems:"center",
            paddingLeft:"12px",
            border:"2px solid #000000",
            borderRadius:"50%",
            fontSize:"50px",
            cursor:"pointer",
            }}>-</button>
          ) : (  
          <button onClick={handleAddToCartClick} style={{
            color:"#000000",
            position:"relative",
            bottom:"92%",
            left:"78%",
            width:"45px",
            height:"45px",
            marginLeft:"0px", 
            backgroundColor:"transparent",
            border:"2px solid #000000",
            borderRadius:"50%",
            fontSize:"40px",
            cursor:"pointer",
             }}>+</button>
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






