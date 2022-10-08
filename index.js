const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pswdOneEl = document.getElementById("pswd-one");
let pswdTwoEl = document.getElementById("pswd-two");
let botonGenerar = document.getElementById("btn-principal");
let errorMsgEl = document.getElementById("error");

let copyPswOneEl = document.getElementById("copyPswOne");
let copyPswTwoEl = document.getElementById("copyPswTwo");

let copyMsgEl = document.getElementById("copy-msg");

botonGenerar.addEventListener("click", function () {
  pswdOneEl.textContent = null;
  pswdTwoEl.textContent = null;
  let numCaracteres = document.getElementById("inputCaracteres").value;
  errorMsgEl.textContent = "";

  console.log(numCaracteres);

  copyMsgEl.textContent = "";

  if (numCaracteres > 15 || numCaracteres < 5) {
    errorMsgEl.textContent = "Introduzca un número entre 5 y 15";
    console.log("Introduzca un número entre 1 y 15");
  } else
    for (let x = 0; x < numCaracteres; x++) {
      pswdOneEl.textContent +=
        characters[Math.floor(Math.random() * characters.length) + 1];
      pswdTwoEl.textContent +=
        characters[Math.floor(Math.random() * characters.length) + 1];
    }
});

pswdOneEl.addEventListener("click", function () {
  let pswdOneCopy = document.getElementById("pswd-one").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = pswdOneCopy;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);

  // Alert the copied text
  //alert("Password # 1 has been copied: " + pswdOneCopy);
  copyMsgEl.textContent = "Password # 1 has been copied: " + pswdOneCopy;
});

pswdTwoEl.addEventListener("click", function () {
  let pswdTwoCopy = document.getElementById("pswd-two").innerText;
  var elem2 = document.createElement("textarea");
  document.body.appendChild(elem2);
  elem2.value = pswdTwoCopy;
  elem2.select();
  document.execCommand("copy");
  document.body.removeChild(elem2);

  // Alert the copied text
  //alert("Password # 2 has been copied: " + pswdTwoCopy);
  copyMsgEl.textContent = "Password # 2 has been copied: " + pswdTwoCopy;
});

function sortArray() {}
