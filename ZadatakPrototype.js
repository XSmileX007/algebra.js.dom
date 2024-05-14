// constructor Osoba
function Osoba() {
  (this.ime = "Ana"), (this.godine = 25);
}

var osoba1 = new Osoba();
osoba1.brojCipela = 38;
osoba1.pozdrav = function () {
  return "Ćao";
};
console.log(
  "Osoba1 => ime:" +
    osoba1.ime +
    "; ima godina: " +
    osoba1.godine +
    "; broj cipela: " +
    osoba1.brojCipela
);

Osoba.prototype.spol = "Žensko";

console.log(
  ">>>> Osoba1 => ime:" +
    osoba1.ime +
    "; ima godina: " +
    osoba1.godine +
    "; spol: " +
    osoba1.spol +
    "; pozdrav: " +
    osoba1.pozdrav()
);

var osoba2 = new Osoba();
osoba2.brojCipela = 36;
osoba2.godine = 35;
osoba2.ime = "Marko";
osoba2.spol = "Muški";
osoba2.pozdrav = function () {
  return "Bok";
};
console.log(
  "Osoba2 => ime:" +
    osoba2.ime +
    "; ima godina: " +
    osoba2.godine +
    "; broj cipela: " +
    osoba2.brojCipela +
    "; spol: " +
    osoba2.spol +
    "; pozdrav: " +
    osoba2.pozdrav()
);
