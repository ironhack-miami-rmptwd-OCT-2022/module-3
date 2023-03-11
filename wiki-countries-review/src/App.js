import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';


function App() {

  const [countries, setCountries] = useState([]);


  const getAllCountries = () =>{
    console.log("fetching all countries");
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((theResult)=>{
        setCountries(theResult.data)
      })
    .catch((err)=>{
      console.log(err);
    })
  };



  useEffect(()=>{
    getAllCountries();
  }, []);


  return (
    <div className="App">
      <NavBar />
      <CountryList countries={countries} />
      <Routes>
        <Route exact path={"/countries/:code"} element={<CountryDetails countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
