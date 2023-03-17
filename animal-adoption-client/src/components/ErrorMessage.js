import React from "react";

export default function ErrorMessage({ errorMessageToDisplay }) {
	const displayError = () => {
		return <h5 className="error-message">{errorMessageToDisplay}</h5>;
	};

	return <>{displayError()}</>;
}
