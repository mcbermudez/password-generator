// The password generator will provide a secure password within 8 - 128 characters based on the criteria provided by the user.

// Password Criteria Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var selectedArr = [];
var finalPassword = "";
var generateBtn = document.querySelector("#generate");

// Prompt the user to press the 'Generate' button
window.onload = alert("Welcome, please click on the \"Generate Password\" button to get started.")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start generate password function
function generatePassword() {
  // Define pass word character min and max limits.
  var passwordLength = prompt("The password must contain between 8 and 128 characters. How many characters would you like to use?")
  
  // Alert the user character length is less than 8 or more than 128.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
  }

  // Define remaining for password generation - lowerCase, upperCase, numbers, and/or special characters. Prompt user to provide character types.

  // Validate the user's input and confirm that at least one character requirment is satified.

  // Generate password when all prompts have been answered and min criteria is met.

  // Display password on the page
};

// Write password function in the #password input
function writePassword() {
  var password = generatePassword();
  var PasswordTex = document.querySelector("#password");
  
  passwordText.value = password;
}