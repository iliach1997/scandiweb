import { createContext,useContext, } from "react";

import { useLocalStorage } from "../../hooks";
export const CartContext=createContext({
    total:0,
});
CartContext.displayName='CartProvider';
export const Cartprovider=({children})=>{
    const [cart,setcart]= useLocalStorage('supper-12211,',{total:0,total_price:0,items:{},sizes:''})
    const [item,setitem]= useLocalStorage('supper1113333,',{items:{}})
    const [Size,setSize]= useLocalStorage('Size1,',{sizes:''})
    const [color,setcolor]= useLocalStorage('colors,',{colors:{}})  
    const [mony,setmony]= useLocalStorage('monys,',{items:{}})  

    const It=(products)=>{
     
     console.log(products)
        setitem((prev)=>{
            let newItem;
            
            if(prev.items[products.id]){
            
                const card=prev.items[products.id]
                 
              
                newItem={
                    card,
                  
                    price:products.price,
                    name:products.name,
                    url:products.url,
                    XS:products.XS,
                    S:products.S,
                    M:products.M,
                    L:products.L,
                   
                }
            
            }
            else{
                 
                newItem={
              
                    price:products.price,
                    name:products.name,
                    url:products.url,
                    XS:products.XS,
                    S:products.S,
                    M:products.M,
                    L:products.L,
                  
                }
            }
            return{
                
                items:{
                   
                    [products.id]:newItem
                }
            }
        })
    
    } 
    const Itmony=(products)=>{
     
        console.log(products, 'ilo')
           setmony((prev)=>{
               let newItem;
               
               if(prev.items[products.id]){
               
                   const card=prev.items[products.id]
                  
                 
                   newItem={ 
                       card,
                       url:products.url,
 
                   }
                    
               
               }
               else{
                    
                   newItem={
                    url:products.url,
                      
                     
                   }
               }
               return{
                   
                items:{
                      
                       [products.id]:newItem
                   }
               }
           })
       
       } 
    const addColor=(color)=>{
        setcolor(()=>{
            return{
                colors:color
            }
        })
    }

       const addSize=(size)=>{
        
        setSize(()=>{
           
            return{
            sizes:size
            }
        })
    
    }

     
       const addNewItem=(products)=>{
        
        setcart((prev)=>{
               
      
                
                let newItem; 
              
               if(prev.items[products.id]){
                  
                   const card=prev.items[products.id]
                
                    
                   newItem={
                       ...card,
                       price:products.price,
                       name:products.name,
                       url:products.url,
                       qty:card.qty+1,
                       XS:products.XS,
                       S:products.S,
                       M:products.M,
                       L:products.L,
                       siz:Size.sizes
                     
                       
                    
                      
                   } 
               } 
               
             
     
               
            
               else{
              
                   newItem={
                        
                      
                       price:products.price,
                       name:products.name,
                       url:products.url,
                       qty:1,
                       XS:products.XS,
                       S:products.S,
                       M:products.M,
                       L:products.L,
                       siz:Size.sizes
                      
                   }
                  
                
               }
               
               return{ 
                     
                total_price:prev.total_price+products.price,
                   total:prev.total+1,
                  
                   items:{ 
                  
                       ...cart.items,
                        
                       [products.id]:newItem
                       

                   },  
                  
               }
           })
          
       }

    const removeItem=(prodact)=>{
     setcart((prev)=>{
         let newItem={...prev.items};
         let total=prev.total;
         let total_price=prev.total_price;
         if(prev.items[prodact.id]){
             const cartProduct=prev.items[prodact.id];
             if(cartProduct.qty>1){
               newItem={
                   ...prev.items,
                   [prodact.id]:{
                       ...cartProduct,
                 qty:cartProduct.qty-1}
                 
             }
           total-=1;
           total_price-=prodact.price;
    }
    
    else{
        total_price-=prodact.price;
        total-=1
        delete newItem[prodact.id]
    }

}
        
         return{
             ...prev,
             total_price,
             total,
             items:newItem
         }
     })

      }
    return(
        <CartContext.Provider value={{cart,Itmony,addColor,addNewItem,addSize,removeItem,Size,It,item,color,mony}}>{children}</CartContext.Provider>
    )
} 
export const useCart=()=>{
const cart=useContext(CartContext)
if(!cart){
    throw SyntaxError('syntaxError')
 }
 return cart;
}
