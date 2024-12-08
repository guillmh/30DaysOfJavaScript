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
// for({name, scores, skills, age} of users){
//  console.log(name, scores, skills, age)
// };
//2.-Encuentra las personas que tienen menos de dos habilidades
const usersWithFewerSkills = users.filter(({ skills }) => skills.length < 2);
console.log(usersWithFewerSkills);
//Ejercicios nivel 3
//1.-Desestructurar el objeto países imprimir nombre, capital, población e idiomas de todos los países
const countriesNew = [
  {
    nombre: "México",
    capital: "Ciudad de México",
    poblacion: 128932753,
    idiomas: ["Español"],
  },
  {
    nombre: "Canadá",
    capital: "Ottawa",
    poblacion: 38005238,
    idiomas: ["Inglés", "Francés"],
  },
  {
    nombre: "Japón",
    capital: "Tokio",
    poblacion: 126476461,
    idiomas: ["Japonés"],
  },
  {
    nombre: "Alemania",
    capital: "Berlín",
    poblacion: 83166711,
    idiomas: ["Alemán"],
  },
  {
    nombre: "India",
    capital: "Nueva Delhi",
    poblacion: 1393409038,
    idiomas: ["Hindi", "Inglés"],
  },
];
for({nombre, capital, poblacion, idiomas} of countriesNew){
  console.log(nombre, capital, poblacion, idiomas);
}
//2.-Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en un array de arrays que puede no ser fácil de leer. Desestructure la siguiente matriz nombre a nombre, array de habilidades a habilidades, array de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a reactScore variable en una línea.
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [
  named,
  skillsNew,
  [ , , jsScore, reactScore]
] = student;
console.log(named, skillsNew, jsScore, reactScore);
//3.-Escribe una función llamada convertArrayToObject que pueda convertir el array en un objeto estructurado
const students = [
  ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
 const convertArrayToObject = (arr) =>{
     const [name, skills, scores] = arr
     const structure = {name, skills, scores};
     return structure;
 }
 console.log(convertArrayToObject(student));
 //4.-Copie el objeto estudiante a newStudent sin mutar el objeto original. En el nuevo objeto añade lo siguiente ?
 const datas = convertArrayToObject(student);
 const {name, age = 25, skills, scores} = datas;
 const studentNew = {
   name,
   age,
   skills: {
    frontend:[
      {skill: skills[0], level: scores[0]},
      {skill: skills[1], level: scores[1]},
      {skill: skills[2], level: scores[2]},
      {skill: skills[3], level: scores[3]},
      {skill: 'BootStrap', level: 89}
    ],
    backend:[
      {skill: 'Node',level: 7},
      {skill: 'GraphQL',level: 8},
      {skill: 'Express',level: 9}
    ],
    dataBase:[
      { skill: 'MongoDB',level: 7.5},
      { skill: 'SQL',level: 8}
    ],
    dataSience:['Python','R','D3.js','SQL']
   }
 }
console.log(studentNew);
