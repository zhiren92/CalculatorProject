var fahrenheit = document.getElementById("fahrenheit");


var calculate = document.getElementById("calculate");


var celcius = document.getElementById("celcius");

// when calculate button is clicked
	// take number entered and put it into a function
	// display that result in the second box 

	calculate.onclick = function() {
		console.log(((fahrenheit.value)-32)*.555555555555);
		// celcius.innerHTML = (((fahrenheit.value)-32)*.555555555555);
		celcius.value = (((fahrenheit.value)-32)*.555555555555);
	}