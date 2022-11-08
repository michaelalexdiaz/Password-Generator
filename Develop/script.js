var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [  "@","%","+","\\","/","'","!","#","$","^","?",":",",",")","(","}","{","]","[","~","-","_",".",];

var generateBtn = document.querySelector("#generate");

let userChoice = [];
let finalPassword = [];

function generatePassword(){

let passwordLength = prompt("How many characters would you like in your password between 8 and 128?");

let confirmUpperCase = confirm("Please confirm if you want uppercase letters in your password.");

let confirmLowerCase = confirm("Please confirm if you want lowercase letters in your password.");

let confirmNumbers = confirm("Please confirm you want numbers in your password.");

let confirmSpecialCharacters = confirm("please confirm you want special characters in your password.");


  if (confirmUpperCase === true){
    userChoice = userChoice.concat(upperCaseCharacters)
  };

  if (confirmLowerCase === true){
    userChoice = userChoice.concat(lowerCaseCharacters)
  };

  if (confirmNumbers === true){
    userChoice = userChoice.concat(numbers)
  };

  if (confirmSpecialCharacters === true){
    userChoice = userChoice.concat(specialCharacters)
  };

  for (var i = 0; i < passwordLength; i++) {
    finalPassword.push (userChoice[Math.floor(Math.random() * userChoice.length)]);
  };

  return finalPassword.join("");
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", writePassword);
  