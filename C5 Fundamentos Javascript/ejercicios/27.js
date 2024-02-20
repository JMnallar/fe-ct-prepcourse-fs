function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  // Paso 1: Combinar los nombres "nombre" y "apellido" en un mismo string, separados por un espacio
    let nombreCompleto = nombre + " " + apellido;

  // Paso 2: Retornar el nombre completo combinado
    return nombreCompleto;
}

module.exports = combinarNombres;
