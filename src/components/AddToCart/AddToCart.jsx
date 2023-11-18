import { Counter } from '../Counter/Counter'
import { Button } from '@nextui-org/react'
import {CounterContext} from '../../context/CounterContext/CounterContext'
import { CartContext } from '../../context/CartContext/CartContext'
import { useEffect, useContext } from 'react'

export function AddToCart({product}){
    const {cartItems, setCartItems} = useContext(CartContext)
    const {quantity, setQuantity} = useContext(CounterContext)
    let price = product.price
    const addToCart = ()=>{
        // product.quantity = quantity
        setCartItems([...cartItems, product])
    }

    return(
        <div id="product-add" className="text-center text flex items-center justify-evenly p-2 gap-1">
            <div id="product-price" className="text-center text flex items-center">
                <strong>USD {quantity !== 0 ? price * quantity : price}</strong>
            </div>
            <Counter/>
            <Button onClick={addToCart}>Add To Cart</Button>
        </div>
    )
}