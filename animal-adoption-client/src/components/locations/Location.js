import axios from "axios";
import { React, useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
import LocationCreateForm from "./LocationCreateForm";
import { Link } from "react-router-dom";

export default function Location() {
	const [locations, setLocations] = useState([]);
	const [displayForm, setDisplayForm] = useState(false);
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const displayErrorMessage = () => {
		return <ErrorMessage errorMessageToDisplay={errorMessage} />;
	};

	useEffect(() => {
		axios
			.get("http://localhost:5005/api/locations")
			.then((resp) => {
				console.log({ resp: resp.data });
				if (resp.data.success) {
					setLocations(resp.data.locations);
				} else {
					console.log({ err: resp.data.error });
					setErrorMessage(resp.data.message);
					setShowError(!resp.data.success);
				}
			})
			.catch((err) => {
				console.log({ err });
				setErrorMessage(err.message);
				setShowError(!err.success);
				// displayErrorMessage(err.message);
			});
	}, []);

	const displayLocations = () => {
		return !!locations.length
			? locations.map((location) => {
					console.log({ location });
					return (
						<Link
							to={`/location/${location._id}`}
							key={location._id}
						>
							{location.name}
						</Link>
					);
			  })
			: "No Locations To Display At This Time";
	};

	const displayCreateLocationForm = () => {
		return (
			<div className="form__container">
				<button onClick={() => setDisplayForm(!displayForm)}>
					{" "}
					{displayForm ? "Close Form" : "Show Form"}
				</button>

				{!displayForm ? "" : <LocationCreateForm />}
			</div>
		);
	};

	return (
		<div>
			<h2>Adoption Locations</h2>
			{!!showError && displayErrorMessage()}
			{displayCreateLocationForm()}
			{!!locations && displayLocations()}
		</div>
	);
}
