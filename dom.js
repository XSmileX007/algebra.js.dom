console.log("Visina je: " + window.innerHeight);
console.log("Širina je: " + window.innerWidth);

console.log("Domena je: " + window.location.hostname);

var winLocation = window.location;

console.log("Window location: " + winLocation);

var x = window.confirm("Ovime prihvaćate našu politiku o kolačićima");
console.log("response = " + x);
//debugger;
if (x == true) {
  console.log("Korisnik odgovorio OK");

  //window.location = "index.html";
} else {
  console.log("Korisnik odgovorio NOK");
  window.location = "onama.html";
}
//console.log("end page 1");
//window.alert("test alert");
console.log("end page");

window.setTimeout(function () {
  console.log("ispis sa delay od 2 sec");
}, 2000);
