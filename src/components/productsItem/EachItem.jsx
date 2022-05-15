


import { Button } from '../../atom/button/Button'


import './productsitem.css'
export const EachItem=({onadd,url,name,price,sizes})=>{
   
    return(
   
        <div className="e-box">
    
        <div className="e-left-box">
        <div className="e-left">
        <img className="e-image" src={url} alt="img"/>
        <img className="e-image" src={url} alt="img"/>
        <img className="e-image" src={url} alt="img"/>
        </div>
        <div className="e-right">
        <img className="e-right-image" src={url} alt="img"/>
        </div>
        </div>
        <div className="e-right-box">
        <div>{name}</div>
        <div>{price}</div>
        <Button onClick={onadd}>add Cart</Button>
        </div>
        <div>
         
        </div>
        </div>
  
    )

}