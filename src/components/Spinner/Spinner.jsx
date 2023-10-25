import './spinner.css'
export function Spinner({center}){
    return(
        <>
        <div className={`spinner-container ${center}`}>
            <div className="spinner"></div>
        </div>
        </>
    )
}