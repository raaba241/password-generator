// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
// Function that takes in user input and returns a desired password
var generatePassword = function(){ 

  // Initializing all variables
  var generatedPass = [];
  var lowerCase;
  var upperCase;
  var numeric; 
  var specialChar;

  // Ask the user to choose a password between 8 - 128 character length
  generatedPass.length = prompt ("Choose the desired length you want your password to be (must be between 8 - 128");

  // Asking for password criteria 
  lowerCase = confirm ("Include at least 1 lowercase?")
  upperCase = confirm ("Include at least 1 UPPERCASE?")
  numeric = confirm ("Include at least 1 number?")
  specialChar = confirm ("Include at least 1 Special Character (eg: */!?#)?")

  // Using user criteria, generate password;








  // Setting max size of password 

  generatePass.length = maxLength




  

}