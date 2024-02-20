function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  // Verificamos si ambos booleanos son verdaderos
  if (booleano1 === true && booleano2 === true) {
    return true; // Ambos son verdaderos
  } else {
    return false; // Si alguno de los booleanos es falso, retornamos false
  }
}

// Usamos la función con dos booleanos
let resultado1 = esVerdaderoYFalso(true, true);
let resultado2 = esVerdaderoYFalso(true, false);

// Mostramos los resultados
console.log("Resultado 1: " + resultado1); // Debería ser true
console.log("Resultado 2: " + resultado2); // Debería ser false

module.exports = esVerdaderoYFalso;
