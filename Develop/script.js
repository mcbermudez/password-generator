// The password generator will provide a secure password within 8 - 128 characters based on the criteria provided by the user.

// Password Criteria Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Declaration
var passwordLength = "";
var confirmLowerCase;
var confirmUpperCase
var confirmNumericCharacter;
var confirmSpecialCharacter;
var generateBtn = document.querySelector("#generate");

// Prompt the user to press the 'Generate' button
window.onload = alert("Welcome, please click on the \"Generate Password\" button to get started.")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start generate password function
function generatePassword() {
  // Define pass word character min and max limits.
  var passwordLength = prompt("The password must contain between 8 and 128 characters. \nHow many characters would you like to use?")
  
  // Alert the user character length is less than 8 or more than 128.
  while (passwordLength < 8 || passwordLength > 128) {
    // Loop if the answer provided is outside of character limit criteria.
    alert("Your password must contain between 8 and 128 characters. Please try again.");

    var passwordLength = prompt("The password must contain between 8 and 128 characters. \nHow many characters would you like to use?")
  }

  // Determine remaining parameters for password generation - lowercase, upper case, numbers and special characters
  var confirmLowerCase = confirm("Click OK to confirm that you want to use lower case letters in your password.");
  var confirmUpperCase = confirm("Click OK to confirm that you want to use upper case letters in your password.");
  var confirmNumericCharacter = confirm("Click OK to confirm that you want to use numeric characters in your password.");
  var confirmSpecialCharacter = confirm("Click OK to confirm that you want to use special characters in your password.");
    
  // Validate user's input and confirm that at least one character type is satisfied
    if (confirmLowerCase === false && confirmUpperCase === false && confirmNumericCharacter === false && confirmSpecialCharacter === false ) {
      alert("You must choose at least one character type. Please try this again");
      
      // Loop user until character type criteria is met 
      var confirmLowerCase = confirm("Click OK to confirm that you want to use lower case letters in your password.");
      var confirmUpperCase = confirm("Click OK to confirm that you want to use upper case letters in your password.");
      var confirmNumericCharacter = confirm("Click OK to confirm that you want to use numeric characters in your password.");
      var confirmSpecialCharacter = confirm("Click OK to confirm that you want to use special characters in your password.");

    }
  }


// Write password function in the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
