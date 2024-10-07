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
//Declaramos dos variables, en una se guarda el numero mayor de skills y en el otro el nombre del usuario
let maxSkills = 0;
let nameUserSkills = '';
//Creamos un bucle para acceder al los valores del objeto
for(let user in users){
  //accedemos a los valores de usuario espeficicamente las skills
  let userSkills = users[user].skills;
  // Contar cuántas habilidades tiene el usuario
  let numberOfSkills = userSkills.length;
  //creamos una condicion donde se compara si numberofSkill es mayor  que masSkills guarda el mayor numero en la variable max skill
  if(numberOfSkills > maxSkills){
    maxSkills = numberOfSkills
    nameUserSkills = user;
  }
}
//Iteramos e imprimimos en consola tanto el usuario como su numero de skills
console.log(`${nameUserSkills} tiene mayores habilidades con un total de ${maxSkills}`);
//2.-Contar los usuarios conectados, contar los usuarios que tienen más o igual de 50 puntos del siguiente objeto.
let usersConnected = 0;
let usersPoints = [];
for(let connected in users){
let userConect = users[connected].isLoggedIn;
if(userConect === true){
  usersConnected += 1;
}
}
for( let pointed in users){
   let userPoint = users[pointed].points;
   if(userPoint >= 50){
  usersPoints.push(userPoint)
 }
}
console.log(`Usuarios con 50 o mas puntos:${usersPoints.length} Cantidad de usuarios  conectados:${usersConnected}`)
//3.-Encontrar personas que sean desarrolladores MERN(Mongo,express,react,node) stack del objeto de los usuarios
let namefullUser = '';
for(stack in users){
  let mernSearch = ['MongoDB','Express','React','Node'];
  let mernStack = users[stack].skills;
  let fullStack = mernSearch.every(sta => mernStack.includes(sta));
  if(fullStack){
   console.log(`${stack} cumple con el stack MERN:${mernStack}`)
  }
}
//explica el codigo