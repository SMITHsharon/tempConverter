//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function performConversion (clickEvent) {
	var whichConv;       // reads whether (F=>C || C=>F)
	var convertedTemp;   // var holds the converted temp
	var getOutputColor;  // var holds the color for printing the output, per specs
 
	whichConv = determineConverter();   // RETURNS "toCels" or "toFahr"

	if (whichConv !== "blank") {

		convertedTemp = calcConversion(whichConv); // RETURNS calculated converted temp

		theOutputColor = determineColor (convertedTemp, whichConv);
											   // RETURNS "red", "blue", "green"

		displayResult(convertedTemp, theOutputColor, whichConv);
	} 
}



//*******************************************
// if <Enter> key or <Convert> button, 
// determine which conversion to calculate
// RETURNS "toCels" or "toFahr"
//*******************************************
function determineConverter () {
  if (document.getElementById("cels").checked) {
  	return "toCels"; // F => C
  } else if (document.getElementById("fahr").checked) {
  	return "toFahr"; // C => F
    } else {
        alert("Please select either Fahrenheit or Celsius for conversion.");
        return "blank";
    }
}


//*******************************************
// Calculate the temperature conversion
// RETURNS calculated converted temp
//*******************************************
function calcConversion (CorF) {
	inputTemp = document.getElementById("temp").value;
	if (CorF === "toFahr") {
		// C => F :: [°F] = [°C] ×  9⁄5 + 32
		return ( inputTemp * ( 9/5 ) + 32 ); 
	} else { // "toCels"
		// F => C :: [°C] = ([°F] − 32) ×  5⁄9
		return (( inputTemp - 32 ) * ( 5/9 ));
	}
}


//*******************************************
// Calculate the text color for output
// greater than 90F/32C :: RED
// less than 32F/0C :: BLUE
// all other :: GREEN
// RETURNS "red", "blue", "green"
//*******************************************
function determineColor (temp, CorF) {
	if ((CorF === "toFahr") && (temp > 90) || (CorF === "toCels") && (temp > 32)) {
		return "red";
	} else if ((CorF === "toFahr") && (temp < 32) || (CorF === "toCels") && (temp < 0)) {
		return "blue";
	} else {
		return "green";
	}
}


//*******************************************
// Output the result to the user
//*******************************************
function displayResult (result, color, CorF) {
	var outputText = document.getElementById("output");
	outputText.style.color = color;

	outputText.innerHTML = "Result: " + result;

	if (CorF === "toFahr") {
		outputText.innerHTML += "&deg;F";
	} else {
		outputText.innerHTML += "&deg;C";
	}
	output.innerHTML += "<br/>(egads. value is not rounded)";
}



//*******************************************
// define Event Listeners
//*******************************************
var enterKey = document.getElementsByClassName("tempForm");
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clear");

function inputKeyUp(e) {
    e.which = e.which || e.keyCode;
    if (e.which === 13) {
    	performConversion();
        // mainLaunchEnter();
    } else {
    	return false;
    }
}

// enterKey.addEventListener("keyup", function() { // NOT TESTED ... BUT SHOULD WORK
//     e.which = e.which || e.keyCode;
//     if (e.which === 13) {
//     	performConversion();
//         // mainLaunchEnter();
//     } else {
//     	return false;
//     }
// });

converterButton.addEventListener("click", function() {
	performConversion();
});


clearButton.addEventListener("click", clearAll);

function clearAll (clickEvent) {
	inputTemp = document.getElementById("temp").value = "";
	document.getElementById("cels").checked = false;
	document.getElementById("fahr").checked = false;
	document.getElementById("output").innerHTML = "";
}

  

