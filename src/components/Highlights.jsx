import { Box, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import bordure from "../images/Asset 1.png"

const Highlights = ({data}) => {  
  const isDesktopScreens = useMediaQuery("(min-width: 1024px)")
  const isTabletScreens = useMediaQuery("((min-width: 768px) and (max-width: 1024px))")
  const isMobileScreens = useMediaQuery("(max-width: 767.9px)")

  const [currentImageIndex, setCurrentImageIndex] = useState(-1);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleCloseClick = () => {
    setCurrentImageIndex(-1);
  };
  
  return (
    <>
          {/* Desktop Device */}
          {isDesktopScreens && (
    <Box className="Highlights" sx={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      height:"100%",
      width:"100%",
      paddingTop:"40px",
      backgroundColor:"#0A0019",
      position:"relative"
    }}>


      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"70%",
        width:"100%"
      }}>      
      <Typography variant='h2' style={{color:"#8E8ed4", textAlign:"center"}}>
        Highlights
      </Typography>
      <Box sx={{
        display:'flex',
        justifyContent:"center",
        flexWrap:"wrap",
        width:"80%",
        height:"80%",
      }}>
        {data.map((item, index) => (
          <Box 
            key={index}
            className={`box__${index} ${currentImageIndex === index
              ? "highlight-active"
              : currentImageIndex === -1
              ? "highlight"
              : "highlight-inactive"}`}
            sx={{
              boxSizing: 'border-box',
              position: 'relative',
              zIndex: currentImageIndex === index ? 1 : 0,
              cursor:"pointer",
              margin:"9px"
            }}
            onClick={() => handleImageClick(index)}
          >
            <img className="highlights__img"
              src={item.image}
              alt={item.title} 
              style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
              }}
            />
            {currentImageIndex === index && (
              <Box>
                <Box sx={{
                  position: "absolute",
                  top:"2%",
                  right:'1%',
                }}>
                  <button className='highlights__btn'
                    onMouseDown={handleCloseClick} style={{ color:"#000000", backgroundColor:"transparent", border:"2px solid #000000", borderRadius:"20px", cursor:"pointer"}}
                  >
                    <CloseIcon />
                  </button>
                </Box>
                <Box sx={{
                  backgroundColor:"transparent",
                  width: '100%',
                  padding: '8px'
                }}>
                  <p style={{ display:"flex", color:"#FFFFFF", fontSize:"24px",fontWeight:"bold", WebkitTextStroke: "1px #FFFFFF" }}>
                    {item.text}
                  </p>
                </Box>
              </Box>
            )}
          </Box>
        ))}
          </Box>
        </Box>
        <div style={{position:"absolute", top:"99%",left:"0", zIndex:"2"}}>
            <img src={bordure} alt="bordure" style={{width:"100%"}}/>
          </div>
      </Box>
          )}

          {/* Mobile Device */}
          {isMobileScreens && (
      <Box className="Highlights" sx={{
        height:"1350px",
        width:"100%",
        backgroundColor:"#0A0019"
      }}>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          height:"100%",
          width:"100%"
        }}>      
        <Typography variant='h2' style={{color:"#8E8ed4", textAlign:"center", height:"auto", marginBottom:"10px"}}>
          Highlights
        </Typography>
        <Box sx={{
          display:'flex',
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          width:"100%",
          height:"100%",
        }}>
          {data.map((item, index) => (
            <Box 
              key={index}
              className={`box__${index} ${currentImageIndex === index
                ? "highlight-active"
                : currentImageIndex === -1
                ? "highlight"
                : "highlight-inactive"}`}
              sx={{
                p: 1,
                boxSizing: 'border-box',
                width:"70%",
                height:"180px",
                position: 'relative',
                zIndex: currentImageIndex === index ? 1 : 0,
                cursor:"pointer",
                margin:"5px"
              }}
              onClick={() => handleImageClick(index)}
            >
              <img 
                src={item.image}
                alt={item.title} 
                style={{
                  width:'100%',
                  height:'100%',
                  objectFit:'cover'
                }}
              />
              {currentImageIndex === index && (
                <Box>
                 <Box sx={{
                  position: "absolute",
                  top:"2%",
                  right:'1%',
                }}>
                  <button className='highlights__btn'
                    onMouseDown={handleCloseClick} style={{ color:"#000000", backgroundColor:"transparent", border:"2px solid #000000", borderRadius:"20px", cursor:"pointer"}}
                  >
                    <CloseIcon />
                  </button>
                </Box>
                  <Box sx={{
                    backgroundColor:"transparent",
                    color: '#A7A7AD',
                    width: '100%',
                    padding: '8px'
                  }}>
                    <Typography variant="h5" sx={{ display:"flex" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
        </Box>
      </Box>
          )}

  {isTabletScreens && (
    <Box className="Highlights" sx={{
      height:"100%",
      width:"100%",
      backgroundColor:"#0A0019",
      position:"relative"
    }}>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"75%",
        width:"100%"
      }}>      
      <Typography variant='h2' style={{color:"#8E8ed4", textAlign:"center", height:"20%", marginBottom:"30px"}}>
        Highlights
      </Typography>
      <Box sx={{
        display:'flex',
        justifyContent:"center",
        flexWrap:"wrap",
        width:"80%",
        height:"70%",
      }}>
        {data.map((item, index) => (
          <Box 
            key={index}
            className={`box__${index} ${currentImageIndex === index
              ? "highlight-active"
              : currentImageIndex === -1
              ? "highlight"
              : "highlight-inactive"}`}
            sx={{
              boxSizing: 'border-box',
              position: 'relative',
              zIndex: currentImageIndex === index ? 1 : 0,
              cursor:"pointer",
              margin:"9px"
            }}
            onClick={() => handleImageClick(index)}
          >
            <img className="highlights__img"
              src={item.image}
              alt={item.title} 
              style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
              }}
            />
            {currentImageIndex === index && (
              <Box>
                <Box sx={{
                  position: "absolute",
                  top:"2%",
                  right:'1%',
                }}>
                  <button className='highlights__btn'
                    onMouseDown={handleCloseClick} style={{ color:"#000000", backgroundColor:"transparent", border:"2px solid #000000", borderRadius:"20px", cursor:"pointer"}}
                  >
                    <CloseIcon />
                  </button>
                </Box>
                <Box sx={{
                  backgroundColor:"transparent",
                  width: '100%',
                  padding: '8px'
                }}>
                  <p style={{ display:"flex", color:"#FFFFFF", fontSize:"24px",fontWeight:"bold", WebkitTextStroke: "1px #FFFFFF" }}>
                    {item.text}
                  </p>
                </Box>
              </Box>
            )}
          </Box>
        ))}
          </Box>
        </Box>
            <img src={bordure} alt="bordure" style={{position:"absolute", top:"99%",left:"0", zIndex:"2",width:"100%"}}/>
      </Box>
          )}
    </>
  );
};

export default Highlights;
