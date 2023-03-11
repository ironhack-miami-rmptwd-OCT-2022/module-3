import { useEffect, useState, React } from 'react';
import "../App.css";
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
const baseUrl = "https://ih-beers-api2.herokuapp.com/";


function BeerDetails({random}){

    const [theBeer, setTheBeer] = useState(null);
    const {theID} = useParams();

    useEffect(()=>{
        
        let url;
        if(random) url = baseUrl + "beers/random";
        if(!random) url = baseUrl + "beers/" + theID;

        axios.get(url)
        .then((result)=>{
            console.log("running")
            setTheBeer(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    
    if(!theBeer)  return "loading..."
    return(
        <div>
            <h2>{theBeer.name}</h2>
            <h6>{theBeer.tagline}</h6>
            <img src={theBeer.image_url} style={{height: "200px"}} />
            <p>{theBeer.description}</p>
        </div>
    )



}

export default BeerDetails;
