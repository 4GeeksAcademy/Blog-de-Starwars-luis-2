import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Home  from "./views/home";
import PeopleView from "./views/people";
import PlanetView from "./views/planet";
import VehicleView from "./views/vehicle";

import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/people/:id" element={<PeopleView />} />
					<Route path="/planets/:id" element={<PlanetView />} />
					<Route path="/vehicles/:id" element={<VehicleView />} />
					<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
