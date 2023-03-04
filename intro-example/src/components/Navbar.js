import React from 'react';
import "../App.css";



function MyNavbar({loggedIn}){
    return(
            <nav className="my-nav">
                <div><a>Home</a></div>
                <div><a>About Us</a></div>
                <div><a>Our Partners</a></div>
                <div><a>Cotact Us</a></div>
                <div>{loggedIn? "Welcome, User" : "Not Logged In"}</div>
            </nav>
    )
}


export default MyNavbar;