const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//1.-Explique la diferencia entre forEach, map, filter, and reduce.
console.log('Foreach: Permite ejecutar una funcion especifica sobre cada elemento de un array sin devolver uno nuevo.');
console.log('Map: Recorre cada elemento pero nos duvuelve uno nuevo con la funcion aplicada.');
console.log('Filter: Crea un nuevo array con los elementos que cumplan con la condicion implementada')
console.log('Reduce: Reduce el array a un solo valor ejecutando una funcion en cada elemento(De izquierda a Derecha)');
//2.-Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
console.log('Un callback es una funcion que se pasa como un parametro a otra funcion o bien retorna otra funcion, lo que permite que la función receptora la invoque (o "llame") en un momento determinado. Esto permite que el código sea más modular y reutilizable.')
//3.-Utiliza forEach para mostrar con console.log cada país del array de países.
countries.forEach((num) => console.log(num));
//4.-Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
names.forEach((names) => console.log(names));
//5.-Utiliza forEach para mostrar con console.log cada número del array de números.
numbers.forEach((numbers) => console.log(numbers));
//6.-Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
countries.map((countrie) => console.log(countrie.toLocaleUpperCase()));
//7.-Utilice map para crear un array de longitudes de países a partir del array de países.
const countriesLengths = countries.map((country) => country.length);
console.log(countriesLengths);
//8.-Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const countriesElevated = countriesLengths.map((countrieElevated) => countrieElevated ** 2);
console.log(countriesElevated);
//9.-Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const newNames = names.map((nameUser) => nameUser.toLocaleUpperCase());
console.log(newNames);
//10.-Utilice map para asignar el array de productos a sus correspondientes precios.
const productPrices = products.map((item) => {
// Si el precio es un número válido, se mantiene, de lo contrario se asigna 'N/A'
  return {
    product: item.product,
    price: item.price === "" || item.price === " " ? "N/A" : item.price,
  };
});

console.log(productPrices);
//11,-