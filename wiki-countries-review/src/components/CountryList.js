import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


function CountryList({countries}){

    if(countries.length < 1) return <div> Loading ...</div>
    return(
        <div className="countrylist">
            {countries.map((eachCountry)=>{
                return (
                <div className="eachcountrybox" key={eachCountry.alpha2Code}>
                    <Link to={"/countries/"+ eachCountry.alpha3Code}>
                        <div><img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} /></div>
                        {eachCountry.name.common}
                    </Link>
                </div>
                        )
            })}
         
        </div>
    )



}


export default CountryList;