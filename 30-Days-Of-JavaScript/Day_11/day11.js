const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
//Ejericicos nivel 1
//1.-Desestructurar y asignar los elementos del array de constantes para e, pi, gravedad, humanBodyTemp, waterBoilingTemp.
const  [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
//2.-Desestructurar y asignar los elementos del array de países a fin, est, sw, den, nor
const [fin, est, sw, den, nor] = countries
//3.-Desestructurar el objeto rectángulo por sus propiedades o keys.
const {width, height, area, perimeter} = rectangle
//Ejercicios nivel 2
//1.-Iterar a través del array de usuarios y obtener todas las keys del objeto utilizando la desestructuración
for({name, scores, skills, age} of users){
 console.log(name, scores, skills, age)
};
//2.-Encuentra las personas que tienen menos de dos habilidades
const usersWithFewerSkills = users.filter(({ skills }) => skills.length < 2);
console.log(usersWithFewerSkills);
//3.-Ejercicios nivel 3