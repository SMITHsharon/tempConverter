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

function clearInputField() {
	document.getElementById("temp").innerHTML = "";
}



function toCelsius () {
F => C :: [°C] = ([°F] − 32) ×  5⁄9
	var fTemp = document.getElementById("temp").innerHTML;
	return [ ( fTemp - 32 ) * ( 5/9 ) ];
}

function toFahrenheit () {
// C => F :: [°F] = [°C] ×  9⁄5 + 32
	var cTemp = document.getElementById("temp").innerHTML;
	return [ cTemp * ( 9/5 ) ] + 32; 
}

// Get a reference to the button element in the DOM
var rButtons = document.getElementById("converter"); // where is this needed/used???

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  var whichConv = document.getElementById("converter").value;
  console.log(whichConv);
  if (whichConv === "cels") {
  	toFahrenheit();
  } else {
  	toCelsius();
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);