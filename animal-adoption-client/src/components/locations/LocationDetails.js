import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LocationDetails() {
	const { locationId } = useParams();
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [location, setLocation] = useState(null);

	const displayErrorMessage = () => {
		return <ErrorMessage errorMessageToDisplay={errorMessage} />;
	};

	const getLocation = () => {
		axios
			.get(`http://localhost:5005/api/locations/${locationId}`)
			.then((resp) => {
				console.log({ detailsResp: resp.data });
				if (resp.data.success) {
					setLocation(resp.data.location);
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
			});
	};

	useEffect(() => {
		getLocation();
	}, []);

	const showDetails = () => {
		console.log({ locationId });

		if (!!location) {
			return (
				<div>
					<h2>{location.name} Details</h2>
					{!!showError && displayErrorMessage()}
					<h3>{location.street}</h3>
					<h3>
						{location.city},{location.state} {location.zip}
					</h3>

					<br />
					<div className="center-content">
						<h2>Animals</h2>
						{location.animals.map((animal) => {
							return (
								<Link to={`/animal/${animal._id}`}>
									{animal.name} {animal.sex}{" "}
									{animal.available}
								</Link>
							);
						})}
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<h2>Adoption Location Details</h2>
					{!!showError && displayErrorMessage()}
					<h3>No Location Details to Display</h3>
				</div>
			);
		}
	};

	return <div>{showDetails()}</div>;
}
