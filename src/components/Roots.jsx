import booki from '../images/Booki.png'
import ohmyfood from '../images/ohmyfood.png'
import panthere from '../images/Panthère.png'
import kanap from '../images/Kanap.png'
import hotakes from '../images/hotakes.png'
import kasa from '../images/Kasa.svg'
import parcour from '../images/Parcours v2.png'

function Roots () {
    return (
    <div className='roots'>
        <img src={parcour} alt='schéma' className='roots__background' />
        <div className='roots__booki'>
            <a href='https://antchr.github.io/Projet-2/' className='roots__booki__link'>
                <img src={booki} alt='logo booki' className='roots__booki__logo' />
            </a>
        </div>
        <div className='roots__booki__description'>
            <h3>Projet 2 : Booki</h3>
            <p>Langage : HTML & CSS</p>
            <p>Description : site internet qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix</p>
        </div>
        <div className='roots__ohmyfood'>
            <a href='https://antchr.github.io/Projet-3/' className='roots__ohmyfood__link'>
                <img src={ohmyfood} alt='logo ohmyfood' className='roots__ohmyfood__logo' />
            </a>
        </div>
        <div className='roots__ohmyfood__description'>
            <h3>Projet 3 : Ohmyfood</h3>
            <p>Langage : HTML & SASS</p>
            <p>Description : site 100% mobile qui répertorie les menus de restaurants gastronomiques</p>
        </div>
        <div className='roots__panthere'>
            <a href='https://antchr.github.io/Projet_4/' className='roots__panthere__link'>
                <img src={panthere} alt='logo panthere' className='roots__panthere__logo' />
            </a>
        </div>
        <div className='roots__panthere__description'>
            <h3>Projet 4 : La Panthère</h3>
            <p>SEO & Accessibilité</p>
            <p>Description : Amélioration du référencement d'un site existant</p>
        </div>
        <div className='roots__kanap'>
            <a href='https://github.com/AntChr/Projet_5' className='roots__kanap__link'>
                <img src={kanap} alt='logo kanap' className='roots__kanap__logo' />
            </a>
        </div>
        <div className='roots__kanap__description'>
            <h3>Projet 5 : Kanap</h3>
            <p>Langage : Javascript</p>
            <p>Description : Création d'une plateforme e-commerce pour vendre des canapés sur internet</p>
        </div>
        <div className='roots__hotakes'>
            <a href='https://github.com/AntChr/Projet_6-HotTakes' className='roots__hotakes__link'>
                <img src={hotakes} alt='logo hotakes' className='roots__hotakes__logo' />
            </a>
        </div>
        <div className='roots__hotakes__description'>
            <h3>Projet 6 : Hot Takes</h3>
            <p>Langage : Javascript, Express, MongoDB</p>
            <p>Description : Construction d'une API sécurisée pour une application d'avis gastronomiques</p>
        </div>
        <div className='roots__kasa'>
            <a href='https://github.com/AntChr/Projet_7' className='roots__kasa__link'>
                <img src={kasa} alt='logo kasa' className='roots__kasa__logo' />
            </a>
        </div>
        <div className='roots__kasa__description'>
            <h3>Projet 6 : Kasa</h3>
            <p>Librairie : React</p>
            <p>Description : Construction d'une API sécurisée pour une application d'avis gastronomiques</p>
        </div>
    </div>
)}

export default Roots