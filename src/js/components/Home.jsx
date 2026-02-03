import React, { useState } from "react";

//include css
import './Home.css';

//create your first component
const Home = () => {
	const [selectedColor, setSelecterColor] = useState("red");
	return (
		<div className="Semáforo">
            <div 
				onClick={() => setSelecterColor("red")}
				className={
				"circle red" + (selectedColor === "red" ? " glow" : "")
			}></div>
			<div 
				onClick={() => setSelecterColor("yellow")}
				className={
				"circle yellow" + (selectedColor === "yellow" ? " glow" : "")
			}></div>
			<div 
				onClick={() => setSelecterColor("green")}
				className={
				"circle green" + (selectedColor === "green" ? " glow" : "")
			}></div>
		</div>
	);
};

export default Home;