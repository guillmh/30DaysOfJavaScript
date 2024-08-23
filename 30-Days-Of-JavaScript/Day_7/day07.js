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

