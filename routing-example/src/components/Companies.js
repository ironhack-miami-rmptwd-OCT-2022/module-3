import React from 'react'
import "../App.css"
import theCompanies from "../companies.json";
import {Link} from "react-router-dom";

function Companies(){
    

    return(
    <div>
        <br /> <br/> <br/>
        {theCompanies.map((eachCompany, i)=>{
            return (<div key={i}>
                <Link to={"/companies/"+i}>
                {eachCompany.name}
                </Link>
            </div>)

        })}

    </div>
    )
 

}

export default Companies;