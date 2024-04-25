function convert() {
    var inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    var inputUnit = document.getElementById('inputUnit').value;
    var result = document.getElementById('result');
    var calculation = document.getElementById('calculation');
    var convertedTemperature;
    var formula;

    if (inputUnit === 'celcius') {
        convertedTemperature = celciusToFahrenheit(inputTemperature);
        formula = inputTemperature + ' °C × 9/5 + 32 = ' + convertedTemperature + ' °F';
        result.innerHTML = inputTemperature + ' Celcius = ' + convertedTemperature + ' Fahrenheit';
    } else if (inputUnit === 'fahrenheit') {
        convertedTemperature = fahrenheitToCelcius(inputTemperature);
        formula = '(' + inputTemperature + ' °F - 32) × 5/9 = ' + convertedTemperature + ' °C';
        result.innerHTML = inputTemperature + ' Fahrenheit = ' + convertedTemperature + ' Celcius';
    } else if (inputUnit === 'kelvin') {
        convertedTemperature = kelvinToCelcius(inputTemperature);
        formula = inputTemperature + ' K - 273.15 = ' + convertedTemperature + ' °C';
        result.innerHTML = inputTemperature + ' Kelvin = ' + convertedTemperature + ' Celcius';
    }

    calculation.innerHTML = formula;
}

function celciusToFahrenheit(celcius) {
    return celcius * 9/5 + 32;
}

function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kelvinToCelcius(kelvin) {
    return kelvin - 273.15;
}

function reset() {
    document.getElementById('inputTemperature').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('calculation').innerHTML = '';
}

function reverse() {
    var inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    var inputUnit = document.getElementById('inputUnit').value;

    if (inputUnit === 'celcius') {
        document.getElementById('inputUnit').value = 'fahrenheit';
    } else if (inputUnit === 'fahrenheit') {
        document.getElementById('inputUnit').value = 'celcius';
    }
}