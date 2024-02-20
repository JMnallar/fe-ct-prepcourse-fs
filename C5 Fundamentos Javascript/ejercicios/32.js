function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  // Paso 1: Calcular el valor en dólares multiplicando el valor en euros por el factor de conversión
  let dolar = euro * 1.20;
  // Paso 2: Retornar el valor en dólares
  return dolar;
}

module.exports = deEuroAdolar;
