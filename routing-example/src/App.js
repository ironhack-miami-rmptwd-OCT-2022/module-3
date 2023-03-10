import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import HomePage from './components/HomePage';
import Companies from './components/Companies';
import CompanyDetails from './components/CompanyDetails';

function App() {
  return (
    <div className="App">
      <NavBar />


    <Routes>
      <Route exact path="/home" element={<HomePage />} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/companies" element={<Companies />} />
      <Route exact path="/companies/:index" element={<CompanyDetails />} />
    </Routes>



    </div>
  );
}

export default App;
