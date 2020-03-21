// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  while(true){
    var generatePasswordLength = prompt("Please choose password length from 8-128");
     if(generatePasswordLength < 8 || generatePasswordLength > 128){
       alert("Try again!Please choose password length from 8-128");
     }else {
       break
     }
    }
  var generatePasswordLow = confirm("Do you want lowercase?");
  var generatePasswordUpp = confirm("Do you want uppercase?");
  var generatePasswordNum = confirm("Do you want number?");
  var generatePasswordSpe = confirm("Do you want special characters?");


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passNumber = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharac = ["~","!","@","#","$","%","^","&","*","(",")","-","_","=","+"];

var content = ""


if (generatePasswordLow === true) {
  content = content + (lowerCase[Math.floor(Math.random() * parseInt(generatePasswordLength))]);
};

if (generatePasswordUpp === true) {
  content = content + (upperCase[Math.floor(Math.random() * parseInt(generatePasswordLength))]);
};

if (generatePasswordNum === true) {
  content= content + (passNumber[Math.floor(Math.random() * parseInt(generatePasswordLength))]);
};

if (generatePasswordSpe === true) {
  content= content + (specialCharac[Math.floor(Math.random() * parseInt(generatePasswordLength))]);
};

var password = ""

for (var i = 0; i < generatePasswordLength; i++) {
  password = password + content[Math.floor(Math.random() * content.length)];

};

return password;

};



