import './spinner.css'
import reactLogo from '../../assets/React-blue.png'
export function Spinner({center}){
    return(
        <>
        <div className={`spinner-container ${center}`}>
            <img className="spinner" src={reactLogo}></img>
        </div>
        </>
    )
}