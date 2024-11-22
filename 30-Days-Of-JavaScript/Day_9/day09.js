const countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand","Eslovakia"];
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
//11.-Utilice filter para filtrar los países que contienen land.
const landCountries = countries.filter((countrie) => countrie.toLocaleLowerCase().includes('land'));
console.log(landCountries);
//12.-Utilice filter para filtrar los países que tienen seis caracteres.
const sixCharacters = countries.filter((countrie) => countrie.length === 6);
console.log(sixCharacters);
//13.-Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const charactersCountrie = countries.filter((countrie) => countrie.length >= 6);
console.log(charactersCountrie);
//14.-Utilice filter para filtrar los países que empiezan por "E";
const countriesE = countries.filter((countrie) => countrie.startsWith("D"));
console.log(countriesE);
//15.-Utilice filter para filtrar sólo los precios con valores.
const priceNumber = products.filter((priced) => typeof priced.price === "number" && !isNaN(priced.price))
console.log(priceNumber);
//16.-Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
const arrNew = [1,'Andres',4,'Alexa',6];
//Creamos una funcion flecha que recibe un array como parametro
const getStringLists = (arr) => {
//Del array vamos a filtrar cada elemento que cumpla con la condicion, si element es de tipo string devolva true y pasara el filtro
  return arr.filter((element) => typeof element === 'string');
};
//Se imprime la funcion y se le pasa un arrayt de prueba
console.log(getStringLists(arrNew));
//17.-Usa reduce para sumar todos los números del array de números.
//declaramos dos parametros, acumulator donde se acumula la suma de los numero y num el elemento de un array, se suman y se indica que inicializara en 0
const sumArr = numbers.reduce((acumulator, num) => acumulator + num, 0);
console.log(sumArr);
//18.-Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
const phrase = countries.reduce((accumulator, country, index, array) => {
  if (index === array.length - 1) {
    return `${accumulator} y ${country}`; // Añade "y" antes del último país
  }
  return `${accumulator}, ${country}`; // Concatenar países con comas
}, ""); // Valor inicial como cadena vacía

const finalPhrase = `${phrase} son países del norte de Europa.`;
console.log(finalPhrase);
//19.-Explique la diferencia entre some y every
// some: Devuelve true si al menos un elemento del array cumple con la condición dada.
// Es como preguntar: ¿Hay alguno que cumpla con esto?
// Every:
//20.-Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
const longNames = names.some((named) => {
  if(named.length > 7){
   console.log(`${named} tiene una longuitud mayor a 7`);
   return true;
  }
});
console.log(longNames);
//21.-Utilice every para comprobar si todos los países contienen la palabra land.
const searcLand = countries.every((countrie) => countrie.includes('land'));
if(searcLand === false){
  console.log(`${searcLand} por que no todos tienen la palabra 'land'`);
}else{
  console.log('True por que todos tienen la plabra "land"')
};
//22.-Explique la diferencia entre find y findIndex.
//find: Devuelve el primer elemento del array que cumple con la condición especificada en la función callback.
//findIndex: Devuelve el índice del primer elemento que cumple con la condición especificada en la función callback.
//23.-Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
const firstCountrie = countries.find((countrie) => countrie.length === 6);
console.log(`${firstCountrie} es el primer pais que contiene seis letras en el array`);
//24.-Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
const positionCountrie = countries.findIndex((countrie) => countrie.length === 6);
console.log(`${positionCountrie} es la posicion del primer pais que tiene 6 letras`);
//25.-Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
const searchNorway = countries.findIndex((countrie) => countrie === 'Norway');
console.log(searchNorway);
//26.-Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
const searchRussia = countries.findIndex((countrie) => countrie === 'Russia');
console.log(searchRussia);
//Ejercicios: Nivel 2
//1.-Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
const preciTotal =  products.filter((priced) => typeof priced.price === 'number').reduce((acumulator, reduc) => acumulator + reduc.price, 0);
console.log(preciTotal);
const data = [
  { country: "English", count: 91 },
  { country: "Spanish", count: 85 },
  { country: "French", count: 70 },
  { country: "German", count: 50 },
  { country: "Chinese", count: 120 },
  { country: "Japanese", count: 65 },
  { country: "Korean", count: 40 },
  { country: "Arabic", count: 55 },
  { country: "Portuguese", count: 60 },
  { country: "Russian", count: 80 },
  { country: "Hindi", count: 110 },
  { country: "Italian", count: 45 },
  { country: "Turkish", count: 30 },
  { country: "Dutch", count: 25 },
  { country: "Swedish", count: 20 }
];
//2.-Encuentre la suma del precio de los productos usando sólo reduce(callback)).
const sumPrice = products.reduce((acumulator, num) => {
if(typeof num.price === 'number'){
  return acumulator + num.price;
}
return acumulator;
},0);
console.log(sumPrice)
//3.-Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
const categorizeCountries = (countries, patterns) => {
  return countries.filter(country => {
    // Lógica para verificar si el país coincide con algún patrón
    return patterns.some(pattern => 
      country.toLowerCase().includes(pattern.toLowerCase())
    );
  });
};
console.log(categorizeCountries(countries,['land','ia']));
//Volver a estudiar y ver q ue hace 
//4.-

//Ejercicios: Nivel 3
//2.-Encuentre las 10 lenguas más habladas:
const mostSpokenLanguages = (languages, topN) => {
  return languages.sort((a,b) => a.count - b.count).slice(0, topN);
};
console.log(mostSpokenLanguages(data, 6));
//3.-Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.
const populationDay = [
  { country: "China", population: 1377422166 },
  { country: "India", population: 1352642280 },
  { country: "United States", population: 331893745 },
  { country: "Indonesia", population: 273523621 },
  { country: "Pakistan", population: 233500636 },
  { country: "Brazil", population: 216310015 },
  { country: "Nigeria", population: 223804632 },
  { country: "Bangladesh", population: 169577608 },
  { country: "Russia", population: 144373535 },
  { country: "Mexico", population: 128970579 },
  { country: "Japan", population: 125584839 },
  { country: "Ethiopia", population: 126527060 },
  { country: "Philippines", population: 117337368 },
  { country: "Egypt", population: 112716406 },
  { country: "Vietnam", population: 98168850 }
];
const mostPopulation = (arr, topN) => {
  return arr.sort((a,b) => a.population - b.population).slice(0, topN);
}
console.log(mostPopulation(populationDay, 7));
//4.-Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.
