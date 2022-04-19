//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

class Auto {
  constructor(ruedas, cambios, inteligente, combustible) {
    this.ruedas = ruedas;
    this.cambios = cambios;
    this.inteligente = inteligente;
    this.combustible = combustible;
    this.arrancar = function () {
      console.log("brum brummmmm");
    };
  }
}

const fiat = new Auto(2, 'automaticos', true, 'energia solar')

console.log(fiat)
console.log(fiat.constructor)