import { Monyitem } from './Monyitem'
import Data from '../../mony.json'
export const Mony=()=>{
 
    return(

      <div> 
          {Data.map((item,index)=>(
             <Monyitem mony={item} key={index} />   
        ))} 
        
        </div>

    )
}