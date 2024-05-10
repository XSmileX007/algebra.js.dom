var ul = document.querySelector("ul");
// jedan od načina je da UL elementu dosjelimo style "decimal"
//ul.style.listStyle = "decimal";

// drugi način je da iteriramo kroz UL i svakom od LI elemnata promjenimo svojstvo na "decimal"
//debugger;
var i = 1;
for (let elem of ul.children) {
  elem.style.listStyle = "decimal";
  //elem.textContent = i + ". " + elem.textContent;
  i++;
}

// nadji div sa klasom "info"
var divInfo = document.querySelector(".info");
// na div-u sa klasom "info" dodaj novu klasu "sakrij" koju smo definirali u css-u
divInfo.classList.add("sakrij");

// dohvacamo "body" objekt
var body = document.querySelector("body");
// dohvacamao primjenjene styles na body objektu
var bodyWindow = window.getComputedStyle(body, null);
// citamo pojedino svojstvo, u ovom slucaju "margin-left"
//debugger;
var marginBody = bodyWindow.getPropertyValue("margin");
console.log("marginBody: " + marginBody);

var bckgColor = bodyWindow.getPropertyValue("background-color");
console.log("background-color: " + bckgColor);

// zadatak: za doma ->
// animirajte veličinu margine body elementa
// od pocetne do 30px i natrag u ponavljajućoj petlji
//debugger;
let marginNum = parseInt(marginBody);
console.log("marginNum: " + marginNum);
let interval = setInterval(animiraj, 200);
var reverse = false;
let numIterations = 1;
function animiraj() {
  console.log("Pozvana funkcija animiraj(" + numIterations + ")");
  if (marginNum == 30) {
    reverse = true;
  }
  if (reverse) {
    marginNum--;
    console.log("<<<<<<<   " + marginNum);
    if (marginNum == 8) {
      reverse = false;
    }
  } else {
    marginNum++;
    console.log(">>>>>>>   " + marginNum);
  }
  body.style.margin = marginNum + "px";
  numIterations++;
  if (numIterations == 40) {
    clearInterval(interval);
  }
}
