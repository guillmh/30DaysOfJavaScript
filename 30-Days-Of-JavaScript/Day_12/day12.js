//Ejercicios: Nivel 1
//1.-Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'.
let incomeCash = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes';
const yearCash = (text) => {
    let searchText = /\d+/g;
    let diner = text.match(searchText)
    let salary = diner[0] * 12;
    let bonuses = diner[1];
    let courses = diner[2] * 12;
    return +salary + +bonuses + +courses;

}
console.log(yearCash(incomeCash));