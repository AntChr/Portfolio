import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Roots from '../components/Roots';
import parcour from '../images/Parcours v2.png'
import HistoryNav from '../components/Historyvav';
import historys from '../ressources/history.json'
import '../style/components/_accueil.scss'
import '../style/components/_historynav.scss'




function Accueil() {

  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    setHistoryData(historys)
  }, [])
  return (
    <div>
          <Header />
          <main className='container__home'>
            <div className='history__show'>
            <HistoryNav data={historyData} />
          </div>
          <Roots src={parcour} />
          </main>
          <Footer />
    </div>
  )
}
export default Accueil;