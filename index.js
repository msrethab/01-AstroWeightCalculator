
//declaring and defining function for calculating weight

function calculateWeight() {

	//Getting input forms from document

	var myWeight = document.getElementById("myWeight").value;
	var myPlanet = document.getElementById("planet").value;
	var myPlanetSelection = document.getElementById("planet")[document.getElementById("planet").selectedIndex].text;

	//Applying transformation to input

	var myNewWeight = myWeight * myPlanet;
	myNewWeight = myNewWeight.toFixed(2);

	//Outputting an answer

	if(myPlanetSelection === "Sun" || myPlanetSelection === "Moon"){
		document.getElementById("answer").innerHTML = "If you were on the " + myPlanetSelection + " you would weigh " + myNewWeight + "lbs!"
		document.getElementById("planetHeader").innerHTML = "Welcome to the " + myPlanetSelection + "!!"
	} else{
		document.getElementById("answer").innerHTML = "If you were on " + myPlanetSelection + " you would weigh " + myNewWeight + "lbs!"
		document.getElementById("planetHeader").innerHTML = "Welcome to " + myPlanetSelection + "!!"
	}
	document.getElementById("answer").style.background = "#ddd" ;
}