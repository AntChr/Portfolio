import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
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
  const isDesktopScreens = useMediaQuery("(min-width: 1026px)")
  const isTabletScreens = useMediaQuery("((min-width: 769px) and (max-width: 1025px))")
  const isMobileScreens = useMediaQuery("(max-width: 768px)")

  const [isIntersecting, setIsIntersecting] = useState(false);
  const textRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const textElements = document.querySelectorAll('.text__box__r');
  
    textElements.forEach(element => {
      observer.observe(element);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const textElements = document.querySelectorAll('.text__box__l');
  
    textElements.forEach(element => {
      observer.observe(element);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const textElements = document.querySelectorAll('.box__img');
  
    textElements.forEach(element => {
      observer.observe(element);
    });
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    {/* Desktop Device */}
    {isDesktopScreens && (
    <div className="Roadmap" style={{ display:"flex", flexDirection:"column", position:"relative", backgroundColor:"#0A0019"}}>
      <FlexBetween className="Roadmap__title" sx={{flexDirection:'column',width:"auto"}}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"986px",width:"100%"}}>
              <h2 style={{display:"flex",justifyContent:"center",alignItems:"end",color:"#FFFFFF",fontSize:"69px"}}>
                  Roadmap
              </h2>
              <p style={{color:"#FFFFFF",display:"flex",justifyContent:"center",alignItems:"start", height:"70%"}}>
                  Mon parcours de formation de développeur Web
              </p>
          </Box>
      </FlexBetween>
      <div style={{display:"flex", position:"relative", zIndex:"4", height:"100px", bottom:"1px"}}>
        <img src={bordure} alt="bordure" style={{width:"100%", height:"100%"}}/>
      </div>
      <img src={road} alt="Road" style={{ width:"62.5%", height:"76%", position:"absolute", zIndex:"3", top:"9%", left:"19%", opacity:"85%"}}/>
          <Box sx={{display:"flex", position:"relative",bottom:"70px"}}>
          <img src={bgroadmap} alt="arrière plan roadmap" style={{position:"relative", zIndex:"0", width:"100%"}}/>
          <Box sx={{display:"flex", flexDirection:"column", position:"absolute",zIndex:"4",left:"44.8%",top:"5%", width:"45%", height:"auto"}}>
              <Box sx={{display:"flex", width:"100%"}}>
                  <Box className="box__img" sx={{width:"20%"}}>
                      <Link to={data[0].url} target="_blank" style={{width:"100%",height:"100%"}}>
                          <img src={openclassrooms} alt="logo openclassrooms" style={{width:"auto",height:"auto",justifyContent:"center",borderRadius:"50%"}}/>
                      </Link>
                  </Box>
                  <Box className="text__box__l" sx={{ display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"30px 0px 50px 0px", width:"30%", height:"100%" }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[0].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[0].description}</Typography>
                </Box>
              </Box>
              <div className="platform-1" style={{position:"relative",right:"5%",top:"25px",width:"30%",height:"40%"}}>
                <img src={platform4} alt="platform" style={{width:"100%",height:"100%"}}/>
              </div>
            </Box>
          <div className="planet__yellow" style={{
              position:"absolute",
              top: "5%",
              left:"0%",
              zIndex:"4",
              width:"22.2%",
              height:"12.69%",
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
          <FlexBetween  sx={{flexDirection:"column", justifyContent:"center", width:"30%", position:"absolute", zIndex:"4", right:"12.3%", top:"19%"}}>
            <Box sx={{display:"flex"}}>
            <Box className="text__box__r" sx={{ display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"0px", width:"100%", height:"100%" }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[1].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[1].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[1].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[1].description}</Typography>
                </Box>
                <Box className="box__img" sx={{width:"60%", marginLeft:"10px"}}>
                  <Link to={data[1].url} target="_blank" style={{width:"100%",height:"100%"}}>
                    <img src={booki} alt={data[1].title} style={{ width:"auto", height:"auto", borderRadius:"50%" }}/>
                  </Link>
                </Box>
              </Box>
              <div className="platform-2" style={{
                    position:"relative",
                    left:"32%",
                    top:"15px",
                    width:"auto",
                    height:"40%"
                  }}>
                    <img src={platform2} alt="platform" style={{
                    width:"auto",
                    height:"100%"
                    }}/>
                  </div>
          </FlexBetween>
          <FlexBetween  sx={{flexDirection:"column", justifyContent:"center", width:"30%", position:"absolute", zIndex:"4",left:"15.3%", top:"28%"}}>
          <Box sx={{display:"flex"}}>
              <Box className="box__img" sx={{width:"28%", marginRight:"10px"}}>
                  <Link to={data[2].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                    <img 
                    src={ohmyfood} 
                    alt={data[2].title} 
                    style={{
                      width:"auto",
                      height:"auto",
                      borderRadius:"50%"
                    }}/>
                  </Link>
                </Box>
                <Box className="text__box__l"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"20px 0px 10px 0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[2].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[2].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[2].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[2].description}</Typography>
                </Box>
              </Box>
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
          </FlexBetween>
          <FlexBetween sx={{ flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",right:"12.3%", top:"38%"}}>
          <Box sx={{display:"flex"}}>
          <Box className="text__box__r" sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"10px 0px 10px 0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[3].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[3].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[3].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[3].description}</Typography>
                </Box>
            <Box className="box__img" sx={{width:"60%", marginLeft:"10px"}}>
            <Link to={data[3].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={panthere} 
                alt={data[3].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
              </Box>
              <div className="platform-3" style={{
                position:"relative",
                left:"25%",
                top:"0px",
                width:"auto",
                height:"45%"
              }}>
                <img src={platform3} alt="platform" style={{
                width:"auto",
                height:"100%"
              }}/>
              </div>
          </FlexBetween>
          <FlexBetween sx={{ flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",left:"15.3%", top:"48%"}}>
          <Box sx={{display:"flex"}}>
            <Box className="box__img" sx={{width:"28%", marginRight:"10px"}}>
            <Link to={data[4].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={kanap} 
                alt={data[4].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
                <Box className="text__box__l"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"20px 0px 10px 0px",
                  width:"100%",
                  height:"100%"
                }}>
                <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[4].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[4].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[4].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[4].description}</Typography>
                </Box>
              </Box>
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
          </FlexBetween>
          <FlexBetween sx={{flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",right:"12.3%", top:"57.5%"}}>
          <Box sx={{display:"flex"}}>
          <Box className="text__box__r"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"20px 0px 10px 0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[5].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[5].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[5].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[5].description}</Typography>
                </Box>
            <Box className="box__img" sx={{width:"60%", marginLeft:"10px"}}>
            <Link to={data[5].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={hottakes} 
                alt={data[5].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
              </Box>
              <div className="platform-4" style={{
                position:"relative",
                left:"32%",
                top:"12px",
                width:"auto",
                height:"40%"
              }}>
                <img src={platform4} alt="platform" style={{
                width:"auto",
                height:"100%"
              }}/>
              </div>
          </FlexBetween>
          <FlexBetween sx={{flexDirection:"column", width:"30%", position:"absolute", zIndex:"4",left:"15.3%", top:"66%"}}>
          <Box sx={{display:"flex"}}>
            <Box className="box__img" sx={{width:"28%", marginRight:"10px"}}>
            <Link to={data[6].url} target="_blank" style={{width:"100%",
                  height:"100%",}}>
                <img 
                src={kasa} 
                alt={data[6].title} 
                style={{
                  width:"auto",
                  height:"auto",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
              <Box className="text__box__l"sx={{
                  display:"flex",
                  flexDirection:"column",
                  backgroundColor:"#A6C8E8",
                  borderRadius:"10px",
                  padding:"5px",
                  margin:"0px",
                  width:"100%",
                  height:"100%"
                }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[6].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[6].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[6].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[6].description}</Typography>
                </Box>
              </Box>
              <div className="platform-1" style={{
                position:"relative",
                right:"35%",
                top:"0%",
                width:"auto",
                height:"50%"
              }}>
                <img src={platform1} alt="platform" style={{
                width:"auto",
                height:"100%",
              }}/>
              </div>
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
  {isMobileScreens && (
    <div className="Roadmap" style={{ display:"flex", flexDirection:"column", position:"relative", height:"100%"}}>
    <FlexBetween className="Roadmap__title" sx={{flexDirection:'column',width:"auto"}}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"986px",width:"100%"}}>
            <h2 style={{display:"flex",justifyContent:"center",alignItems:"end",margin:"30% 30% 10px 30%",color:"#FFFFFF",fontSize:"69px"}}>
                Roadmap
            </h2>
            <p style={{color:"#FFFFFF",display:"flex",justifyContent:"center", textAlign:"center", width:"80%"}}>
                Mon parcours de formation de développeur Web
            </p>
        </Box>
    </FlexBetween>
    <div style={{display:"flex", position:"relative", zIndex:"4", height:"90px"}}>
      <img src={bordure} alt="bordure" style={{width:"100%", height:"100%"}}/>
    </div>
        <Box sx={{display:"flex", position:"relative",bottom:"6%", height:"1390px", marginBottom:"0px",  flexDirection:"column", borderBottom:"20px solid #0A0019" }}>
          <div style={{display:"flex",justifyContent:"center", position:"relative", zIndex:"3", width:"auto", padding:"150px 0px 150px 0px"}}>
            <img src={mobileroad} alt="Road" style={{width:"auto", height:"1100px", opacity:"85%"}}/>
          </div>
          <div style={{position:"relative",bottom:"100%", zIndex:"0", width:"auto", height:"1390px"}}>
            <img src={mobilebgroadmap} alt=" arrière plan roadmap"style={{width:"100%", height:"1390px",}}/>
          </div>
          <Box sx={{display:"flex",justifyContent:"center", position:"relative", bottom:"200%", height:"100%", width:"100%"}}>     
        <div className="planet__yellow" style={{
            position:"absolute",
            top: "15%",
            left:"0%",
            zIndex:"4",
            width:"75px",
            height:"150px",
            marginRight:"0",
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
        <Box className="logo__projet" sx={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", width:"10%", paddingTop:"25px"}}>
            <Box className="box__img" sx={{display:"flex", justifyContent:"center",position:"relative",zIndex:"4", padding:"50px 0px 50px 0px"}}>
              <Link to={data[0].url} style={{width:"86px",height:"86px"}}>
                  <img src={openclassrooms} alt="logo openclassrooms" style={{height:"86px",justifyContent:"center",borderRadius:"50%"}}/>
              </Link>
            </Box>
            <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
            <Link to={data[1].url} target="_blank">
                <img 
                src={booki} 
                alt={data[1].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
            </Box>
            <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
              <Link to={data[2].url} target="_blank">
              <img 
              src={ohmyfood} 
              alt={data[2].title} 
              style={{
                width:"86px",
                height:"86px",
                justifyContent:"center",
                borderRadius:"50%"
              }}/>
              </Link>
              </Box>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                <Link to={data[3].url} target="_blank">
                <img 
                src={panthere} 
                alt={data[3].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
              </Box>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                <Link to={data[4].url} target="_blank">
                    <img 
                    src={kanap} 
                    alt={data[4].title} 
                    style={{
                      width:"86px",
                      height:"86px",
                      justifyContent:"center",
                      borderRadius:"50%"
                    }}/>
                    </Link>
              </Box>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                <Link to={data[5].url} target="_blank">
                <img 
                src={hottakes} 
                alt={data[5].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
            </Box>
            <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
              <Link to={data[6].url} target="_blank">
                <img 
                src={kasa} 
                alt={data[6].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
              </Link>
            </Box>
        </Box>
            
        <img src={planetpurple} alt="planet purple" style={{
                position:"absolute",
                left:"64%",
                bottom:"24%",
                width:"100px",
                height:"100px"
              }}/> 
          </Box>  
        </Box>
  </div>
  )}
  {/* Tablet Device */}
  {isTabletScreens && (
    <div className="Roadmap" style={{ display:"flex", flexDirection:"column", position:"relative", height:"100%"}}>
      <FlexBetween className="Roadmap__title" sx={{flexDirection:'column',width:"auto"}}>
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"986px",width:"100%"}}>
              <h2 style={{display:"flex",justifyContent:"center",alignItems:"end",margin:"30% 30% 10px 30%",color:"#FFFFFF",fontSize:"69px"}}>
                  Roadmap
              </h2>
              <p style={{color:"#FFFFFF",display:"flex",justifyContent:"center"}}>
                  Mon parcours de formation de développeur Web
              </p>
          </Box>
      </FlexBetween>
      <div style={{display:"flex", position:"relative", zIndex:"4", height:"90px"}}>
        <img src={bordure} alt="bordure" style={{width:"100%", height:"100%"}}/>
      </div>
          <Box sx={{display:"flex", position:"relative",bottom:"7%", height:"1390px", marginBottom:"0px",  flexDirection:"column", borderBottom:"26px solid #0A0019" }}>
            <div style={{display:"flex",justifyContent:"center", position:"relative", zIndex:"3", width:"auto", padding:"150px 0px 150px 0px"}}>
              <img src={mobileroad} alt="Road" style={{width:"auto", height:"1100px", opacity:"85%"}}/>
            </div>
            <div style={{position:"relative",bottom:"100%", zIndex:"0", width:"auto", height:"1390px"}}>
              <img src={mobilebgroadmap} alt=" arrière plan roadmap"style={{width:"100%", height:"1390px"}}/>
            </div>
            <Box sx={{display:"flex",justifyContent:"center", position:"relative", bottom:"200%", height:"100%", width:"100%"}}>     
          <div className="planet__yellow" style={{
              position:"absolute",
              top: "15%",
              left:"0%",
              zIndex:"4",
              width:"150px",
              height:"300px",
              marginRight:"0",
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
          <Box className="txt__l"sx={{display:"flex", flexDirection:"column",justifyContent:"stretch", height:"85%", position:"relative", width:"30%", paddingTop:"150px"}}>
              <Box className="text__box__r" tabindex="0" sx={{ display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"100px 0px 150px 40px", width:"80%", height:"160px" }}>
                <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[1].title}</Typography>
                <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[1].projetnumber}</Typography>
                <Typography style={{color:"#000000", fontSize:"15px"}}>{data[1].langage}</Typography>
                <Typography style={{color:"#000000", fontSize:"15px"}}>{data[1].description}</Typography>
              </Box>
              <Box className="text__box__r" tabindex="0" sx={{ display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"40px 0px 130px 40px", width:"80%", height:"160px" }}>
                <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[3].title}</Typography>
                <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[3].projetnumber}</Typography>
                <Typography style={{color:"#000000", fontSize:"15px"}}>{data[3].langage}</Typography>
                <Typography style={{color:"#000000", fontSize:"15px"}}>{data[3].description}</Typography>
              </Box>
              <Box className="text__box__r" tabindex="0" sx={{ display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"80px 0px 80px 40px", width:"80%", height:"160px" }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[5].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[5].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[5].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[5].description}</Typography>
              </Box>
            </Box>
          <Box className="logo__projet" sx={{display:"flex", flexDirection:"column", justifyContent:"center", height:"100%", width:"10%", paddingTop:"25px"}}>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center",position:"relative",zIndex:"4", padding:"50px 0px 50px 0px"}}>
                <Link to={data[0].url} style={{width:"86px",height:"86px"}}>
                    <img src={openclassrooms} alt="logo openclassrooms" style={{height:"86px",justifyContent:"center",borderRadius:"50%"}}/>
                </Link>
              </Box>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
              <Link to={data[1].url} target="_blank">
                  <img 
                  src={booki} 
                  alt={data[1].title} 
                  style={{
                    width:"86px",
                    height:"86px",
                    justifyContent:"center",
                    borderRadius:"50%"
                  }}/>
                  </Link>
              </Box>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                <Link to={data[2].url} target="_blank">
                <img 
                src={ohmyfood} 
                alt={data[2].title} 
                style={{
                  width:"86px",
                  height:"86px",
                  justifyContent:"center",
                  borderRadius:"50%"
                }}/>
                </Link>
                </Box>
                <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                  <Link to={data[3].url} target="_blank">
                  <img 
                  src={panthere} 
                  alt={data[3].title} 
                  style={{
                    width:"86px",
                    height:"86px",
                    justifyContent:"center",
                    borderRadius:"50%"
                  }}/>
                  </Link>
                </Box>
                <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                  <Link to={data[4].url} target="_blank">
                      <img 
                      src={kanap} 
                      alt={data[4].title} 
                      style={{
                        width:"86px",
                        height:"86px",
                        justifyContent:"center",
                        borderRadius:"50%"
                      }}/>
                      </Link>
                </Box>
                <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                  <Link to={data[5].url} target="_blank">
                  <img 
                  src={hottakes} 
                  alt={data[5].title} 
                  style={{
                    width:"86px",
                    height:"86px",
                    justifyContent:"center",
                    borderRadius:"50%"
                  }}/>
                  </Link>
              </Box>
              <Box className="box__img" sx={{display:"flex", justifyContent:"center", width:"100%", height:"auto", position:"relative", zIndex:"4", padding:"50px 0px 50px 0px"}}>
                <Link to={data[6].url} target="_blank">
                  <img 
                  src={kasa} 
                  alt={data[6].title} 
                  style={{
                    width:"86px",
                    height:"86px",
                    justifyContent:"center",
                    borderRadius:"50%"
                  }}/>
                </Link>
              </Box>
          </Box>
          <Box className="txt__r"sx={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", height:"97%", position:"relative", width:"30%", paddingTop:"50px"}}>
          <Box className="text__box__l" sx={{ display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px",marginBottom:"100px", width:"80%", height:"120px" }}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[0].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[0].description}</Typography>
                </Box>
          <Box className="text__box__l"sx={{display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"100px 0px 100px 0px", width:"80%", height:"160px"}}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[2].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[2].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[2].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[2].description}</Typography>
                </Box>
                
              <Box className="text__box__l"sx={{display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px", margin:"80px 0px 150px 0px", width:"80%", height:"160px"}}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[4].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[4].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[4].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[4].description}</Typography>
                </Box>
              <Box className="text__box__l"sx={{display:"flex", flexDirection:"column", backgroundColor:"#A6C8E8", borderRadius:"10px", padding:"5px",margin:"40px 0px 0px 0px", width:"80%", height:"160px"}}>
                  <Typography style={{ display:"flex", margin:"1px", color:"#000000", fontSize:"15px"}}>{data[6].title}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>Projet {data[6].projetnumber}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[6].langage}</Typography>
                  <Typography style={{color:"#000000", fontSize:"15px"}}>{data[6].description}</Typography>
                </Box>
          </Box>
              
          <img src={planetpurple} alt="planet purple" style={{
                  position:"absolute",
                  left:"67%",
                  bottom:"18%",
                  width:"100px",
                  height:"100px"
                }}/> 
            </Box>  
          </Box>
    </div>
  )}
  </>
  )
}

export default Roadmap