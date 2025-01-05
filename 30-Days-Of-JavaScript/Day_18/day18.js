const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";
//Ejercicios: Nivel 1
//1.-Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.
const dataRead = async () => {
    try{
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    const readJson = countries.map(({name, capital, languages, population, area}) => ({name, capital, languages, population, area}));
    console.log(readJson);
    }catch (error){
     console.log(error)
    }
};
//Ejercicios: Nivel 2
//1.-Imprime todos los nombres de los gatos en la variable catNames.
const readDataCat = async () =>{
    try{
     const response = await fetch(catsAPI);
     const cats = await response.json();
     const readNames = cats.map(({name}) => (name));
     console.log(readNames)
    }catch (error){
        console.log(error)
    }
};
//Ejercicios: Nivel 3
//1.-Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
const searchWeightCat = async () =>{
    try{
    const response = await fetch(catsAPI);
    const infoCats = await response.json();
    const catsWeight = infoCats.map(cat => {
        // Obtener el rango de peso en metric
        const [minWeight, maxWeight] = cat.weight.metric.split(" - ").map(Number);
      
        // Calcular el peso promedio
        const avgWeight = (minWeight + maxWeight) / 2;
      
        // Retornar el nombre y el peso promedio
        return { name: cat.name, weight: avgWeight };
      });
      console.log(catsWeight);
    }catch (error){
        console.log(error)
    }
};

//2.-Lee la api de países y descubre los 10 países más grandes
const searchMost = async () =>{
    try{ 
    const response = await fetch(countriesAPI);
    const dataApi = await response.json();
 //Recorre los datos de los paises (name y area);
 const searchThen = dataApi.map((country)=>{
return { area: country.area, nombre: country.name };
 });
//Ordena de manera ascendente los paises mediante el area
const orderArr = searchThen.sort((a, b) => b.area - a.area);
//Cortamos los 10 elementos
const cutThen = orderArr.slice(0, 10);
//Mostramos en consola lso 10 paises mas grandes
console.log(cutThen);
}catch (error){
console.log(error);
}
};

//3.-Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.
const lenguasWorld = async () =>{
    try{
        const response = await fetch(countriesAPI);
        const dataApi = await response.json();
        // Usamos reduce para acumular la suma de los lenguajes de cada país
        const totalLenguajes = dataApi.reduce((total, country) => {
            // Accedemos a la longitud del array 'languages' de cada país
            const numLanguages = country.languages.length;
            // Sumamos al total
            return total + numLanguages;
        }, 0); // El segundo argumento '0' es el valor inicial del acumulador

        console.log(`Total de lenguas en el mundo: ${totalLenguajes}`);
    }catch (error){
  console.log(error);
    }
};
lenguasWorld();