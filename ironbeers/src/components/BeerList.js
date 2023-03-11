import { useEffect, useState, React } from 'react';
import axios from 'axios';
import "../App.css";
import {Link} from 'react-router-dom';

const baseUrl = "https://ih-beers-api2.herokuapp.com/";


function BeerList(){

    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get(baseUrl+"beers")
        .then((result)=>{
            console.log(result);
            setBeers(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const beerBoxStyle = {width: "40vw", border: "1px solid black", borderRadius: "4px", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"};

    return(
        <div>
            {beers.map((eachBeer)=>{
                return (<div style={beerBoxStyle} key={eachBeer._id}>
                    <Link to={"/beers/"+eachBeer._id} style={{textDecoration: "none", textAlign: "center"}}>
                        <h2>{eachBeer.name}</h2>
                        <img src={eachBeer.image_url} style={{height: "150px"}} />
                        <p>{eachBeer.description}</p>
                    </Link>
                </div>)
            })}
        </div>
    )



}

export default BeerList;
