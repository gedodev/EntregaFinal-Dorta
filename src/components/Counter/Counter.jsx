import { useState } from "react"
import { Button } from "@nextui-org/react"
import { CounterContext } from "../../context/CounterContext/CounterContext"
import { useContext } from 'react'

export function Counter(){
    const [count, setCount] = useState(1)
    const {quantity, setQuantity} = useContext(CounterContext)

    const plus = ()=>{
        setCount(count + 1)
        setQuantity(count + 1)
        console.log(`Plus. count:${count}, quantity:${quantity}`)
    }

    const minus = ()=>{
        count > 1 && setCount(count - 1)
        setQuantity(count > 1 ? count - 1 : count)
        console.log(`Minus. count:${count}, quantity:${quantity}`, setCount)
    }

    // const classButton = "border border-white w-7 h-7 rounded-md hover:bg-neutral-900"
    const classButton = "w-7 h-7 rounded-md hover:bg-neutral-900 h-full"
    return(
        <div className="flex gap-6 items-center h-full">
            <Button onClick={minus} className={classButton}>-</Button>
            {/* <button onClick={plus} className={classButton}>+</button> */}
            <p>{count}</p>
            {/* <button onClick={minus} className={classButton}>-</button> */}
            <Button onClick={plus} className={classButton}>+</Button>
        </div>
    )
}