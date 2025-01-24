const countriesAPI = "https://restcountries.com/v2/all";

const getApi = async () => {
    try{
    const response = await fetch(countriesAPI);
    const dataApi =  await response.json();
    dataApi.map((countrie) => {
        //Obtiene el div que contendra os paises
        let boxCountries = document.getElementById('boxCountries');
        let getCountrie = document.getElementById('numberCountries');
        //Crea un div donde iran los nombres de los paises
        const countrieData = document.createElement('div');
        //Agrega los div a la caja de paises
        boxCountries.appendChild(countrieData);
        //Agrega texto el cual es el nombre los paises 
        countrieData.textContent = countrie.name;
        //Obtiene el numero de paises
        getCountrie.textContent = dataApi.length;
        //Estilos para el div de cada pais
        countrieData.style.display = 'flex';
        countrieData.style.width = '135px';
        countrieData.style.height ='135px'
        countrieData.style.justifyContent = 'center';
        countrieData.style.alignItems = 'center';
        countrieData.style.textAlign = 'center';
        countrieData.style.border = '1px solid #f1f1ef';
        countrieData.style.borderRadius = '5px';
        countrieData.style.margin = '5px';
    });
    }catch(error){
        console.log(error)
    }
};
getApi()


