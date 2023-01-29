import { useEffect, useState } from 'react';
import React from 'react';
import booki from '../images/Booki.png'
import ohmyfood from '../images/ohmyfood.png'
import panthere from '../images/Panthère.png'
import kanap from '../images/Kanap.png'
import hotakes from '../images/hotakes.png'
import kasa from '../images/KASA.png'
import openclassrooms from '../images/Logo_OpenClassrooms.png'
import '../style/components/_roots.scss'





function Roots({ src }) {
    const [scrollY, setScrollY] = useState(0);
    const [isBottom, setIsBottom] = useState(false);
    const imageRef = React.useRef(null);
    const openclassroomsRef = React.useRef(null);
    const bookiRef = React.useRef(null)
    const ohmyfoodRef = React.useRef(null)
    const panthereRef = React.useRef(null)
    const kanapRef = React.useRef(null)
    const hotakesRef = React.useRef(null)
    const kasaRef = React.useRef(null)

    useEffect(() => {
      function onScroll() {
        setScrollY(window.scrollY);
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setIsBottom(true);
        }
      }
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      };
    }, []);
    const imageHeight = imageRef.current ? imageRef.current.getBoundingClientRect().height : 0;
    let imagePercentage = scrollY / imageHeight;
    imagePercentage = isBottom ? 1 : imagePercentage;
    const imageClipPath = `inset(0 ${100 - imagePercentage * 100}% 0 0)`;

    const openclassroomsHeight = openclassroomsRef.current ? openclassroomsRef.current.getBoundingClientRect().height : 0;
    let openclassroomsPercentage =0;
    if(scrollY >=50) {openclassroomsPercentage = (scrollY - 50) / openclassroomsHeight}
    openclassroomsPercentage = isBottom ? 1 : openclassroomsPercentage;
    const openclassroomsClipPath = `inset(0 ${100 - openclassroomsPercentage * 100}% 0 0)`;
    

    const bookiHeight = bookiRef.current ? bookiRef.current.getBoundingClientRect().height : 0;
    let bookiPercentage = 0;
    if(scrollY >=420) {bookiPercentage = (scrollY - 420) / bookiHeight}
    bookiPercentage = isBottom ? 1 : bookiPercentage;
    const bookiClipPath = `inset(0 ${100 - bookiPercentage * 100}% 0 0)`;
    const bookiOpacity = bookiPercentage

    const ohmyfoodHeight = ohmyfoodRef.current ? ohmyfoodRef.current.getBoundingClientRect().height : 0;
    let ohmyfoodPercentage = 0;
    if(scrollY >=540) {ohmyfoodPercentage = (scrollY - 540) / ohmyfoodHeight}
    ohmyfoodPercentage = isBottom ? 1 : ohmyfoodPercentage;
    const ohmyfoodClipPath = `inset(0 ${100 - ohmyfoodPercentage * 100}% 0 0)`;
    const ohmyfoodOpacity = ohmyfoodPercentage

    const panthereHeight = panthereRef.current ? panthereRef.current.getBoundingClientRect().height : 0;
    let pantherePercentage = 0;
    if(scrollY >=825) {pantherePercentage = (scrollY - 825) / panthereHeight}
    pantherePercentage = isBottom ? 1 : pantherePercentage;
    const panthereClipPath = `inset(0 ${100 - pantherePercentage * 100}% 0 0)`;
    const panthereOpacity = pantherePercentage

    const kanapHeight = kanapRef.current ? kanapRef.current.getBoundingClientRect().height : 0;
    let kanapPercentage = 0;
    if(scrollY >=980) {kanapPercentage = (scrollY - 980) / kanapHeight}
    kanapPercentage = isBottom ? 1 : kanapPercentage;
    const kanapClipPath = `inset(0 ${100 - kanapPercentage * 100}% 0 0)`;
    const kanapOpacity = kanapPercentage

    const hotakesHeight = hotakesRef.current ? hotakesRef.current.getBoundingClientRect().height : 0;
    let hotakesPercentage = 0;
    if(scrollY >=1165) {hotakesPercentage = (scrollY - 1165) / hotakesHeight}
    hotakesPercentage = isBottom ? 1 : hotakesPercentage;
    const hotakesClipPath = `inset(0 ${100 - hotakesPercentage * 100}% 0 0)`;
    const hotakesOpacity = hotakesPercentage

    const kasaHeight = kasaRef.current ? kasaRef.current.getBoundingClientRect().height : 0;
    let kasaPercentage = 0;
    if(scrollY >=1295) {kasaPercentage = (scrollY - 1295) / kasaHeight}
    kasaPercentage = isBottom ? 1 : kasaPercentage;
    const kasaClipPath = `inset(0 ${100 - kasaPercentage * 100}% 0 0)`;
    const kasaOpacity = kasaPercentage

    return (
    <div className='roots'>
        <div className='roots__title'>
            <h2>Mon Parcours de Développeur Web :</h2>
        </div>
        <div className='roots__profile'>
            <img ref={imageRef} src={src}  style={{clipPath: imageClipPath}} alt='schéma' className='roots__background' />
            <div className='roots__openclassrooms'>
                <a href='https://openclassrooms.com/fr/' className='roots__links'>
                    <img ref={openclassroomsRef} src={openclassrooms}  style={{clipPath: openclassroomsClipPath}} alt='ohmyfood openclassrooms' className='roots__logo' />
                </a>
            </div>
            <div className='roots__booki'>
                <a href='https://antchr.github.io/Projet-2/' className='roots__link'>
                    <img ref={bookiRef} src={booki} style={{clipPath: bookiClipPath}} alt='ohmyfood booki' className='roots__logo' />
                </a>
            </div>
            <div style={{opacity: bookiOpacity}} className='roots__booki__description'>
                <h3>Projet 2 : Booki</h3>
                <p>Langage : HTML & CSS</p>
                <p>Description : site internet qui permet aux usagers de trouver des hébergements et des activités dans la ville de leur choix</p>
            </div>
            <div className='roots__ohmyfood'>
                <a href='https://antchr.github.io/Projet-3/' className='roots__link'>
                    <img ref={ohmyfoodRef} src={ohmyfood}  style={{clipPath: ohmyfoodClipPath}} alt='ohmyfood ohmyfood' className='roots__logo' />
                </a>
            </div>
            <div style={{opacity: ohmyfoodOpacity}} className='roots__ohmyfood__description'>
                <h3>Projet 3 : Ohmyfood</h3>
                <p>Langage : HTML & SASS</p>
                <p>Description : site 100% mobile qui répertorie les menus de restaurants gastronomiques</p>
            </div>
            <div className='roots__panthere'>
                <a href='https://antchr.github.io/Projet_4/' className='roots__link'>
                    <img ref={panthereRef} src={panthere} style={{clipPath: panthereClipPath}} alt='ohmyfood panthere' className='roots__logo' />
                </a>
            </div>
            <div style={{opacity: panthereOpacity}} className='roots__panthere__description'>
                <h3>Projet 4 : La Panthère</h3>
                <p>SEO & Accessibilité</p>
                <p>Description : Amélioration du référencement d'un site existant</p>
            </div>
            <div className='roots__kanap'>
                <a href='https://github.com/AntChr/Projet_5' className='roots__link'>
                    <img ref={kanapRef} src={kanap} style={{clipPath: kanapClipPath}} alt='ohmyfood kanap' className='roots__logo' />
                </a>
            </div>
            <div style={{opacity: kanapOpacity}}className='roots__kanap__description'>
                <h3>Projet 5 : Kanap</h3>
                <p>Langage : Javascript</p>
                <p>Description : Création d'une plateforme e-commerce pour vendre des canapés sur internet</p>
            </div>
            <div className='roots__hotakes'>
                <a href='https://github.com/AntChr/Projet_6-HotTakes' className='roots__link'>
                    <img ref={hotakesRef} src={hotakes} style={{clipPath: hotakesClipPath}} alt='ohmyfood hotakes' className='roots__logo' />
                </a>
            </div>
            <div style={{opacity: hotakesOpacity}} className='roots__hotakes__description'>
                <h3>Projet 6 : Hot Takes</h3>
                <p>Langage : Javascript, Express, MongoDB</p>
                <p>Description : Construction d'une API sécurisée pour une application d'avis gastronomiques</p>
            </div>
            <div className='roots__kasa'>
                <a href='https://github.com/AntChr/Projet_7' className='roots__link'>
                    <img ref={kasaRef} src={kasa}  style={{clipPath: kasaClipPath}} alt='ohmyfood kasa' className='roots__logo' />
                </a>
            </div>
            <div style={{opacity: kasaOpacity}} className='roots__kasa__description'>
                <h3>Projet 6 : Kasa</h3>
                <p>Librairie : React</p>
                <p>Description : Construction d'une API sécurisée pour une application d'avis gastronomiques</p>
            </div>
        </div>
    </div>
)}

export default Roots