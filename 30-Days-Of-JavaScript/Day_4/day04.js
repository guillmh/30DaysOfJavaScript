//Ejercicios: Nivel 1
/*Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 
'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18. */
// let ageuser = parseInt(prompt("Ingrese su edad"));
// if(ageuser >= 18){
//  console.log('Tiene la suficiente edad para conducir')
// }else{
//    console.log(`Debes esperar ${18 - ageuser}años para cumplir 18`)
// }
/*2,-Compara los valores de myAge y yourAge usando if... 
else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). 
Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada. */
// let myAge = 26;
// let yourAge = parseInt(prompt("Intresa tu edad:"));
// if(yourAge > myAge){
//     console.log("Eres mayor que yo")
// }else if(yourAge === myAge){
//     console.log("Tenemos la misma edad")
// }else{
//     console.log("Eres menor que yo")
// }
//3.-Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes
let a = 4;
let b = 3;
//usando if
if (a > b){
 console.log('a es mayor que b')
}else{
console.log('a es menor que b')
}
//usanso operador ternario
a > b ?  console.log('a es mayor que b') : console.log('a es menor que b');
//4.-Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?
// let par = parseInt(prompt("Ingresa el numero"));
// if (par % 2 === 0){
// console.log(`${par} es un número par`)
// }else{
// console.log(`${par} no es numero impar`)
// }
//Ejercicios: Nivel 2
//1.-Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
// let points =  parseFloat(prompt("Ingresa tu calificacion:"))
// switch(true){
//     case (points >= 80 && points <= 100):
//         console.log("Su calificacion es A")
//     break;
//     case (points >= 70 && points <= 79):
//         console.log("Su calificacion es B")
//     break;
//     case (points >= 60 && points <= 69):
//         console.log("Su calificacion es C")
//         break;
//     case (points >= 50 && points <= 59):
//         console.log("Su calificacion es D")    
//         break;
//     case (points >= 0 && points <= 49):
//         console.log("Su calificacion es F")
//         break;
//         default:
//             console.log("El valor ingresado no era un numero")
// }
//2.-Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
// let season = prompt("Ingresa cualquier mes:");
// let seasonf = season.toLocaleLowerCase();
// switch(true){
//  case (seasonf === 'septiembre' || seasonf === 'octubre' || seasonf === 'noviembre'):
//     console.log("La temporada es Otoño")
//     break;
//  case (seasonf === 'diciembre' || seasonf === 'enero' || seasonf === 'febrero'):
//     console.log("La temporada es Invierno")
//     break;
//  case (seasonf === 'marzo' || seasonf === 'abril' || seasonf === 'mayo'):
//     console.log("La temporada es Primavera")
//     break;
//  case (seasonf === 'junio' || seasonf === 'julio' || seasonf === 'agosto'):
//     console.log("la temporada es Verano")
//     break;
//     default:
//         console.log("El mes que ingresaste es incorrecto")  
// }
//3.-Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
// let dayJob = prompt("Que dia es hoy?")
// let dayLower = dayJob.toLocaleLowerCase();
// switch(true){
//     case (dayLower === 'lunes'):
//         console.log("Hoy es un dia laborable")
//         break;
//     case ( dayLower === 'martes'):
//         console.log("Hoy es un dia laborable")
//         break;
//         case ( dayLower === 'miercoles'):
//             console.log("Hoy es un dia laborable")
//             break;
//     case ( dayLower === 'jueves'):
//         console.log("Hoy es un dia laborable")
//         break;
//     case ( dayLower === 'viernes'):
//             console.log("Hoy es un dia laborable")
//             break;
//     case ( dayLower === 'sabado'):
//                 console.log("Hoy es fin de semana")
//                 break;
//     case ( dayLower === 'domingo'):
//                 console.log("Hoy es un fin de semana")
//                     break;
// }
//Ejercicios: Nivel 3
//1.-Escribe un programa que diga el número de días en un mes.
// let monthdt = prompt("Ingresa el mes:")
// let monthformat = monthdt.toLocaleLowerCase();
// switch(monthformat){
//   case 'enero':
//   case 'marzo':
//   case 'mayo':
//   case 'julio':
//   case 'agosto':
//   case 'octubre':
//   case 'diciembre':
//   console.log(`${monthdt} tiene 31 dias`)
//   break;
//   case 'abril':
//   case 'julio':
//   case 'septiembre':
//   case 'noviembre':
//   console.log(`${monthdt}tiene 30 dias`)
//   break;
//   case 'febrero':
//     console.log(`${monthformat} tiene 28 dias`)
//    break;
//    default:
//     console.log("El mes ingresado no es valido")
// }
//2.-Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.
let bisiesto = prompt("Ingresa el mes")
switch(monthformat){
      case 'enero':
      case 'marzo':
      case 'mayo':
      case 'julio':
      case 'agosto':
      case 'octubre':
      case 'diciembre':
      console.log(`${monthdt} tiene 31 dias`)
      break;
      case 'abril':
      case 'julio':
      case 'septiembre':
      case 'noviembre':
      console.log(`${monthdt}tiene 30 dias`)
      break;
      case 'febrero':
        console.log(`${monthformat} tiene 29 dias`)
       break;
       default:
        console.log("El mes ingresado no es valido")
    }