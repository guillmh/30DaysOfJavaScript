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

//Creamos una funcion que recibe un numero como parametro el cual sera el index a remover
const removeItem = (indexToRemove) =>{
//creamos un array con elementos el cual nos servira para quitar elementos
const vegetables = ['Rabano','Lechuga','Zanaoria','papa'];
//creamos una condicional para que el usuario no puede ir mas aya del numero de elementos que existen en el array, y la funcion sea mas estricta
if(indexToRemove > 3 || indexToRemove < 0){
    //en caso de que se cumpla imprimimos en consola un mensaje 
    console.log(`${indexToRemove} no esta dentro del rango de elementos escoga un numero del 0 al 3`)
}else{
    //si no se cumple continuamos con la logica, creamos una variable 'before' la cual cortara el array en una primera parte con el metodo slice, desde el indice 0 hasta el indice que deseamo cortar
    let before = vegetables.slice(0, indexToRemove);
    //definimos una varibale  'after', en esta cortaremos la otra parte despues del indice que deseamos cortar.
    let after = vegetables.slice(indexToRemove + 1);
    //ahora unimos los dos arrays con la funcion concat
    let newVegetables = before.concat(after);
    //se imprime en consola el elemento que se quito
    console.log(`Se elimino ${vegetables[indexToRemove]}`)
    //retornamos el array compuesto por las partes antes cortadas
return newVegetables;
}
}
//llamamos a la funcion y le indicamos el indice a cortar
console.log(removeItem(0))

//10.-Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
//Declaramos una funcion la cual recibira un numero
const sumOfNumbers = (numMax) => {
    //declaramos una variable la cual se inicia en 0 para posteriromente los numero se vayan sumando en esa varibale.
    let sumTotal = 0;
    //Creamos un bucle, el cual va a iterar desde 1 hasta el rango que tenga la variable numMax,
    for(let i = 1; i <= numMax; i++){
        //abrebiamos la suma y la igualdad, asi por cada numero qye vaya iterando se ira sumando y agregando a la variablex 'sumTotal';
      sumTotal += i
    }
    //retornamos la suma total
    return sumTotal;
}
//se imprime en consola la funcion y se le pasa algun numero
console.log(sumOfNumbers(100))
//11.-Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
//Creamos una varibale la cual recibe un numero como parametro
const sumOfOdds = (perrs) => {
    //Creamos una varibale en la caul se sumaran los numero impares
let numPerrs = 0;
//Creamos un bucle para iterar sobre el rango de numero de perrs
for(let i = 1; i <= perrs; i++){
    //declaramos una condicional en la cual si el numero de 'i' divido damo residuo 2 no es igual a 0 que lo agregue y sume a la variable perrs
    if(i % 2 !== 0){
        numPerrs += i;
    }
}
//retornamos la varibale perrs
return numPerrs;
}
console.log(sumOfOdds(50))
//12.-Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
const sumOfEven = (par) => {
let sumPar = 0;
for(let i = 0; i <= par; i++){
if(i % 2 === 0){
  sumPar += i;
}
}
return sumPar;
}
console.log(sumOfEven(10));
//13.-Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.
//Creamos un funcion la cual recibe un numero entero positivo
const evensAndOdds = (numOfPos) => {
    //Creamos una condicional la cual nos pemite verificar si el numero es positovo en caso de que nos lo indicara en consola
    if(numOfPos < 0){
        console.log('Tu numero no es valido')
        return;
        }
 //declaramos dos variables en las cuales nos funcionaran como contadores de los numero impares e impares
        let par = 0;
        let imp = 0;
        //Creamos un bucle el va a iterar sobre el rango de numero de numOfPos
        for (let i = 0; i <= numOfPos; i++) {
            //Creamos una condicional el cual va a comprobar si el numero de i es par, si es par ira suamndo uno en la variable par, en caso de que no eso significa que no es par es impar entonces suma uno en la variable imp, asi susesivamente hasta contar todos.
            if (i % 2 === 0) {
                par++;
            } else {
                imp++;
            }
}
//por ultimo retornamos una concatenacion donde se indica el numero de impares y pares
return `Numero pares: ${par} Numeros Impares: ${imp}`;
}
console.log(evensAndOdds(200));
//14.-Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos
//Creamos una funcion la cual recibira parametros infinitos seguido de tres puntos y un nombre de parametro cualquiera.
const infiniteNum = (...arg) => {
//declaramos una varible donde se iran almacenando los numero sumados 
let sum = 0;
//Creamos un bucle que ira iterando elemento por elemento, y cada uno lo ira sumando
for(const element of arg){
  sum += element;
}
//me retorna el total de argumentento sumados
return sum;
}
//Imprimimos en consola la funcion y le pasamos cualquier cantidad de parametros 
console.log(infiniteNum(10,20,30,40,50));
//15.-Escriba una función randomUserIp que genere una ip de usuario aleatoria.
const randomUserIp = () => {
    let newIp = [];
    for(let i = 0; i <= 4; i++){
     newIp.push(Math.floor(Math.random() * 255));
    }
    return console.log(`${newIp[0]}.${newIp[1]}.${newIp[2]}.${newIp[3]}`)
}
randomUserIp()
//16.-Escriba una función randomMacAddress que genere una dirección mac aleatoria.
const randomMacAddress = () => {
let macAdress = '';
let hexa = 'ABCDEF';
for(let i = 0; i < 12; i++){
let numberCont = Math.floor(Math.random() * 10);  // Genera un número del 0 al 9
let letter = hexa[Math.floor(Math.random() * hexa.length)];  // Selecciona una letra al azar de 'ABCDEF'
 // Alterna entre número y letra para formar la dirección MAC
macAdress += (i % 2 === 0) ? numberCont : letter;
// Agrega ':' después de cada par de caracteres, excepto al final
if (i % 2 === 1 && i < 11) {
    macAdress += ':';
  }
}
return macAdress
}
console.log(randomMacAddress());
//17.-Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.
// console.log(randomHexaNumberGenerator());
// '#ee33df'

//Creamos una funcion la cual no reibe ningun parametro, esta tendra el proposito de genarar un numero jexadecimal random
const randomHexaNumberGenerator = () => {
    //Colocamos en una variable el rango 1 a 16 bits 
 let exadecimal = '0123456789abcdef';
 //Colocamos otra variable donde se guardara el numero hexadecimal
 let numberExadecimal = '';
 //creamos un bucle el un recorrido 6 veces que es la cantidad de elemtnos de un numero hexadecimal
 for(let i = 0; i <= 5; i++){
    //Creamos una varibale la cual gnerara un numero aleatorio del un rango de la longuitud de la variable 'Exadecimal'
    let randomExa = Math.floor(Math.random() * exadecimal.length);
    //Gurdamos ese numero en cada iteraciohn y le vamos agregando el siguiente y asi sucesivamente, accedemos mediante el numero que nos genere randomExa.
    numberExadecimal += exadecimal[randomExa]
 }
 //Retornamos la variable ya contodos los numeros y le agregamos el signo gato
 return `#${numberExadecimal}`
}//Imprimimos la funcion
console.log(randomHexaNumberGenerator())
//18.-Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id. 41XTDbE
const userIdGenerator = () => {
let elements = 'abcdefghiklmnopqrstuvwxyz0123456789';
let id = '';
for(let i = 0; i <= 6; i++ ){
    let randomElement = Math.floor(Math.random() * elements.length);
   id += elements[randomElement]
}
return `id:${id.toUpperCase()}`
}
console.log(userIdGenerator());
//Ejercicios: Nivel 3
// 1.-Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

//Creamos una funcion la cual genara cierta cantidad de id con cierta longuitud, estos numero seran espeficicados por el usuario
const userIdGeneratedByUser = () => {
//Creemos una entrada para pedirle la cantidad de id al usuario, agregamos el simbolo + para converitir la entra a number
let range = +prompt('Cuantos ID quieres:');
//Le pedimos al usuario la longuitud del ID
let characterNumber = +prompt('Ingresa la longuitud de tu id:');
//Cremos una variable la cual contiene letras y numeros para genarar un id aleatorio
let elements = 'abcdefghiklmnopqrstuvwxyz0123456789';
//creamos un bucle el cual el cual generara la cantidad de id
for(let j = 0; j < range; j++){ 
//Creamos una variable vacia, aca se guardara el id generado
let userId = '';
//anidamos otro bucle, este tendra el propisto de generar el id aleatorio
for(let i = 0; i < characterNumber; i++){
    let randomElement = Math.floor(Math.random() * elements.length);
    userId += elements[randomElement];  
}
//Se manda a llamar el id genrado y se convierte a mayuscula
console.log(userId.toUpperCase())
}
}
//2.-Escriba una función llamada rgbColorGenerator que genera colores rgb rgbColorGenerator() rgb(125,244,255)
const rgbColorGenerator = () => {
const rgbNumbers = [];
for(let i = 0; i < 3; i++){
    let aleatori = Math.floor(Math.random() * 256);
    rgbNumbers.push(aleatori)
}
return `rgb(${rgbNumbers[0]},${rgbNumbers[1]},${rgbNumbers[2]})`
}
console.log(rgbColorGenerator());
//3.-Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
const arrayOfHexaColors = () => {
    const arrayExa = [];
    let exadecimal = '0123456789abcdef';
    for(let i = 0; i < 5; i++){
        let exaAleatori = '';
     for(let j = 0; j < 6; j++){
        let rangeGenerator = Math.floor(Math.random() * exadecimal.length);
        exaAleatori += exadecimal[rangeGenerator]
     }
     arrayExa.push('#' + exaAleatori.toUpperCase())
    }
    return arrayExa;
}
console.log(arrayOfHexaColors());
//4.-Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
//creamos una funcion la cual recibe un parametro el cual sera la cantidad de color RGB en el array
const arrayOfRgbColors = (range) => {
    //creamos un array vacio donde se guardaran los colores
    let arrayRgb = [];
    //Creamos un bucle el cual va a iterar sobre el rango que indique el parametro
    for(let i = 0; i < range; i++){
        //Hacemos un push reutilizando una funcion anteiror que ya nos generaba colores rgb aleatorios
        arrayRgb.push(rgbColorGenerator())
    }
    //retornamos el array
    return arrayRgb;
}
//Imprimimos en consola el arry y le pasamos un numero indicandole el rango
console.log(arrayOfRgbColors(4));
//5.-Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
//Creamos una funcion que no recibe ningun parametro
const convertHexaToRgb = () => {
    //Guardamos en una variable una funcion anteior que nos crea numero hexadecimales
    let exadecimal = randomHexaNumberGenerator();
    //cortamos en pares con 'substring' 
    let r = exadecimal.substring(1,3);
    let g = exadecimal.substring(3,5);
    let b = exadecimal.substring(5,7);
    //Usamos parteInt pasandole como base 16 para que sean convertidos de manera correcta a RGB
    let rExa = parseInt(r, 16);
    let gExa = parseInt(g, 16);
    let bExa = parseInt(b, 16);
    //Concate
    return `rgb(${rExa},${gExa},${bExa})`;
}
//Mandamos a llamar a la funcion
console.log(convertHexaToRgb());
//6.-Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
const convertRgbToHexa = () => {
    //Guardamos en una variable la funcion que nos genera un color RGB
    let hexa = rgbColorGenerator();
    //Limpiamos el string con expresiones regulares, solo conservaremos los numeros
    let cleanCode = hexa.replace(/[^\d,]/g, '');
    //Los separamos en pares y nos los da en un array
    let arrayRgb = cleanCode.split(',');
    //Accedemmos a cada par y lo guardamos en una variable, debemos convertirlos en numeros ya que aun son string
    let r = +arrayRgb[0];
    let g = +arrayRgb[1];
    let b = +arrayRgb[2];
    //Convertimos con base 16
    let hexR = r.toString(16);
    let hexG = g.toString(16);
    let hexB = b.toString(16);
    //Creamos una condicional en la que se indique que si solo hay un digito se agregue un 0 al principio y en caso de que no se deja como esta
    if (hexR.length === 1) hexR = '0' + hexR;
    if (hexG.length === 1) hexG = '0' + hexG;
    if (hexB.length === 1) hexB = '0' + hexB;   
    //Concatenamos con el formato hexadecimal 
 return `#${hexR}${hexG}${hexB}`;
}
//LLmamos a la funcion
console.log(convertRgbToHexa());
//7.-Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.
//Creamos una funcion que recibe dos parametros
const generateColors = (type, longNumber) => {
//Creamos un array vacio que guaradara los numeros
const colors = [];
//Declaramos una condicion donde si el primer parametro es igual a 'hexa' pasa a iterar 
if(type === 'hexa'){
    //itera sobre el numero que es el segundo parametro 
for(let i = 0; i < longNumber; i++){
    //empuja la funcion que crea numero hexadecimales
    colors.push(randomHexaNumberGenerator())
}
}
//Declaramos una condicion donde si el primer parametro es igual a 'rgb' pasa al bucle
if(type === 'rgb'){
    //itera sobre el numero del segundo parametro 
   for(let i = 0; i < longNumber; i++){
    //agrega la funcion que genera colores RGB
    colors.push(rgbColorGenerator())
   }
}
//Retorna el array con los nuevos datos
return colors;
}
//Imprimo la funcion y le paso los paramtros correctos 
console.log(generateColors('hexa', 1))
//8.-Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
//Creamos una funcion que recibe un parametro
const shuffleArray = (arrSort) => {
//retorna el array ordenado por sort de manera aleatoria
return  arrSort.sort(() => Math.random() - 0.5);
}
 const consoles = ['PS4','XBOX','SWITCH','STEAMDECK'];
 //imprimimos el resultado
 console.log(shuffleArray(consoles))
 //9.-Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
 // Función para calcular el factorial de un número
function factorial(n) {
    // Si el número es 0, el factorial es 1 por definición
    if (n === 0) {
      return 1;
    }
    // Variable para almacenar el resultado del factorial, empezamos en 1
    let result = 1;
    // Bucle para multiplicar desde 1 hasta n
    for (let i = 1; i <= n; i++) {
      result *= i; // Multiplicamos el resultado por el valor actual de i
    }
    // Devolvemos el resultado final
    return result;
  }
  // Ejemplo: calcular el factorial de 5
  console.log(factorial(3)); // Imprime 120
  //10.-Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
  //Esta funcion recibe un parametro 
  const isEmpty = (character) => {
//Creamos una condicion la cual verifica si 'Character' esta vacio, o si el valor es indefinido o nulo
      if(character == null || character == undefined || character.length == 0 || character == false){  
        //En caso de que se cumpla cualquiera de las condiciones, muestra en consola 'Esdta vacio'
    console.log('Esta vacio')
      }else{
        //Y si el parametro contiene algun dato muestra el vbalor y el mensaje 'No esta vacio'
        console.log(`${character} no esta vacio`)
      }
  }
  //Se llama la funcion
  isEmpty('')
 //11.-Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
 //Creamos una funcion la cual recibe cualquier cantidad de parametros, colo camos el operador de propagacion ...arg
 const sum = (...arg) => {
    //Creamos una varibale la en la cual se iran sumando los numeros
  let sumTotal = 0;
  //Como el parametro en automatico se convierte en un array, iteramos con un bucle sobre la longuitud del array con lenght
  for(let i = 0; i < arg.length; i++){
    //sumamos y agregamos el valor de cada elemento dle array accediendo a su index con [i]
    sumTotal += arg[i];
  }
  //retornamos la suma total
  return sumTotal;
 }
 //LLamamos a la funcion y le colocamos n cantidad de argumentos
 console.log(sum(100,304,13,24));