function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  // Verificamos si x es mayor que y
    if (x > y) {
    return x; // Si x es mayor, retornamos x
    } else {
    return y; // Si y es mayor o si son iguales, retornamos y
    }
}

module.exports = obtenerMayor;
