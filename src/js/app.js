import React from "react";

import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Cards } from "./component/cards.js";
import { Footer } from "./component/footer";

const carta = {
	image:
		"https://a.storyblok.com/f/89778/1168x728/b7082a9dd9/cr_00_00_2.jpeg",
	alt: "rigo",
	title: "Hello Rigo",
	description: "Prueba de rigo",
	url: "http://wikipedia.com",
	button: "click here"
};
//create layout (esqueleto)

export function App() {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container">
				<Jumbotron />

				<div className="row">
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
					<div className="col">
						<Cards card={carta} />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
