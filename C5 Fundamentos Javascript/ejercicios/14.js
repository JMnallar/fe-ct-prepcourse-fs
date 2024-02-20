function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
    // Comparamos las longitudes de los dos strings
    if (str1.length === str2.length) {
      return true; // Si tienen la misma longitud, retornamos true
    } else {
      return false; // Si no tienen la misma longitud, retornamos false
    }
}

module.exports = tienenMismaLongitud;