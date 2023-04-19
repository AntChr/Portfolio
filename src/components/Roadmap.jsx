import { Link } from "react-router-dom"
import FlexBetween from './FlexBetween'
import { Box, Typography, useMediaQuery } from '@mui/material'
import openclassrooms from "../images/Logo+strokes/OCR.png"
import booki from "../images/Logo+strokes/Booki.png"
import ohmyfood from"../images/Logo+strokes/Ohmyfood.png"
import panthere from "../images/Logo+strokes/Grrr.png"
import kanap from "../images/Logo+strokes/Kanap.png"
import hottakes from"../images/Logo+strokes/Flames.png"
import kasa from "../images/Logo+strokes/Kasa.png"
import planetyellow from "../images/WEBSITE/Planets/YELLOW_planet.png"
import planetpurple from "../images/WEBSITE/Planets/PURPLE_planet.png"
import platform1 from "../images/WEBSITE/Islands/Floating_island1.png"
import platform2 from "../images/WEBSITE/Islands/Floating_island2.png"
import platform3 from "../images/WEBSITE/Islands/Floating_island3.png"
import platform4 from "../images/WEBSITE/Islands/Floating_island4.png"
import road from "../images/Roadmap_1.png"
import bordure from "../images/Asset_whale.png"
import bgroadmap from "../images/Bg_roadmap.png"
import mobileroad from "../images/Mobile_road.png"
import mobilebgroadmap from "../images/Bg_roadmap.png"


const Roadmap = ({data}) => {
  const isNonMobileScreens = useMediaQuery("(min-width: 768px)")

  return (
    <>
    {/* Desktop Device */}
    {isNonMobileScreens && (
    <div className="Roadmap" style={{ display:"flex", flexDirection:"column", position:"relative", boxSizing:"border-box"}}>
      <img src={road} alt="Road" style={{ width:"62.5%", height:"76%", position:"absolute", zIndex:"3", top:"calc(100vh * 0.70)", left:"19%", opacity:"85%"}}/>
      <FlexBetween className="Roadmap__title" sx={{flexDirection:'column',width:"auto"}}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"986px",width:"100%"}}>
              <h2 style={{display:"flex",justifyContent:"center",alignItems:"end",color:"#FFFFFF",fontSize:"69px"}}>
                  Roadmap
              </h2>
              <p style={{color:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"start", height:"70%"}}>
                  Mon parcours de développeur Web
              </p>
          </Box>
      </FlexBetween>
      <div style={{position:"absolute", top:"calc(100vh * 1)", zIndex:"4"}}>
            <img src={bordure} alt="bordure" style={{width:"100%"}}/>
          </div>
          <Box sx={{position:"relative"}}>
          <img src={bgroadmap} alt="arrière plan roadmap" style={{position:"relative", top:"5px", zIndex:"0", width:"100%"}}/>
              <FlexBetween className="box__img" sx={{justifyContent:"center",position:"absolute",zIndex:"4",left:"44.8%",top:"5%"}}>
                  <Box>
                      <Link to="https://openclassrooms.com/fr/" target="_blank" style={{width:"100%",height:"100%"}}>
                          <img src={openclassrooms} alt="logo openclassrooms" style={{width:"auto",height:"auto",justifyContent:"center",borderRadius:"50%"}}/>
                      </Link>
                      <div className="platform-1" style={{position:"relative",right:"10%",top:"25px",width:"80%",height:"100%"}}>
                          <img src={platform4} alt="platform" style={{width:"100%",height:"100%"}}/>
                      </div>
                  </Box>
              </FlexBetween>
          <div className="planet__yellow" style={{
              position:"absolute",
              top: "5%",
              left:"0%",
              zIndex:"4",
              width:"22.4%",
              height:"12.68%",
              marginRight:"0",
              overflow:"hidden"
              }}>
            <img src={planetyellow} alt="planète jaune" style={{
              position: "relative",
              zIndex:"4",
              top: "0",
              left: "-100%", 
              width: "200%",
              height: "100%",
              objectFit: "cover"
              }} />
          </div>
          <FlexBetween className="box__img" sx={{flexDirection:"column", justifyContent:"center", width:"30%", position:"absolute", zIndex:"4", right:"6.8%", top:"19%"}}>
            <Box sx={{display:"flex"}}>
                <Box className="text__box"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#4545D8", fontSize:"15px"}}>{data[0].title}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>Projet {data[0].projetnumber}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[0].langage}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[0].description}</Typography>
                </Box>
                <Box sx={{width:"60%"}}>
                  <Link to={data[0].url} target="_blank" style={{width:"100%",height:"100%"}}>
                    <img src={booki} alt={data[0].title} style={{ width:"auto", height:"auto", borderRadius:"50%" }}/>
                  </Link>
                  <div className="platform-2" style={{
                    position:"relative",
                    right:"20%",
                    bottom:"-10%",
                    width:"100%",
                    height:"40%"
                  }}>
                    <img src={platform2} alt="platform" style={{
                    width:"auto",
                    height:"100%"
                    }}/>
                  </div>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{flexDirection:"column", justifyContent:"center", width:"30%", position:"absolute", zIndex:"4",left:"15.3%", top:"28%"}}>
          <Box sx={{display:"flex"}}>
              <Box sx={{width:"38%"}}>
                  <Link href={data[1].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                    <img 
                    src={ohmyfood} 
                    alt={data[1].title} 
                    style={{
                      width:"auto",
                      height:"auto",
                      borderRadius:"50%"
                    }}/>
                  </Link>
                <div className="platform-1" style={{
                position:"relative",
                right:"15%",
                top:"5%",
                width:"100%",
                height:"50%"
              }}>
                <img src={platform1} alt="platform" style={{
                width:"auto",
                height:"100%"
              }}/>
              </div>
                </Box>
                <Box className="text__box"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#4545D8", fontSize:"15px"}}>{data[1].title}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>Projet {data[1].projetnumber}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[1].langage}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[1].description}</Typography>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{ flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",right:"6.8%", top:"38%"}}>
          <Box sx={{display:"flex"}}>
          <Box className="text__box"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#4545D8", fontSize:"15px"}}>{data[2].title}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>Projet {data[2].projetnumber}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[2].langage}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[2].description}</Typography>
                </Box>
            <Box sx={{width:"60%"}}>
            <Link to={data[2].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={panthere} 
                alt={data[2].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                <div className="platform-3" style={{
                position:"relative",
                right:"22%",
                top:"0px",
                width:"100%",
                height:"45%"
              }}>
                <img src={platform3} alt="platform" style={{
                width:"auto",
                height:"100%"
              }}/>
              </div>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{ flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",left:"15.3%", top:"48%"}}>
          <Box sx={{display:"flex"}}>
            <Box sx={{width:"41%"}}>
            <Link to={data[3].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={kanap} 
                alt={data[3].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                <div className="platform-1" style={{
                position:"relative",
                right:"12%",
                top:"0%",
                width:"100%",
                height:"45%"
              }}>
                <img src={platform1} alt="platform" style={{
                width:"auto",
                height:"100%",
                transform:"scaleX(-1)"
              }}/>
              </div>
                </Box>
                <Box className="text__box"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                <Typography style={{ display:"flex", margin:"1px", color:"#4545D8", fontSize:"15px"}}>{data[3].title}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>Projet {data[3].projetnumber}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[3].langage}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[3].description}</Typography>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",right:"6.8%", top:"56.5%"}}>
          <Box sx={{display:"flex"}}>
          <Box className="text__box"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#4545D8", fontSize:"15px"}}>{data[4].title}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>Projet {data[4].projetnumber}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[4].langage}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[4].description}</Typography>
                </Box>
            <Box sx={{width:"60%"}}>
            <Link to={data[4].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={hottakes} 
                alt={data[4].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                <div className="platform-4" style={{
                position:"relative",
                right:"24%",
                top:"8%",
                width:"100%",
                height:"40%"
              }}>
                <img src={platform4} alt="platform" style={{
                width:"auto",
                height:"100%"
              }}/>
              </div>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",left:"15.3%", top:"66%"}}>
          <Box sx={{display:"flex"}}>
            <Box sx={{width:"41%"}}>
            <Link to={data[5].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={kasa} 
                alt={data[5].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                <div className="platform-1" style={{
                position:"relative",
                right:"40%",
                top:"0%",
                width:"100%",
                height:"50%"
              }}>
                <img src={platform1} alt="platform" style={{
                width:"auto",
                height:"100%",
              }}/>
              </div>
                </Box>
              <Box className="text__box"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#4545D8", fontSize:"15px"}}>{data[5].title}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>Projet {data[5].projetnumber}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[5].langage}</Typography>
                  <Typography style={{color:"#4545D8", fontSize:"15px"}}>{data[5].description}</Typography>
                </Box>
              </Box>
          </FlexBetween>
          </Box>
          <img src={planetpurple} alt="planet purple" style={{
                  position:"absolute",
                  left:"70%",
                  bottom:"22%",
                  width:"17.4%",
                  height:"4.34%"
                }}/>        
    </div>
  )}
  {/* Mobile Device */}
  {!isNonMobileScreens && (
    <div className="Roadmap" style={{ display:"flex", flexDirection:"column", position:"relative", height:"100%"}}>
      <div style={{position:"absolute",top:"88.5%",left:"0", right:"0", zIndex:"4"}}>
          <img src={bordure} alt="bordure" style={{width:"100%"}}/>
      </div>
      <img src={mobileroad} alt="Road" style={{ width:"auto", height:"100%", position:"absolute", zIndex:"3", top:"100%", left:"49%", opacity:"85%"}}/>
      <FlexBetween className="Roadmap__title" sx={{flexDirection:'column',width:"auto"}}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"986px",width:"100%"}}>
              <h2 style={{display:"flex",justifyContent:"center",alignItems:"end",margin:"30% 30% 10px 30%",color:"#FFFFFF",fontSize:"69px"}}>
                  Roadmap
              </h2>
              <p style={{color:"#FFFFFF",display:"flex",justifyContent:"center"}}>
                  Mon parcours de développeur Web
              </p>
          </Box>
      </FlexBetween>
          <Box sx={{position:"relative", height:"1390px", marginBottom:"0px", }}>
          <img src={mobilebgroadmap} alt=" arrière plan roadmap"style={{position:"relative", zIndex:"0", top:"0.3%", width:"100%", height:"100%"}}/>
              <FlexBetween className="box__img" sx={{justifyContent:"center",position:"absolute",zIndex:"4",left:"40.5%",top:"5%"}}>
                  <Box className="ellipse">
                      <Link to="https://openclassrooms.com/fr/" style={{width:"86px",height:"86px"}}>
                          <img src={openclassrooms} alt="logo openclassrooms" style={{height:"86px",justifyContent:"center",borderRadius:"50%"}}/>
                      </Link>
                  </Box>
              </FlexBetween>
          <div className="planet__yellow" style={{
              position:"absolute",
              top: "5%",
              left:"0%",
              zIndex:"4",
              width:"22.4%",
              height:"12.68%",
              marginRight:"0",
              overflow:"hidden"
              }}>
            <img src={planetyellow} alt="planète jaune" style={{
              position: "relative",
              zIndex:"4",
              top: "0",
              left: "-100%", 
              width: "200%",
              height: "100%",
              objectFit: "cover"
              }} />
          </div>
          <FlexBetween className="box__img" sx={{flexDirection:"column", justifyContent:"center", width:"20%", height:"120px", position:"absolute", zIndex:"4", left:"50%", top:"18.5%"}}>
            <Box sx={{display:"flex"}}>
              <Box className="ellipse">
              <Link to={data[0].url}>
                  <img 
                  src={booki} 
                  alt={data[0].title} 
                  style={{
                    width:"86px",
                    height:"86px",
                    justifyContent:"center",
                    borderRadius:"50%"
                  }}/>
                  </Link>
                  </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{flexDirection:"column", justifyContent:"center", width:"20%", height:"120px", position:"absolute", zIndex:"4",left:"50%", top:"32%"}}>
          <Box sx={{display:"flex"}}>
              <Box className="ellipse">
            <a href={data[1].url} style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={ohmyfood} 
                alt={data[1].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </a>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{ flexDirection:"column", justifyContent:"center", width:"20%", height:"120px", position:"absolute", zIndex:"4",left:"50%", top:"46.5%"}}>
          <Box sx={{display:"flex"}}>
            <Box className="ellipse">
            <Link to={data[2].url} style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={panthere} 
                alt={data[2].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{ flexDirection:"column",justifyContent:"center", width:"20%", height:"120px", position:"absolute", zIndex:"4",left:"50%", top:"61%"}}>
          <Box sx={{display:"flex"}}>
              <Box className="ellipse">
              <Link to={data[3].url} style={{width:"100%",
                    height:"100%",}}>
                  <img 
                  src={kanap} 
                  alt={data[3].title} 
                  style={{
                    width:"86px",
                    height:"86px",
                    justifyContent:"center",
                    borderRadius:"50%"
                  }}/>
                  </Link>
                  </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{flexDirection:"column", justifyContent:"center", width:"20%", height:"120px", position:"absolute", zIndex:"4",left:"50%", top:"75.5%"}}>
          <Box sx={{display:"flex"}}>
            <Box className="ellipse">
            <Link to={data[4].url} style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={hottakes} 
                alt={data[4].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
              </Box>
          </FlexBetween>
          <FlexBetween className="box__img" sx={{flexDirection:"column", justifyContent:"center", width:"20%", height:"120px", position:"absolute", zIndex:"4",left:"41%", top:"86%"}}>
          <Box sx={{display:"flex"}}>
            <Box>
            <Link to={data[5].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={kasa} 
                alt={data[5].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
              </Box>
          </FlexBetween>
          <img src={planetpurple} alt="planet purple" style={{
                  position:"absolute",
                  left:"67%",
                  bottom:"25%",
                  width:"28%",
                  height:"8%"
                }}/>   
          </Box>
    </div>
  )}
  </>
  )
}

export default Roadmap