import { React, useState } from "react";
import axios from "axios";
import ErrorMessage from "../ErrorMessage";

export default function LocationCreateForm() {
	const [formDetails, setFormDetails] = useState({
		name: "",
		street: "",
		city: "",
		state: "",
		zip: "",
	});
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const displayErrorMessage = () => {
		<ErrorMessage errorMessageToDisplay={errorMessage} />;
	};

	const handleChange = (e) => {
		setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		axios
			.post("http://localhost:5005/api/locations", formDetails)
			.then((resp) => {
				console.log({ createResp: resp.data });
			})
			.catch((err) => {
				console.log({ err });
				setErrorMessage(err.message);
				setShowError(!err.success);
				// displayErrorMessage(err.message);
			});
	};

	return (
		<div>
			<h3>
				Locations Name:{" "}
				<input
					type="text"
					name="name"
					value={formDetails.name}
					onChange={handleChange}
				/>
			</h3>
			<h3>
				Street:{" "}
				<input
					type="text"
					name="street"
					value={formDetails.street}
					onChange={handleChange}
				/>
			</h3>
			<h3>
				City:{" "}
				<input
					type="text"
					name="city"
					value={formDetails.city}
					onChange={handleChange}
				/>
			</h3>
			<h3>
				State:{" "}
				<input
					type="text"
					name="state"
					value={formDetails.state}
					onChange={handleChange}
				/>
			</h3>
			<h3>
				Zip:{" "}
				<input
					type="number"
					name="zip"
					value={formDetails.zip}
					onChange={handleChange}
				/>
			</h3>
			<br />
			<button onClick={handleSubmit}>Add Location</button>
			<br />
			{!!showError && displayErrorMessage}
		</div>
	);
}
