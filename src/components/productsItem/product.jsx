

import { NavLink } from "react-router-dom"
import { Button } from "../../atom/button/Button"
import { Monyscreen } from "../mony"
import { useCart } from "../../providers/cartProvider"
import styled from "styled-components"
import icon from '../../image/Vector.png'
import './productsitem.css'
const Box=styled.div`
opacity: 0;
top: 308px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
transition: all 1s ease;
`
const Container=styled.div`
width: 30%; 
cursor: pointer;

&:hover ${Box}{
    opacity: 1;
}
`
const Image=styled.img`
width: 356px;  
height:338px;

`
const Icon=styled.div`
 z-index: 3;
 position: relative;
`
const Info=styled.div`
   /*opacity: 0;
 width:100%;
 height:100%;
 position: absolute;
 top:0;
 left:0; */
`

const Circel=styled.div`
  width:60px;
  height:60px;
  border-radius:50%;
  background-color:#5ECE7B;
  position: absolute;
`
export const Product=({prodact})=>{
  const {It}=useCart();
 
    return(

     <Container>
      <Image src={prodact.url}/>
      <Box>
      <Circel/>
      <Info> 
      <Icon>
       <NavLink to='/'><Button className="product-button" onClick={()=>It(prodact)}><img src={icon} alt="icon"/></Button></NavLink>
      </Icon>
      </Info>
      </Box>
      <h5 className="product-name">{prodact.name}</h5>
      <h6 className="product-prise"><Monyscreen/> {prodact.price} </h6>
     </Container>
  )
}