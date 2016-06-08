
//Declaring and defining function for calculating weight

function calculateWeight() {

	//Getting input forms from document

	var myWeight = document.getElementById("myWeight").value;
	var myPlanet = document.getElementById("planet").value;
	var myPlanetSelection = document.getElementById("planet")[document.getElementById("planet").selectedIndex].text;

	//Applying transformation to input

	var myNewWeight = myWeight * myPlanet;
	myNewWeight = myNewWeight.toFixed(2);

	//Outputting an answer

	//Checking for planet selection and outputting error message if no planet selected

	if(document.getElementById("planet").selectedIndex === 0) {
		document.getElementById("answer").innerHTML = "Please select a planet";

	}

	//Checking for planet selection and outputting grammatically correct answer statement.

		else if(myPlanetSelection === "Sun" || myPlanetSelection === "Moon"){
		document.getElementById("answer").innerHTML = "If you were on the " + myPlanetSelection + " you would weigh " + myNewWeight + "lbs!" ;
		document.getElementById("planetHeader").innerHTML = "Welcome to the " + myPlanetSelection + "!!" ;

	} 	else{
		document.getElementById("answer").innerHTML = "If you were on " + myPlanetSelection + " you would weigh " + myNewWeight + "lbs!" ;
		document.getElementById("planetHeader").innerHTML = "Welcome to " + myPlanetSelection + "!!" ;

	}

	// Adding a grey text box when the answer displays

	document.getElementById("answer").style.background = "#ddd" ;
}