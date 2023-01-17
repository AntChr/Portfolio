import React from "react";
import Dot from '../images/dot.jpg'
import Dotempty from '../images/dotempty.jpg'

// Affichage de tous les logements de la base de données avec leur image et titre
const Cards = ({cover, title, rating}) => {
        const dots =[];
        for (let i =0; i < rating; i++) {
            dots.push(<img src={Dot} alt="points" key={i} />);
        }
        const dotsempty =[];
        for (let i =0; i < (5-rating); i++) {
            dotsempty.push(<img src={Dotempty} alt="points vides" key={i} />);
        }
        
    return (
        <div>
            <img className ='competence__list__img' src={cover} alt={title} />
            <h2 className="competence__list__txt">{title}</h2>
            <div className="logement__rating">
                    {dots}
                    {dotsempty}
            </div>
            
        </div>
    )
}
export default Cards