# NSS Temperture Converter

### Project Description 
The Temperature Converter program 
- prompts the user for a temperature to convert from Fahrenheit to Celsius, or from Celsius to Fahrenheit
- requires the user to specify which conversion to calculate
- performs the calculation
- outputs the result, without rounding


#### Temperature Converter on Launch
![Temp Conv on Launch](https://raw.githubusercontent.com/SMITHsharon/tempConverter/screens/screens/Temp%20Converter%20on%20Launch.png)

#### Temperature Converter w User Input
![Temp Conv w User Input](https://raw.githubusercontent.com/SMITHsharon/tempConverter/screens/screens/Temp%20Converter%20w%20User%20Input.png)

#### Temperature Converter w Temperature Output
![Temp Conv w Temp Output](https://raw.githubusercontent.com/SMITHsharon/tempConverter/screens/screens/Temp%20Converter%20w%20Conversion%20Output.png)


### Project Specs
#### `html` structure and definitions
- Created an input text field in which the user can enter a temperature to be converted.
- Created a radio button group for the user to select `Celsius to Fahrenheit` or `Fahrenheit to Celsius` conversion. 
- Created a block level element for containing the output (text) of the converted temperature.
- Created a `Convert` button that, when clicked, displays the converted temperature.
- Created a `Clear` button that, when clicked, clears any text in the input field.

#### functionality implemented in `javascript` 
- Coded an event handler tied to the input text field that checks if the user pressed the `Enter` key. 
- When `Enter` is pressed, the app reads the selected `Celsius to Fahrenheit` or `Fahrenheit to Celsius` option and performs the respective conversion. 
- If the temperature is greater than 90F/32C, the color of the output/converted temperature displays in red.
- If the temperature is less than 32F/0C, the color of the output/converted temperature displays in blue.
- For any other temperature, the output displays in green.


Sample `javascript` code provided
```
	function toCelsius () {

	}

	function toFahrenheit () {

	}

	// Get a reference to the button element in the DOM
	var button = document.getElementById("converter");

	// This function should determine which conversion should
	// happen based on which radio button is selected.
	function determineConverter (clickEvent) {
	  console.log("event", clickEvent);
	}

	// Assign a function to be executed when the button is clicked
	button.addEventListener("click", determineConverter);
```

### Technologies Used
- `html`
- `css`
- `javascript`


### How To View The Screen 
#### (Node must be installed on your machine):
```
git clone https://github.com/SMITHsharon/tempConverter.git
cd converter
npm install http-server -g
http-server -p 8080
```

This will show in your browser at: `http://localhost:8080`


### Contributor
[Sharon Smith](https://github.com/SMITHsharon)
