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
let searchNum = /-?\d+/g;
let nums = text.match(searchNum);
const sortedPoints = nums.map(Number).sort((a, b) => a - b);
return sortedPoints;
}
console.log(searchNumbers(textNum));