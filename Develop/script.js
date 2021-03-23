
// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnñopqrstuvwyz";
var uppercase = "ABCEDFGHIJKLMNÑOPQRSTUVWYZ";
var numbers = "0123456789";
var characters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var userChoice = 0;
  var join = "";



  userChoice = window.prompt("How many characters do you want in your password?");

  while (userChoice < 8 || userChoice > 128) {
    userChoice = window.prompt("Your password must have a length of at least 8 characters and be less than 128");
  } 

  
  
  return password;


}
 
   
      /*
     var character = window.confirm("Click ok to confirm including special characters");
        (Math.floor(Math.random(characters)));

      var numeric = window.confirm("Click ok to confirm including numeric characters");
        (Math.floor(Math.random(numbers)));

      var lower = window.confirm("Click ok to confirm including lowercase characters");
        (Math.floor(Math.random(lowercase)));
      
      var upper = window.confirm("Click ok to confirm including uppercase characters");
        (Math.floor(Math.random(lowercase)));
      */
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

