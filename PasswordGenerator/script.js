let form = document.forms["form1"]["param"];
let length = 0;
let req = [];
let pass = document.getElementById("password");

function generatePassword(event) {
  event.preventDefault();
  length = form[0].value;
  for (input of form) {
    if (input.checked) {
      req.push(input.value);
    }
  }
  //   pass.value = length;
  pass.value = generateAlphaNumericString(length);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercase = [];
const uppercase = [];
const specialCharacters = [];
for (let i = 97; i <= 122; i += 1) {
  lowercase.push(String.fromCharCode(i));
  uppercase.push(String.fromCharCode(i - 32));
}
for (let i = 33; i <= 47; i++) {
  specialCharacters.push(String.fromCharCode(i));
}
function generateAlphaNumericString(len) {
  let string = "";
  let param = "";
  for (i = 0; i < len; i += 1) {
    param = req[getRndInteger(0, req.length)];
    switch (param) {
      case "number":
        string += `${digits[getRndInteger(0, 9)]}`;
        break;
      case "lcase":
        string += `${lowercase[getRndInteger(0, 25)]}`;
        break;
      case "ucase":
        string += `${uppercase[getRndInteger(0, 25)]}`;
        break;
      case "symbol":
        string += `${specialCharacters[getRndInteger(0, 14)]}`;
        break;
      default:
        break;
    }
  }
  return string;
}

function copy() {
  navigator.clipboard.writeText(pass.value);
}
