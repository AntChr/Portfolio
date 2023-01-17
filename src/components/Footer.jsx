import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Footer () {
    return (
            <footer id='contact'>
                <a  className='contact__linkedin' href='https://www.linkedin.com/in/antoine-charriere-39bbb87b/'>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <p>Linkedin</p>
            <Link className='contact__mail' to='#'
            onClick={(e) => {
                window.location.href = "mailto:antoine.charriere.16@eigsi.fr"
                e.preventDefault()
            }}>
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </Link>
            <p>Gmail</p>
            
            </footer>
    )
}
export default Footer