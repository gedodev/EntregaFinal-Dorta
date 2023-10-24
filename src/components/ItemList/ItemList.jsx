import {Counter} from '../Counter/Counter'
export function ItemList({id, itemDetail}){
    const product = itemDetail
    return(
        <div className='bg-stone-950  flex flex-col items-center justify-between rounded-md'>
            <div id={`product-${id}`} className="flex flex-col justify-between items-center gap-5 p-5 basis-full" >
                <div id={`productName-${id}`} className="font-bold text-center">
                    <a href="#">{product.title}</a>
                </div>
                <div id={`productPrice-${id}`}>
                    <p>{product.price}</p>
                </div>
            </div>
            <Counter/>
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