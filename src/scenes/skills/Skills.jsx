import { useState, useEffect, useContext} from 'react'
import Navbar from '../navbar/Navbar'
import Card from "../../components/Card"
import SkillList from "../../components/SkillList"
import skills from "../../ressources/competences.json"
import { Box, Typography, useMediaQuery } from '@mui/material'
import { CartContext } from '../../components/CartContext'



const Skills = () => {
  const isDesktopScreens = useMediaQuery("(min-width: 992px)")
  const isTabletScreens = useMediaQuery("((min-width: 768px) and (max-width: 992px))")
  const isMobileScreens = useMediaQuery("(max-width: 768px)")
  const {panier, setPanier}  = useContext(CartContext);  
  const [skillsData, setSkillsData] = useState([])
  const [salaryTotal, setSalaryTotal] = useState(14000)

  useEffect(() => {
    setSkillsData(skills)
  },[])

  function addcart(skill) {
    const existingskill = panier.find(comp => comp.id === skill.id)
    if (existingskill) {
      window.alert("Vous pouvez ajouter qu'une seule fois la compétence")
    } else {
    setPanier([...panier, {...skill, price: skill.price || 14000, id: skill.id}])
    setSalaryTotal(prevtotal => prevtotal+ (skill.price || salaryTotal))
    }
  }

  const removeFromCart = (skill) => {
    const skillToRemove = panier.find((comp) => comp.id === skill.id);
    const newCart = panier.filter((comp) => comp.id !== skill.id);
    setPanier(newCart);
    setSalaryTotal(salaryTotal - skillToRemove.price);
  };

  return (
    <>
      <Navbar />
      {/* Desktop Device */}
      {isDesktopScreens && (
      <Box className="skills">
        <Box className="skills__title">
          <Typography variant="h1" style={{color:"#FFFFFF", fontSize:"54px", marginBottom:"109px"}}>Compétences</Typography>
          </Box>
        <Box className="skills__body" sx={{ display:"flex", backgroundColor:"#A6C8E8", borderRadius:"0px 78px 0px 0px", width:"95%", height:"auto"}}>
          <Card data={skillsData} />
          <Box className="skills__list" sx={{
                  display:"flex",
                  flexWrap:"wrap",
                  width:"100%",
                  height:"100%",
                  borderRadius:"25px",
                  padding:"34px",
                  maxWidth:"100%"
          }}>
            {skillsData.map((skill) => (
                <SkillList key={skill.id} data={skill} addToCart={() => addcart(skill)} removeFromCart={() => removeFromCart(skill)}/>
            ))}
          </Box>
        </Box>
      </Box>
      )}

      {/* Tablet Device */}
      {isTabletScreens && (
      <Box className="skills">
        <Box className="skills__title">
          <Typography variant="h1" style={{color:"#FFFFFF", fontSize:"54px", marginBottom:"109px"}}>Compétences</Typography>
          </Box>
        <Box className="skills__body" sx={{ display:"flex", backgroundColor:"#A6C8E8", borderRadius:"0px 78px 0px 0px", width:"100%", height:"auto"}}>
          <Card data={skillsData} />
          <Box className="skills__list" sx={{
                  display:"flex",
                  flexWrap:"wrap",
                  width:"50%",
                  height:"100%",
                  borderRadius:"25px",
                  padding:"34px",
          }}>
            {skillsData.map((skill) => (
                <SkillList key={skill.id} data={skill} addToCart={() => addcart(skill)} removeFromCart={() => removeFromCart(skill)}/>
            ))}
          </Box>
        </Box>
      </Box>
      )}

      {/* Mobile Device */}
      {isMobileScreens && (
      <Box className="skills" sx={{width:"auto", height:"auto", paddingBottom:"20px", paddingTop:"80px"}}>
        <Box className="skills__title" sx={{display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
          <Typography variant="h1" style={{color:"#FFFFFF", fontSize:"34px", margin:"39px"}}>Compétences</Typography>
          </Box>
        <Box className="skills__body" sx={{ 
          display:"flex",
          flexDirection:"column-reverse",
          backgroundColor:"#A6C8E8",
          borderRadius:"0px 78px 0px 0px",
          width:"90%",
          margin:"19px 10px 19px 19px",
          marginRight:"0px"
          }}>
          <Card data={skillsData} />
          <Box className="skills__list" sx={{
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  width:"auto",
                  height:"100%",
                  borderRadius:"25px",
                  margin:"15px 18px 15px 15px"
          }}>
            {skillsData.map((skill) => (
              <Box>
                <SkillList key={skill.id} data={skill} addToCart={() => addcart(skill)} removeFromCart={() => removeFromCart(skill)}/>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      )}
      </>
  )
}

export default Skills
