// Assignment Code
var generateBtn = document.querySelector("#generate");

var user = true;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Write password to the #password input


function generatePassword() {
  
  var userChoice = window.prompt("Your password must have a length of at least 8 characters and be less than 128");
  if (userChoice < 8 || userChoice > 128) {
    generatePassword();
  }

  var unite = "";
  var character = window.confirm("Click ok to confirm including special characters");
  var numeric = window.confirm("Click ok to confirm including numeric characters");
  var lower = window.confirm("Click ok to confirm including lowercase characters");
  var upper = window.confirm("Click ok to confirm including uppercase characters");

  if (character === false && numeric === false && lower === false && upper === false) {
    alert("Your password must include at least one element");
    generatePassword();
  } else if (character === true && numeric === true && lower === true && upper === true) {
    unite = unite.concat(characters);
    unite = unite.concat(numbers);
    unite = unite.concat(lowercase);
    unite = unite.concat(uppercase);
  } else if (character === true && numeric === false && lower === false && upper === false) {
    unite = unite.concat(characters);
  }else if (character === true && numeric === true && lower === false && upper === false) {
    unite = unite.concat(characters);
    unite = unite.concat(numbers);
  }else if (character === true && numeric === true && lower === true && upper === false) {
    unite = unite.concat(characters);
    unite = unite.concat(numbers);
    unite = unite.concat(lowercase);
  } else if (character === true && numeric === false && lower === true && upper === false) {
    unite = unite.concat(characters);
    unite = unite.concat(lowercase);
  }else if (character === true && numeric === false && lower === false && upper === true) {
    unite = unite.concat(characters);
    unite = unite.concat(uppercase);
  } else if (character === false && numeric === true && lower === true && upper === true) {
    unite = unite.concat(numbers);
    unite = unite.concat(lowercase);
    unite = unite.concat(uppercase);
  } else if (character === false && numeric === false && lower === true && upper === true) {
    unite = unite.concat(lowercase);
    unite = unite.concat(uppercase);
  } else if (character === false && numeric === false && lower === false && upper === true) {
    unite = unite.concat(uppercase);
  } else if (character === false && numeric === true && lower === false && upper === true) {
    unite = unite.concat(numbers);
    unite = unite.concat(uppercase);
  } else if (character === false && numeric === true && lower === false && upper === false) {
    unite = unite.concat(numbers);
  } else if (character === false && numeric === false && lower === true && upper === false) {
    unite = unite.concat(lowercase);
  }

  console.log(unite);

  var passwordResult = "";
  for (var i = 0; i < userChoice; i++) {
    passwordResult += unite.charAt(Math.floor(Math.random() * unite.length));
  };
  return passwordResult;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);