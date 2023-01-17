import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil"
import Competences from "./pages/Competences"



const App = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/competences" element={<Competences/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App;
