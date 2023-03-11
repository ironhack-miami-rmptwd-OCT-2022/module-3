import logo from './logo.svg';
import './App.css';
import { useLocation, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeerList from './components/BeerList';
import Header from './components/Header';
import BeerDetails from './components/BeerDetails';
import NewBeer from './components/NewBeer';



// const baseUrl = "https://ih-beers-api2.herokuapp.com/";

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";
  
  
  return (
    <div className="App">

      {showHeader && <Header />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/beers" element={<BeerList />} />
        <Route exact path="/random-beer" element={<BeerDetails random={true} />} />
        <Route exact path="/beers/:theID" element={<BeerDetails random={false}/>} />
        <Route exact path="/new-beer" element={<NewBeer/>} />
      </Routes>



    
    </div>
  );
}

export default App;
