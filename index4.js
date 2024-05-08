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
var marginBody = bodyWindow.getPropertyValue("margin-left");
console.log("marginBody: " + marginBody);

var bckgColor = bodyWindow.getPropertyValue("background-color");
console.log("background-color: " + bckgColor);

// zadatak: za doma -> animirajte veličinu margine body elementa od pocetne do 30px i natrag u ponavljajućoj petlji
