import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import Container from "./Container";

const Protected = () => {
	const nav = useNavigate();

	const redirectUserIfNotAuthenticated = async () => {
		try {
			await Auth.currentAuthenticatedUser();
		} catch (err) {
			nav("/profile"); // Redirect users that are not authenticated
		}
	};

	useEffect(() => {
		redirectUserIfNotAuthenticated();
	}, []);

	return (
		<Container>
			<h1>Protected route</h1>
		</Container>
	);
};

export default Protected;
