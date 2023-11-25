import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductDetail from "./components/ProductDetail";
import MyProduct from "./components/MyProduct";
import MyProductDetail from "./components/MyProductDetail";
function App(){

  return<>
  
<Router>

<div>
<Navbar></Navbar>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/myproduct" element={<MyProduct/>}/>

<Route path="/products/:id" element={<ProductDetail/>}/>
<Route path="/myproducts/:id" element={<MyProductDetail/>}/>





</Routes>
<Footer></Footer>
</div>

</Router>

  </>
}export default App;