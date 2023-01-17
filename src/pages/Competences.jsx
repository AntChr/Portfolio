import { useState, useEffect } from 'react'
import competences from '../ressources/competences.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import Collapse from '../components/Collapse'





function Competences() {
    const [competenceData, setCompetenceData] = useState([])

    useEffect(() => {
      setCompetenceData(competences)
    }, [])
  return (
    <div>
          <Header />
          <main className='container__competences'>
            <div className='competence__list'>
            <Collapse id ={competenceData.id} title={competenceData.title} price={competenceData.price} add={competenceData.add}/>
                {competenceData.map((competence) => (
                    <div className='competence__pl'>
                        <div className='competence__pl__panier'>
                            
                        </div>
                        <div key={competence.id} className='competence__pl__list__card'>
                            <Cards cover={competence.cover} title={competence.title} rating={competence.rating} />
                        </div>
                    </div>    
                ))}
            </div>
          </main>
          <Footer />
    </div>
  )
}
export default Competences;