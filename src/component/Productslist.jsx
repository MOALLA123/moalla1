import { useEffect, useState } from "react";
import "./product.css"
import Product from "./product";


function Productslist(){     const api="https://fakestoreapi.com/products";
    const apii="https://fakestoreapi.com/products/categories"
    const[products,setproducts]=useState([])
    const[category,setcategory]=useState([])
    useEffect(()=>{fetch(apii).then((res)=>res.json()).then((data)=>setcategory(data))},[])
const productincategory=(x)=>{ 
fetch(`${api}/category/${x}`).then((res)=>res.json()).then((x)=>setproducts(x))
}


useEffect(()=>{ fetch(api)
.then((res)=>res.json())
.then((data)=>setproducts(data))

},[]) 
 
return(  


<div className="main-product"> 
<h2 className="text-center p-4">OUR PRODUCTS</h2>
<div className="container">
<button  className="btn btn-info " onClick={()=>{fetch(api)
.then((res)=>res.json())
.then((data)=>setproducts(data))
}}> All</button>
    {category.map((data)=>{return ( <button key={data} className="btn btn-info " onClick={()=>{productincategory(data)}} > {data}</button> )})}
<div className="row">  
{products.map(
    (e)=>{return  <div className="col-3  " key={e.id}> 
   <Product product={e} showbutton={true}  />
</div>

    }
     )
     
     }


        </div>
           </div>
</div>
)

}

export default Productslist;

