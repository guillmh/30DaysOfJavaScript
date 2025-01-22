const countriesAPI = "https://restcountries.com/v2/all";

const getApi = async () => {
    try{
    const response = await fetch(countriesAPI);
    const dataApi =  await response.json();
    dataApi.map((countrie) => {
        let boxCountries = document.getElementById('boxCountries');
        const countrieData = document.createElement('div');
        boxCountries.appendChild(countrieData);
        countrieData.textContent = countrie.name;
    });
    }catch(error){
        console.log(error)
    }
};
getApi()
//Explica el codigo y porsteiormente agrega estilo en CSS

