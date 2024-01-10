/** Ejercicio 1
 *
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 *
 * Debe recibir como parametro la edad
 *
 * Consideraciones: utilizar la estructura if-else
 */

const canVote = (age) => {
    if (age >= 18) {
        console.log("Puede votar.");
    } else {
        console.log("No puede votar.");
    }
};

canVote(30);
canVote(18);
canVote(17);

/** Ejercicio 2
 *
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 *
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 *
 * Consideraciones: utilizar la estructura if-else
 *
 */

const isTheAveragePassing = (
    firstScore,
    secondScore,
    thirdScore,
    fourthScore
) => {
    const average = firstScore + secondScore + thirdScore + fourthScore / 4;

    if (average >= 7) {
        console.log("Aprobado.");
    } else {
        console.log("Reprobado.");
    }
};

isTheAveragePassing(10, 10, 10, 10);
isTheAveragePassing(1, 2, 1, 2);

/** Ejercicio 4
 *
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 *
 * Debe recibir como parametro un numero, cual sea
 *
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 *
 *
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

const divisibleBySevenAndEight = (number) => {
    if (number % 7 === 0 && number % 8 === 0) {
        console.log("Verdadero.");
    } else {
        console.log("Falso.");
    }
};

divisibleBySevenAndEight(56);
divisibleBySevenAndEight(7);
divisibleBySevenAndEight(8);
divisibleBySevenAndEight(0);
divisibleBySevenAndEight(224);
divisibleBySevenAndEight(73);

/** Ejercicio 5
 *
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 *
 * Debe recibir como parametro un numero aleatorio
 *
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 *
 * Consideracion - Utilizar la estructura if-else
 */

const divisibleByFourOrNine = (number) => {
    if (number % 4 === 0 || number % 9 === 0) {
        console.log("Verdadero.");
    } else {
        console.log("Falso.");
    }
};

divisibleByFourOrNine(45);
divisibleByFourOrNine(36);
divisibleByFourOrNine(81);

/** Ejercicio 6
 *
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 *
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 *
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 *
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 *
 * Consideraciones: utilizar la estructura switch
 */

const add = (firstNumber, secondNumber) =>
    console.log(firstNumber + secondNumber);

const substract = (firstNumber, secondNumber) =>
    console.log(firstNumber - secondNumber);

const multiply = (firstNumber, secondNumber) =>
    console.log(firstNumber * secondNumber);

const division = (firstNumber, secondNumber) =>
    console.log(secondNumber / firstNumber);

const calculator = (firstNumber, operation, secondNumber) => {
    switch (operation) {
        case "+":
            add(firstNumber, secondNumber);
            break;

        case "-":
            substract(firstNumber, secondNumber);
            break;

        case "*":
            multiply(firstNumber, secondNumber);
            break;

        case "/":
            division(secondNumber, firstNumber);
            break;

        default:
            console.log("No se reconoce la operación.");
    }
};

calculator(50, "+", 20);
calculator(50, "-", 20);
calculator(50, "*", 20);
calculator(50, "/", 20);

/** Ejercicio 7
 *
 * Realizar un programa que reciba como parametro una categoria de peliculas
 *
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 *
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 *
 * Consideraciones: utilizar la estructura switch
 */

const recommendMovie = (category) => {
    switch (category.toLowerCase()) {
        case "accion":
            console.log("Recomendación Mad Max: Fury Road");
            break;

        case "drama":
            console.log("Recomendación Forrest Gump");
            break;

        case "comedia":
            console.log("Recomendación The Grand Budapest Hotel");
            break;

        case "romance":
            console.log("Recomendación La La Land");
            break;

        case "suspenso":
            console.log("Recomendación Gone Girl");
            break;

        case "terror":
            console.log("Recomendación Hereditary");
            break;

        default:
            console.log("No conozco esa categoría");
    }
};

recommendMovie("accion");
recommendMovie("romance");
recommendMovie("ciencia ficcion");

/** Ejercicio 8
 *
 * Crear una interfaz de un cajero ATM
 *
 * Debe recibirse como parametro alguna de las siguientes opciones
 *
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 *
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

const automatedTellerMachine = (actionToTake) => {
    if (actionToTake === "1") {
        console.log("Retirar dinero");
    } else if (actionToTake === "2") {
        console.log("Transferencia");
    } else if (actionToTake === "3") {
        console.log("Deposito");
    } else if (actionToTake === "4") {
        console.log("Pago de servicios");
    } else {
        console.log("Esta acción no se puede realizar");
    }
};

automatedTellerMachine("1");
automatedTellerMachine("2");
automatedTellerMachine("5");

/** Ejercicio 9
 *
 * Escribir en codigo un programa conversor de divisas
 *
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 *
 * 1. A dolares estadounidenses
 * 2. A euros
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 *
 * Consideracion: estructura switch
 *
 */

const currencyConverter = (quantity, currency) => {
    switch (currency) {
        case "1":
            const DOLAR = 16.97;
            console.log(`${quantity / DOLAR} doláres`);
            break;

        case "2":
            const EURO = 18.55;
            console.log(`${quantity / EURO} euros`);
            break;

        case "3":
            const YENES = 0.12;
            console.log(`${quantity / YENES} yenes japoneses`);
            break;

        case "4":
            const LIBRA = 21.57;
            console.log(`${quantity / LIBRA} libras esterlinas`);
            break;

        case "5":
            const FRANCO = 19.92;
            console.log(`${quantity / FRANCO} franco suizo`);
            break;

        default:
            console.log("No se reconoce esta divisa");
    }
};

currencyConverter(500, "1");

/** Ejercicio 10
 *
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 *
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 *
 * Sugerencia de codigo de descuento DESCUENTO10
 *
 * Consideracion: utilizar la estructura if-else
 *
 */

const addDiscount = (productPrice, discountCode) => {
    const PROMOTIONAL_CODE = "DESCUENTO10";
    const DISCOUNT = 0.1;
    if (discountCode === PROMOTIONAL_CODE) {
        const discount = productPrice * DISCOUNT;
        const discountPrice = productPrice - discount;
        console.log(
            `Con el código de descuento, el total es de ${discountPrice}`
        );
    } else {
        console.log("No hay descuento");
    }
};

addDiscount(500, "DESCUENTO10");
addDiscount(500, "DESC10%");
