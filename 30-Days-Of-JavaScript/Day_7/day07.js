//1.-Declare una función fullName e imprima su nombre completo.
function fullName() {
console.log('Alexa')
}
fullName()
//2.-Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
function lastName(firstName, lastName) {
let fullName = firstName + ' ' + lastName;
return fullName
}
console.log(lastName('alexa', 'Cuevas'))
//3.-Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
const addNumbers = (num1, num2) => {
    let sumNum = num1 + num2;
    return sumNum
}
console.log(addNumbers(12,15))
//4.-El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
const areaRectangle = (length, width) => {
 let area = length * width;
 return `El area de tu rectangulo es: ${area}`;
}
console.log(areaRectangle(15, 20))
//5.-El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
const perimeterOfRectangle = (length, width) => {
    let perimeter =  2 * (length + width)
    return console.log(`El perimetro de un rectangulo es ${perimeter}`)
}
perimeterOfRectangle(12,15)
//6.-El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
const volumeOfRectPrism = (length, width, height) => {
let volume = length * width * height;
return `El volumen de tu prisma es el siguiente: ${volume}`
}
console.log(volumeOfRectPrism(12,26,35));
//7.-El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
const areaOfCircle = (r) =>{
    let area = Math.PI * r * r;
    return Math.floor(area);
}
console.log(`Area del circulo: ${areaOfCircle(56)}`);
//8.-La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
const circumOfCircle = radio => 2 * Math.PI * radio;
console.log(circumOfCircle(3))
//9.-La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
const density = (m,v) =>{
 return m / v;
}
console.log(density(34,23));
//10.-La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
const speed = (d,t) => {
    return d / t;
}
console.log(speed(23,30))
//11.-El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
const weight = (mass, gravity) => {
 let weight = mass * gravity;   
 return weight;
}
console.log(weight(14,45));
//12.-La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
const convertCelsiusToFahrenheit = (c) =>{
let f = (c * 9/5) + 32;
return f;
}
console.log(convertCelsiusToFahrenheit(40));
//13.-El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
const imcClculate = (age,weight,heightP) =>{
let heightTotal = (heightP * heightP);
let imc = (weight / heightTotal).toFixed(2);
if(age >= 20){
 if(imc < 18.5){
    return `Peso bajo inferior a 18,5: ${imc}`
 }else if(imc >= 18.5 && imc <= 24.9){
    return `Peso normal de 18,5 a 24,9: ${imc}`
 }else if(imc >= 25 && imc <= 29.9){
    return `Sobrepeso de 25 a 29,9: ${imc}`
 }else if(imc >= 30){
    return `Obeso es 30 o más: ${imc}`
 }
}else{
    return 'No tiene la edad sufuciente'
}
}
console.log(imcClculate(23,60,1.72));
//14.-Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
const checkSeason = (month) => {
let uperMonth = month.toLowerCase();
switch(uperMonth) {
    case 'enero':
    return `Mes actual: ${month} Estacion: Invierno`;
    case 'febrero':
    return `Mes actual: ${month} Estacion: Invierno`;
    case 'marzo':
    return `Mes actual: ${month} Estacion: Primavera`;
    case 'abril':
    return `Mes actual: ${month} Estacion: Primavera`;
    case 'mayo':
    return `Mes actual: ${month} Estacion: Primavera`;
    case 'junio':
    return `Mes actual: ${month} Estacion: Verano`;
    case 'julio':
    return `Mes actual: ${month} Estacion: Verano`;
    case 'agosto':
    return `Mes actual: ${month} Estacion: Verano`;
    case 'septiembre':
    return `Mes actual: ${month} Estacion: Otoño`;
    case 'octubre':
    return `Mes actual: ${month} Estacion: Otoño`;
    case 'noviembre':
    return `Mes actual: ${month} Estacion: Otoño`;
    case 'diciembre':
    return `Mes actual: ${month} Estacion: Invierno`;
    default:
        return `${month} no es un mes valido`
}
}
console.log(checkSeason('Noviembre'))
//15.-Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
const findMax = (num1,num2,num3) => {
 //Necesitamos convertir los numeros en un array
let arr = `${num1} ${num2} ${num3}`.split(' ');
//Necesitamos ordenar los elemntos de l array de menor a mayor
let ordeArr = arr.sort((a,b) => a - b)
//Obtenemos el ultimo elemento del array atraves de su indice
let lastNumber = ordeArr[ordeArr.length - 1];
//Retornamos el ultimo numero 
return `El numero maximo es: ${lastNumber}`
}
console.log(findMax(13,16,1))
//Ejercicios: Nivel 2
//1.-La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
function calcularEcuacionLineal(m, b, x) {
    return m * x + b;
}
console.log(calcularEcuacionLineal(12,23,56))
//2.-La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
const solveQuadEquation = (a,b,c,) =>{
    // Calcula el discriminante
    let discriminante = b * b - 4 * a * c;

    // Verifica el tipo de soluciones basadas en el discriminante
    if (discriminante > 0) {
        // Dos soluciones reales y diferentes
        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return [raiz1, raiz2];
    } else if (discriminante === 0) {
        // Una solución real
        let raiz = -b / (2 * a);
        return [raiz];
    } else {
        // No hay soluciones reales (solo imaginarias)
        return [];
    }
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1, 4, 4));
console.log(solveQuadEquation(1, -1, -2));
console.log(solveQuadEquation(1, 7, 12));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, 0, -4));
console.log(solveQuadEquation(1, -1, 0));
//3.-Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
let numberArr = [3,5,3,4,5,8]
printArray(numberArr)
//4.-Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

//Obtener el formato de hora para ver si es AM o PM;
const formatHr = () => {
 //Se obtienen tanto los minutos como las horas
 const newDt = new Date();
 let hr = newDt.getHours();
 let mn = newDt.getMinutes();
// Convertir la hora de 24 horas a formato de 12 horas
 let hours12 = hr % 12;
 hours12 = hours12 === 0 ? 12 : hours12; // Ajustar para mostrar 12 en lugar de 0
// Formatear con dos dígitos las horas y los minutos
 let completeHr = hours12.toString().padStart(2, '0');
 let completeMinutes = mn.toString().padStart(2, '0');
return `${completeHr}:${completeMinutes}`
}

const showDateTime = () => {
    const fh = new Date();
    let newDay = fh.getDate().toString().padStart(2, '0');
    let newMonth = (fh.getMonth() + 1).toString().padStart(2, '0');
    let newYear = fh.getFullYear();
    let fullFech = `${newDay}/${newMonth}/${newYear} ${formatHr()}`
    return console.log(fullFech)
}
showDateTime()

//5.-Declare una función llamada swapValues. Esta función intercambia el valor de x a y.
const swapValues = (x,y) => {
 //almecenamos el valor de x temporalmente para que no se pierda   
let newx = x;
//ahora reasignamos el valor de x con el valor de y
x = y;
//pasamos el valor de x gurdado en la otra variable 
y = newx;
//me retorna ambos parametros
return console.log(x,y)
}
swapValues(12,18);

//6.-Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).
//Se crea una funcion que recibira como parametro un array
const reverseArray = (arr) => {
//Creamos una funcion la cual tendra inicialmente un array vacio, para posteriormente guardar el array invertido
    let arrReverse = [];
//creamos un bucle, el cual va a recorrer el array recibido en el parametro 'arr', incialmente i valdra la longuitud del array, ahora si i es mayor o igual a cero ve decrementando el valor de i
for(let i = arr.length -1; i >= 0; i--){
    //ahora iremos agregando cada elemento de mayor a menor en el array vacio
  arrReverse.push(arr[i])
}
//Retornamos en consola el nuevop array invertido
return console.log(arrReverse)
}
//llamamos a la funcion
const abc = ['A','B','C'];
reverseArray(abc)
reverseArray(numberArr)
//7.-Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizeda
const capitalizeArray = (capiArr) => {
    let capitalizeOfArr = [];
    for(const addAb of capiArr){
        let firstLetters = addAb.charAt(0).toUpperCase() + addAb.slice(1);
      capitalizeOfArr.push(firstLetters)
    }
    return capitalizeOfArr;
}

let fruit = ['mango','uva','Pera','sandia','papaya'];
console.log(capitalizeArray(fruit))
//8.-Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
const addItem = (game) =>{
    let gameArr = game.split();
    return gameArr;
}
console.log(addItem('Cars'));
//9.-Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
const removeItem = (indexToRemove) =>{
const vegetables = ['Rabano','Lechuga','Zanaoria','papa'];
if(indexToRemove > 3 || indexToRemove < 0){
    console.log(`${indexToRemove} no esta dentro del rango de elementos escoga un numero del 0 al 3`)
}else{
    let before = vegetables.slice(0, indexToRemove);
    let after = vegetables.slice(indexToRemove + 1);
    let newVegetables = before.concat(after);
    console.log(`Se elimino ${vegetables[indexToRemove]}`)
return newVegetables;
}
}
console.log(removeItem(0))
//Eplicar
//10.-Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
const sumOfNumbers = (numMax) => {
    let sumTotal = 0;
    for(let i = 1; i <= numMax; i++){
      sumTotal += i
    }
    return sumTotal;
}
console.log(sumOfNumbers(100))

//solo comenta los dos codigos anteriores
