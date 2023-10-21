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
var generatePassword = function () {
  // Initializing all variables
  var generatedPass = [];
  var sizePass;
  var lowerCase;
  var upperCase;
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChar;
  var filledIndex = [];
  var lWords = [
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
  var uWords = [
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
  var specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    "-",
    "=",
    "_",
    "|",
    "~",
    "`",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "<",
    ">",
    "?",
    "/",
    ".",
    ",",
    ":",
    ";",
  ];

  // Asking for password criteria
  sizePass = prompt(
    "How many characters should the password be (Must be between 8-128)"
  );
  lowerCase = confirm("Include at least 1 lowercase?");
  upperCase = confirm("Include at least 1 UPPERCASE?");
  numberChar = confirm("Include at least 1 number?");
  specialChar = confirm("Include at least 1 Special Character (eg: */!?#)?");
  emptySpot = true

  while (emptySpot) {
    // Using user criteria LowerCase, generate password;
    if (lowerCase === true) {
      var spot = Math.floor(Math.random() * sizePass);

      // Keep generating a new spot if current spot is taken
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * sizePass);
      }
      generatedPass[spot] = lWords[Math.floor(Math.random() * 25)];
    }

    // Using user criteria UpperCase, generate password;
    if (upperCase === true) {
      spot = Math.floor(Math.random() * sizePass);

      //  If the index in the array is taken up, generate a new spot
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * sizePass);
      }
      generatedPass[spot] = uWords[Math.floor(Math.random() * 25)];
    }

    // Using user criteria Special Case, generate password;
    if (specialChar === true) {
      spot = Math.floor(Math.random() * sizePass);

      //  If the index in the array is taken up, generate a new spot
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * sizePass);
      }
      generatedPass[spot] = specialCharacters[Math.floor(Math.random() * 27)];
    }

    // Using user criteria Numeric, generate password;
    if (numberChar === true) {
      spot = Math.floor(Math.random() * sizePass);

      //  If the index in the array is taken up, generate a new spot
      while (generatedPass[spot] !== undefined) {
        spot = Math.floor(Math.random() * sizePass);
      }
      generatedPass[spot] = numeric[Math.floor(Math.random() * 9)];
    }

    // Checking to see 
    for (var x = 0; x < sizePass; x++) {
      if (generatedPass[x] === undefined) {
        emptySpot = true;
        break;
      }
      else if (x === sizePass-1 && generatedPass[x] !== undefined ){
        emptySpot = false;
      }
    }



    // Error debugging 
    for (var x = 0; x < sizePass; x++) {
      console.log(generatedPass[x]);
    }

  } //This whole function bracket




}
