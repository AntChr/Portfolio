import {useEffect, useState} from 'react'
import Navbar from '../navbar/Navbar'
import projects from "../../ressources/projects.json"
import ProjectList from '../../components/ProjectList'
import { Box, useMediaQuery } from '@mui/material'

const Projects = () => {
  const isDesktopScreens = useMediaQuery("(min-width: 1024px)")
  const isTabletScreens = useMediaQuery("((min-width: 768px) and (max-width: 1024px))")
  const isMobileScreens = useMediaQuery("(max-width: 767.9px)")
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    setProjectsData(projects)
  },[])
  return (
    <>
    <Navbar />
             {/* Desktop Device */}
             {isDesktopScreens && (
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
    {isMobileScreens && (
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

    {/* Tablet Device */}
    {isTabletScreens && (
          <Box className="projects" sx={{padding:"92px 68px 92px 68px"}}>
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
    </>
  )
}

export default Projects