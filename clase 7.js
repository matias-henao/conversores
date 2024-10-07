// Conversor de velocidad en Km/h a Metros/h y Millas/h
function convertirVelocidad(velocidadKmh) {
    const metrosPorHora = velocidadKmh * 1000;
    const millasPorHora = velocidadKmh * 0.621371;
    console.log(`Velocidad: ${velocidadKmh} km/h = ${metrosPorHora} m/h = ${millasPorHora.toFixed(2)} mi/h`);
}

// Costo de una llamada telefónica
function calcularCostoLlamada(minutos) {
    let costo;
    if (minutos <= 5) {
        costo = 200;
    } else {
        costo = 200 + (minutos - 5) * 150;
    }
    console.log(`El costo de la llamada de ${minutos} minutos es: $${costo}`);
}

// Conversor de temperatura y mensajes según el clima
function convertirTemperatura(temperatura, unidad) {
    let tempCelsius, tempFahrenheit;

    if (unidad === 'C') {
        tempCelsius = temperatura;
        tempFahrenheit = (temperatura * 9/5) + 32;
    } else if (unidad === 'F') {
        tempFahrenheit = temperatura;
        tempCelsius = (temperatura - 32) * 5/9;
    } else {
        console.log("Por favor, ingrese una unidad válida: 'C' para Celsius o 'F' para Fahrenheit.");
        return;
    }

    console.log(`Temperatura: ${tempCelsius.toFixed(1)} °C = ${tempFahrenheit.toFixed(1)} °F`);

    if (tempCelsius <= 0 || tempFahrenheit <= 32) {
        console.log("Nos congelamos");
    } else if ((tempCelsius >= 5 && tempCelsius <= 15) || (tempFahrenheit >= 37 && tempFahrenheit <= 50)) {
        console.log("Está haciendo frío");
    } else if ((tempCelsius >= 16 && tempCelsius <= 25) || (tempFahrenheit >= 51 && tempFahrenheit <= 77)) {
        console.log("Está templado el día");
    } else if (tempCelsius > 25 || tempFahrenheit > 77) {
        console.log("Tiene fiebre o es el apocalipsis");
    }
}

// Calculadora de IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log(`Su IMC es: ${imc.toFixed(1)}`);

    if (imc < 18.5) {
        console.log("Bajo peso, debe ir al nutricionista");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log("Sobrepeso");
    } else if (imc >= 30.0) {
        console.log("Obeso, debe ir al nutricionista");
    }
}

// Ejemplos de uso:
// Convertir velocidad
convertirVelocidad(100);

// Calcular costo de llamada
calcularCostoLlamada(10);

// Convertir temperatura y mostrar mensajes
convertirTemperatura(10, 'C');
convertirTemperatura(32, 'F');

// Calcular IMC
calcularIMC(70, 1.75);
