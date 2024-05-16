// 1. Napišite modul za brojanje broja koraka.
// Modul će se brinuti o povećanju broja koraka,
// a izvana će se moći pristupiti dvjema metodama modula:
// walk() i getTotalSteps().
// 2. Exportajte modul iz datoteke.

var brojanjeKoraka = (function () {
  // TODO: dio koda za povecavanje broja koraka
  var koraci = 0;
  function _increaseSteps() {
    koraci++;
  }

  return {
    walk: function () {
      _increaseSteps();
    },
    getTotalSteps: function () {
      return koraci;
    },
    run: function () {
      koraci += 5;
    },
  };
})();

module.exports = brojanjeKoraka;
