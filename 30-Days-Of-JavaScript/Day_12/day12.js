//Ejercicios: Nivel 1
//1.-Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'.
let incomeCash = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes';
const yearCash = (text) => {
    let searchText = /\d+/g;
    let diner = text.match(searchText);
    let salary = diner[0] * 12;
    let bonuses = diner[1];
    let courses = diner[2] * 12;
    return +salary + +bonuses + +courses;

}
console.log(yearCash(incomeCash));
//2.-La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.
let textNum = 'La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva';
const searchNumbers = (text) => {
let nums = text.match(/-?\d+/g).map(Number);
// 2. Encontrar el valor mínimo y máximo
const min = Math.min(...nums);
const max = Math.max(...nums);
// 3. Calcular la distancia
const distance = Math.abs(max - min);
return `${nums} ${distance}`;
}
console.log(searchNumbers(textNum));
//3.-Escribir un patrón que identifique si una cadena es una variable JavaScript válida
const validatedString = (text) => {
    let pattern = /^[a-zA-Z_][a-zA-Z_]*$/;
    let validated = pattern.test(text)
    return validated;
}
console.log(validatedString('2first-name'));
//Ejercicios: Nivel 2
//1.-Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras más frecuentes de una cadena?
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const tenMostFrequentWords = (text, num) => {
const search = /[a-zA-Z]+/g;
const searchWords = text.match(search).map((word) => word.toLowerCase());
// Crear un Map para almacenar las frecuencias de las palabras
const wordMap = new Map();
// Contar las frecuencias
 searchWords.forEach(word => {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);  // Incrementar la frecuencia
    } else {
      wordMap.set(word, 1);  // Inicializar la frecuencia
    }
  });
// Convertir el Map a un array y ordenar por frecuencia
 const sortedWords = Array.from(wordMap.entries()).sort((a, b) => b[1] - a[1]);  // Ordenar por la frecuencia (valor) de mayor a menor
 // Tomar las 10 palabras más frecuentes
 const top10Words = sortedWords.slice(0, num).map(entry => {
    return { word: entry[0], frequency: entry[1] };  // Crear un objeto con la palabra y su frecuencia
  });

  return top10Words;
}
console.log(tenMostFrequentWords(paragraph, 10));
//Ejercicios: Nivel 3
//1.-Escribe una función que limpie el texto. Limpia el siguiente texto. Después de la limpieza, cuente tres palabras más frecuentes en la cadena.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
 const cleanText = () => {
  let symbol = /[#@!?$;%&]/g;
  let cleansentense = sentence.replace(symbol, '');
  const words = cleansentense.match(/[a-zA-Z]+/g);
  const groups = new Map();
  words.forEach(wor => {
       if (groups.has(wor)){
        groups.set(wor, groups.get(wor) + 1)
       } else {
        groups.set(wor, 1);
       }
  });

  const sortWor = Array.from(groups.entries()).sort((a ,b) => b[1] - a[1]);
  const wordSingle = sortWor.filter((sing) => sing[0].length >= 2);
  const top3Words = wordSingle.slice(0, 3).map(entry => {
    return { word: entry[0], frequency: entry[1] };  // Crear un objeto con la palabra y su frecuencia
  });

  return top3Words;
 }
 console.log(cleanText());