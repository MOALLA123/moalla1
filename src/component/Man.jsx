import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./product.css"
import Product from "./product";
function Man(){ 
const[arr,setarr]=useState([]);
const api="https://fakestoreapi.com/products/category/jewelery";
useEffect(()=>{ fetch(api)
.then((res)=>res.json())
.then((data)=>setarr(data))

},[]) 





    return(
        <> 

<div className="container" >

<div className="row ">  
{arr.map(
    (product)=>{return  <div className="col-3  " key={product.id}> 
  <Product title={product.tile} image={ product.image} description={product.description}/>

</div>
  
    }
     )
     
     }


        </div>
           </div>
           
</>

)


}

export default Man

