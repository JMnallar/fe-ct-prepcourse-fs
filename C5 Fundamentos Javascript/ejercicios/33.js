function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Los números menores o iguales a 1 no son primos
  if (numero <= 1) {
  return false;
  }

  // Comprobamos si el número es divisible por algún otro número menor que él
  for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
  // Si es divisible por algún número distinto de 1 y él mismo, no es primo
  return false;
    }
  }
  // Si no encontramos ningún divisor diferente de 1 y él mismo, es primo
  return true;
}

module.exports = esNumeroPrimo;
