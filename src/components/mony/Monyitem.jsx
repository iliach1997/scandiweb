

import { useCart } from '../../providers/cartProvider'
import './mony.css'

export const Monyitem=({mony})=>{
    const {Itmony}=useCart()
   
    return(
        <div className="box">
        <div className="box-nony" onClick={()=>Itmony(mony)}>
        <img className='m-img' src={mony.url} alt="mony" />
        {mony.name}
        </div>
     </div>
        
     
    )
}