console.log("converter is running");

function checkForEnter(thisChar) {
	var enterKey = 13;
	if (thisChar === enterKey) { // if (thisChar.which === enterKey)
		console.log("reading temp input")
		return document.getElementById("temp").innerHTML; // capture user input temp value
	}
}

// function readInput() {
// 	document.getElementById("temp").innerHTML; // capture user input temp value
// }

var userInput = checkForEnter(thisChar); // if <Enter>, returns user temp
console.log(userInput);

function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
// var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);