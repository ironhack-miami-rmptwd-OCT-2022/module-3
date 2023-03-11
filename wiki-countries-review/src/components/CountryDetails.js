import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


function CountryDetails({countries}){

    // hash maps are a commonly used coding pattern that programmers often use 
    // when they want to avoid putting a loop inside of a loop
    // loop inside of loop = bad computational performance and 
    // people will judge you for it in a coding challenge
    const codeHashMap = {};

    countries.forEach(eachCountry => {
        codeHashMap[eachCountry.alpha3Code] = eachCountry.name.common;
    });
    
    const { code } = useParams();

    // const [theCountry, setTheCountry] = useState(null);

    // useEffect(()=>{
    //     axios.get("https://ih-countries-api.herokuapp.com/countries/"+code)
    //     .then((result)=>{
    //         setTheCountry(result.data);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }, [code])



    // i like this way better because it uses the user's computer to do the work 
    // and it makes fewer requests to the server instead of making 
    // redundant requests to fetch data the user already has we just ask the 
    // users computer to sort through that data that they already fetched
    const theCountry = countries.find((eachCountry)=>{
        return eachCountry.alpha3Code === code;
    });




  
    
    if(countries.length < 1 || !theCountry) return <div>Loading ...</div>
    return(
        <div className='countryDetails'>
            <div>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${theCountry.alpha2Code.toLowerCase()}.png`} />
                <h3>{theCountry.name.common}</h3>
                <p>Capital: {theCountry.capital}</p>
                <p>Area: {theCountry.area} square kilometers</p>
                <div>
                    {theCountry.borders.map((eachBorder)=>{
                        return <div key={eachBorder}>
                                    <Link to={"/countries/"+eachBorder}>{codeHashMap[eachBorder]}</Link>
                                </div>
                    })}
                </div>
            </div>


        </div>
    )
}


export default CountryDetails;