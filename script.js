// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  console.log(randIndex);
  var randElement = arr[randIndex];
  console.log(randElement);

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var passwordlength = prompt("How many characters would you like for your password? Minimum 10 characters & maximum 64.");
  console.log(passwordlength);

  if (passwordlength < 10 || passwordlength > 64) {
    alert("Password length must be between 10 and 64 characters");
    return;
  }
  

  var uppercaseconfirm = confirm("Would you like uppercase characters in your password?");
  console.log(uppercaseconfirm);
  var lowercaseconfirm = confirm("Would you like lowercase characters in your password?");
  console.log(lowercaseconfirm);
  var numericconfirm = confirm("Would you like numeric characters in your password?");
  console.log(numericconfirm);
  var specialconfirm = confirm("Would you like special characters in your password?");
  console.log(specialconfirm);

  var possiblecharaters = [];

  if (uppercaseconfirm) {
    possiblecharaters.push(...upperCasedCharacters);

  }
  if (lowercaseconfirm) {
    possiblecharaters.push(...lowerCasedCharacters);

  }

  if (numericconfirm) {
    possiblecharaters.push(...numericCharacters);

  }
  if (specialconfirm) {
    possiblecharaters.push(...specialCharacters);

  }



  let finalpassword = "";

  for (let i = 0; i < passwordlength; i++) {
    finalpassword += getRandom(possiblecharaters);
    console.log(finalpassword);
    // return password;
  }

  var passwordText = document.querySelector('#password');

  passwordText.value = finalpassword;

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);