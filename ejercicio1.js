const serieFibbonaci = (cantidadIteraciones = 17) => {
  let n1 = 0;
  let n2 = 1;
  let siguiente;
  const numerosFibbonacci = [];

  for (let i = 1; i <= cantidadIteraciones; i++) {
    siguiente = n1 + n2;
    n1 = n2;
    n2 = siguiente;
    numerosFibbonacci.push(n1);
  }

  return numerosFibbonacci;
};


const numerosFibbonacci = serieFibbonaci();
console.log('numeros fibbonacci', numerosFibbonacci);

const buscarNumerosPares = (arregloNumerosFibbonacci) => { 
    return numerosFibbonacci.filter(numero => (numero % 2 === 0) && numero <= 1000);
}

const numerosPares = buscarNumerosPares(numerosFibbonacci);
console.log('numerosPares', numerosPares);

const buscarNumerosImpares = (arregloNumerosFibbonacci) =>  {
    return numerosFibbonacci.filter(numero => (numero % 2 !== 0) && numero <= 1000);
}

const numerosImpares = buscarNumerosImpares(numerosFibbonacci);
console.log('numerosImpares', numerosImpares);

const buscarNumerosMenoresQueMil = (arregloNumerosFibbonacci) => {
    return numerosFibbonacci.filter(numero => numero <= 1000);
}

const numerosMenoresQueMil = buscarNumerosMenoresQueMil(numerosFibbonacci);
console.log('numerosMenoresQueMil', numerosMenoresQueMil);
