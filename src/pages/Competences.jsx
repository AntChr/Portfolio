import { useState, useEffect } from 'react'
import { CartContext } from "../components/CartContext";
import competences from '../ressources/competences.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Collapse from '../components/Collapse'
import { useContext } from 'react';


function Competences() {
    const {panier, setPanier}  = useContext(CartContext);  
    const [competenceData, setCompetenceData] = useState([])
    const [deftotal,setTotal] = useState(14000)


    useEffect(() => {
      setCompetenceData(competences)
    }, [])

    function addcart(competence) {
      const existingCompetence = panier.find(comp => comp.id === competence.id)
      if (existingCompetence) {
        window.alert("Vous pouvez ajouter qu'une seule fois la compétence")
      } else {
      setPanier([...panier, {...competence, price: competence.price || 14000, id: competence.id}])
      setTotal(prevtotal => prevtotal+ (competence.price || deftotal))
      }
    }


  return (
    <div>
          <Header />
          <main className='container__competences'>
          <div className='panier__container'>
                    <Collapse title={competenceData.title} price={competenceData.price} add={competenceData.add} id ={competenceData.id} />
                    </div>
            <div className='competence__list'>
                {competenceData.map((competence) => (
                        <div key={competence.id}>
                            <Cards addToCart={() => addcart(competence)} id={competence.id} cover={competence.cover} title={competence.title} add={competence.add} rating={competence.rating} />
                        </div>
                ))}
            </div>
          </main>
          <Footer />
    </div>
  )
}
export default Competences;