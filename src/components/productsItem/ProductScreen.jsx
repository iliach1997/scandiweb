
import {useCart} from '../../providers/cartProvider'
import { EachItem } from './EachItem';


export const ProductScreen=()=> {
    const {item,addNewItem}=useCart();
    // console.log(item)
  return (
    <>
    {Object.entries(item.items).map(([productid,item])=>{
return <EachItem key={`prducts-${productid}`}{...item}productid={productid} 
 onadd={()=>addNewItem({...item,id:productid})}
 
/>
  })}
  
    </>
  )
}
