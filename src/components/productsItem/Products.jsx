
import styled from "styled-components"
import { Product } from "./product"
import Data  from "../../products.json"
const Container=styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 10%;
width:100%;
`
const Category=styled.div`
    margin-left: 10%; 
    margin-top: 50px;
    margin-bottom: 90px;
    font-size: 46px;

`
export const Products=()=>{
    return(
        <>
        <Category>
        Category name
        </Category>
        <Container>
        {Data.map((item,index)=>(
               <Product prodact={item} key={index}/>   
        ))} 
        </Container>
        </>
    )
}