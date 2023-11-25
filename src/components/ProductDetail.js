import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
function ProductDetail(){
    const[products,setProducts]=useState(null);
    const {id}=useParams();

   


    useEffect(()=>{
        const fetchdata= async()=>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json()
                setProducts(data)
            }catch(err){
                console.log(err)
            }
        }
        fetchdata()
    },[id])


        if(!products){
            return<><h1> Products  Loading.....</h1></>
        }
    return<>
        <div>

            
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={products.image} className="img-fluid rounded-start" alt={products.title}/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{products.title}</h5>
                      <h5 className="card-title">{products.price}</h5>

                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
    </>
}
export default ProductDetail;