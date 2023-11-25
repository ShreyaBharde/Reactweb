import {NavLink} from 'react-router-dom'

function Navbar(){

    return<>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/product'>Product</NavLink>
    <NavLink to='/myproduct'>MyProduct</NavLink>


    </>
}
export default Navbar;