var x = "globalna varijabla";

function vratiNesto() {
  var x = "lokalna varijabla";
  function f() {
    return x;
  }
  return f;
}

var y = vratiNesto()();

console.log(y);
