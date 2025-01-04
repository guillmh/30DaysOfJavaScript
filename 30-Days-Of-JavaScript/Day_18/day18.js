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
     const readNames = cats.map(({name}) => ({name}));
     console.log(readNames)
    }catch (error){
        console.log(error)
    }
};
