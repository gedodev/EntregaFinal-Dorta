import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(1)

    const plus = ()=>{
        setCount(count + 1)
    }

    const minus = ()=>{
        count > 1 && setCount(count - 1)
    }

    const classButton = "border border-white w-7 h-7 rounded-md hover:bg-neutral-900"

    return(
        <div className="flex gap-6 items-center">
            <button onClick={plus} className={classButton}>+</button>
            <p>{count}</p>
            <button onClick={minus} className={classButton}>-</button>
        </div>
    )
}