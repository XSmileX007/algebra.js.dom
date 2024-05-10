let inputIme = document.getElementById("ime");
let inputPrezime = document.getElementById("prezime");
let inputEmail = document.getElementById("email");

let buttonSend = document.getElementById("posalji");
let buttonReset = document.getElementById("reset");

// funkcije za focus in/out za polje ime
function fokusIn(e) {
  e.target.style.backgroundColor = "yellow";
}
function fokusOut(e) {
  e.target.style.backgroundColor = "lightgrey";
  if (e.target.value == "") e.target.style.backgroundColor = "red";
}

// funkcije za focus in/out za polje email
function fokusOutEmail(e) {
  e.target.style.backgroundColor = "lightgrey";
  //debugger;
  //console.log(">>>>> " + e.target.value.indexOf("@"));
  if (e.target.value.indexOf("@") < 0) {
    e.target.style.backgroundColor = "red";
  }
}

function sendClick() {
  //debugger;
  let myArr = inputEmail.value.split("");
  console.log(myArr);
  let atCharExists = false;
  for (let i = 0; i < inputEmail.value.length; i++) {
    console.log(myArr[i]);

    if (myArr[i] === "@") {
      //debugger;
      atCharExists = true;
      break;
    }
  }

  if (!atCharExists) {
    alert("Email je neispravan, ne sadrži @ znak");
    inputEmail.style.backgroundColor = "red";
  }
}

function resetClick() {
  let yesNo = confirm("Želite li resetirati sva polja");
  console.log("Yes/No = " + yesNo);
  if (yesNo) {
    inputIme.value = "";
    inputIme.style.backgroundColor = "white";
    inputPrezime.value = "";
    inputPrezime.style.backgroundColor = "white";
    inputEmail.value = "";
    inputEmail.style.backgroundColor = "white";
  }
}

inputIme.addEventListener("focus", fokusIn);
inputIme.addEventListener("blur", fokusOut);
inputPrezime.addEventListener("focus", fokusIn);
inputPrezime.addEventListener("blur", fokusOut);
inputEmail.addEventListener("focus", fokusIn);
inputEmail.addEventListener("blur", fokusOutEmail);

buttonSend.addEventListener("click", sendClick);
buttonReset.addEventListener("click", resetClick);
