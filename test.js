// 1.
var x = "John Doe";
function vratiNesto(name) {
  var y = name;
  function f() {
    return y;
  }
  return f;
}
var y = vratiNesto("Jane Doe 1");
console.log(y());

var z = vratiNesto()();
console.log(z);
