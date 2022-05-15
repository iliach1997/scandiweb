import { Button } from "../../atom/button/Button"


export const ProductTable=({onadd,onremov,url,name,price})=>{
    return(
        <tr>
        <th>
     
         <img src={url} alt="l"/>
         {name}
         {price}
        
        <Button className="btn" text='+' onClick={onadd}/>
        <Button className="btn" text="-" onClick={onremov}/>
        </th>
        
        
        </tr>
    )
}