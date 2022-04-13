import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Container from "./Container";
import { Button } from "antd";

const Profile = () => {
	return (
		<Container>
			<h1>Profile</h1>
			<Authenticator>
				{({ signOut, user }) => (
					<main>
						<h2>Hello {user.username}</h2>
						<h3>Email: {user.attributes.email}</h3>
						<Button type="primary" size="large" onClick={signOut}>
							Sign Out
						</Button>
					</main>
				)}
			</Authenticator>
		</Container>
	);
};

export default Profile;
