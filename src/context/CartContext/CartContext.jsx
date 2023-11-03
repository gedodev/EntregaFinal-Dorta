import { createContext, useState } from "react"

export const CartContext = createContext();

const CartComponentContext = ({children})=>{
    const [cartQ, setCartQ] = useState(0)
    return(
        <CartContext.Provider value={{cartQ, setCartQ}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext
