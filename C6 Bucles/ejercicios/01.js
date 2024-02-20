function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // Verificamos si ambos números son negativos
    if (a < 0 && b < 0) {
  // Verificamos si ambos números son iguales
      if (a === b) {
        return true; // Ambos son iguales y negativos
      }
    }
    return false; // Si no se cumplen las condiciones anteriores, retornamos false
}

module.exports = esIgualYNegativo;
