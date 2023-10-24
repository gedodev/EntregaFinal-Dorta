import {ItemList} from '../ItemList/ItemList'
import {Spinner} from '../Spinner/Spinner'
import {useState,useEffect} from 'react'

export function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [products,setProduct] = useState([])

    useEffect(()=>{
        console.log('Se monto algo')
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProduct(json)
                setLoading(false)
                console.log(json)
            })
            .catch(error=>console.error(error))
        }, [])

    return(
        <section id="products-list" className='grid grid-cols-5 mx-20 gap-10'>
            {loading ? <Spinner/> : <>{products.map((e,i)=><ItemList itemDetail={e} key={i}/>)}</>}
        </section>
    )
}