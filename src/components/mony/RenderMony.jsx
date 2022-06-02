
import './mony.css'
export const RenderMony=({url})=>{
    console.log(url,'ilo')
    return(
        <div>
        <img className="m-img" src={url} alt="img"/>
        </div>
    )
}