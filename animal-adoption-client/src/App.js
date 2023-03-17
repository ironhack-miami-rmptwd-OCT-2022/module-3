import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/Home";
import Location from "./components/locations/Location";
import LocationDetails from "./components/locations/LocationDetails";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

			<NavBar />

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/locations" element={<Location />} />
				<Route
					exact
					path="/location/:locationId"
					element={<LocationDetails />}
				/>
			</Routes>
		</div>
	);
}

export default App;
