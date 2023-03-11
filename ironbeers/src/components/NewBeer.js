import {useState} from 'react';
import axios from 'axios';
const baseUrl = "https://ih-beers-api2.herokuapp.com/";



function NewBeer(){

    const [newBeer, setNewBeer] = useState({name: "", tagline: "",
    description: "", first_brewed: "", brewers_tips: "", attenuation_level: "",
    contributed_by: ""
    })


    const updateInput = (e) =>{
        setNewBeer({...newBeer, [e.target.name]: e.target.value});
    }


    const createNewBeer = () =>{
        axios.post(baseUrl+"beers/new", newBeer)
        .then((result)=>{
            console.log(result);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    

    return(
        <div>
            <div>
                Name
                <input type="text" onChange={updateInput} name="name" value={newBeer.name} />
            </div>
            <div>
                Tagline
                <input type="text" onChange={updateInput} name="tagline" value={newBeer.tagline} />
            </div>
            <div>
                Description
                <input type="text" onChange={updateInput} name="description" value={newBeer.description} />
            </div>
            <div>
                First Brewed
                <input type="text" onChange={updateInput} name="first_brewed" value={newBeer.first_brewed} />
            </div>
            <div>
                brewers tips
                <input type="text" onChange={updateInput} name="brewers_tips" value={newBeer.brewers_tips} />
            </div>
            <div>
                attenuation level
                <input type="text" onChange={updateInput} name="attentuation_level" value={newBeer.attentuation_level}/>
            </div>
            <div>
                contributed by 
                <input type="text" onChange={updateInput} name="contributed_by" value={newBeer.contributed_by} />
            </div>

            <button onClick={createNewBeer}>Submit</button>
        </div>
    )




}

export default NewBeer;