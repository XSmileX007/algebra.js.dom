//1. Pratite kod u scripts.js.
//2. Nadite prototip objekta "character"
// (naputak: koristite metode globalnog Object objekta).
// Nadite prototip tog prototipa. Ispisite ih.
//3. Dodajte prototipu objekta "character" funkciju koja vraća jedan
// (slucajno odabran) citat iz niz "quotes".

var character = {
  name: "Eleven",
  show: "Stranger Things",
  portrayedBy: "Millie Bobby Brown",
};

const quotes = [
  "I'm going to my friends. I'm going home.",
  "Pure fuel! PURE FUEL! WOO!",
  "See? Zoomer.",
  "Bitchin.",
];

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);

// prototip prototipa == null
var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

proto1.dodaj = function () {
  let x = Math.random() * quotes.length;
  let flor = Math.floor(x);
  console.log("random=" + x);
  console.log("flor=" + flor);
  return quotes[flor]; //quotes[0];
};

console.log(character.dodaj());
