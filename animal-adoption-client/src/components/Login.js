import { React, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
	// Getting setUser from UserContext to update the user
	const { setUser } = useContext(UserContext);
	// This function will allow us to navigate between routes
	const navigateTo = useNavigate();

	const [userData, setUserData] = useState({ userName: "" });

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		setUser(() => userData);
		navigateTo("/");
	};

	return (
		<div>
			<h2>Login</h2>

			<h3>Please Enter a Username to Log In.</h3>
			<input
				type="text"
				name="userName"
				onChange={handleChange}
				value={userData.userName}
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}
