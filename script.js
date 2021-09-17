// Assignment Code
var generateBtn = document.querySelector("#generate");// Do not touch!!!


//Pseudocoding
//1.) Need to know how many charachter athe password will have
//2.) Need to know are special characters included
// Need to know are numbers included
// Need to know are lower case letters included
// Need to know are upper case letters included

// Build final list of possible characters
// How can we build our password one letter at a time?
// We need a way to store all the possible characters allowed in the password
// For each character needed, grab a random element from the allowed list


function askHowManyCharacters(){

}


function generatePassword(){
var finalPassword ="";
var numberOfCharacters = askHowManyCharacters();

return finalPassword;

}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
