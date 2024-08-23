const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const mernStack = ["MongoDB", "Express", "React", "Node"];
  //1.-Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
  for(let i = 0;i < 11; i++){
  console.log(i)
  }
  //While
  let r = 0;
  while(r < 11){
  console.log(r)
  r++
  }
  //Usando do while
  let a = 0;
  do{
    console.log(a);
    a++
  }while(a < 11);
//2.-Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for(let i = 10; i >= 0; i--){
  console.log(i)
}
//while
let b = 10;
while(b >= 0){
  console.log(b);
  b--;
}
// do while
let v = 10;
do{
  console.log(v);
  v--;
}while(v >= 0)
//3.-Itera de 0 a n usando el bucle for
// let n = prompt("Ingrese un numero")
// if(!isNaN(n) && typeof n !== 'boolean' && n.trim() !== ''){
//  for(let i = 0; i > n; i++){
//   console.log(i)
//  }
// }else{
//   console.log("El caracter ingresado no es numerico")
// }
//4.-Escribe un bucle que haga el siguiente patrón usando console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
let n = 7; // Número de líneas
for (let i = 1; i <= n; i++) {
  let line = ''; // Inicializa una cadena vacía para la línea actual
  for (let j = 0; j < i; j++) {
    line += '#'; // Agrega un carácter '#' a la cadena
  }
  console.log(line); // Imprime la línea
}
//ahora el siguiente
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
let numb = 7;
for(let i = 0; i <= numb; i++){
let nu = '';
for(let n = 0;n < i; n++){
nu += i;
}
console.log(nu)
}
//Usa un bucle para imprimir el siguiente patrón:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
let lines = 11;
for(let i = 0; i <= lines; i++){
console.log(`${i} x ${i} = ${i * i}`)
}
//6.-Usando un bucle imprime el siguiente patrón:
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
let power = 10;
for(let i = 0; i <= power; i++){
  //let poten = i ** i;
  console.log(`${i} ${i * i} ${i * i * i}`)
}
//7.-Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
//Iniciamos i en 0, colocamos la condicion de si 'i' es menor o igual que 100, e incrementamos en uno hasta que la condicion sea falsa
for(let i = 0; i <= 100; i++){
//agregamos una condicion con operado-res ternarios, si el numero que en ese momento este en 'i' el residuo de de la division por 2 es 0 imprimelo si no, deja un espacio vacio
 i % 2 === 0 ? console.log(i) : ''
}
//8.-Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for(let i = 0; i <= 100; i++){
//Al contrario que los numero pares, buscamos un numero que dividido 2 su residuo sea de 1
i % 2 === 1 ? console.log(i) : ''
}
//9.-Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
          isPrime = false;
          break;
      }
  }
  if (isPrime) {
      console.log(i);
  }
}
//10.-Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let sumatotal = 0;
for(let i = 0; i <= 100; i++){
 sumatotal += i;
}
console.log(`La suma de todos los números de 0 a 100 es: ${sumatotal}`)
//11.-Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let sumImpares = 0;
let sumPares = 0;
for(let i = 0; i <= 100; i++){
 i % 2 === 0 ? sumPares += i: '';
 i % 2 === 1 ? sumImpares += i: '';
}
console.log(`Numeros pares:${sumPares}`)
console.log(`Numero impares:${sumImpares}`)
//12.-Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
let sumpar = 0;
let sumimp = 0;
for(let i = 0; i <= 100; i++){
  if(i % 2 !== 1){
    sumpar += i;
  }else{
    sumimp += i;
  }
}
let stringP = `${sumpar} ${sumimp}`;
console.log(stringP.split(' '))
//13.-Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
let arrayAleatori = [];
for(let i = 1; i <= 5; i++){
  let randomNumber = Math.floor(Math.random() * 100);
  arrayAleatori.push(randomNumber)
}
console.log(arrayAleatori);
//14.-Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
let arr = [];
while(arr.length < 5){
  let random = Math.floor(Math.random() * 100);
  if(!arr.includes(random)){ // Verifica si el número ya está en el arreglo
    arr.push(random); // Agrega el número solo si no está en el arreglo
  }
}
console.log(arr);
//15.-Desarrolla un pequeño script que genera un id aleatorio de seis caracteres: 5j2khz
let id = ''; // Cadena para almacenar el ID generado
let letters = 'a1b2cdefghij3kl4m9n6ño0pqr5stuv7wx8yz'; // Conjunto de caracteres posibles
for(let i = 1;i <= 6; i++){ // Bucle para generar 6 caracteres
  let randomCharacter = Math.floor(Math.random() * letters.length)  // Índice aleatorio
  id += letters[randomCharacter] // Añadir el carácter aleatorio a la cadena
}
console.log(id)// Imprimir el ID generado
//Ejercicios: Nivel 2
//1.-Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
//Declaramos una variable con los numero del 0 al 9 para tener la posibilidad de hacer cualquier conbinacion de numeros
let numberAleatori = 'a0b12g3ewqjkgevcvff5blj6gfdh789';
//Declaramos otra variable en la cual almacenaremos el id aleatorio
let numbers = '';
//la variable 'numerr' nos va a generar un numero aleatoria entre 0 y 9, multiplicamos Math.random por la longuitud de la cadena 'numberAleatori'
let numerr = Math.floor(Math.random() * numberAleatori.length)
//Declaramos un bucle el cual iniciara en 0, la condicion que esta en el bucle es si i es menor o igual que 'numerr' que nos da un numero a leatorio por lo tanto tendremos una longuitud aleatoria.
for(let i = 0; i <= numerr; i++){
//Declaramos un varibale la cual nos dara una combinacion aletoria con los numeros de la cadena 'numberAleatori'
let randomNumbers = Math.floor(Math.random() * numberAleatori.length);
//Agregamos la combinacion a la cadena vacia
numbers += numberAleatori[randomNumbers]
}
//Volvemos a imprimir la variable 'Numbres' esta vez tendra la longuitud aleatoria y una combinacion aleatoria
console.log(numbers)
//2.-Escribe un script que genere un número hexadecimal aleatorio.
let exadecimal = '0123456789abcdef';
let numberExa = '';
for(let i = 0; i <= 5; i++){
  let randomExa = Math.floor(Math.random() * exadecimal.length)
  numberExa += exadecimal[randomExa];
}
console.log(`#${numberExa.toLowerCase()}`)
//3.-Escribe un script que genere un número de color rgb aleatorio.
// Array para almacenar los valores RGB
let rgbValues = [];
// Bucle para generar tres valores RGB
for (let i = 0; i < 3; i++) {
  let randomRgb = Math.floor(Math.random() * 256);
  rgbValues.push(randomRgb);
}
// Formatea el resultado en el formato "rgb(r, g, b)"
let rgbLine = `rgb(${rgbValues.join(', ')})`;
console.log(rgbLine);
//4.-Usando el array countries anterior, crea un array como el siguiente: ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//Creamos una variable la cual le asiganamos un array vacio 
const countriesNew = [];
//Creamos un bucle, el cual va a iterar sobre el numero de elemntos del array de paises, con push ingresara cada pais y se le agregara la funcion para que los pase a mayusculas
for(let i = 0; i < countries.length; i++){
  countriesNew.push(countries[i].toUpperCase());
}
//Se imprime el array que antes estaba vacio: 
console.log(countriesNew)

//5.-Usando el array countries anterior, crea un array para saber la longitud de cada país: [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = [];
for(let i = 0; i < countries.length; i++){
  countriesLength.push(countries[i].length)
}
console.log(countriesLength)
//Utiliza el array countries para crear la siguiente array de arrays:
// [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
//Se crea un array vacio 
let countriesChap = [];
//Se itera sobre la longuitud de caracteres del array countries,
for(let i = 0; i < countries.length; i++){
  //Accede a cada pais del array ejemplo countries[1],countries[2]
  let country = countries[i];
  //En esta variable cortamos los tres primeros caracteres de cada pais conforme se vaya accediendo en country, y le pasamos la funcion para que los convierta en mayuscula, 
  let abbreviation = country.substring(0, 3).toUpperCase();
  //por ultimo creamos un sub array, es decir por cada iteracion nos va a crear un sub array, en el pondremos el formato que se nos solicita, primero el no-mbre de cada pasi que se accede en la variable 'country', despues se colaca los tre primeso caracteres cortados de y ya convertidos a mayuscula, por ultimo simplemente pasamos la longuitud de cada pais
  let subArray = [country, abbreviation, country.length];
  //Enviamos cada subarray que se ira creando al array vacio que esta fuera de nuestro bucle.
  countriesChap.push(subArray)
}
//Imprimimos en consola el array que en un principio estaba vacio
console.log(countriesChap)
//7.-En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo como array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.
// Array vacío para almacenar los países que contienen la palabra 'land'
let landCountries = [];
// Bucle para recorrer cada país en el array `countries`
for (let i = 0; i < countries.length; i++) {
    // Asigna el país actual a la variable `landWithCountries`
  let  landWithCountries = countries[i];
   // Verifica si el país contiene la palabra 'land'
  if (landWithCountries.includes('land')) {
 // Si contiene 'land', agrega el país al array `landCountries`
    landCountries.push(countries[i]);
  }
}
// Después de completar el bucle, verifica si el array `landCountries` tiene algún país
if (landCountries.length > 0) {
  // Si `landCountries` no está vacío, imprime los países que contienen 'land'
  console.log(landCountries);
} else {
   // Si `landCountries` está vacío, imprime que ningún país contiene la palabra 'land'
  console.log('Todos estos países no tienen la palabra land');
}

// 8.-En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.
//['Albania', 'Bolivia','Ethiopia']
let countriesIa = [];
for(let i = 0; i < countries.length; i++){
  let countriesMp = countries[i];
  if(countriesMp.substring('ia'))
  {
    countriesIa.push(countries[i])
  }
}
//Este bucle nos permitira comprarar cada elemento del array countries con el numero mas grande del array 'countriesOrder' 
for(const countrie of countries){
  if(countrie.length > 7 ){
  console.log(`'${countrie}' Contiene el mayor numero de carcateres, que es ${countrie.length}`)
  }
}
//10.-Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres. // ['Japan', 'Kenya']
for(const countriesFive of countries){
  if(countriesFive.length === 5){
    console.log(`'${countriesFive}' solo contiene 5 caracteres`)
  }
}
//11.-Encuentra la palabra más larga en el array webTechs
for(const wordLong of webTechs){
  if(wordLong.length > 9){
    console.log(`${wordLong} es la palabra mas larga con ${wordLong.length}`)
  }
}
//12.Utiliza el array de webTechs para crear la el siguiente array de arrays:
//[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const consArr = [];
for(let i = 0; i < webTechs.length; i++){
let newArr = webTechs[i];
let formatTech =[newArr, newArr.length]
consArr.push(formatTech)
}
console.log(consArr)
//13.-Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
//Vamos a crear el array de ahi extraer solo la primera letra y formar el stacC MERN  
const stack = ['MongoDB','Express','React','Node'];
let mern = '';
for(let i = 0; i < stack.length; i++){
  let mernSub = stack[i].substring(0,1);
  mern += mernSub
}
console.log(mern);
//14.-Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
for(const lenguague of webTechs){
  console.log(lenguague)
}
//15.-Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
const fruit = ['banana', 'orange', 'mango', 'lemon'];
const newFruit = [];
for(let i = 3; i >= 0; i--){
  newFruit.push(fruit[i])
}
console.log(newFruit)
//16.-Imprime todos los elementos del array como se muestra a continuación:
const fullStack = [["HTML", "CSS", "JS", "React"],["Node", "Express", "MongoDB"],];
//Se inicia un bucle for..of, en este primer array se accede a los dos primeros sub arrays, es decir la constante 'fullprograming' vale el primer sub array y despues vale el segundo array.
for(const fullPrograming of fullStack){
//Ahora con un bucle anidado se accede a cada sub array de fullprograming, 
 for (const newFull of fullPrograming){
  //ahora 'newFull' temina valiendo cada elemento de cada sub array HTML,CSS,JS.....
  console.log(newFull)
 }
}
//Ejercicios: Nivel 3
//1.-Copia el array countries (Evita mutaciones)
let countriesDoble = countries;
//2.-Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries.
let sortedCountries = countriesDoble.sort();
//3.-Ordena el array webTechs y el array mernStack
let sortedWebTech = webTechs.sort();
let sortedMernStack = mernStack.sort();
//4.-Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array.
let landArry = [];
for(let i = 0; i < sortedCountries.length; i++){
let withLand = sortedCountries[i]
if(withLand.includes('land')){
  landArry.push(withLand)
}
}
console.log(landArry)
//5.-Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
let arrayCompration = sortedCountries[0];
for(let i = 0; i < sortedCountries.length; i++){
let countrie = sortedCountries[i];
if(countrie.length > arrayCompration.length){
  arrayCompration = countrie;
}
}
console.log(`${arrayCompration} es el pais con mas caracteres, ${arrayCompration.length}`)
//6.Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
let landWithNew = [];
for(let i = 0; i < sortedCountries.length; i++){
  let countrieDs = sortedCountries[i];
  if(countrieDs.includes('land')){
    landWithNew.push(countrieDs)
  }
}
console.log(landWithNew)
//7.-Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array.
let characterFour = [];
for(let i = 0; i < sortedCountries.length; i++){
let newFour = sortedCountries[i];
if( newFour.length === 4){
  characterFour.push(newFour)
}
}
console.log(characterFour)
//8.-Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array.
let twoCharacter = [];
for(let i = 0; i < sortedCountries.length; i++){
  let countrisWidthTwo = sortedCountries[i];
  if(countries.length >= 2){
    twoCharacter.push(countrisWidthTwo)
  }
}
console.log(twoCharacter)
//9.-Invertir el array countries y poner en mayúscula cada país y almacenalo en un array
let upCountries = [];
for(let i = sortedCountries.length - 1; i >= 0; i--){
  let countrieP = sortedCountries[i];
  upCountries.push(countrieP.toUpperCase());
}
console.log(upCountries)