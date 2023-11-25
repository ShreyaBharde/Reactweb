
import { NavLink } from "react-router-dom";
import DATA from "../Data";
function MyProduct(){

    return<>
    <h1>MyProduct Page</h1>
    <div>
        {DATA.map((data)=>(
            <div key={data.id} className="card" style={{width: '18rem'}}>
            <img src={data.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <NavLink  to={`/myproducts/${data.id}`} >Buy Product</NavLink>
            </div>
          </div>
        ))}
    </div>
    </>
}
export default MyProduct;