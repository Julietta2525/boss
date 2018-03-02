//Basic function linked to a button click

function myFunction() {
	
	document.getElementById("demo").innerHTML = 5 + 6;

}

//Displaying code on load

var carName = "Tesla";

function carTest() {
	document.getElementById("carThing").innerHTML = carName;
}

window.onload = carTest;

//Multiple function testing (including fun button clicking)

var x = multipleFunction (4, 3);

function testFunction() {
	document.getElementById("multiFunction").innerHTML = x;
}
function funnyWordDisplay(obj) {
	if (document.getElementById("pokeButton").innerHTML == "Poke!") {
		document.getElementById("pokeButton").innerHTML = "That tickles!";
		return;
	}
	if (document.getElementById("pokeButton").innerHTML == "That tickles!") {
		document.getElementById("pokeButton").innerHTML = "Stahp!";
		return;
	}
}

function twoFunctionsOneClick() {
	testFunction(); 
	funnyWordDisplay(this);
}

function multipleFunction(a, b) {
	return a * b;
}

//Temp Conversion Functions

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
	  return false;

   return true;
}

function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit-32);
}

function tempConversion() {
	var k = document.getElementById("degreesF").value;
	document.getElementById("tempDisplay").innerHTML = "Tempurature is " + toCelsius(k);
}