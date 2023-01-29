import { Link } from 'react-router-dom'
import '../style/components/_header.scss'



function Header () {
    return (
                    <header>
                        <div className='Header__logo'>
                            <p>Logo</p>
                        </div>
                    <nav>
                        <Link className='Header__accueil' to="/">Accueil</Link>
                        <Link className='Header__competences' to="/competences">Compétences</Link>
                        <a className='Header__contact' href="#contact">Contact</a>
                    </nav>
                    </header>
    )
}
export default Header