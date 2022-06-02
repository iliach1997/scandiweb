


import { Button } from '../../atom/button/Button'
import {useCart} from '../../providers/cartProvider'
import {Monyscreen} from '../mony/MonyScreen'
import './productsitem.css'
export const EachItem=({onadd,productid,onaddS,onaddXs,onaddM,onaddL,url,name,price,onaddwheat,onaddblack,onaddgreen})=>{
   const {Size,item,mony}=useCart();
   console.log(mony.items.id,'url')
 
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
        <div className='e-name'>{name}</div>
        
        <div className='e-size'>SIZE:</div>
        <div className="button-size">
        
        <Button className={item.items[productid].XS===Size.sizes.XS?'button-xs1':'button-xs'} onClick={onaddXs}> XS</Button>
  
        <Button className={item.items[productid].S===Size.sizes.S?'button-s1':'button-s'} onClick={onaddS}>S</Button>
        <Button className={item.items[productid].M===Size.sizes.M?'button-m1':'button-m'} onClick={onaddM}>M</Button>
        <Button className={item.items[productid].L===Size.sizes.L?'button-l1':'button-l'} onClick={onaddL}>L</Button>
        </div> 
      
        <div className="button-color">
         <div className='e-color'>COLOR:</div>
        <Button className="colorwheat"onClick={onaddwheat}></Button>
        <Button className="colorblack"onClick={onaddblack}></Button>
        <Button className="colorgreen"onClick={onaddgreen}></Button>
        </div>
        <div className="e-price-name">PRICE:</div>
        <div className='e-price'> <Monyscreen/>{price} </div>
        <div className="button-add">
        <Button className='b-addcart' onClick={onadd}>AAD TO CART</Button>
        </div> 
        <div className="e-text">
        Find stunning women's cocktail dresses and party dresses. Stand out in lace and 
        metallic cocktail dresses and party dresses from all your favorite brands.
        </div>
 
        </div>
        
        </div>
  
    )

}