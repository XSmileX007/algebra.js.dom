//1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta
// i označava ime psa. Defaultna vrijednost imena psa je "Rex".
//
//2. Kreirajte objekt iz Dog funkcije.

//3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.

// 1.
function Dog(name) {
  /*this.dogName = "Rex";
    if (name != undefined){
        this.dogName = name;
    }*/

  //console.log("name=" + name);
  if (name == undefined) {
    //  if (!name) {
    this.dogName = "Rex";
  } else {
    this.dogName = name;
  }

  this.bojaPsa = "Crna";
  //this.dogName = name || "Rex";
}
// 2. -> defaultno ime psa ukoliko ne proslijedimo ime psa
var dog = new Dog();
print("Ime psa default name = " + dog.dogName);

// 2b -> ako proslijedimo ime psa
var dog1 = new Dog("Loki");
print("Ime psa = " + dog1.dogName);

// 3.

Dog.prototype.imePsa = function () {
  return this.dogName;
};

Dog.prototype.bark = function () {
  return "Wuf wuf!";
};

print("Ime psa1 (dog) preko metode= " + dog.imePsa());
print("Ime psa2 (dog2) preko metode= " + dog1.imePsa());

print("Pas1 (dog) se glasa= " + dog.bark());
print("Pas2 (dog2) se glasa= " + dog1.bark());

function print(intext) {
  // console.log(intext);
}
