import { createContext, useState } from "react"

export const CartContext = createContext();

//cartI = cartItems
const CartComponentContext = ({children})=>{
    const [cartItems, setCartItems] = useState([])
    return(
        <CartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext
