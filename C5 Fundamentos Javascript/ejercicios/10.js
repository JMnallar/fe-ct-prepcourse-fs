function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
 // Intentamos crear un objeto Date con la fecha proporcionada
let fechaObj = new Date(fecha);

 // Verificamos si el objeto Date creado es válido y si la fecha ingresada es igual a la fecha obtenida después de convertirla a una cadena
 // Esto nos permite manejar casos como "31 de febrero", que sería inválido
if (!isNaN(fechaObj.getDate()) && fecha === fechaObj.toISOString().slice(0, 10)) {
  return true;
} else {
  return false;
}
  }

module.exports = esFechaValida;