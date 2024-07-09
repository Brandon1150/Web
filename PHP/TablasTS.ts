// Declaro el array de numeros a recorrer
const multiplicando = Array.from({ length: 10 }, (_, i) => i + 1);
const multiplicador = Array.from({ length: 10 }, (_, i) => i + 1);

// Inicio del ciclo para recorrer y declaro variable (para el multiplicando)
multiplicando.forEach(numeroMultiplicando => {
    console.log(`Tabla del ${numeroMultiplicando}`);
    
    // Inicio del ciclo para recorrer y declaro variable (para el multiplicador)
    multiplicador.forEach(numeroMultiplicador => {
        console.log(`${numeroMultiplicando} x ${numeroMultiplicador} = ${numeroMultiplicando * numeroMultiplicador}`);
    });
    
    // Línea en blanco para separar las tablas
    console.log('');
});