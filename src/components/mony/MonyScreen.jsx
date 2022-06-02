
import { useCart } from "../../providers/cartProvider"
import { RenderMony } from "./RenderMony"
export const Monyscreen=()=>{
    const {mony}=useCart();
    console.log(mony,"ilo1")
return(
    <div>
    {Object.entries(mony.items).map(([productid,item])=>{
     
    return <RenderMony key={`prducts-${productid}`} {...item}productid={productid}   />})}
   
  
    </div>
   
)
}