
import { Spinner } from '../Spinner/Spinner'
import { AddToCart } from '../AddToCart/AddToCart'

export function ItemDetail({product,loading}){
    
    return(
        <div className={`bg-stone-950 flex w-3/6 absolute top-2/4 left-2/4 ${loading && "justify-items-center"}`} style={{transform: "translate(-50%, -50%)"}} id='product-container'>
            <div id="product-image" className={`bg-stone-950  flex flex-col justify-between items-center gap-5 basis-2/7 w-56 place-items-center`} >
                <picture className={`w-full h-full ${loading && "flex justify-center items-center"}`}>
                    { loading ? <Spinner/> : <img src={product.image} alt="" className={`h-full w-full object-cover object-top`} />}
                </picture>
            </div>
            <div id="product-info" className='flex flex-col justify-between p-5 basis-5/7'>
                 <div id="product-title" className="font-bold text-center">
                    <h1>{product.title}</h1>
                </div>
                <div id="product-description">
                    <p className='py-5'>{product.description}</p>
                </div>
                <AddToCart product={product}/>
            </div>
        </div>
    )
}