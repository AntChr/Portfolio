import {useState, useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import { Box } from '@mui/material'
import Welcome from '../../components/Welcome'
import Highlights from '../../components/Highlights'
import highlights from '../../ressources/highlights.json'
import Roadmap from '../../components/Roadmap'
import projetsoc from '../../ressources/projectsoc.json'

const HomePage = () => {
  const [highlightsData, setHighlightsData] = useState([])
  const [projetsocData, setProjetsocData] = useState([])
  const [hideElement, setHideElement] = useState(false);

  useEffect(() => {
    setHighlightsData(highlights)
  }, [])

  useEffect(() => {
    setProjetsocData(projetsoc)
  }, [])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setHideElement(true);
      } else {
        setHideElement(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className="HomePage" sx={{
      width:"auto",
      height:"1100px",
    }}>
      <Navbar />
      <Box sx={{display:"flex",justifyContent:"center",width:"100%", height:"865px", alignItems:"center"}}>
      <Welcome />
      </Box>
      <Highlights data={highlightsData}/>
      {projetsocData.length > 0 && <Roadmap data={projetsocData}/>}
      <div style={{
        display: hideElement ? "none" : "flex",
        justifyContent: "center",
        width: "55px",
        height: "50px",
        position: "fixed",
        bottom: "20%",
        right: "6%",
        zIndex:"7"
      }}>
      <a href="#" style={{ textDecoration: "none", outline: "none", width: "100%", height: "100%" }}>
        <p style={{ display: "flex", justifyContent: "center", color: "#FFFFFF", fontSize: "40px", border: "2px solid #ffffff", borderRadius: "50%" }}>↑</p>
      </a>
      </div>
    </Box>
  )
}

export default HomePage