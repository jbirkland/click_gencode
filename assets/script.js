// Assignment Code
var generateBtn = document.querySelector("#generate");// Do not touch!!!

var numberOfCharacters1 = 0;
var specialCharacters2 ;
var numbersAllowed3 ;
var lowercaseAllowed4 ;
var uppercaseAllowed5 ;
var selections ;
var possibleCharacters = []                       
var sCharactersAnswer = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|",":","}","~"] 
var numbersAnswer = ["1","2","3","4","5","6","7","8","9"];
var lowCaseAnswer = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upCaseAnswer = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// __________________________________________________________________________
function getRandomValue(arr){
  var result = arr[Math.floor(Math.random() * arr.length)];     
  return result; 
  }

function askHowManyCharacters(){
  numberOfCharacters1 = window.prompt("How many characters do you want in the password?(8-128)");
  
  if (numberOfCharacters1 >=8 && numberOfCharacters1 <=128){
  // numberOfCharacters1 = parseInt(numberOfCharacters1);
  }
  else  {
    alert ("Password must be between 8-128 characters")
  return askHowManyCharacters()}
  askSpecialCharactersAllowed() 
}

function askSpecialCharactersAllowed(){
  specialCharacters2 = window.confirm("Would you like special characters in the password?");
  askNumbersAllowed()
}

function askNumbersAllowed(){
  numbersAllowed3 = window.confirm("Would you like numbers in the password?"); 
  askLowerCase()
}

function askLowerCase(){
  lowercaseAllowed4 = window.confirm("Would you like lower case letters in the password?"); 
  askUpperCase()
}

function askUpperCase(){
  uppercaseAllowed5 = window.confirm("Would you like upper case letters in the password?"); 
  // confirmSelections()
}
// function confirmSelections(){
//   var selections = window.confirm("Character count:   " + numberOfCharacters1 + "  Special Characters:   " + specialCharacters2 + "  Numbers Requested:   " + numbersAllowed3 + "  Lowercase Letters:   " + lowercaseAllowed4 + "  Uppercase Letters:   " + uppercaseAllowed5)
//   if (selections === false) {
//     return askHowManyCharacters()
//   }

  


function generatePassword(){
  //askAllQuestions-- create this function up top to have all the question functions
  var finalPassword =[];
  var numberOfCharacters = askHowManyCharacters()
  if (specialCharacters2 === true){
    possibleCharacters = possibleCharacters.concat(sCharactersAnswer)
  }
  if (numbersAllowed3 === true){
    possibleCharacters = possibleCharacters.concat(numbersAnswer)
  }
  if (uppercaseAllowed5 === true){
    possibleCharacters = possibleCharacters.concat(upCaseAnswer)
  }
  if (lowercaseAllowed4 === true){
    possibleCharacters = possibleCharacters.concat(lowCaseAnswer)
  }
  // else if (specialCharacters2, numbersAllowed3, uppercaseAllowed5, lowercaseAllowed4 === false) {
  //   alert ("You must chose at least one set of characters!");
  //   return askHowManyCharacters();
  // }
  console.log (possibleCharacters)
  
for (var index = 0; index <  numberOfCharacters1; index++) {
  var randomChar = getRandomValue(possibleCharacters)
finalPassword.push(randomChar) 
}
  return finalPassword.join("")
}

// Write password to the #password input    
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
