let input1 = document.getElementById("input1");
let inputDrugi = document.getElementById("input2");

function fokusIn() {
  console.log("Događaj na fokusIn");
  input1.style.backgroundColor = "yellow";
}

function fokusOut() {
  console.log("Događaj na fokusOut");
  input1.style.backgroundColor = "red";
}

function klikButton() {
  console.log("Događaj na onClick button");
  alert("Kliknuli ste na button");
  input1.style.backgroundColor = "white";
}

function fokusIn2() {
  console.log("Događaj na fokusIn2");
  inputDrugi.style.backgroundColor = "green";
}

function fokusOut2() {
  console.log("Događaj na fokusout2");
  inputDrugi.style.backgroundColor = "purple";
}

inputDrugi.addEventListener("focus", fokusIn2);
inputDrugi.addEventListener("blur", fokusOut2);
