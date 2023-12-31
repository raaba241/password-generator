// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword().join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that takes in user input and returns a desired password
var generatePassword = function () {
  // Initializing all variables
  var generatedPass = [];
  var passwordLength;
  var lowerCase;
  var upperCase;
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar;
  var lowercaseChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaseChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var specialCharacters = ["!", "#", "$", "%", "^", "&", "*"];

  // Asking for password criteria
  passwordLength = prompt("How many characters should the password be (Must be between 8-128)");
  while (passwordLength < 8 || passwordLength >128){
    alert ("Must be a character length between 8-128")
    passwordLength = prompt("How many characters should the password be (Must be between 8-128)");
  }

  lowerCase = confirm("Include at least 1 lowercase?");
  upperCase = confirm("Include at least 1 UPPERCASE?");
  numberChar = confirm("Include at least 1 number?");
  specialChar = confirm("Include at least 1 Special Character (eg: */!?#)?");
  emptySpot = true;

  // Main password generation loop
  while (emptySpot) {
    var spot;

    // Using user criteria LowerCase, generate password;
    if (lowerCase === true && emptySpot === true) {
      spot = Math.floor(Math.random() * passwordLength);

      // Keep generating a new spot if current spot is taken
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * passwordLength);
      }
      generatedPass[spot] = lowercaseChars[Math.floor(Math.random() * 27)];
    }
    // Resets the count for spots to zero to be thorough each time
    var spotLeft = 0;

    // Checks if there is a spot open in the array
    for (var x = 0; x < passwordLength; x++) {
      if (generatedPass[x] === undefined) {
        spotLeft++;
      }
    }

    if (spotLeft === 0) {
      emptySpot = false;
      break;
    }

    // Using user criteria UpperCase, generate password;
    if (upperCase === true && emptySpot === true) {
      spot = Math.floor(Math.random() * passwordLength);

      //  If the index in the array is taken up, generate a new spot
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * passwordLength);
      }
      generatedPass[spot] = uppercaseChars[Math.floor(Math.random() * 27)];
    }

    // Resets the count for spots to zero to be thorough each time
    var spotLeft = 0;

    // Checks if there is a spot open in the array
    for (var x = 0; x < passwordLength; x++) {
      if (generatedPass[x] === undefined) {
        spotLeft++;
      }
    }

    if (spotLeft === 0) {
      emptySpot = false;
      break;
    }

    // Using user criteria Special Case, generate password;
    if (specialChar === true && emptySpot === true) {
      spot = Math.floor(Math.random() * passwordLength);

      //  If the index in the array is taken up, generate a new spot
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * passwordLength);
      }
      generatedPass[spot] = specialCharacters[Math.floor(Math.random() * 8)];
    }

    // Resets the count for spots to zero to be thorough each time
    var spotLeft = 0;

    // Checks if there is a spot open in the array
    for (var x = 0; x < passwordLength; x++) {
      if (generatedPass[x] === undefined) {
        spotLeft++;
      }
    }

    if (spotLeft === 0) {
      emptySpot = false;
      break;
    }

    // Using user criteria Numeric, generate password;
    if (numberChar === true && emptySpot === true) {
      spot = Math.floor(Math.random() * passwordLength);

      //  If the index in the array is taken up, generate a new spot
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * passwordLength);
      }
      generatedPass[spot] = numeric[Math.floor(Math.random() * 10)];
    }

    // Resets the count for spots to zero to be thorough each time
    var spotLeft = 0;

    // Checks if there is a spot open in the array
    for (var x = 0; x < passwordLength; x++) {
      if (generatedPass[x] === undefined) {
        spotLeft++;
      }
    }

    if (spotLeft === 0) {
      emptySpot = false;
      break;
    }
  }

  // Error debugging
  for (var x = 0; x < passwordLength; x++) {
    console.log(generatedPass[x]);
  }

  return generatedPass;
};
