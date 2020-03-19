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
  var generatePasswordLength = prompt("Please choose password length from 8-128");
  var generatePasswordLow = confirm("Do you want lowercase?");
  var generatePasswordUpp = confirm("Do you want uppercase?");
  var generatePasswordNum = confirm("Do you want number?");
  var generatePasswordSpe = confirm("Do you want special characters?");};

  var lowerCase ="abcdefghijklmnopqrstuvwxyz";
  var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passNumber = "012345678";
  var specialCharac = "~!@#$%^&*()-_=+";

  var content =""



  if(generatePasswordLow === true){
      content += lowerCase;
  }

  if(generatePasswordUpp === true){
    content += upperCase;
  }

  if(generatePasswordNum === true){
    content += passNumber;
}
if(generatePasswordSpe === true){
   content += specialCharac;
}

   for (var i = 0; i < generatePasswordLength;i++){
       var Password = content.charAt(Math.floor(Math.random()* generatePasswordLength))
       console.log(password)
    }

// }
  // generatePassword();
  // while (generatePassword.length<8 ||generatePassword.length>128){
  //   prompt("Try again!lease choose password length from 8-128")
  // }


// 1.random function to generate a random number between 8-128  ver length
// for() 0-length

// generate numbers? generate chacters?

