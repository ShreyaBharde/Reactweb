import { useParams } from "react-router-dom"
import DATA from "../Data"
function MyProductDetail(){

const proid=useParams()
const productdetails=DATA.filter((x)=>x.id==proid.id)
console.log(productdetails)
const product=productdetails[0]
console.log(product)
return<>
<h1>MyProductDetail Page</h1>

<h1>{product.title}</h1>
<img src={product.img}></img>
<h3>{product.price}</h3>

</>
}
export default MyProductDetail