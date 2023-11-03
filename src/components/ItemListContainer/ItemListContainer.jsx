import {ItemList} from './ItemList'
import {Spinner} from '../Spinner/Spinner'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore, collection, getDocs, query,where, limit } from "firebase/firestore"
import { db } from "../../firebase/client"

export function ItemListContainer(){
    const [loading, setLoading] = useState(true)
    const [products,setProduct] = useState([])
    const {id="home"} = useParams()
    // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>{    
    //             setProduct(json)
    //             setLoading(false)
    //         })
    //         .catch(error=>console.error(error))
    //     }, [id])

     /* Items from firebase, for all the cloections*/ 
     useEffect(()=>{
        const productsRef = collection(db, "products")
        const productsRefFilters = query(
            collection(db, "products"),
            where("categoryid","==","Pantalones"),
            limit(2)
        )
        getDocs(productsRef)
        .then((snapshot)=>{
            setProduct(snapshot.docs.map(doc=>({id: doc.id, ...doc.data()})))
        })
        .finally(setLoading(false))
    }, [id])

    return(
        <section id="products-list" className='grid grid-cols-5 mx-20 gap-10 mt-5 justify-items-center max-xl:grid-cols-4 max-lg:grid-cols-3'>
            {loading ? <Spinner center="spinner-center"/> : <>{products.map((e,i)=> (e.categoryid == id || id == "home") && <ItemList itemDetail={e} key={i} />)}</>}
        </section>
    )
}