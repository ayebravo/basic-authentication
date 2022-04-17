import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Public from "./Public";
import Profile from "./Profile";
import Protected from "./Protected";

const Router = () => {
	return (
		<HashRouter>
			<Nav />
			<Routes>
				<Route exact path="/" element={<Public />} />
				<Route exact path="/protected" element={<Protected />} />
				<Route exact path="/profile" element={<Profile />} />
				<Route element={<Public />} />
			</Routes>
		</HashRouter>
	);
};

export default Router;
