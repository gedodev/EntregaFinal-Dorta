import { createContext, useState } from "react"

export const CounterContext = createContext();

const CounterComponentContext = ({children})=>{
    const [quantity, setQuantity] = useState(1)
    return(
        <CounterContext.Provider value={{quantity, setQuantity}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterComponentContext
