import { createContext } from "react";

export const CartContext = createContext({
    panier:[],
    setPanier:() => {}
})