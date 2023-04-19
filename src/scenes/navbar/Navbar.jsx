import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import {
  Typography,
  Box,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import FlexBetween from "../../components/FlexBetween"
import mail from "../../images/Logos_menu/Gmail_blanc_.png"
import linkedin from "../../images/Logos_menu/Lindekin_blanc.png"
import github from "../../images/Logos_menu/Github_blanc.png"
import logo from "../../images/WEBSITE/Logo_AC.png"
import logomobile from "../../images/WEBSITE/AC_LOGO_simple.svg"

const Navbar = () => {
  const navigate = useNavigate()
  const isNonMobileScreens = useMediaQuery("(min-width: 768px)")
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{
      backgroundColor: location.pathname ==="/" ? "transparent" : "#0A0019"}}>

        {/* Mobile Device */}
        
        {!isNonMobileScreens && (
          <FlexBetween sx={{padding:"10px", margin:"0px", width:"100%", position:"fixed", zIndex:"8", backgroundColor: location.pathname ==="/" ? "transparent" : "#0A0019"}}>
          
        <Link to="/" sx={{ cursor: "pointer"}}>
            <img src={logomobile} alt="logo AC Dev" className="logo" style={{width:"51px", height:"41px"}}/>
          </Link>

          <IconButton
          color="inherit"
          aria-label="open menu"
          edge="start"
          onClick={toggleDrawer}
        >
          <MenuIcon sx={{ width:"39px",fontSize:"30px",color:"#FFFFFF", marginRight:"23px"}}/>
        </IconButton>
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer} PaperProps={{ sx: { bgcolor: "#0A0019" } }}>
          <List sx={{ bgcolor: "#0A0019" }}>
            <Link to="/" onClick={toggleDrawer} style={{textDecoration: "none", color:"#FFFFFF"}}>
              <ListItem button>
                <ListItemText primary="Accueil" />
              </ListItem>
            </Link>
            <Link to="/projets" onClick={toggleDrawer} style={{textDecoration: "none", color:"#FFFFFF"}}>
              <ListItem button>
                <ListItemText primary="Projets" />
              </ListItem>
            </Link>
            <Link to="/competences" onClick={toggleDrawer} style={{textDecoration: "none", color:"#FFFFFF"}}>
              <ListItem button>
                <ListItemText primary="Compétences" />
              </ListItem>
            </Link>
            <Link to="/contact" onClick={toggleDrawer} style={{textDecoration: "none", color:"#FFFFFF"}}>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <Link to='#'
            onClick={(e) => {
              window.location.href="mailto:antoine.charriere.16@eigsi.fr"
              e.preventDefault()
            }}
            style={{paddingLeft:"17px"}}
            >
              <img src={mail} alt="icône gmail" style={{marginTop:"10px"}}/>
              <ListItem button>
              </ListItem>
            </Link>
            <Link to="https://www.linkedin.com/in/antoine-charriere-39bbb87b/" style={{paddingLeft:"17px"}}>
            <img src={linkedin} alt="icône linkedin" style={{marginTop:"10px"}}/>
              <ListItem button>
              </ListItem>
            </Link>
            <Link to="https://github.com/AntChr" style={{paddingLeft:"17px"}}>
            <img src={github} alt="icône github" style={{marginTop:"10px"}}/>
              <ListItem button>
              </ListItem>
            </Link>
          </List>
        </Drawer>
        </FlexBetween>
        )}

        {/* Desktop Device */}

        {isNonMobileScreens && (
          <FlexBetween sx={{
            padding:"10px 100px 10px 100px",
            height:"211px"
          }}
            
          >
        <Link to="/" sx={{ cursor: "pointer"}}>
            <img src={logo} alt="logo AC Dev" className="logo" style={{width:"146px", height:"94px"}} />
          </Link>
          <FlexBetween gap="1rem">
          <Typography 
          fontWeight="bold"
          fontSize="clamp(1rem, 1.1rem, 2.25rem)"
          color="white"
          onClick={() => navigate("/")}
          sx={{
            marginRight:"10px",
            "&:hover": {
              color:"#1FB0E5",
              cursor:"pointer"
            }
          }}
          >
          Accueil
          </Typography>
          <Typography 
          fontWeight="bold"
          fontSize="clamp(1rem, 1.1rem, 2.25rem)"
          color="white"
          onClick={() => navigate("/projets")}
          sx={{
            marginRight:"10px",
            "&:hover": {
              color:"#1FB0E5",
              cursor:"pointer"
            }
          }}
          >
          Projets
          </Typography>
          <Typography 
          fontWeight="bold"
          fontSize="clamp(1rem, 1.1rem, 2.25rem)"
          color="white"
          onClick={() => navigate("/competences")}
          sx={{
            marginRight:"10px",
            "&:hover": {
              color:"#1FB0E5",
              cursor:"pointer"
            }
          }}
          >
          Compétences
          </Typography>
          <Typography 
          fontWeight="bold"
          fontSize="clamp(1rem, 1.1rem, 2.25rem)"
          color="white"
          onClick={() => navigate("/contact")}
          sx={{
            marginRight:"10px",
            "&:hover": {
              color:"#1FB0E5",
              cursor:"pointer"
            }
          }}
          >
          Contact
          </Typography>
          </FlexBetween>
          <FlexBetween>
            <Link to='#'
            onClick={(e) => {
              window.location.href="mailto:antoine.charriere.16@eigsi.fr"
              e.preventDefault()
            }}
            >
              <img src={mail} alt="icône gmail" style={{marginRight:"10px"}}/>
            </Link>
            <Link to="https://www.linkedin.com/in/antoine-charriere-39bbb87b/">
            <img src={linkedin} alt="icône linkedin" style={{marginRight:"10px"}}/>
            </Link>
            <Link to="https://github.com/AntChr">
            <img src={github} alt="icône github" style={{marginRight:"10px"}}/>
            </Link>
          </FlexBetween>
          </FlexBetween>
          )}
      </Box>
  )
}

export default Navbar