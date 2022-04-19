//*funcion fábrica o funcion constructora:

//tenemos un molde, y sacamos muchos, similares

const autos = (ruedas, cambios, inteligente, combustible) => {
  return {
    ruedas,
    cambios,
    inteligente,
    combustible,
    arrancar: function () {
      console.log("brumm brummm");
    },
  };
};

//ahora, a hacer una fábrica de autos!

const audi = autos(3, null, true, "nafta");
console.log(audi);
console.log(audi.arrancar());

const tesla = autos(4, "automatico", true, "electricidad");
console.log(tesla);
console.log(tesla.arrancar());

//si falta un campo, va a tirar undefined. Si sobra, simplemente lo ignora
const ferrari = autos(6, "automatico", true, 'nafta', true);
console.log(ferrari);
console.log(ferrari.arrancar());