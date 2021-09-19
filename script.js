// Assignment Code
var generateBtn = document.querySelector("#generate");// Do not touch!!!

var numberOfCharacters = 0
var specialCharacters = true;[!"#$%&'()*+,-./:;<=>?@[]^_`{|}~"]
var numbersAllowed = true;[123456789]
var lowercaseAllowed = true;["abcdefghijklmnopqrstuvwxyz"]
var uppercaseAllowed = true;["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// __________________________________________________________________________
function askHowManyCharacters(){
numberOfCharacters = window.prompt("How many characters do you want in the password?");
var answer1 = (numberOfCharacters);
console.log (answer1);
}
// if ( characters > 15 ){
//   var symbols = window.prompt("Do you want to use symbols?");
//     console.log(characters)
//   }
//   else if (characters >= 25 ){
//     var characters = window.confirm ("Password must be between 8-15 characters");
//   }

function askSpecialCharactersAllowed(){
specialCharacters = window.prompt("Would you like special characters in the password?");
var answer2 = (specialCharacters);  
console.log (answer2)
}

function askNumbersAllowed(){
  numbersAllowed = window.prompt("Would you like numbers in the password?"); 
  var answer3 = (numbersAllowed);
  console.log (answer3)
}

function askLowerCase(){
  lowercaseAllowed = window.prompt("Would you like lower case letters in the password?"); 
  var answer4 = (lowercaseAllowed)
  console.log (answer4)
}

function askUpperCase(){
  uppercaseAllowed = window.prompt("Would you like upper case letters in the password?"); 
  var answer5 = (uppercaseAllowed)
  console.log (answer5)
}



askHowManyCharacters();
askSpecialCharactersAllowed();
askNumbersAllowed();
askLowerCase();
askUpperCase();
// _____________________________________________________________________________
function generatePassword(){
  var finalPassword ="";
  var numberOfCharacters = askHowManyCharacters()

  return finalPassword
}

//Pseudocoding
//1.) Need to know how many charachters are in the password will have
//2.) Need to know are special characters included
// Need to know are numbers included                        {} WRITE FUNCTIONS FOR THESE
// Need to know are lower case letters included
// Need to know are upper case letters included

// Build final list of possible characters        {} CERTAIN DATA TYPE YOU CAN USE TO BUILD THIS

// How can we build our password one letter at a time?
// We need a way to store all the possible characters allowed in the password
// For each character needed, grab a random element from the allowed list


// function askHowManyCharacters(){

// }


// function generatePassword(){
// var finalPassword ="";
// var numberOfCharacters = askHowManyCharacters();

// return finalPassword;

// }






// Write password to the #password input    //  DO NOT TOUCH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
