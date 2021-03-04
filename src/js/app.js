import React from "react";

//import your own components
import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Cards } from "./component/cards.js";
import { Footer } from "./component/footer.js";

const carta={
    image:"/workspace/react-hello/src/img/rigo-baby.jpg ", 
    alt:"Rigo", 
    tittle:"Hola Rigo", 
    description:" Esto es una prueba de Rigo ",
    url:"https://www.w3schools.com/", 
    button:"click here"};

//create layout (esqueleto)

export function App() {
	return <div className="text-center mt-5">
        <Navbar  />

        <div className="container">

            <Jumbotron  />
            < Cards card ={carta}  />




        </div>
        




    </div>;
}
