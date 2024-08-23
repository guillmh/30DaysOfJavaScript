//1.-Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio = '30 dias de JavaScript';
//2.-Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);
//3.-Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length)
//4.-Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase())
//5.-Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLocaleLowerCase())
//6.-Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(0, 2))
//7.-Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.substring(2, 21))
//8.-Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes('Script'))
//9.-Divide la cadena en un array usando el método split()
console.log(desafio.split())
//10.-Divida la cadena 30 días de JavaScript en el espacio usando el método split()
console.log(desafio.split(" "))
//11.-'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let social = 'Facebook, Apple, IBM, Oracle, Amazon, ';
console.log(social.split(','))
//12.-Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace('JavaScript', 'Python'))
//13.-¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafio.charAt(15))
//14.-¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafio.charCodeAt('J'))
//15.-Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf('a'))
//16.-Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf('a'))
//17.-Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let payer = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(payer.indexOf('porque'))
//18.-Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(payer.lastIndexOf('porque'))
//19.-Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(payer.search('porque'))
//20.-Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(desafio.trim());
//21.-Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.startsWith('30'))
//22.-Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.endsWith('JavaScript'))
//23.-Usa el método match() para encontrar todos los a en 30 días de JavaScript
 console.log(desafio.match(/a/g))
//24.-Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let days = '30 dias de '
console.log(days.concat('JavaScript'))
//25.-Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2))

//----Ejercicio: Nivel 2 ----
//1.-Usando console.log() imprima la siguiente declaración: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("'The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.'")
//2.-Usando console.log() imprima la siguiente cita de la Madre Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)
 //3.-Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
 let num = '10';
 let numInt = Number(num);
 console.log("'10': " + typeof num)
 console.log('10: ' + typeof numInt); // 10
 //4.-Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
let numFloat = 9.8;
console.log(typeof numFloat === 10)
let numberInt = Math.round(numFloat)
console.log(numberInt)
//5.-Verifique si 'on' se encuentra tanto en Python como en la jerga
let py = 'Python',
jg = 'jerga';
let pyone =  py.includes('on');
let jgone = jg.includes('on')
console.log(`'on' en la palabra 'Python': ${pyone}
'on' en la palabra 'jerga': ${jgone}`)
//6.-Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
let jerga = 'Espero que este curso no esté lleno de jerga'
console.log(jerga.includes('jargon'))
//7.-Genere un número aleatorio entre 0 y 100 inclusive.
const random = Math.floor(Math.random() * 101)
console.log(random)
//8.-Genere un número aleatorio entre 50 y 100 inclusive.
const randomTwo = Math.ceil(Math.random() * 51 + 50)
console.log(randomTwo)
//9.-Genere un número aleatorio entre 0 y 255 inclusive.
const randomplus = Math.floor(Math.random() * 256)
console.log(randomplus)
//10.-Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let js = 'JavaScript';
let randomkey = Math.floor(Math.random() * 10 )
let stringRandom = js.charAt(randomkey)
console.log(stringRandom)
//11.-Use console.log() y caracteres de escape para imprimir el siguiente patrón.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log("1\t1\t1\t1\t1")
console.log("2\t1\t2\t4\t8")
console.log("3\t1\t3\t9\t27")
console.log("4\t1\t4\t16\t64")
console.log("5\t1\t5\t25\t125")
//12.-Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let why = 'No puedes terminar una oración con porque porque porque es una conjunción';
let subs = why.substr(34, 21)
console.log(subs)
//------Ejercicios Nivel 3------
//1.-'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let love = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor';
console.log(love.search('amor'))
//2.-Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(why.match(/porque/gi))
//3.-Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let symbol = /[#@!?$;%&]/g;
let cleansentense = sentence.replace(symbol, '');
console.log(cleansentense)
//4.-Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let money = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
let earnings = money.match(/\d+/g)
let salary = +earnings[0] * 12;
let bond = +earnings[1];
let courses = +earnings[2] * 12;
let total = salary + bond + courses;
console.log(`Ingresos totales: ${total}`)
