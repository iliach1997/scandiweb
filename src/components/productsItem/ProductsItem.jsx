

import { useCart } from "../../providers/cartProvider"
import { ProductTable } from "./ProductTable";

export const ProductsItem=()=>{
const {cart,addNewItem,removeItem}=useCart();
console.log(cart, "ilo")
 return(
  <>
  
  {Object.entries(cart.items).map(([productid,item])=>{
return <ProductTable key={`prducts-${productid}`}{...item}productid={productid}  
onadd={()=>addNewItem({...item,id:productid})}
onremov={()=>removeItem({...item,id:productid})}
/>
  })}
  
  
  
  </>
 )
}