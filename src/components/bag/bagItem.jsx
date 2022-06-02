
import { useCart } from "../../providers/cartProvider"
import { BagScreen } from "./BegScreen";

export const BagItem=()=>{
    const {cart,addNewItem,removeItem,addSize,Size,color,addColor}=useCart();
    let S='S';
    let XS='XS';
    let M='M';
    let L='L';
    let green='#0F6450';
    let black='#2B2B2B';
    let wheat ='#D3D2D5';
    console.log(cart, Size,color)
     return(
      <>
    

    {Object.entries(cart.items).map(([productid,item])=>{
    return <BagScreen key={`prducts-${productid}`}{...item}productid={productid}  
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
      </>
     )
    }