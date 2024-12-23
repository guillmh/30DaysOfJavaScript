//Ejercicios Nivel 1
//1.- Mostrar la matriz de países como una tabla
const countries = [
    "United States", 
    "Canada", 
    "Mexico", 
    "Brazil", 
    "Germany", 
    "Japan", 
    "India", 
    "Australia"
  ];
console.group('Countries');
console.table(countries);
console.groupEnd();
//2.-Mostrar el objeto países como una tabla
const countriesAndCity = {
    "United States": "Washington, D.C.",
    "Canada": "Ottawa",
    "Mexico": "Mexico City",
    "Brazil": "Brasilia",
    "Germany": "Berlin",
    "Japan": "Tokyo",
    "India": "New Delhi",
    "Australia": "Canberra"
  };
  console.group('Countries and cityes');
  console.table(countriesAndCity);
  console.groupEnd();
  //3.-Utilice console.group() para agrupar los registros
//Ejercicios:Nivel 2
//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, '10 no es mayor que 20');
//2.-Escribe un mensaje de advertencia utilizando console.warn()
console.warn('Cuidado, no debes pegar nada en consola');
//3.-Escribe un mensaje de error utilizando console.error()
console.error('No se puede iniciar el servidor');
//Ejercicios Nivel 3
//1.-Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach
const names = ['Alexa','Felicia','Antonio','Marco'];

console.time('Loop for')
for(let i = 0; i < names.length; i++){
  console.log(names[i])
}
console.timeEnd('Loop for')

console.time('Loop for Of')
for(named of names){
  console.log(named)
}
console.timeEnd('Loop for Of');

console.time('Loop while');
let index = 0;
while(index < names.length){
  console.log(names[index]);
  index++;
}
console.timeEnd('Loop while')
