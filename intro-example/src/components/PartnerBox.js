import React from 'react';
import "../App.css";


function PartnerBox({company, image, blurb}){

    return(
        <div className='partner-box'>
            <h3>{company}</h3>
            <div className="image-box"><img src={"/images/"+image}   /></div>
            <p>{blurb}</p>
        </div>
    )



}

export default PartnerBox;