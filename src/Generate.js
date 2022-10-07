import React, { useState } from "react";
import "./Generate.css";

function Generate() {
	const [twistNo, setTwistNo] = useState(0);
	const twisters = [
		"Television",
		"Fridge",
		"Washing Machine",
		"Air Conditioner",
		"Heater",
		"Induction Stove",
		"Solar Cooker",
		"Microwave Oven",
		"OTG",
		"Toaster",
		"Alexa",
		"Vaccum Cleaner",
		"Amazon Firestick",
		"Laptop",
		"Mobile Phone",
    "Modem",
    "Mixer",
		"Home Theatre",
		"Food Processor",
		"Coffee Maker",
		"Dryer",
		"Printer",
		"Generator",
		"Motor",
		"Projector",
	];
	const max = twisters?.length-1;
	const min = 0;
	const handleClick = async () => {
		let rand = Math.floor(Math.random() * (max - min + 1)) + min;
		setTwistNo(rand);
	};
	console.log(twistNo);

	return (
		<div>
			<span style={{ fontSize: 20, fontWeight: "bold", color: "gold" }}>
				Choose your topic 🎲
			</span>
			<br />
			<br />

			<button
				className='button-27'
				style={{ width: 150 }}
				onClick={handleClick}>
				<span style={{ fontSize: 18, color: "#fff" }}>Generate</span>
			</button>
			<div
				style={{
					border: "3px solid #f0f0f0",
					borderBottom: "10px solid #162252",
					backgroundColor: "#fff",
					height: 150,
					width: "50%",
					margin: "auto",
					marginTop: 20,
					textAlign: "center",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<h1 style={{ color: "#162252" }}>{twisters[twistNo]?.content}</h1>
			</div>
		</div>
	);
}

export default Generate;
