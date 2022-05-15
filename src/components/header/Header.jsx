
import { NavLink } from 'react-router-dom'

import './header.css'
export const Header=()=>{
    return(
        <div className="h-box">
         <div className="h-left">
             <ul>
                 <li className='h-li'><NavLink to="women"> WOMAN</NavLink></li>
                 <li className='h-li'><NavLink to='men'>MEN</NavLink></li>
                 <li className='h-li'><NavLink to="kids">KIDS</NavLink></li>
             </ul>
         </div>
         <div className="h-right">
            <ul>
                <li className='h-cart'><NavLink to="productsItem">cart</NavLink></li>
            </ul>
         </div>
        </div>
    )
}