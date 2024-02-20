function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
    // Paso 1: Obtener el resto de la división de "x" entre "y"
    let resto = x % y;

    // Paso 2: Retornar el resto obtenido
    return resto;
}

module.exports = obtenerResto;