//Ejercicios: Nivel 1
//1.-Crear un objeto vacío llamado dog
const dog = {};
//2.-Imprime el objeto dog en la consola
console.log(dog);
//3.-Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
dog.name = 'Clarck';
dog.legs = 2;
dog.color = 'White';
dog.age = 4;
dog.bark = function (){
    return  'woof woof'
};
console.log(dog)
//4.-Obtener name, legs, color, age y el valor de bark del objeto dog
let dogChow = `${dog.name},${dog.legs},${dog.age},${dog.bark()}`;
console.log(dogChow);
//5,.-Establecer nuevas propiedades al objeto dog: breed, getDogInfo
dog.breed = 'Pitbull';
dog.getDogInfo = function(){
    return `My dog is: ${this.name} the color is: ${this.color}`};
console.log(dog);