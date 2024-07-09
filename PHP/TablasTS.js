// Declaro el array de numeros a recorrer
var multiplicando = Array.from({ length: 10 }, function (_, i) { return i + 1; });
var multiplicador = Array.from({ length: 10 }, function (_, i) { return i + 1; });
// Inicio del ciclo para recorrer y declaro variable (para el multiplicando)
multiplicando.forEach(function (numeroMultiplicando) {
    console.log("Tabla del ".concat(numeroMultiplicando));
    // Inicio del ciclo para recorrer y declaro variable (para el multiplicador)
    multiplicador.forEach(function (numeroMultiplicador) {
        console.log("".concat(numeroMultiplicando, " x ").concat(numeroMultiplicador, " = ").concat(numeroMultiplicando * numeroMultiplicador));
    });
    // Línea en blanco para separar las tablas
    console.log('');
});
