function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  // Paso 1: Concatenar el string "Hola " con el nombre recibido y agregar un signo de exclamación al final
    let saludo = "Hola " + nombre + "!";

  // Paso 2: Retornar el saludo completo
    return saludo;
}

module.exports = obtenerSaludo;