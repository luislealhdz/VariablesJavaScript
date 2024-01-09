/**Ejercicios para esta sesion
 *
 * Declara una funcion para cada problema planteado
 *
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 *
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

function calculateCirclePerimeter(radio) {
    const PI = 3.1416;
    let perimeter = 0;
    perimeter = 2 * PI * radio;
    return perimeter;
}
console.log(calculateCirclePerimeter(5));

const circlePerimeter = (radio) => {
    const PI = 3.1416;
    let perimeter = 0;
    perimeter = 2 * PI * radio;
    return perimeter;
};
console.log(circlePerimeter(5));

function calculateRectangleArea(length, width) {
    let area;
    area = length * width;
    return area;
}
console.log(calculateRectangleArea(8, 5));

const rectangleArea = (length, width) => length * width;
console.log(rectangleArea(8, 5));

function calculateSquareNumber(number) {
    return number * number;
}
console.log(calculateSquareNumber(5));

const squareNumber = (number) => number * number;
console.log(squareNumber(5));

function calculateCelsiusToFahrenheit(celsius) {
    return `${(celsius * 9) / 5 + 32}°`;
}
console.log(calculateCelsiusToFahrenheit(20));

const celsiusToFahrenheit = (celsius) => `${(celsius * 9) / 5 + 32}°`;
console.log(celsiusToFahrenheit(20));

function calculateVoltage(resistance, current) {
    return `${resistance * current} V`;
}
console.log(calculateVoltage(2, 5));

const getVoltage = (resistance, current) => `${resistance * current} V`;
console.log(getVoltage(2, 5));

function calculateVolumeSphere(radio) {
    const PI = 3.1416;
    const RADIUS_CUBED = radio * radio * radio;
    return (4 / 3) * PI * RADIUS_CUBED;
}
console.log(calculateVolumeSphere(5));

const volumeSphere = (radio) => {
    const PI = 3.1416;
    const RADIUS_CUBED = radio * radio * radio;
    return (4 / 3) * PI * RADIUS_CUBED;
};

console.log(volumeSphere(5));
