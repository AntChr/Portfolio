import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { CartContext } from "./components/CartContext";
import Accueil from "./pages/Accueil"
import Competences from "./pages/Competences"



const App = () => {
  const [panier, setPanier] = useState([]);
  return (
    <CartContext.Provider value={{panier, setPanier}}>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/competences" element={<Competences/>}/>
      </Routes>
      </BrowserRouter>
      </CartContext.Provider>
  )
}

export default App;
