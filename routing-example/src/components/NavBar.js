import React from 'react'
import "../App.css"
import {Link} from "react-router-dom";


function NavBar(){
    return(
        <div>
         <Link to="/home">Home</Link>
         <Link to="/about-us">About Us</Link>
         <Link to="/companies">Companies</Link>
        </div>
    )



}

export default NavBar;