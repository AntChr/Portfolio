import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./scenes/homePage/HomePage"
import Projects from "./scenes/projects/Projects";
import Skills from "./scenes/skills/Skills";
import Contact from "./scenes/contact/Contact"
import { CartContext } from "./components/CartContext"
import { useState } from "react";


function App() {
  const [panier, setPanier] = useState([]);
  return (
    <CartContext.Provider value={{panier, setPanier}}>
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projets" element={<Projects/>} />
          <Route path="/competences" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </CartContext.Provider>
  );
}

export default App;
