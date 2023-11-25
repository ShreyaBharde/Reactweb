
import { useState,useEffect } from "react";
import {NavLink} from 'react-router-dom'
function Product(){
    const[products,setProducts]=useState([])

    const datafetch= async ()=>{
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data= await response.json();
            setProducts(data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        datafetch()
    },[])


    if(!products){
        return<><h1>Products Loading....</h1></>
    }
    return<>


<div>
    <h1>Products</h1>
    <hr></hr>
    {products.map((product)=>(
       <div key={product.id} className="card" style={{width: '18rem'}}>
       <img src={product.image} className="card-img-top" alt="..."/>
       <div className="card-body">
         <h5 className="card-title">{product.title}</h5>
         <p className="card-text">{product.description}</p>
         <NavLink to={`/products/${product.id}`} className="btn btn-primary">Buy Now</NavLink>
       </div>
     </div>
    ))}
</div>

    </>
}
export default Product;