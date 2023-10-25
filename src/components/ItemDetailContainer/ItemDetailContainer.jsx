import {borderRadius} from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import { Counter } from '../Counter/Counter'
import { Button } from '@nextui-org/react'

export function ItemDetailContainer(){
    const {id} = useParams()
    const[product, setProduct] = useState({})

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{setProduct(json)})  
        }, [id])
    
    return(
        <div className="bg-stone-950 grid place-content-center grid-cols-2 w-3/6 className='flex flex-col justify-between absolute top-2/4 left-2/4" style={{transform: "translate(-50%, -50%)"}} id='product-container'>
            <div id={`product-image`} className={`bg-stone-950  flex flex-col justify-between items-center gap-5 basis-full w-56 place-items-center`} >
                <picture className='w-full h-full'>
                    <img src={product.image} alt="" className={`h-full w-full object-cover object-top`} />
                </picture>
            </div>
            <div id="product-info" className='flex flex-col justify-between'>
                 <div id="product-title" className="font-bold text-center">
                    <h1>{product.title}</h1>
                </div>
                <div id="product-description">
                    <p className='py-5'>{product.description}</p>
                </div>
                <div id="product-add" className="text-center text flex justify-evenly p-2">
                    <div id="product-price" className="text-center text flex items-center">
                        <strong>USD {product.price}</strong>
                    </div>
                    <Counter/>
                    <Button>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}