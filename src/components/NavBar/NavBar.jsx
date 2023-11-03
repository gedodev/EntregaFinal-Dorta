import CartWidget from '../CartWidget/CartWidget'
import reactLogo from '../../assets/react.svg'
import {Spinner} from '../Spinner/Spinner'
import {Link, NavLink} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { doc, getDoc, getFirestore, collection, getDocs, query,where, limit } from "firebase/firestore"
import { db } from "../../firebase/client"

export function NavBar(){
    const [categories,setCategory] = useState([])
    const [loading, setLoading] = useState(true)

    // Upper case the first letter
    const capitalize = (w) => w = w.charAt(0).toUpperCase() + w.slice(1);

    /* Items from firebase, for all the cloections*/ 
    useEffect(()=>{
        const productsRef = collection(db, "products")
        // const productsRefFilters = query(
        //     collection(db, "products"),
        //     where("categoryid","==","Pantalones"),
        //     limit(2)
        // )
        getDocs(productsRef)
        .then((snapshot)=>{
            setCategory([...new Set(snapshot.docs.map(doc=> doc.data().categoryid))])
        })
        .finally(
            setLoading(false),
            )
    }, [])

    return(
        <header>
            <nav className="flex justify-between">
                <Link to={'/'}>
                    <picture className="flex justify-center h-full w-20">
                        <img src={reactLogo} alt="Logo react" className="w-7/12" />
                    </picture>
                </Link>
                <ul className="flex justify-center grow p-5 gap-x-10">
                    {loading ? <Spinner/> : <>{categories.map((c,i) => <li key={i}><NavLink to={`/category/${c}`} className={(prop)=> prop.isActive ? "text-sky-400/100" : ""} >{capitalize(c)}</NavLink></li>)}</>}
                </ul>
                <div className="navBar-cart p-5">
                    <CartWidget/>
                </div>
            </nav>
            
        </header>
    )
}

function deleteDuplicates(arr){
    arr.forEach(e=>{
        arr.splice(arr.indexOf(e),1)
        arr.includes(e) ? deleteDuplicates(arr) : arr.push(e)
    })
    arr.sort()
}