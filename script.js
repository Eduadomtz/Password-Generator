// Selects the id generate
var generateBtn = document.querySelector("#generate");

//Creates strings of the characters that the password can have.
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [123456789];
var characters = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];





function generatePassword() {
  
  //Creates a window prompt to ask the user the length of the password
  var userChoice = window.prompt("Your password must have a length of at least 8 characters and be less than 128");
  if (userChoice < 8 || userChoice > 128) {
    generatePassword();
  }

  //Creates windows asking the users what type of characters they want to include
  var unite = "";
  var character = window.confirm("Click ok to confirm including special characters");
  var numeric = window.confirm("Click ok to confirm including numeric characters");
  var lower = window.confirm("Click ok to confirm including lowercase characters");
  var upper = window.confirm("Click ok to confirm including uppercase characters");

  //Set the choices array based on user input for different character types

  if (character === false && numeric === false && lower === false && upper === false) {
    alert("Your password must include at least one element");
    generatePassword();
  } 
  if (character === true) {
    unite = unite.concat(characters);
  }

  if (numeric === true) {
    unite = unite.concat(numbers);
  }
  if (lower === true) {
    unite = unite.concat(lowercase);
  }
  if (upper === true) {
    unite = unite.concat(uppercase);
  }
  /*if (character === false && numeric === false && lower === false && upper === false) {
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
*/
  //creates an empty space
  var passwordResult = "";

  //Defines a random loop
  for (var i = 0; i < userChoice; i++) {
    passwordResult += unite.charAt(Math.floor(Math.random() * unite.length));
  };
  //
  return passwordResult;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);