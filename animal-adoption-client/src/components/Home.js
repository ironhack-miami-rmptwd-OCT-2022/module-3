import { React, useContext } from "react";
import UserContext from "../contexts/UserContext";

function Homepage() {
	const { user } = useContext(UserContext);

	return (
		<div>
			<h1>
				{!!user
					? `Welcome ${user.userName} to Adoptions App`
					: `Home Page For Adoptions`}
			</h1>
		</div>
	);
}

export default Homepage;
