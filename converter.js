console.log("converter is running");

// define Event Listners
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clear");
var enterKey = document.getElementById("temp");

enterKey.addEventListener("keyup", 
	function (e) {
		if (e.keyCode === 13) {
			// console.log("pressed Enter Key");
			performConversion ();
 		} else {
			// console.log("pressed something else");
 			return false;
 		} 		
});

converterButton.addEventListener("click", function() {
	performConversion ();
});

clearButton.addEventListener("click", function(){
  // console.log("clearButton working");
  clearInputField()''
});

function clearInputField() {
	document.getElementById("temp").innerHTML = "";
}



//*******************************************
// if <Enter> key or <Convert> button, 
// determine which conversion to calculate
// function determineConverter (clickEvent) {
function determineConverter (whichConv) {
  // console.log("determining converter");
  var whichConv;
  // console.log("whichConv");
  if (document.getElementById("cels").checked) {
  	whichConv = "toCels";
  } else if (document.getElementById("fahr").checked) {
  	whichConv = "toFahr";
    } else {
        alert("Please select either Fahrenheit or Celsius for conversion.");
    }
}

//*******************************************
// Calculate the temperature conversion
function calcConversion (CorF) {
  // console.log("calculating converter");
	// var cTemp = document.getElementById("temp").innerHTML;
	// var fTemp = document.getElementById("temp").innerHTML;
	inputTemp = document.getElementById("temp").value;
	if (CorF === "toFahr") {
		// C => F :: [°F] = [°C] ×  9⁄5 + 32
		return [ inputTemp * ( 9/5 ) ] + 32; 
	} else { // "toCels"
		// F => C :: [°C] = ([°F] − 32) ×  5⁄9
		return [ ( inputTemp - 32 ) * ( 5/9 ) ];
	}
}
	


  
	


function performConversion () {
	var whichConv;
	var convertedTemp;
	whichConv = determineConverter(whichConv);
	convertedTemp = calcConversion(whichConv);

}


// // this won't work as the needed value is not being stored in a var ... being called from event handler?
// function getUserInput() {
// 	return document.getElementById("temp").innerHTML; // capture user input temp value
// }






function toCelsius () {
// F => C :: [°C] = ([°F] − 32) ×  5⁄9
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



// Assign a function to be executed when the button is clicked
converterButton.addEventListener("click", determineConverter);


