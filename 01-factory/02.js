//* https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
//*https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

//entre factory y classes

function Auto(ruedas, cambios, inteligente, combustible) {
  this.ruedas = ruedas;
  this.cambios = cambios;
  this.inteligente = inteligente;
  this.combustible = combustible;
  this.arrancar = function () {
    console.log("brum brummmmm");
  };
}

const suzuki = new Auto(4, 'manuales', false, 'nafta')
console.log(suzuki)
console.log( suzuki.arrancar())