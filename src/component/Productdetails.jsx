import { useEffect ,useState} from 'react';
import './Product.css'
import { useParams } from 'react-router-dom';
import Product from './product';
function Productdetails(){
    const[product,setproduct]=useState({});
    let params=useParams()
    const api="https://fakestoreapi.com/products/";
    useEffect(()=>{ fetch(`${api}/${params.productId}`).then((res)=>res.json()).then((product)=>{setproduct(product)})},[])

    return(
<div className='de'>
<Product product={product} showbutton={false} />
</div>

    )
}




export default Productdetails;