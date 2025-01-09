// Ejercicios: Nivel 1
//1.-Crear un archivo index.html y poner cuatro elementos p: Obtenga el primer párrafo utilizando document.querySelector(tagname) y el nombre de la etiqueta
const paragraphOne = document.querySelector("p");
// console.log(paragraphOne)
//2.-Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
const textOne = document.querySelector("#pone");
const textTwo =  document.querySelector("#ptwo");
const textThre = document.querySelector("#pthre");
const textFour =  document.querySelector("#pfour");
// console.log(textFour)
// console.log(textTwo)
//3.-Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta
const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
//4.-Recorrer nodeList y obtener el contenido del texto de cada párrafo
for(let i = 0; i < allParagraphs.length; i++){
//console.log(allParagraphs[i])
}
//5.-Establecer un textContent para el párrafo del cuarto párrafo,Fourth Paragraph
const addText = (num, text) =>{
   allParagraphs[num].textContent = text;
}
addText(3, 'Hola me actuzalize');
//console.log(allParagraphs[3]);
//6.-Establezca los atributos id y class para todos los párrafos utilizando diferentes métodos de establecimiento de atributos
for(let i = 0; i < allParagraphs.length; i++){
    allParagraphs[i].className = `parrafo ${i}`;
    allParagraphs[i].id = `p${i}`;
    console.log(allParagraphs[i]);
}

