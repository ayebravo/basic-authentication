import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import Container from "./Container";

const Protected = () => {
	const nav = useNavigate();

	useEffect(() => {
		Auth.currentAuthenticatedUser().catch(() => {
			nav("/profile"); // Redirect users that are not authenticated
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Container>
			<h1>Protected route</h1>
		</Container>
	);
};

export default Protected;
