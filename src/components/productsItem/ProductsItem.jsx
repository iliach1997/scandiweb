


import { useCart } from "../../providers/cartProvider"
import { ProductTable } from "./ProductTable";
import { Button } from "../../atom/button/Button";
import { Monyscreen } from "../mony";
import './productsitem.css'
export const ProductsItem=()=>{
const {cart,addNewItem,removeItem,addSize,addColor}=useCart();
let S='S';
let XS='XS';
let M='M';
let L='L';
let green='#0F6450';
let black='#2B2B2B';
let wheat ='#D3D2D5';
// console.log(cart, Size,color)
 return(
  <>

<div className="p-cart">CART</div>
{Object.entries(cart.items).map(([productid,item])=>{
return <ProductTable key={`prducts-${productid}`}{...item}productid={productid}  

onadd={()=>addNewItem({...item,id:productid})}
onremov={()=>removeItem({...item,id:productid})}

onaddS={()=>addSize({S})}
onaddXs={()=>addSize({XS})}
onaddM={()=>addSize({M})}
onaddL={()=>addSize({L})}
onaddwheat={()=>addColor({wheat})}
onaddblack={()=>addColor({black})}
onaddgreen={()=>addColor({green})}
/>

  })}
  
  <div className="p-box">
    <div className="p-tax"><span className="tax-span">Tax 21%:</span><Monyscreen/>{Math.round((cart.total_price*21)/100)}</div>
    <div className="p-qty-total"><span className="qty-span">Quantity:</span>  {cart.total}</div>
    <div className="p-total"><span className="p_span">Total:</span>  <Monyscreen/> {cart.total_price}</div>
    <Button className="order">ORDER</Button>
  </div>
  
  </>
 )
}