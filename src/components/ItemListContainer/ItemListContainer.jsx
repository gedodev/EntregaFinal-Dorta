import {ItemList} from '../ItemList/ItemList'
import {Spinner} from '../Spinner/Spinner'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export function ItemListContainer({cat}){
    const [loading, setLoading] = useState(true)
    const [products,setProduct] = useState([])
    const {id="home"} = useParams()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProduct(json)
                setLoading(false)
            })
            .catch(error=>console.error(error))
        }, [id])

    return(
        <section id="products-list" className='grid grid-cols-4 mx-20 gap-10 mt-5'>
            {loading ? <Spinner/> : <>{products.map((e,i)=> (e.category == id || id == "home") && <ItemList itemDetail={e} key={i} />)}</>}
        </section>
    )
}