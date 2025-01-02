const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
//Ejercicios Nivel 1
//1.-Cambiar el array de habilidades a JSON usando JSON.stringify()
   const arrSkills = JSON.stringify(skills, undefined, 4);
   console.log(arrSkills);
//2.-Stringify la variable de la edad
 const skillAge = JSON.stringify(age,undefined, 4);
 console.log(skillAge);
//3.-Stringify la variable isMarried
const married = JSON.stringify(isMarried, undefined, 4);
console.log(married);
//4.-Stringify el objeto estudiante
const isStudent = JSON.stringify(student, undefined, 4);
console.log(isStudent);
//Ejercicios Nivel 2
//1.-Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills
const studenObjet = JSON.stringify(student,["firstName","lastName","skills"],4);
console.log(studenObjet);
//Ejercicios Nivel 3
//1.- Parsear el txt JSON a objeto.
const newTxt = JSON.parse(txt, undefined, 4);
console.log(newTxt);
//2.-Encuentra el usuario que tiene muchas habilidades de la variable almacenada en txt.
//convertimos el objeto en un array clave valor
const dataArr = Object.entries(newTxt);
//Creamos un objeto donde se almacenara el usuario con mas habilidades
let mostSkilledUser = { name: null, skills: [] };
//Funcion para buscar
const searchSkills = () => {
    //Un bucle para recorrer el nombre, y los valores 
    for (const [name, details] of dataArr){
        //condicion, para comparar las skills actual del bucle con las del usuario de mostSkillUser, en caso de ser mayor actualiza los datos 
       if(details.skills && details.skills.length > mostSkilledUser.skills.length){
        mostSkilledUser = {name, skills: details.skills};
       }
    }
    //se retorna el objeto actualizado
    return mostSkilledUser;
};
console.log(searchSkills());