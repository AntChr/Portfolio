import {useEffect, useState} from 'react'
import Navbar from '../navbar/Navbar'
import projects from "../../ressources/projects.json"
import ProjectList from '../../components/ProjectList'
import { Box, useMediaQuery } from '@mui/material'

const Projects = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 768px)")
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    setProjectsData(projects)
  },[])
  return (
    <>
    <Navbar />
             {/* Desktop Device */}
             {isNonMobileScreens && (
          <Box className="projects" sx={{padding:"92px 228px 92px 228px"}}>
          <h1 style={{color:"#FFFFFF", fontSize:"54px", marginBottom:"109px" }}>Projets</h1>
          <Box className="projects__list" sx={{ backgroundColor:"rgba(166, 200, 232, 0.75)", borderRadius:"0px 78px 0px 0px", padding:"30px"}}>
        {projectsData.map((projet) => (
            <Box key={projet.id}>
              <ProjectList data={projet} />
            </Box>
          ))}
      </Box>
    </Box>
    )}

    {/* Mobile Device */}
    {!isNonMobileScreens && (
          <Box className="projects" sx={{width:"auto", padding:"150px 48px 22px 48px"}}>
          <h1 style={{width:"100%", display:"flex", justifyContent:"center", textAlign:"center",color:"#FFFFFF", fontSize:"44px", marginBottom:"40px" }}>Projets</h1>
          <Box className="projects__list" sx={{ width:"auto", backgroundColor:"rgba(166, 200, 232, 0.75)", borderRadius:"0px 78px 0px 0px", padding:"30px"}}>
        {projectsData.map((projet) => (
            <Box key={projet.id}>
              <ProjectList data={projet} />
            </Box>
          ))}
      </Box>
    </Box>
    )}
    </>
  )
}

export default Projects