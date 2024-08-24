//1.-Declare una función fullName e imprima su nombre completo.
function fullName() {
console.log('Alexa')
}
fullName()
//2.-Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
function lastName(firstName, lastName) {
let fullName = firstName + ' ' + lastName;
return fullName
}
console.log(lastName('alexa', 'Cuevas'))
//3.-Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
const addNumbers = (num1, num2) => {
    let sumNum = num1 + num2;
    return sumNum
}
console.log(addNumbers(12,15))
//4.-El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
const areaRectangle = (length, width) => {
 let area = length * width;
 return `El area de tu rectangulo es: ${area}`;
}
console.log(areaRectangle(15, 20))
//5.-El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
const perimeterOfRectangle = (length, width) => {
    let perimeter =  2 * (length + width)
    return console.log(`El perimetro de un rectangulo es ${perimeter}`)
}
perimeterOfRectangle(12,15)
//6.-El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
const volumeOfRectPrism = (length, width, height) => {
let volume = length * width * height;
return `El volumen de tu prisma es el siguiente: ${volume}`
}
console.log(volumeOfRectPrism(12,26,35));
//7.-El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
const areaOfCircle = (r) =>{
    let area = Math.PI * r * r;
    return Math.floor(area);
}
console.log(`Area del circulo: ${areaOfCircle(56)}`);
//8.-La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
const circumOfCircle = radio => 2 * Math.PI * radio;
console.log(circumOfCircle(3))
//9.-La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
const density = (m,v) =>{
 return m / v;
}
console.log(density(34,23));
//10.-La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
const speed = (d,t) => {
    return d / t;
}
console.log(speed(23,30))
//11.-El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
const weight = (mass, gravity) => {
 let weight = mass * gravity;   
 return weight;
}
console.log(weight(14,45));
//12.-La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
const convertCelsiusToFahrenheit = (c) =>{
let f = (c * 9/5) + 32;
return f;
}
console.log(convertCelsiusToFahrenheit(40));
//13.-El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.
const imcClculate = (age,weight,heightP) =>{
let heightTotal = (heightP * heightP);
let imc = (weight / heightTotal).toFixed(2);
if(age >= 20){
 if(imc < 18.5){
    return `Peso bajo inferior a 18,5: ${imc}`
 }else if(imc >= 18.5 && imc <= 24.9){
    return `Peso normal de 18,5 a 24,9: ${imc}`
 }else if(imc >= 25 && imc <= 29.9){
    return `Sobrepeso de 25 a 29,9: ${imc}`
 }else if(imc >= 30){
    return `Obeso es 30 o más: ${imc}`
 }
}else{
    return 'No tiene la edad sufuciente'
}
}
console.log(imcClculate(23,60,1.72))