import React, {useState} from 'react'
import "../App.css";


function SearchBar({submitForm}){
    const [inputs, setInputs] = useState({searchTerm: "", maxPrice: 200});
    const [checked, setChecked] = useState(false);


   const updateInput = (e) =>{
    setInputs( {...inputs, [e.target.name]: e.target.value})   
    }


    const updateCheckBox = (e) =>{
        if(e.target.checked) setChecked(true)
        else setChecked(false);
    }

    const updateSearchCriteria = (e) =>{
        e.preventDefault();
        submitForm(inputs.searchTerm, inputs.maxPrice, checked);
    }




    return(
        <form className='searchBar'>Search: 
            <input onChange={updateInput} type="text" name="searchTerm" value={inputs.searchTerm} />
            <div className="stock-checkbox">
                Show only in stock
                <input type="checkbox" onChange={updateCheckBox} name="checkbox" checked={checked} />
            </div>
            <div>
                Max-Price
                <input onChange={updateInput} type="number" name="maxPrice" value={inputs.maxPrice} />
            </div>
            <br></br>
            <div><button onClick={updateSearchCriteria}>Submit</button></div>
        </form>
    )


}


export default SearchBar;