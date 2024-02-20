function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
    // Obtenemos la fecha actual
    let fechaActual = new Date();

    // Convertimos la fecha de nacimiento a un objeto Date
    let fechaNac = new Date(fechaNacimiento);
  
    // Calculamos la diferencia de años
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
  
    // Comprobamos si la persona tiene 18 años o más
    if (edad > 18) {
      return true;
    } else if (edad === 18) {
      // Si la persona tiene exactamente 18 años, comprobamos el mes y el día
      if (fechaActual.getMonth() > fechaNac.getMonth()) {
        return true;
      } else if (fechaActual.getMonth() === fechaNac.getMonth()) {
        // Si el mes de nacimiento es el mismo que el mes actual, comparamos los días
        if (fechaActual.getDate() >= fechaNac.getDate()) {
          return true;
        }
      }
    }
    
    // Si ninguna de las condiciones anteriores se cumple, la persona es menor de edad
    return false;
}

module.exports = esMayorDeEdad;