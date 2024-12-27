//Nivel 1: Básico
//1.-Variable no definida: Escribe un código que intente usar una variable que no ha sido declarada. Atrapa el error y muestra un mensaje en la consola que explique el problema.
try{
let named = 'Alexa';
let fullNamed = `${named} ${lastName}`
}catch(err){
console.error(err)
}finally{
console.log(`My name is Alexa`)
}
//2.-División por cero: Intenta dividir un número por cero dentro de un bloque try. Usa catch para capturar el error y muestra un mensaje en la consola que explique por qué no es posible.
function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("La división por cero no está permitida.");
      }
      return a / b;
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      console.log("Operación finalizada.");
    }
  }
  
  console.log(divideNumbers(10, 2)); // Resultado: 5
  console.log(divideNumbers(10, 0)); // Error: La división por cero no está permitida.
//3.-Acceso a propiedad inexistente: Intenta acceder a una propiedad de un objeto que no existe. Usa try, catch y finally para manejar el error, y asegúrate de que el bloque finally se ejecute independientemente del error.
const cars = {
  marca: 'BMW',
  kilometraje: 1400,
  color: 'rojo'
}
try{
const fullCar = `${marca}${fecha}${kilometraje}${color}`
}catch(err){
console.log(err)
}finally{
 console.log('Mi carro es un MBW color Rojo')
}