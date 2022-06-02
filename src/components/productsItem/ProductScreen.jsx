
import {useCart} from '../../providers/cartProvider'
import { EachItem } from './EachItem';


export const ProductScreen=()=> {
    const {item,addNewItem,addSize,addColor}=useCart();
 
   
   let S='S';
   let XS='XS';
   let M='M';
   let L='L';
  let green='#0F6450';
  let black='#2B2B2B';
  let wheat ='#D3D2D5';
  return (
    <div>
    {Object.entries(item.items).map(([productid,item])=>{
     
    return <EachItem key={`prducts-${productid}`} {...item}productid={productid} 
    onadd={()=>addNewItem({...item,id:productid})}
    onaddS={()=>addSize({S})}
    onaddXs={()=>addSize({XS})}
    onaddM={()=>addSize({M})}                                                                        
    onaddL={()=>addSize({L})}
    onaddwheat={()=>addColor({wheat})}
    onaddblack={()=>addColor({black})}
    onaddgreen={()=>addColor({green})}
    />})}
   

    </div>
  )
}
