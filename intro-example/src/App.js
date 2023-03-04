import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/Navbar';
import Login from './components/login';
import PartnerBox from './components/PartnerBox';
import thePartners from "./data/partners.json";
import { useState } from 'react';



function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  const [showPartners, setShowPartners] = useState(true);
  // same as doing
  // const showPartners = false;

  const arrayOfPartnerHTMLBoxes = thePartners.map((eachPartner, index)=>{
    return (
      <PartnerBox key={eachPartner.company} company={eachPartner.company} image={eachPartner.image} blurb={eachPartner.blurb} />
    )
  });


  const togglePartners =  () => {
    let blah = setShowPartners(!showPartners);
  }
  
  
  



  return (
    <div className="App">
      <MyNavbar loggedIn={loggedIn}/>
 
      <h1>Our Partners</h1>
      <h6 className="margin-bottom">Below are some of our trusted partners who we have worked with</h6>

      <div className="show-hide">
        <button onClick={togglePartners} >{showPartners? "Hide Partners" : "Show Partners"}</button>
      </div>


      <div className='partner-box-container'>
        {showPartners && arrayOfPartnerHTMLBoxes}
        {!showPartners && <Login logInTheUser = {setLoggedIn} />}
        
      </div>
 

    </div>
  );
}

export default App;
