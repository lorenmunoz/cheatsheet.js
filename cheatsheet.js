//EXAMPLE VARIABLES.

var userName = prompt("Please enter your name:");


//GREETING USER. ALERT, CONSOLE AND COMMENTS. 

alert("Hello " + userName + "!");

console.log(userName);

//USER'S INFORMATION. DIFFERENT DATA TYPE.
//STRING NUMBERS BOOLEAN UNDEFINED. 

var userAge = prompt("how old are you?");
var favoriteDrink = prompt("What's your favorite cocktail?");

console.log(userName, userAge, favoriteDrink);

if ( userAge >= 21 ){
	alert("Excellent choice!!");
} else {
	alert("you should be drinking chocolate milk!");
};

if ( true ) {
	document.write("Welcome to our website!");
} else {
	document.write("Sorry! Visit us another time!");
};

//ARRAYS 

var cosmo = ["vodka", "triplesec", "limejuice", "cranberry"];
var mudslide = ["vodka", "kahlua", "baileys"]

console.log(mudslide[2]);

//OBJECTS

var screwDriver = {spirit: 'vodka', mix: 'orange'};

console.log(screwDriver.spirit);


// FUNCTIONS

function margaritaIngredients() {
  var	margarita = prompt("Do you know what's in a margarita?")
  return margarita + "? ok, Tequila, Triple Sec, Sour Mix, limejuice.";
}

alert( margaritaIngredients() );

function blackRussianIngredients() {
	var blackRussian = prompt("How about in a Black Russian Cocktail?")
  return blackRussian + "? Vodka and Kalhua, now you can be a bartender!!!   "
} 

alert( blackRussianIngredients() ); 	

function ManhattanIngredients() {
  var manhattan = prompt("Final question " + userName + ". Can you mix a Manhattan?")
  return manhattan + "?! it is Whiskey, Sweet Vermouth and Bitters!"
}

alert( ManhattanIngredients() );