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
window.onload = alert("Welcome, let's create a new, secure password. \nPlease click on the \"Generate Password\" button to get started.")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start generate password function
function generatePassword() {
  // Define pass word character min and max limits.
  var passwordLength = prompt("The password must contain between 8 and 128 characters. \nHow many characters do you want to use in your password?")
  
  // Alert the user character length is less than 8 or more than 128.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
  } else
    // Define remaining for password generation - lowerCase, upperCase, numbers, and/or special characters. Confirm with user which character types to use.
    // Confirm if user wants to use lowercase letters
    if (confirm("Do you want to use lower case letters in your password?")); {
      if (confirm === true) {
        selectedArr.lowerCase;
      }
      // Confirm if user wants to use upper case letters
      if(confirm("Do you want to use upper case letters in your password?")); {
        if(confirm === true) {
          selectedArr.upperCase;
        }
        // Confirm is user wants to use numbers
        if(confirm("Do you want to use numberic characters in your password?")); {
          if(confirm === true) {
            selectedArr.numbers;
          }
          // Confirm if user wants to use special characters
          if(confirm("Do you want to use special characters in your password?")); {
            if(confirm === true) {
              selectedArr.specialCharacters;
            } else {
                // Validate the user's input and confirm that at least one character requirment is satified
              if (selectedArr.length === 0); {
                // Alert the user if they have not selected at least one chacter type
                alert("You must choose at least one character type. Let's try this again!");
              };

              // Return the new password to writePassword
              for (var i = 0; i <passwordLength; i++)
              {
                finalPassword = selectedArr[Math.floor(Math.random() * (selected.Arr.passwordLength))];
              }

              return finalPassword;
    };
    
    // Write password function in the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
}
