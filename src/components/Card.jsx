import {useState, useContext} from 'react'
import FlexBetween from './FlexBetween';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { CartContext } from './CartContext';


const Card = ({data, DefaultTotal = 14000}) => {
  const isDesktopScreens = useMediaQuery("(min-width: 1026px)")
  const isTabletScreens = useMediaQuery("((min-width: 769px) and (max-width: 1025px))")
  const isMobileScreens = useMediaQuery("(max-width: 768px)")
  const { panier, setPanier } = useContext(CartContext);  
  const [deftotal,setTotal] = useState(DefaultTotal)
  
  const handleClearCart = () => {
    setPanier([])
}

  const total = panier.length > 0 ? panier.reduce((acc, item) => acc + item.price, deftotal) : deftotal

  return (
    <>
    {/* Desktop Device */}
    {isDesktopScreens && (
    <FlexBetween className="card" sx={{
      flexDirection:"column",
      backgroundColor:"rgba(33, 66, 159, 0.73)",
      width:"35%",
      height:"auto",
      margin:"34px 20px 34px 31px",
      borderRadius:"0px 45px 0px 0px"
      }}>
      <Box className="incard" sx={{
        display:"flex",
        flexDirection:"column",
        color:"#FFFFFF",
        width:"100%",
        height:"auto",
        opacity:"1",
        paddingRight:"5px",
        margin:"44px 0px 0px 0px",
        fontWeight:"medium",
        fontSize:"19px"
        }}>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Autonomie</span><span>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Patience</span><span>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Transparence</span><span>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Anglais</span><span>3500 € brut/an</span></div>
        {panier.map((skill, index) => (
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}} key={skill.id ? skill.id : index}><span>{skill.title}</span><span>{skill.price} € brut/an</span></div>
        ))}
        <span style={{width:"80%", height:"2px", backgroundColor:"#00163F", margin:"0px 1% 10px 10%" }}></span>
        <h3 style={{display:"flex", justifyContent:"space-between", fontSize:"19px", width:"90%", height:"23px", marginBottom:"29px", paddingLeft:"17px"}}><span>Total</span><span>{total} € brut/an</span></h3>
        <button onClick={handleClearCart} style={{
          width:"260px",
          height:"51px",
          borderRadius:"23px",
          backgroundColor:"#00163F",
          opacity:"1",
          color:"#FFFFFF",
          border:"transparent", 
          margin:"auto"
          }}>Vider le panier</button>
        </Box>
    </FlexBetween>
    )}

    {/* Tablet Device */}
    {isTabletScreens && (
    <FlexBetween className="card" sx={{
      flexDirection:"column",
      backgroundColor:"rgba(33, 66, 159, 0.73)",
      width:"40%",
      height:"auto",
      margin:"34px 20px 34px 31px",
      borderRadius:"0px 45px 0px 0px"
      }}>
      <Box className="incard" sx={{
        display:"flex",
        flexDirection:"column",
        color:"#FFFFFF",
        width:"95%",
        height:"auto",
        opacity:"1",
        paddingRight:"5px",
        margin:"44px 0px 0px 0px",
        fontWeight:"medium",
        fontSize:"19px"
        }}>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Autonomie</span><span style={{textAlign:"right"}}>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Patience</span><span style={{textAlign:"right"}}>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Transparence</span><span style={{textAlign:"right"}}>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Anglais</span><span style={{textAlign:"right"}}>3500 € brut/an</span></div>
        {panier.map((skill, index) => (
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}} key={skill.id ? skill.id : index}><span>{skill.title}</span><span>{skill.price} € brut/an</span></div>
        ))}
        <span style={{width:"80%", height:"2px", backgroundColor:"#00163F", margin:"0px 1% 10px 10%" }}></span>
        <h3 style={{display:"flex", justifyContent:"space-between", fontSize:"19px", width:"90%", height:"23px", marginBottom:"29px", paddingLeft:"17px"}}><span>Total</span><span style={{textAlign:"right"}}>{total} € brut/an</span></h3>
        <button onClick={handleClearCart} style={{
          width:"90%",
          height:"51px",
          borderRadius:"23px",
          backgroundColor:"#00163F",
          opacity:"1",
          color:"#FFFFFF",
          border:"transparent", 
          margin:"auto"
          }}>Vider le panier</button>
        </Box>
    </FlexBetween>
    )}

    {/* Mobile Device */}
    {isMobileScreens && (
    <FlexBetween className="card" sx={{
      flexDirection:"column",
      backgroundColor:"rgba(33, 66, 159, 0.73)",
      width:"87%",
      height:"auto",
      margin:"34px 18px 38px 19px",
      borderRadius:"0px 45px 0px 0px"
      }}>
      <Box className="incard" sx={{
        display:"flex",
        flexDirection:"column",
        color:"#FFFFFF",
        width:"100%",
        height:"auto",
        opacity:"1",
        margin:"44px 25px 24px 25px",
        fontWeight:"medium",
        fontSize:"16px",
        }}>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Autonomie</span><span>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Patience</span><span>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Transparence</span><span>3500 € brut/an</span></div>
        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}}> <span>Anglais</span><span>3500 € brut/an</span></div>
        {panier.map((skill, index) => (
          <div style={{display:"flex", justifyContent:"space-between", marginBottom:"17px", width:"auto", paddingLeft:"17px"}} key={skill.id ? skill.id : index}><span>{skill.title}</span><span>{skill.price} € brut/an</span></div>
        ))}
        <span style={{width:"82%", height:"2px", backgroundColor:"#00163F", margin:"0px 8px 10px 21px", }}></span>
        <h3 style={{display:"flex", justifyContent:"space-between", fontSize:"16px", width:"85%", height:"23px", marginBottom:"29px", paddingLeft:"17px"}}><span>Total</span><span>{total} € brut/an</span></h3>
        <button onClick={handleClearCart} style={{
          width:"260px",
          height:"51px",
          borderRadius:"23px",
          backgroundColor:"#00163F",
          opacity:"1",
          color:"#FFFFFF",
          border:"transparent", 
          margin:"auto"
          }}>Vider le panier</button>
        </Box>
    </FlexBetween>
    )}
    </>
  )
}

export default Card