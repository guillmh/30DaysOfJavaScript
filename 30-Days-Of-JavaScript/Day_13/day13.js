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

