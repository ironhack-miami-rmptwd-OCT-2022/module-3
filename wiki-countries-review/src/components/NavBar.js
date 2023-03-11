import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'


function NavBar(){

    return(
        <div className='navbar'>
            <Link to="/">
                <h2>Wiki Countries</h2>
            </Link>
        </div>
    )



}


export default NavBar;