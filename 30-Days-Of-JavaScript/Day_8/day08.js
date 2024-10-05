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
//Ejercicios: Nivel 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1.-Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
let maxSkills = 0;
let nameUserSkills = '';
for(let user in users){
  let userSkills = users[user].skills;
  // Contar cuántas habilidades tiene el usuario
  let numberOfSkills = userSkills.length;
  if(numberOfSkills > maxSkills){
    maxSkills = numberOfSkills
    nameUserSkills = user;
  }
}
console.log(`${nameUserSkills} tiene mayores habilidades con un total${maxSkills}`)