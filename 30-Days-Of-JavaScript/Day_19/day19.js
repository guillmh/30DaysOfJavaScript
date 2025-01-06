function sumData() {
    let count = 0;
    function plusOne() {
     count++;
     return count;
    }
    return plusOne;
};
const sumPlus = sumData();
// console.log(sumPlus());
// console.log(sumPlus());
//Ejercicios: Nivel 2
//1.-Crear una closure que tenga tres funciones internas
function datas(){
    let number = 0;
    function sum(){
        number++;
        return number;
    }
    function rest(){
        number--;
        return number;
    }
    function multi(){
        number++
       let mul = number * 2;
        return mul;
    }
    return {
        one: sum(),
        two: rest(),
        thre: multi()
    };
}
const innerFunctions = datas();
console.log(innerFunctions.one);
console.log(innerFunctions.two);
console.log(innerFunctions.thre);

//entender mejor closure apoyate de chatgpt y entender el la difrencia de los dos codigod anteriores

