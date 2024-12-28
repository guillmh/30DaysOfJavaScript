//Ejercicios Nivel 1
//1.-Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.
class animal {
    constructor(named,age,color,numPaws){
    this.named = named;
    this.age = age;
    this.color = color;
    this.numPaws = numPaws;   
    }
    myAnimal(){
        return `My animal is ${this.named},${this.age},${this.color},${this.numPaws}`
    }
}
const myAnimal = new animal('gato',2,'white',4);
console.log(myAnimal.myAnimal());
//2.-Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
class dog extends animal{
    sound(){
        return `${this.named} ladra`
    }
}
const myDog = new dog('Maxi');
console.log(myDog.sound());

class cat extends animal{
    soundCat(){
        return `${this.named} miau miau!!!`
    }
}
const myCat = new cat('Panter');
console.log(myCat.soundCat());

//Ejercicios nivel 2
//1.-Sobrescribir el método que se crea en la clase Animal.
class newAnimal extends animal {
    myAnimal(){
        return `My animal is: ${this.named}`
    }
}
const myNewAnimal = new newAnimal('Drako');
console.log(myNewAnimal.myAnimal());
//Ejercicios Nivel 3
//1.-Intentemos desarrollar un programa que calcule la medida de tendencia central de una muestra (media, mediana, moda) y la medida de variabilidad (rango, variación, desviación estándar). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puedes crear una clase llamada Statistics y crear todas las funciones que hacen cálculos estadísticos como método para la clase Statistics. Comprueba el resultado que aparece a continuación.
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
class statistics {
    constructor(arr){
     this.arr = arr;
    }
media(){
   const sumTotal = this.arr.reduce((acc, curr) => acc + curr, 0);
   const average = sumTotal / this.length;
   return `La media es ${average}`;
}
}
const med = new statistics(ages);
console.log(med.media());
// verifica por que da NAn