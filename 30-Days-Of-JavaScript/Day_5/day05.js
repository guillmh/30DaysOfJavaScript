//Ejercicios: Nivel 1
// 1.-Declara un array vacío.
const arr = Array();
console.log(arr)
//2.-Declara un array com mas de 5 elementos.
const arrelemnts = ['Jose','Alexa','Diana','Rosa','David'];
console.log(arrelemnts)
// Encuentra la longitud de tu array.
console.log(`La longitud del array es de ${arrelemnts.length}`)
// Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
console.log(`Primer elemento:${arrelemnts[0]}\nSegundo elemento:${arrelemnts[2]}\nTercer elemento:${arrelemnts[4]}`)
// Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
const mixedDataTypes = ['pera','manzana','sandia','platano','uva','limon'];
console.log(`la longuitud del array es de ${mixedDataTypes.length}`)
// Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// Imprima el array usando console.log().
console.log(itCompanies)
// Imprima el número de empresas en el array.
console.log(`Numero de empresas en el array: ${itCompanies.length}`)
// Imprime la primer empresa , la intermedia y la última empresa
console.log(`Primer empresa:${itCompanies[0]}\nEmpresa intermedia:${itCompanies[3]}\nUltima empresa:${itCompanies[6]}`)
// Imprime cada empresa.
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])
// Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase())
// Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
console.log(itCompanies.toString())
// Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let indexarr = itCompanies.indexOf('Apple')
if (indexarr === -1){
    console.log("La empresa no existe")
}else{
    console.log(`La empresa si existe`)
}
// Filtre las empresas que tienen más de una 'o' sin el método filter()
//Por el momento no sulucioonable con los conocimientos del deia 5
// Ordene el array usando el método sort()
//console.log(itCompanies.sort())
// Invierte la array usando el método reverse()
//console.log(itCompanies.reverse())
// Cortar las primeras 3 empresas del array
//console.log(itCompanies.slice(0, 3))
// Cortar las últimas 3 empresas del array
//console.log(itCompanies.slice(4, 7))
// Cortar la empresa o empresas intermedias de TI del array
//console.log(itCompanies.slice(3,4))
// Eliminar la primera empresa de TI del array
//let short = itCompanies.splice(0, 1);
//console.log(short)
// Eliminar la empresa o empresas intermedias de TI del array
let indexit = Math.floor(itCompanies.length / 2);
const removed = itCompanies.splice(indexit, 1);
console.log(`Empresa eliminada ${removed}`)
console.log(itCompanies);
// Elimine la última empresa de TI del array
const removedpop = itCompanies.pop()
console.log(itCompanies);
// Eliminar todas las empresas de TI
const removedall = itCompanies.splice(0,5);
console.log(itCompanies);
//Ejercicios: Nivel 2
//1.-Cree un archivo de countries.js separado y almacene el array de países en este archivo, 
//cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
const countries = ['Argentina', 'Brasil', 'Canadá', 'Dinamarca', 'Egipto', 'Francia', 'Grecia', 'India', 'Japón', 'Kenia'];
//2.-Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
//Eliminamos los signos de puntuacion con expresiones regulares, indcamos ., seguido de 'g' para que busque en toda la cadena
let deleted = /[,.]/g
//Indicamos que de la cadena remplace con el metodo replace deleted que son los signos de puntuacion, seguido de comillas vacias, y por ultimo lo convertimos a array consplit y que lo separe en por espacios
let textun = text.replace(deleted,'').split(' ')
console.log(textun)
console.log(`Longitud del Array: ${textun.length}`)
//3.En el siguiente carrito de compras agregue, elimine, edite artículos
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
//Elimine 'Honey' si es alérgico a la miel (honey)
shoppingCart.pop('Honey')
//Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
shoppingCart.unshift('Meat')
//Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
shoppingCart.push('Sugar')
//Modificar Tea a 'Green Tea'
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)
//4.-En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
if (countries.includes('Ethiopia') === true){
 console.log('Ethiopia')
}else{
    countries.push('Ethiopia')
}
console.log(countries)
//5.-En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
if (textun.includes('Sass') === true) {
    console.log('Sass es un preproceso de CSS')
}else{
    textun.push('Sass')
}
console.log(textun)
//Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack);
//Ejercicios: Nivel 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Ordene el array y encuentre la edad mínima y máxima
ages.sort()
//Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
let agesMedium = Math.floor(ages.length / 2);
console.log(ages[agesMedium])
console.log(ages)
//Encuentre el rango de las edades (max menos min)
let agesmax = (ages[9] - ages[0])
console.log(`Rango de edades: ${agesmax}`)
//Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
//Sacamos el promedio, reduce toma dos valores, un que emopieza en 0 y otro que empieza en uno
const sum = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9];
let avg = sum / ages.length;
//Encontramos el maximo y le minimo del promedio 
let min = Math.min(...ages);
let max = Math.max(...ages);

let diffMin = Math.abs(min - avg);
let diffMax = Math.abs(max - avg);

console.log(`Valor minimo: ${diffMin}\nValor maximo: ${diffMax}`);
//1.Cortar los diez primeros países de la array de países
let slic = countries.slice(10, 11)
console.log(slic)
//2.-Encuentre el país o países de en medio en el array de países
let mediumCountries = Math.floor(countries.length / 2);
console.log(countries[mediumCountries])
//3.-Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.
let half =  Math.floor(countries.length / 2);
if (countries.length % 2 === 0){
  countries.slice(0, half)
}else{
countries.push('Mexico')
const countriesmidle = countries.length / 2
const countries2 = countries.slice(0, countriesmidle)
const countries3 = countries.slice(countriesmidle)
 
console.log(`Se agrego ${countries[11]} ya que el array era impar\nPrimera parte: ${countries2}\nSegunda parte: ${countries3}`)
}
