import CartWidget from '../CartWidget/CartWidget'
import reactLogo from '../../assets/react.svg'


export function NavBar(){
    return(
        <>
            <nav className="flex justify-between">
                <picture className="flex justify-center align-middle w-20">
                    <img src={reactLogo} alt="Logo react" className="w-7/12" />
                </picture>
                <ul className="flex justify-center grow p-5 gap-x-10">
                    <li><a href='#'>Category 1</a></li>
                    <li><a href='#'>Category 2</a></li>
                    <li><a href='#'>Category 3</a></li>
                </ul>
                <div className="navBar-cart p-5">
                    <CartWidget/>
                </div>
            </nav>
            
        </>
    )
}