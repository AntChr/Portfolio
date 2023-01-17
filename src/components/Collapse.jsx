import { useState } from "react";



function Collapse (title, price, add, id) {    
const [cart, updateCart] = useState([])
const [isOpen, setIsOpen] = useState(true)

return isOpen ? (
    <div className="panier">
        <button onClick={() => setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
        <ul>
            <li key="1c01"> Autonomie : 4250 €</li>
            <li key="1c02"> Patience : 4250 €</li>
            <li key="1c03"> Transparence : 4250 €</li>
            <li key="4c03"> Anglais : 4250 €</li>
            <li key={id}>{title} : {price}€</li>
        </ul>
        <h3>Total : {17000 + cart}€</h3>
        {add ? <button onClick={() => updateCart(cart)}>Ajouter</button> : null}
        <button onClick={() => updateCart(0)}>Vider le panier</button>
    </div>
) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
)
}

export default Collapse