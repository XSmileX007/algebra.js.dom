var rijeke = ["Mrežnica", "Dobra", "Korana", "Kupa", "Karlovačko"];
debugger;
var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Karlovac"));

// trazimo body element
var bodyElem = document.querySelector("body");
// na njega dodajemo kao prvi element (prepend) h1 element
bodyElem.prepend(h1);

// trazimo div element s klasom "description"
var dDescr = document.querySelector(".description");
// njegov inner html mijenjamo sa svojim custom html-om
dDescr.innerHTML = "Grad na <h3>5 rijeka</h3>";

// kreiramo novi objekt u memoriji div sa class atributom i vrijednosti info
// <div class="info"></div>
var divInfo = document.createElement("div");
divInfo.classList.add("info");
divInfo.innerText = "Peta rijeka je piva.";

// nalazimo element footer sa id=footer
// insertamo na body novi kreirani objekt i insertamo prije footer elementa
var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);

// trebamo naci <ul> element
var ul = document.querySelector("ul"); // dohvaćen iz DOM-a

// maknemo sve li element iz template-a
for (let i = ul.childElementCount; i > 0; i--) {
  let child = ul.children[i - 1];
  ul.removeChild(child);
}

// dodajemo nove li elemente s tim da na svaki li element dodajemo i text/content
for (let i = 0; i < 5; i++) {
  let li = document.createElement("li");
  li.textContent = rijeke[i];
  ul.appendChild(li);
}
