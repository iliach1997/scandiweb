import { useCart } from "../../providers/cartProvider"
import { Button } from "../../atom/button/Button"
import { Monyscreen } from "../mony"
import './productsitem.css'

export const ProductTable=({qty,onadd,onremov,onaddS,onaddXs,onaddM,onaddL,url,name,price,onaddwheat,onaddblack,onaddgreen,productid})=>{
  const {cart}=useCart();
  console.log(cart.items[productid].siz,'ilo212',cart.items[productid].XS)
  return(
    <>
    
    <div className="table"></div>
     <div className="table-box">
      
        <div className="left-box-table"> 
          <div className="table-name">{name}</div> 
         
          <div className="table-prise"><Monyscreen/>{price} </div>
          <div className="table-size-name">SIZE:</div>
        <div className="table-button-size">
        <Button className={cart.items[productid].XS===cart.items[productid].siz.XS?'button-xs1':'button-xs'} onClick={onaddXs} >XS </Button>
        <Button className={cart.items[productid].S===cart.items[productid].siz.S?'button-s1':'button-s'} onClick={onaddS}>S</Button>
        <Button className={cart.items[productid].M===cart.items[productid].siz.M?'button-m1':'button-m'} onClick={onaddM}>M</Button>
        <Button className={cart.items[productid].L===cart.items[productid].siz.L?'button-l1':'button-l'} onClick={onaddL}>L</Button>
        </div>
        <div className="table-color-name">COLOR</div>
        <div className="table-button-color">
        <Button className="colorwheat"onClick={onaddwheat}></Button>
        <Button className="colorblack"onClick={onaddblack}></Button>
        <Button className="colorgreen"onClick={onaddgreen}></Button>
        </div>
        </div>
         <div className="right-box-table">
           <div className="table-add">
         <div>
        <Button className='add-box' onClick={onadd}>+</Button>
        </div>
        <div className="p-qty">{qty}</div>
        <div>
        <Button className='remov-box'onClick={onremov}>-</Button>
           </div></div>
        <img className="table-img" src={url} alt="img"/>
       
        </div>   
       
        </div> 
     
    </>
    )
}