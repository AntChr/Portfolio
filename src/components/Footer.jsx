import { Link } from 'react-router-dom'
import linkedin from '../images/icon-linkedin.png'
import mail from '../images/icon-gmail.png'
import github from '../images/icon-github.png'
import '../style/components/_footer.scss'



function Footer () {
    return (
            <footer id='contact'>
                   <div className='footer__logo'>
                            <p>Logo</p>
                    </div>
                <a  className='contact__linkedin' href='https://www.linkedin.com/in/antoine-charriere-39bbb87b/'>
                <img src={linkedin} alt="icône linkedin"></img>
                </a>
            <Link className='contact__mail' to='#'
            onClick={(e) => {
                window.location.href = "mailto:antoine.charriere.16@eigsi.fr"
                e.preventDefault()
            }}>
                <img src={mail} alt="icône gmail"></img>
            </Link>
            <a  className='contact__github' href='https://github.com/AntChr'>
                <img src={github} alt="icône github"></img>
                </a>
            </footer>
    )
}
export default Footer