import CartWidget from '../CartWidget/CartWidget'
import reactLogo from '../../assets/react.svg'
import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react'


export function NavBar(){
    const [categories,setCategory] = useState([])

    // Upper case the first letter
    const capitalize = (w) => w = w.charAt(0).toUpperCase() + w.slice(1);

    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))

    return(
        <header>
            <nav className="flex justify-between">
                <Link to={'/'}>
                    <picture className="flex justify-center h-full w-20">
                        <img src={reactLogo} alt="Logo react" className="w-7/12" />
                    </picture>
                </Link>
                <ul className="flex justify-center grow p-5 gap-x-10">
                    {categories.map((c,i) => <li key={i}><NavLink to={`/category/${c}`} className={(prop)=> prop.isActive ? "text-sky-400/100" : ""} >{capitalize(c)}</NavLink></li>)}
                </ul>
                <div className="navBar-cart p-5">
                    <CartWidget/>
                </div>
            </nav>
            
        </header>
    )
}