const countriesAPI = "https://restcountries.com/v2/all";

const getApi = async () => {
    try{
    const response = await fetch(countriesAPI);
    const dataApi =  await response.json();
    console.log(dataApi);
    }catch(error){
        console.log(error)
    }
};
getApi()
