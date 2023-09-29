import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const  [selector, setselector] = useState ("luz amarilla")
	
	const cambiarColor = () => {
		if (selector === "luz roja") {
		  setselector("luz amarilla");
		} else if (selector === "luz amarilla") {
		  setselector("luz verde");
		} else {
		  setselector("luz roja");
		}
	  };
	return (
		<div>
		<div id="barra"></div>
		<div id="semaforo">
		
		  <div onClick={()=> setselector("luz roja")} className= {"luz roja" + (selector === "luz roja" ? " brillo" : "")} >  
		  </div>
		  <div onClick={()=> setselector("luz amarilla")} className= {"luz amarilla" + (selector === "luz amarilla" ? " brillo" : "")}></div>
		  <div onClick={()=> setselector("luz verde")} className= {"luz verde" + (selector === "luz verde" ? " brillo" : "")}></div>
		</div>
		<button onClick={() => cambiarColor()}>Cambiar Color</button>
		</div>
	  
	  );

	
};

export default Home;
