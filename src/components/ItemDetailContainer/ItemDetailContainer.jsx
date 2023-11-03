import { useParams } from "react-router-dom"
import {useState, useEffect} from 'react'
import { ItemDetail } from "./ItemDetail"
import CounterComponentContext,{CounterContext} from '../../context/CounterContext/CounterContext'
import { doc, getDoc, getFirestore, collection, getDocs, query,where, limit } from "firebase/firestore"
import { db } from "../../firebase/client"

export function ItemDetailContainer(){
    const {id} = useParams()
    const[product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    /* Items from fakestorapi*/ 
    // useEffect(()=>{
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res=>res.json())
    //         .then(json=>{
    //             console.log(json)
    //             setProduct(json)
    //             setLoading(false)
    //         })  
    //     }, [id, loading])

    /* Items from firebase, for only 1 item
    useEffect(()=>{
        const productRef = doc(db, "products")
        getDoc(productRef)
        .then((snapshot)=>{
            if(snapshot.exists()){
                console.log({id: snapshot.id, ...snapshot.data()})
            }
        })
    },)*/ 

     /* Items from firebase, for all the cloections*/ 
     useEffect(()=>{
        const productDocRef = doc(db, "products", id);
        // const productsRefFilters = query(
        //     collection(db, "products"),
        //     where("id","==",id)
        // )
        getDoc(productDocRef)
        .then((snapshot)=>{
            setProduct(snapshot.data())
        })
        .finally(setLoading(false))
    }, [id, loading])

    
    
    return(
        <CounterComponentContext>
            <ItemDetail product={product} loading={loading}/>
        </CounterComponentContext>
    )
}