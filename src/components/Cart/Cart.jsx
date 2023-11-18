import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext/CartContext'
import { useEffect, useContext, useState } from 'react'

export function Cart() {
    const { cartItems, setCartItems } = useContext(CartContext)
    
    // Create a mergedCart, that remove the duplicates of products and in the products add the quantity added to the cart
    let cartWithQ = {}
    cartItems.forEach(product => {
        let {categoryid, description, image, price, stock, title, q=1} = product
        if(cartWithQ[title]){
            cartWithQ[title].q += 1
        } else{
            cartWithQ[title] = {title, categoryid, description, image, price, stock, q}
        }
    });

    let mergedCart = Object.values(cartWithQ)

    return (
        <>
            <div id="cartContainer" className='w-50'>
                <h1>Shopping Cart</h1>
                <div id="productsContainer" className='flex flex-col w-20 h-20'>
                    <div id="desiredProduct">
                        {/* <img src={mergedCart && mergedCart[0].image}></img> */}
                    </div>
                    {mergedCart.map((e,i)=><img key={i} src={e.image}></img>)}
                </div>
                <div id="summaryContainer">

                </div>
            </div>
        </>
    )
}