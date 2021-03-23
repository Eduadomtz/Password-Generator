// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = ['abcdefghijklmnñopqrstuvwyz','ABCEDFGHIJKLMNÑOPQRSTUVWYZ','0123456789', '!#$%&()*+,-./:;<=>?@[\]^_{|}'];

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
  } 

  while (userChoice = true) {
    var specialCha = window.confirm("Click ok to confirm for including special characters");
    var numeric = window.confirm("Click ok to confirm for including numeric characters");
    var lower = window.confirm("Click ok to confirm for including lowercase characters");
    var upper = window.confirm("Click ok to confirm for including uppercase characters");
    if (specialCha == false && numeric == false && lower == false && upper == false){
      userChoice = true;
    } else {
      userChoice= false;
    }
  }

  return password; 
  }
  
  generateBtn.addEventListener("click", writePassword);