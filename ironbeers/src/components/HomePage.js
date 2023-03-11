import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';



function HomePage(){

    return(
        <div>
            <div>
                <Link to="/beers">Beers</Link>
            </div>
            <div>
                <Link to="/random-beer">Random</Link>
            </div>
            <div>
                <Link to="/new-beer">Add A Beer</Link>
            </div>
        </div>
    )



}

export default HomePage;
