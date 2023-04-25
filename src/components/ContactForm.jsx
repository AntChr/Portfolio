import React, { useRef } from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import emailjs from "@emailjs/browser"
import mail from "../images/Logos_contact/gmail_bleu.png"
import linkedin from "../images/Logos_contact/Linkedin_bleu.png"
import github from "../images/Logos_contact/Github_bleu.png"



const ContactForm = () => {
  const isDesktopScreens = useMediaQuery("(min-width: 1024px)")
  const isTabletScreens = useMediaQuery("((min-width: 768px) and (max-width: 1024px))")
  const isMobileScreens = useMediaQuery("(max-width: 768px)")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.REACT_APP_YOUR_SERVICE_ID,
      process.env.REACT_APP_YOUR_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_YOUR_PUBLIC_KEY,
    )
    .then(() => {
      console.log("message envoyé");
      window.alert("Votre message a bien été envoyé");
    })
    .catch((error) => {
      console.log(error.text);
      window.alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;
    if (!name || !email || !subject || message.length < 3) {
      window.alert("Veuillez remplir tous les champs du formulaire.");
      return false
    } else {
      sendEmail(e);
      return true
    }
  };
  return (
    <>
     {/* Desktop Device */}
     {isDesktopScreens && (
    <Box className="contact" sx={{ flexDirection:"column", width:"100%", height:"auto"}}>
      <Box sx={{width:"auto", height:"100%", padding:"5% 10% 5% 10%"}}>
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"flex-start",  width:"auto"}}>
          <Typography variant="h1" style={{fontSize:"54px"}}>
          Contact
          </Typography>
          <Typography variant="subtitle1" style={{ width:"100%", marginBottom:"54px"}}>
            Pour me contacter, rien de plus simple, il suffit de remplir ce formulaire. Je vous répondrais au plus vite
          </Typography>
        </Box>
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          width:"100%", height:"513px",
          backgroundColor:"rgba(166, 200, 232, 0.75)",
          borderRadius:"0px 78px 0px 0px",
          padding:"3% 4% 3% 4%"
          }}>
          <Box sx={{display:"flex", flexDirection:"column", width:"60%", height:"378px",}}>
          <form ref={form} onSubmit={handleSubmit}>
            <Box sx={{display:"flex",justifyContent:"space-between", width:"100%", marginBottom:"17px"}}>
          <input className="user" type="text" name="user_name" placeholder="Nom" style={{
            width:"60%",
            height:"48px",
            backgroundColor:"#4545D852",
            borderRadius:"20px",
            border:"none",
            marginRight:"17px",
            paddingLeft:"16px",
            cursor:"pointer"
            }}/>
          <input className="user" type="email" name="user_email" placeholder="Email" style={{width:"40%", height:"48px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none", paddingLeft:"16px", cursor:"pointer"}} />
          </Box>
          <Box sx={{display:"flex", width:"100%", marginBottom:"17px"}}>
          <input className="user" type="text" name="subject" placeholder="Sujet" style={{width:"100%", height:"48px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none",paddingLeft:"16px", cursor:"pointer"}}/>
          </Box>
          <Box sx={{display:"flex", width:"100%", marginBottom:"14px"}}>
          <textarea className="message" name="message" placeholder="Message" style={{width:"100%", height:"244px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none", cursor:"pointer"}}/>
          </Box>
          <Box sx={{display:"flex", justifyContent:"flex-end", width:"100%"}}>
          <input className="send" type="submit" placeholder="Envoyer" onClick={handleSubmit} 
          style={{ width:"156px", height:"48px", backgroundColor:"#2718AA", color:"#FFFFFF", borderRadius:"20px", border:"none", cursor:"pointer"}}/>
          </Box>
        </form>
          </Box>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            width:"30%",
            marginRight:"50px"
            }}>
              <Box sx={{display:"flex",width:"100%", justifyContent:"center", textAlign:"center", alignItems:"center", margin:"0px 0px 32px 0px"}}>
            <div className="trait" style={{width:"70px",height:"2px", backgroundColor:"#FFFFFF"}}/>
            <Typography variant='h3' style={{width:"152px",fontSize:"16px", color:"#3D3D3D"}}>Retrouvez-moi ici</Typography>
            <div className="trait"style={{width:"70px",height:"2px", backgroundColor:"#FFFFFF"}}/>
              </Box>
              <Box sx={{display:"flex", justifyContent:"center", textAlign:"center",alignItems:"center", width:"100%"}}>
              <a href='#' target="_blank"
              onClick={(e) => {
                window.location.href="mailto:antoine.charriere.16@eigsi.fr"
                e.preventDefault()
              }}
              >
                <img src={mail} alt="icône gmail"/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/antoine-charriere-39bbb87b/">
              <img src={linkedin} alt="icône linkedin" style={{margin:"0px 62px 0px 62px"}}/>
              </a>
              <a target="_blank" href="https://github.com/AntChr">
              <img src={github} alt="icône github"/>
              </a>
              </Box>
          </Box>
        </Box>
        </Box>
    </Box>
     )}

      {/* Tablet Device */}
     {isTabletScreens && (
    <Box className="contact" sx={{display:"flex", flexDirection:"column", width:"100%", height:"auto", paddingTop:"50px"}}>
      <Box sx={{width:"auto", height:"auto", padding:"15px"}}>
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"flex-start"}}>
          <Typography variant="h1" style={{fontSize:"44px", marginBottom:"10px"}}>
          Contact
          </Typography>
          <Typography variant="subtitle1" style={{ width:"100%", marginBottom:"34px"}}>
            Pour me contacter, rien de plus simple, il suffit de remplir ce formulaire. Je vous répondrais au plus vite
          </Typography>
        </Box>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          width:"97%", height:"720px",
          backgroundColor:"rgba(166, 200, 232, 0.75)",
          borderRadius:"0px 78px 0px 0px",
          padding:"40px 10px 10px 10px"
          }}>
          <Box sx={{display:"flex", flexDirection:"column", width:"100%", height:"auto",}}>
          <form ref={form} onSubmit={sendEmail}>
          <input className="user" type="text" name="user_name" placeholder="Nom" style={{
            width:"90%",
            height:"48px",
            backgroundColor:"#4545D852",
            borderRadius:"20px",
            border:"none",
            marginRight:"17px",
            marginBottom:"17px",
            paddingLeft:"16px"
            }}/>
          <input className="user" type="email" name="user_email" placeholder="Email" style={{
            width:"90%",
            height:"48px",
            backgroundColor:"#4545D852",
            borderRadius:"20px",
            border:"none",
            paddingLeft:"16px",
            marginBottom:"17px"            
            }} />
          <Box sx={{width:"100%", marginBottom:"17px"}}>
          <input className="user" type="text" name="subject" placeholder="Sujet" style={{width:"90%", height:"48px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none",paddingLeft:"16px"}}/>
          </Box>
          <Box sx={{marginBottom:"14px"}}>
          <textarea className="message" name="message" placeholder="Message" style={{width:"90%", height:"244px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none"}}/>
          </Box>
          <Box sx={{display:"flex", justifyContent:"center", width:"100%", marginBottom:"34px"}}>
          <input className="send" type="submit" placeholder="Envoyer" onClick={() => window.alert("Votre message a bien été envoyé")} 
          style={{ width:"20%", height:"48px", backgroundColor:"#2718AA", color:"#FFFFFF", borderRadius:"20px", border:"none",}}/>
          </Box>
        </form>
          </Box>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            width:"100%",
            marginRight:"50px"
            }}>
              <Box sx={{display:"flex", width:"auto", textAlign:"center", alignItems:"center", margin:"0px 38px 20px 38px"}}>
            <div className="trait" style={{width:"50%",height:"2px", backgroundColor:"#FFFFFF"}}/>
            <Typography variant='h3' style={{width:"100%",fontSize:"16px", color:"#3D3D3D"}}>Retrouvez-moi ici</Typography>
            <div className="trait"style={{width:"50%",height:"2px", backgroundColor:"#FFFFFF"}}/>
              </Box>
              <Box sx={{textAlign:"center"}}>
              <a href='#'
              onClick={(e) => {
                window.location.href="mailto:antoine.charriere.16@eigsi.fr"
                e.preventDefault()
              }}
              >
                <img src={mail} alt="icône gmail"/>
              </a>
              <a href="https://www.linkedin.com/in/antoine-charriere-39bbb87b/">
              <img src={linkedin} alt="icône linkedin" style={{margin:"0px 62px 0px 62px"}}/>
              </a>
              <a href="https://github.com/AntChr">
              <img src={github} alt="icône github"/>
              </a>
              </Box>
          </Box>
        </Box>
        </Box>
    </Box>
     )}

     {/* Mobile Device */}
     {isMobileScreens && (
    <Box className="contact" sx={{display:"flex", flexDirection:"column", width:"100%", height:"auto", paddingTop:"130px"}}>
      <Box sx={{width:"auto", height:"auto", padding:"15px"}}>
        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"flex-start"}}>
          <Typography variant="h1" style={{fontSize:"44px", marginBottom:"10px"}}>
          Contact
          </Typography>
          <Typography variant="subtitle1" style={{ width:"100%", marginBottom:"34px"}}>
            Pour me contacter, rien de plus simple, il suffit de remplir ce formulaire. Je vous répondrais au plus vite
          </Typography>
        </Box>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          width:"100", height:"720px",
          backgroundColor:"rgba(166, 200, 232, 0.75)",
          borderRadius:"0px 78px 0px 0px",
          padding:"40px 10px 10px 10px"
          }}>
          <Box sx={{display:"flex", flexDirection:"column", width:"100%", height:"auto",}}>
          <form ref={form} onSubmit={sendEmail}>
          <input className="user" type="text" name="user_name" placeholder="Nom" style={{
            width:"90%",
            height:"48px",
            backgroundColor:"#4545D852",
            borderRadius:"20px",
            border:"none",
            marginRight:"17px",
            marginBottom:"17px",
            paddingLeft:"16px"
            }}/>
          <input className="user" type="email" name="user_email" placeholder="Email" style={{
            width:"90%",
            height:"48px",
            backgroundColor:"#4545D852",
            borderRadius:"20px",
            border:"none",
            paddingLeft:"16px",
            marginBottom:"17px"            
            }} />
          <Box sx={{width:"100%", marginBottom:"17px"}}>
          <input className="user" type="text" name="subject" placeholder="Sujet" style={{width:"90%", height:"48px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none",paddingLeft:"16px"}}/>
          </Box>
          <Box sx={{marginBottom:"14px"}}>
          <textarea className="message" name="message" placeholder="Message" style={{width:"86%", height:"244px", backgroundColor:"#4545D852", borderRadius:"20px", border:"none"}}/>
          </Box>
          <Box sx={{display:"flex", justifyContent:"flex-end", width:"100%", marginBottom:"34px"}}>
          <input className="send" type="submit" placeholder="Envoyer" onClick={() => window.alert("Votre message a bien été envoyé")} 
          style={{ width:"100%", height:"48px", backgroundColor:"#2718AA", color:"#FFFFFF", borderRadius:"20px", border:"none",}}/>
          </Box>
        </form>
          </Box>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            width:"100%",
            marginRight:"50px"
            }}>
              <Box sx={{display:"flex", width:"auto", textAlign:"center", alignItems:"center", margin:"0px 38px 20px 38px"}}>
            <div className="trait" style={{width:"80px",height:"2px", backgroundColor:"#FFFFFF"}}/>
            <Typography variant='h3' style={{width:"100%",fontSize:"16px", color:"#3D3D3D"}}>Retrouvez-moi ici</Typography>
            <div className="trait"style={{width:"80px",height:"2px", backgroundColor:"#FFFFFF"}}/>
              </Box>
              <Box sx={{textAlign:"center"}}>
              <a href='#'
              onClick={(e) => {
                window.location.href="mailto:antoine.charriere.16@eigsi.fr"
                e.preventDefault()
              }}
              >
                <img src={mail} alt="icône gmail"/>
              </a>
              <a href="https://www.linkedin.com/in/antoine-charriere-39bbb87b/">
              <img src={linkedin} alt="icône linkedin" style={{margin:"0px 62px 0px 62px"}}/>
              </a>
              <a href="https://github.com/AntChr">
              <img src={github} alt="icône github"/>
              </a>
              </Box>
          </Box>
        </Box>
        </Box>
    </Box>
     )}
    </>
  )
}

export default ContactForm