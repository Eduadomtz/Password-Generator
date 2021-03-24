
// Assignment Code
var generateBtn = document.querySelector("#generate");

var user = true;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var userChoice = 0;
  userChoice = window.prompt("How many characters do you want in your password?");
  while (userChoice < 8 || userChoice > 128) {
    userChoice = window.prompt("Your password must have a length of at least 8 characters and be less than 128");
    };

     while (user = true) { 
      var specialCha = window.confirm("Click ok to confirm for including special characters");
      var numeric = window.confirm("Click ok to confirm for including numeric characters");
      var lower = window.confirm("Click ok to confirm for including lowercase characters");
      var upper = window.confirm("Click ok to confirm for including uppercase characters");
      if (specialCha == false && numeric == false && lower == false && upper == false){
        user = true;
      } else {
        user= false;
      }
      break;
    } 

      if (character) {
        password = characters [Math.floor[Math.random ()* characters.length]]
        console.log(characters)
      };
    
      if (numeric) {
        password = numbers [Math.floor[Math.random ()* numbers.length]]
        console.log(numbers)
      };
    
      if (lower) {
        password = lowercase [Math.floor[Math.random ()* lowercase.length]]
        console.log(lowercase)
      };
    
      if (upper) { 
        password = uppercase [Math.floor[Math.random ()* uppercase.length]]
        console.log(uppercase)
      };
    
    passwordText.value = password;
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);