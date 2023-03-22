import { React, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function NavBar() {
	const { user, setUser } = useContext(UserContext);

	const navigateTo = useNavigate();

	const logout = () => {
		setUser(() => null);
		navigateTo("/");
	};

	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/locations">Locations</Link>
			{!!user ? (
				<button onClick={logout}>Log Out</button>
			) : (
				<Link to="/login">Login</Link>
			)}
		</nav>
	);
}

export default NavBar;
