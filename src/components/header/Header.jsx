import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../providers/cartProvider';
import { Mony } from "../mony/Mony";
import { BagItem } from '../bag/bagItem';
import {Button} from '../../atom/button/Button'
import { Monyscreen } from '../mony';
import carts from '../../image/cart.png'
import './header.css'
export const Header=()=>{
    const {cart}=useCart()
    const [open, setOpen]=useState(false);
    const [openbeg, setOpenbeg]=useState(false);
    console.log(cart.total_price)
    return(
        <div className="h-box">
         <div className="h-left-box">
             <ul>
                 <li className='h-li'><NavLink to="women"> WOMAN</NavLink></li>
                 <li className='h-li'><NavLink to='men'>MEN</NavLink></li>
                 <li className='h-li'><NavLink to="kids">KIDS</NavLink></li>
                 <li className='logo'>
                <svg width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.0988 28.6014C32.1313 28.9985 31.8211 29.339 31.4268 29.339H1.59438C1.2009 29.339 0.890922 29.0002 0.922082 28.6037L3.06376 1.34718C3.09168 0.992702 3.38426 0.719727 3.73606 0.719727H29.1958C29.5468 0.719727 29.8391 0.991612 29.868 1.34499L32.0988 28.6014Z" fill="url(#paint0_linear_150_365)"/>
                <defs>
                <linearGradient id="paint0_linear_150_365" x1="25.8733" y1="25.3337" x2="7.51325" y2="3.9008" gradientUnits="userSpaceOnUse">
                 <stop stop-color="#52D67A"/>
                <stop offset="1" stop-color="#5AEE87"/>
                 </linearGradient>
                </defs>
                </svg>
                
                  </li>
             </ul>
         </div>
         <div className="h-right-box">
                
             <ul >
             <div className='mony-bag'><Monyscreen/></div>
             <div onClick={()=>setOpen(!open)} className="open">^</div>
             
           <div className={open?'h-div-mony':"h-div-mony-none"}>
             <Mony/> 
           </div>

  
          
              <img className='h-cart-img' onClick={()=>setOpenbeg(!openbeg)} src={carts} alt='cart-img'/>
              <div className="total">{cart.total}</div>
    
          
       
          <div className={openbeg?"beg-mom-box":"beg-mom-none"}>
           <div className="h-item-div"><span className='bag-span'>My Bag,</span> {cart.total} items</div>
           <div ><BagItem/></div> 
             
         <div className="button-b">
             <div className="total-box">
             <div className="total-bag">Total</div>
             <div className="total_price"><Monyscreen/>{cart.total_price}   </div>
          
             </div>
             <div className="bag-button-box">
           <NavLink to="productsItem" >  <Button className="b-view" onClick={()=>setOpenbeg(!openbeg)}> VIEW BAG</Button></NavLink>
            <Button className="b-check">CHECK OUT</Button></div>
         </div>
         </div>

             </ul>
      
           
       
         </div>
        </div>
    )
}