import React from 'react'
import "./App.css"
import { useState } from 'react'

function App() {
  const [prelims, setPrelims] = useState(true)
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
  return (
    <div style={{ backgroundColor: "black", margin: 0 }}>
        <div className="container" >
         
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <p className="a">
    Block and Tackle
  </p>

        </div>
       <br/>

    
        {/* <img src={require("https://drive.google.com/file/d/13edcdjKKJkjQhcwxahR_Kedc4OHyl0V5/view?usp=sharing")} className='js-logo' alt="Logo"/> */}
          <div style={{margin:"auto", textAlign:"center"}}>
                {/* <h1 className='j' style={{ margin: "auto", color: "#FFBF00" }}>TECH TWISTER</h1> */}
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
				<h1 style={{ color: "#162252" }}>{twisters[twistNo]}</h1>
			</div>
		</div>
        
         
          </div>
        </div>
      </div>
  )
}

export default App