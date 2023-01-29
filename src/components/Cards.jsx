import React from "react";


// Affichage de tous les logements de la base de données avec leur image et titre
const Cards = ({cover, title, rating, add, addToCart,}) => {
        const dots =[];
        for (let i =0; i < rating; i++) {
            dots.push(<span className="dot">•</span>);
        }
        const dotsempty =[];
        for (let i =0; i < (5-rating); i++) {
            dotsempty.push(<span className="dotempty">o</span>);
        }
    return (
        <div className="competence__list__card">
            <img className ='competence__list__card__img' src={cover} alt={title} />
            <div className="competence__list__card__tr">
                <h2 className="competence__list__card__tr__txt">{title}</h2>
                <div className="competence__list__card__tr__rating">
                        {dots}
                        {dotsempty}
                </div>
                {add ? <button onClick={addToCart}>Ajouter</button> : null}
            </div>
        </div>
    )
}
export default Cards