//1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

//2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja
// prima parametar "name".
// Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

var x = "John Doe";
function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}
var y = vratiNesto("Jane Doe");
console.log(y); // -- y je postao funkcija

var z = vratiNesto()(); // -- z = undefined
console.log(z);

z = vratiNesto("test")();
console.log(z);

// 2.
console.log("-------------");

var name1 = "Moje ime";

(function vratiNesto2(name1) {
  console.log("invoked vratiNesto2(" + name1 + ")");
  var x = name1;
  function f() {
    console.log("invoked f()");
    return x;
  }
  return f;
})(name1);
