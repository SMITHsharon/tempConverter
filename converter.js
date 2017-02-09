console.log("converter is running");

//*******************************************
// define Event Listners
//*******************************************
var converterButton = document.getElementById("converter");
var clearButton = document.getElementById("clear");
var enterKey = document.getElementById("temp");
var outputText = document.getElementById("output");

enterKey.addEventListener("keyup", 
	function (e) {
		if (e.keyCode === 13) {
			performConversion ();
 		} else {
 			return false;
 		} 		
});

converterButton.addEventListener("click", function() {
	performConversion ();
});

clearButton.addEventListener("click", function(){
  // console.log("clearButton working");
  clearInputField();
});



  
//*******************************************
// MAIN PROGRAM CONTROL
//*******************************************
function performConversion () {
	var whichConv;       // reads whether (F=>C || C=>F)
	var convertedTemp;   // var holds the converted temp
	var outputColor;     // var holds the color for printing the output, per specs

	whichConv = determineConverter();
// console.log("from MAIN performConversion :: whichConv = ", whichConv);
	convertedTemp = calcConversion(whichConv);
console.log("from MAIN performConversion :: convertedTemp = ", convertedTemp);
	outputColor = determineColor (convertedTemp);
console.log("from MAIN performConversion :: outputColor = ", outputColor);
	displayResult(convertedTemp, outputColor, whichConv);
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
  	return "toCels"; // F => C
console.log("running determineConverter :: whichConv = ", whichConv); 
  } else if (document.getElementById("fahr").checked) {
  	return "toFahr"; // C => F
console.log("running determineConverter :: whichConv = ", whichConv); 
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
	console.log("running calcConversion :: inputTemp = ", inputTemp);
	if (CorF === "toFahr") {
		// C => F :: [°F] = [°C] ×  9⁄5 + 32
// console.log("running calcConversion :: CorF for toFahr = ", CorF); // CORRECT
		return [ inputTemp * ( 9/5 ) ] + 32; 
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




