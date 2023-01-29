import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./CartContext";




function Collapse ({title, price, add, id, DefaultTotal = 14000,}) {  
const {panier, setPanier}  = useContext(CartContext);     
const [isOpen, setIsOpen] = useState(true)
const [deftotal,setTotal] = useState(DefaultTotal)



const handleClearCart = () => {
    setPanier([])
}

const total = panier.length > 0 ? panier.reduce((acc, item) => acc + item.price, deftotal) : deftotal

return isOpen ? (
    <div className="panier">
        <button onClick={() => setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
        <ul>
            <li> Autonomie : 3500 € brut/an</li>
            <li> Patience : 3500 € brut/an</li>
            <li> Transparence : 3500 € brut/an</li>
            <li> Anglais : 3500 € brut/an</li>
            {panier.map((competence, index) => (
                <li key={competence.id ? competence.id : index}>{competence.title} : {competence.price}€ brut/an</li>
            ))}
        </ul>
        <h3>Total : {total} € brut/an</h3>
        <button onClick={handleClearCart}>Vider le panier</button>
    </div>
) : (
    <div className="panier__closed">
        <button className ='panier__closed__button'onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    </div>
)
}

export default Collapse