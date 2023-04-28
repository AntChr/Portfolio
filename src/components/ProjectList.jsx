import React from 'react'
import FlexBetween from './FlexBetween'
import { Box, Typography, useMediaQuery } from '@mui/material'


const ProjectList = ({data}) => {
  const isDesktopScreens = useMediaQuery("(min-width: 1026px)")
  const isTabletScreens = useMediaQuery("((min-width: 769px) and (max-width: 1025px))")
  const isMobileScreens = useMediaQuery("(max-width: 768px)")

  const signal = () => {
    if(data.statut === "Terminé") {
      return <div style={{display:"flex", marginRight:"13px", width:"10px", height:"10px", backgroundColor:"rgba(113, 199, 32, 0.932)", borderRadius:"50%"}}/>
    } else if (data.statut === "En cours") {
      return <div style={{display:"flex",justifyContent:"flex-end", marginRight:"13px", width:"10px", height:"10px", backgroundColor:"rgba(235, 142, 20, 0.932)", borderRadius:"50%"}} />
    } else if (data.statut === "Prochainement") {
      return <div style={{display:"flex",justifyContent:"flex-end", marginRight:"13px", width:"10px", height:"10px", backgroundColor:"rgba(235, 45, 20, 0.932)", borderRadius:"50%", textAlign:"center"}}/>
    }
  }
  return (
    <FlexBetween sx={{ flexDirection:"column"}}>

    {/* Desktop Device */}
    {isDesktopScreens && (
    <Box sx={{ display:"flex", alignItems:"center", width:"100%", marginBottom:"20px"}}>
      <Box>
        <a href={data.url} target="_blank">
          <img src={data.image} alt={data.title} style={{
          width:"100%",
          height:"100%",
          justifyContent:"center",
          borderRadius:"50%",
          objectFit:"contain",
          }}/>
        </a>
      </Box>
      <Box sx={{width:"30%", margin:"auto", textAlign:"center"}}>
        <Typography variant='h2' sx={{fontSize:"19px",  color:"#000000", fontWeight:"bolder"}}>{data.title}</Typography>
      </Box>
      <Box sx={{width:"30%", textAlign:"center"}}>
        <Typography variant="subtitle1" style={{ color:"#000000", fontWeight:"bolder"}}>{data.langage}</Typography>
      </Box>
      <Box sx={{ width:"30%", textAlign:"center"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"start" }}>{signal()}<p style={{width:"35%", color:"#000000", fontWeight:"bolder"}}>{data.statut}</p></div>
      </Box>
      <Box sx={{width:"30%", textAlign:"center"}}>
        <p style={{color:"#000000", fontWeight:"bolder"}} >{data.description}</p>
      </Box>
    </Box>
    )}
    
    {/* Mobile Device */}
    {isMobileScreens && (
      <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", width:"auto", marginBottom:"20px"}}>
        <Box sx={{marginBottom:"10px"}}>
          <a href={data.url} target="_blank">
            <img src={data.image} alt={data.title} style={{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            borderRadius:"50%",
            objectFit:"contain",
            }}/>
          </a>
        </Box>
        <Box sx={{width:"100%", margin:"auto", textAlign:"center"}}>
          <Typography variant='h2' sx={{fontSize:"19px", color:"#000000",}}>{data.title}</Typography>
        </Box>
        <Box sx={{width:"100%", textAlign:"center"}}>
          <Typography variant="subtitle1"sx={{color:"#000000"}}>{data.langage}</Typography>
        </Box>
        <Box sx={{ width:"100%", textAlign:"center"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{signal()}<p style={{width:"35%", color:"#000000",}}>{data.statut}</p></div>
        </Box>
        <Box sx={{width:"100%", textAlign:"center"}}>
          <p style={{color:"#000000"}}>{data.description}</p>
        </Box>
    </Box>
    )}
        {/* Tablet Device */}
        {isTabletScreens && (
    <Box sx={{ display:"flex", flexDirection:"column", alignItems:"center", width:"100%", marginBottom:"20px"}}>
      <Box sx={{display:"flex", width:"100%"}}>
        <Box sx={{width:"20%", height:"152px"}}>
          <a href={data.url} target="_blank">
            <img src={data.image} alt={data.title} style={{
            width:"100%",
            height:"100%",
            justifyContent:"center",
            borderRadius:"50%",
            objectFit:"contain",
            }}/>
          </a>
        </Box>
        <Box sx={{width:"25%", margin:"auto", textAlign:"center"}}>
          <Typography variant='h2' sx={{fontSize:"19px",  color:"#000000", fontWeight:"bolder"}}>{data.title}</Typography>
        </Box>
        <Box sx={{width:"25%", margin:"auto", textAlign:"center"}}>
          <Typography variant="subtitle1" style={{ color:"#000000", fontWeight:"bolder"}}>{data.langage}</Typography>
        </Box>
        <Box sx={{ width:"25%", margin:"auto", textAlign:"center"}}>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"start" }}>{signal()}<p style={{width:"100%", color:"#000000", fontWeight:"bolder"}}>{data.statut}</p></div>
        </Box>
      </Box>
      <Box sx={{width:"100%", textAlign:"center"}}>
        <p style={{color:"#000000", fontWeight:"bolder"}} >{data.description}</p>
      </Box>
      <div style={{width:"20%", backgroundColor:"#FFFFFF", height:"2px", marginTop:"20px"}}></div>
    </Box>
    )}
  </FlexBetween>
  )
}

export default ProjectList