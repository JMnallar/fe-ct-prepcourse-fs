function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
   // Paso 1: Comprobar si la letra es una vocal
   if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return "Es vocal"; // Paso 2: Si es una vocal, retornar "Es vocal"
  }

  // Paso 3: Verificar si la entrada es un string de más de un caracter
  if (typeof letra !== 'string' || letra.length !== 1) {
    return "Dato incorrecto"; // Paso 4: Si es así, retornar "Dato incorrecto"
  }

  // Paso 5: Si no es una vocal y es un string de un caracter, también retornar "Dato incorrecto"
  return "Dato incorrecto";
}

module.exports = esVocal;
