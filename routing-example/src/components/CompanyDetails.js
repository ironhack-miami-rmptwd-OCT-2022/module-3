import React from 'react'
import "../App.css"
import theCompanies from "../companies.json";
import {useParams} from "react-router-dom";


function CompanyDetails(props){

    const { index } = useParams();
    const theCompany = theCompanies[index]





    return(
        <div>
            <h2>Name: {theCompany.name}</h2>
            <img src={"/images/"+theCompany.image} style={{width: "200px"}} />
            <p>{theCompany.blurb}</p>
        </div>
    )
    
 

}

export default CompanyDetails;