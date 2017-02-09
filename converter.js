console.log("converter is running");

//*******************************************
// define Event Listeners
//*******************************************
var enterKey = document.getElementById("temp");
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clear");
var outputText = document.getElementById("output");

enterKey.addEventListener("keyup", 
	function (e) {
		if (e.keyCode === 13) {
console.log("pressed Enter Key");
			performConversion ();
 		} else {
 			return false;
 		} 		
});

converterButton.addEventListener("click", function() {
console.log("Convert Button clicked");
	performConversion();
});

clearButton.addEventListener("click", function() {
  // console.log("clearButton working");
  clearInputField();
});



  
//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function performConversion () {
	var whichConv;       // reads whether (F=>C || C=>F)
	var convertedTemp;   // var holds the converted temp
	var getOutputColor;     // var holds the color for printing the output, per specs

	whichConv = determineConverter();
// console.log("from MAIN performConversion :: whichConv = ", whichConv); :: CORRECT
	convertedTemp = calcConversion(whichConv);
// console.log("from MAIN performConversion :: convertedTemp = ", convertedTemp);
	getOutputColor = determineColor (convertedTemp);
console.log("from MAIN performConversion :: ");
inputTemp = document.getElementById("temp").value;
console.log(inputTemp + " => " + convertedTemp + " " + getOutputColor + " " + whichConv);
	displayResult(convertedTemp, getOutputColor, whichConv);
}



//*******************************************
function clearInputField() {
	document.getElementById("temp").innerHTML = "";
}


//*******************************************
// if <Enter> key or <Convert> button, 
// determine which conversion to calculate
//*******************************************
function determineConverter () {
// var whichConv;
  if (document.getElementById("cels").checked) {
// console.log("running determineConverter :: whichConv = toCels"); :: CORRECT
  	return "toCels"; // F => C
  } else if (document.getElementById("fahr").checked) {
// console.log("running determineConverter :: whichConv = toFahr"); :: CORRECT
  	return "toFahr"; // C => F
    } else {
        alert("Please select either Fahrenheit or Celsius for conversion.");
    }
}

//*******************************************
// Calculate the temperature conversion
//*******************************************
function calcConversion (CorF) {
  // console.log("calculating converter");
	// var cTemp = document.getElementById("temp").innerHTML;
	// var fTemp = document.getElementById("temp").innerHTML;
	inputTemp = document.getElementById("temp").value;
// console.log("running calcConversion :: inputTemp = ", inputTemp); // CORRECT
	if (CorF === "toFahr") {
		// C => F :: [°F] = [°C] ×  9⁄5 + 32
// console.log("running calcConversion :: CorF for toFahr = ", CorF); // CORRECT
		return [ inputTemp * ( 9/5 )  + 32 ]; 
	} else { // "toCels"
// console.log("running calcConversion :: CorF for toCels = ", CorF); // CORRECT
		// F => C :: [°C] = ([°F] − 32) ×  5⁄9
		return [ ( inputTemp - 32 ) * ( 5/9 ) ];
	}
}

//*******************************************
// Calculate the text color for output
// greater than 90F/32C :: RED
// less than 32F/0C :: BLUE
// all other :: GREEN
//*******************************************
function determineColor (temp, CorF) {
console.log("in determineColor :: temp = ", temp);
	if ((CorF === "toFahr") && (temp > 90) || (CorF === "toFahr") && (temp < 32)) {
console.log("in determineColor :: CorF = ", CorF);
		return "red";
	} else if ((CorF === "toCels") && (temp > 32) || (CorF === "toCels") && (temp < 0)) {
		return "blue";
	} else {
		return "green";
	}
}
	
//*******************************************
// Output the result to the user
//*******************************************
function displayResult (result, color, CorF) {
	console.log("displayingResult");
	outputText.style.color = color;
	outputText.innerHTML = "<p><strong>Your Converted Temp Is: " + result + ".</strong></p>"
	if (CorF === "toFahr") {
		outputText.innerHTML += "&deg;F";
	} else {
		outputText.innerHTML += "&deg;C";
	}
}




