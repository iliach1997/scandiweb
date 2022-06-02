
import { useCart } from '../../providers/cartProvider'
import { Button } from '../../atom/button/Button';
import { Monyscreen } from '../mony/MonyScreen';
import './bag.css'
export const BagScreen=({qty,onadd,onremov,onaddS,onaddXs,onaddM,onaddL,url,name,price,onaddwheat,onaddblack,onaddgreen,productid})=>{
    const {cart}=useCart();
    return(
        <div className='beg-mom'>
           <div className="lrft-box">
           <div className="b-name">{name}</div>
           <div className="b-proice-box">
               <div className="b-mony"><Monyscreen/></div>
                <div className='h-price'>{price}</div>
           </div>
           <div className="b-size-name">SIZE:</div>
        <div className="b-button-size">
        <Button className={cart.items[productid].XS===cart.items[productid].siz.XS?'button-xs1-b':'button-xs-b'} onClick={onaddXs} >XS </Button>
        <Button className={cart.items[productid].S===cart.items[productid].siz.S?'button-s1-b':'button-s-b'} onClick={onaddS}>S</Button>
        <Button className={cart.items[productid].M===cart.items[productid].siz.M?'button-m1-b':'button-m-b'} onClick={onaddM}>M</Button>
        <Button className={cart.items[productid].L===cart.items[productid].siz.L?'button-l1-b':'button-l-b'} onClick={onaddL}>L</Button>
        </div>
        <div className="h-color">COLOR</div>
        <div className="b-button-color">
        <Button className="b-colorwheat"onClick={onaddwheat}></Button>
        <Button className="b-colorblack"onClick={onaddblack}></Button>
        <Button className="b-colorgreen"onClick={onaddgreen}></Button>
        </div>
           </div>
           <div className="right-box">
           <div className="b-add">
         <div>
        <Button className='b-add-box' onClick={onadd}>+</Button>
        </div>
        <div className="b-qty">{qty}</div>
        <div>
        <Button className='b-remov-box'onClick={onremov}>-</Button>
           </div></div>
        <img className="bag-img" src={url} alt="img"/>
       
        </div> 
        </div>

    )
}