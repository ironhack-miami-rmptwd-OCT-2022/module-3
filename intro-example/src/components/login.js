import React from 'react';
import "../App.css";
import {useState} from 'react';


function Login({logInTheUser}){
    // const [loggedIn, setLoggedIn] = useState(false);
    // were not doing this here, we're lifting state up and keeping track in app component

    return(
        <div>
            username:
            <input type="text" />
            password:
            <input type="password" />

            <button onClick={()=>{logInTheUser(true)}} >Submit</button>

            <br></br><br></br><br></br>
            {/* <div>
                {loggedIn? "Logged in" : "Not Logged in"}
            </div> */}
        </div>
    )



}

export default Login;