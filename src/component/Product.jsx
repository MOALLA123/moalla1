  import {Link} from 'react-router-dom'
 
  function Product(props){

const {product,showbutton}=props;
return(
<>

<div className="card " >
          <img src={product.image} className="card-img-top " alt="..."/>
        
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description.slice(0,30)}</p>
      <h6>price is :{product.price} $</h6>
     {showbutton ? <Link to={`product/${product.id}`} className="btn btn-primary" >Show Details</Link>:null}
     
    </div>
  </div> 
        </>

)


  }
/*function Product({title,image,description,showbutton,price}){ 

    return(

<>
<div className="card " >
          <img src={image} className="card-img-top " alt="..."/>
        
   
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <h6>price is :{price} $</h6>
     {showbutton && <Link to={`product/${pro}`} className="btn btn-primary" >Show Details</Link>}
     
    </div>
  </div> 
        </>

    )



}*/

export default  Product ;