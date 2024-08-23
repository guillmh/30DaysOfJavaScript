//1.-Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
let firstName = typeof "Andrea";
let lastName = typeof "Guzman";
let country = typeof "Mexico";
let city = typeof "Yucatan";
let age = typeof 26;
let isMarried = typeof true;
let year = typeof 1999;
//2.-Verifique si typeof '10' es igual a 10
let value = typeof '10' == typeof 10;
console.log(value)
//3.-Verifique si parseInt('9.8') es igual a 10
let numberInt = parseInt('9.8') == 10;
console.log(numberInt)
//4.-Verifique cualquier valor booleano true o false.
let character1 = 1;
let character2 = true;
let character3 = "HelloWorld";
let character4 = 0;
let character5 = false;
let character6 = "";
console.log(`1:${Boolean(character1)}\ntrue:${Boolean(character2)}\n"HelloWorld":${Boolean(character3)}\n0:${Boolean(character4)}\nfalse${Boolean(character5)}\n" ":${Boolean(character6)}`)
//5.-Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3)//false
console.log(4 == 4)// true
console.log(4 === 4)// true
console.log(4 != 4) //false
console.log(4 !== 4)//false
console.log(4 != '4')//false
console.log(4 == '4')//true
console.log(4 === '4')//false
//Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
let py = "Python";
let ja = "Jargon";
let comparation = py.length != ja.length;
console.log(`///${comparation}`)
//6.-Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
console.log(4 > 3 && 10 < 12)//true
console.log(4 > 3 && 10 > 12)//false
console.log(4 > 3 || 10 < 12)//true
console.log(4 > 3 || 10 > 12)//true
console.log(!(4 > 3))//false
console.log(!(4 < 3))//true
console.log(!(false))//true
console.log(!(4 > 3 && 10 < 12))//false
console.log(!(4 > 3 && 10 > 12))//true
console.log(!(4 === '4'))//true
//No hay 'on' tanto en dragon como en python
//7.-Utilice el objeto Date para realizar las siguientes actividades
//¿Qué año es hoy?
const yr = new Date();
console.log(`Año actual:${yr.getFullYear()}`)
//¿Qué mes es hoy con un número?
console.log(`Mes actual:${yr.getMonth()}`)
//¿Qué fecha es hoy?
console.log(`Fecha actual:${yr.getDate()}/${yr.getMonth() + 1}/${yr.getFullYear()}`)
//¿Qué día es hoy con un número?
console.log(`Dia actual:${yr.getDate()}`)
//¿Cuál es la hora actual?
console.log(`Hora actual:${yr.getHours()}:${yr.getMinutes()}.${yr.getSeconds()}`)
//¿Cuántos minutos hay actualmente?
console.log(`Minutos actuales:${yr.getMinutes()}`)
//Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(`Segundos transcurridos desde el 1 de enero de 1970 hasta ahora:${yr.getTime()}`)
//Ejercicios: Nivel 2
//1.-Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
/*let inBase = prompt("Ingrese la base del triangulo:");
let inHeight = prompt("Ingrese la altura del triangulo");
let base = +inBase;
let height = +inHeight;
let formula = (base * height / 2)
console.log(`Area del Triaungulo:${formula}`)*/
//2.-Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo
/*let sidea = prompt("Ingresa el lado 'a' del triangulo:");
let sideb = prompt("Ingresa el lado 'b' del triangulo");
let sidec = prompt("Ingresa el lado 'c' del triengulo");
let perimeter = (+sidea + +sideb + +sidec);
console.log(`Perimetro del triangulo:${perimeter}`)*/
//3.-Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
/*let longrectangle = prompt("Ingrese el largo del rectangulo:");
let broadrectangle = prompt("Ingresa el largo del rectangulo ");
let arearectangle = (+longrectangle * +broadrectangle);
let perimeterRectangle = (2 * arearectangle);
console.log(`Area del rectangulo:${arearectangle}\nPerimetro del rectangulo:${perimeterRectangle}`)*/
//4.-Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
/*let radiuscircle = prompt("Ingresa el radio del circulo:");
let areacircle = (Math.PI * +radiuscircle * +radiuscircle);
let ccircle = (2 * Math.PI * +radiuscircle)
console.log(`Area del circulo:${areacircle.toFixed(2)}\nCircunfenrencia del circulo:${ccircle.toFixed(2)}`)*/
//5.-Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
/*let x1 = parseFloat(prompt("Ingresa x1:"))
let x2 = parseFloat(prompt("Ingresa x2:"))
let y1 = parseFloat(prompt("Ingresa y1:"))
let y2 = parseFloat(prompt("Ingresa y2"))
//Calculamos la pendiente m
let m = (y2 - y1) / (x2 - x1);
//Calculamos la interseccion Y(b)
let b = y1 - m * x1;
//Calculamos la interseccion X
let xintercept = -b / m;
console.log(`Pendiente M:${m}\nPendiente Y(b):${b}\nInterseccion de X:${xintercept}`)*/
//6.-La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
let y1 = 2;
let y2 = 10;
let x2 = 6;
let x1 = 2;

let m = (y1 - y2) / (x2 - x1)
let b = y1 - m * x1;
let xintercept = -b /m;
console.log(`Pendiente entre el punto (2,2) y (6,10):${xintercept}`)
//7.Compare la pendiente de las dos preguntas anteriores.
console.log(xintercept === xintercept)
//8.-Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
let x = -3;
let y = x * x + 6 * x + 9;
console.log(`Para x = ${x}, y = ${y}`);
//9.-Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?
/*let hoursJob = parseFloat(prompt("Ingrese la horas de trabajo"))
let moneyJob = parseFloat(prompt("Ingrese la tarifa por hora"))
let salary = (moneyJob * hoursJob) * 7;
console.log(`Su ganancia semanal es de:${salary}`)*/
//10.-Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
/*let nickName = prompt("Ingrese su nombre:")
let nameLonght = nickName.length > 7 ? 'Su nombre es largo' : 'Su nombre es corto';
console.log(nameLonght)*/
//11.-Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let myName = 'Guillber';
let myLastName = 'Mendez';
let nameLenght = myName.length > myLastName.length ? `Tu primer nombre, ${myName}, es más largo que tu apellido, ${myLastName}` : `Tu primer nombre, ${myName}, es más corto que tu apellido, ${myLastName}`;
console.log(nameLenght)
//12.-Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
let myAge = 250;
let yourAge = 25;
console.log(`Soy ${myAge - yourAge} años mayor que tú.`)
//13.-Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
/*let ageuser = parseInt(prompt("Ingrese el Año en que nacio"));
let yearCurrent = new Date();
let birth = yearCurrent.getFullYear() - ageuser;
let licence = birth >= 18 ? 'Usted puede Conducir' : 'Espere a tener 18'
console.log(`${licence} por que tiene ${birth}`)*/
//14.-Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años
/*let secondLife = parseInt(prompt("Cuantos Años vive aproximadamente una persona:"))
let getSecondsx = secondLife * 365 * 24 * 60 * 60;
console.log(getSecondsx)*/
//15.-Cree un formato de hora legible por humanos usando el objeto Date.
let dates = new Date();
let yeardt = dates.getFullYear();
let monthdt = dates.getMonth() +1;
let daydt = dates.getDay();
let hoursdt = dates.getHours();
let minutesdt = dates.getMinutes();
console.log(`${yeardt}-${monthdt}-${daydt} ${hoursdt}:${minutesdt}\n${daydt}-${monthdt}-${yeardt} ${hoursdt}:${minutesdt}\n${daydt}/${monthdt}/${yeardt} ${hoursdt}:${minutesdt}`)
//Ejercicios: Nivel 3
//1.-Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
let formathours = hoursdt < 10 ? '0' + hoursdt : hoursdt;
let formatminutes = minutesdt < 10 ? '0' + minutesdt : minutesdt;
console.log(`${formathours}:${formatminutes}`)