import Header from '../components/Header'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow';
import Textbio from '../components/Textbio';
import Roots from '../components/Roots';




function Accueil() {

  return (
    <div>
          <Header />
          <main className='container__home'>
          <Slideshow slides={[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMd7eiGMX9FwRLC0uJTDewSjw_7_WvCF4ABLdwztLrCnPEXrqW0gG-pH8eT-fYPLlghjY&usqp=CAU",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            "https://www.lamaisonpassive.fr/wp-content/uploads/2023/01/LA-MAISON-DU-PASSIF_logo_original-350x212.png",
            "http://www.lamaisonpassive.fr/wp-content/uploads/2015/08/Logo-PHPPsite-300x143.jpg"
          ]}/>
          <Textbio />
          <Roots />
          </main>
          <Footer />
    </div>
  )
}
export default Accueil;