import {Link} from 'react-router-dom'

export const borderRadius = "rounded-t-xl"

export function ItemList({itemDetail}){
    const product = itemDetail
    return(
        <div id={`product-${product.id}`} className={`bg-stone-950  flex flex-col justify-between items-center gap-5 basis-full w-56 pb-5`} >
            <Link to={`/item/${product.id}`} className={`h-56 w-full ${borderRadius}`}>
                <picture className='w-full h-full'>
                    <img src={product.image} alt="" className={`h-full w-full object-cover object-top`} />
                </picture>
            </Link>
            <div id={`productName-${product.id}`} className="font-bold text-center">
                <Link to={`/item/${product.id}`}>{product.title}</Link>
            </div>
            <div id={`productPrice-${product.id}`}>
                <p>USD {product.price}</p>
            </div>
        </div>
    )
}

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }