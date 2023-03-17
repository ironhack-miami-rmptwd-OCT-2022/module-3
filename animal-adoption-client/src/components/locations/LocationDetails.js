import React from "react";
import { useParams } from "react-router-dom";

export default function LocationDetails() {
	const { locationId } = useParams();

	const showDetails = () => {
		console.log({ locationId });

		return (
			<div>
				<h2>Adoption Location Details</h2>
			</div>
		);
	};

	return <div>{showDetails()}</div>;
}
