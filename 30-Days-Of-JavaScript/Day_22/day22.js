//El fondo de los números pares es verde
//Creamos los 100 numeros
for(let i = 0; i < 102; i++){
let box = document.createElement("div");
let divDad = document.getElementById('boxDad');
divDad.appendChild(box);
box.className = 'boxNumber';
box.textContent = i;
box.style.width = '90px';
box.style.height = '50px';
box.style.display = 'flex';
box.style.justifyContent = 'Center';
box.style.alignItems = 'center';
box.style.margin = '2px';
box.style.color = 'white';
box.style.fontSize = '25px';
if(i % 2 === 0){
    box.style.backgroundColor = '#4bd261'
}
if(i % 2 !== 0){
    box.style.backgroundColor = '#eece04'
}
if (isPrime(i)) {
    box.style.backgroundColor = "#ff5733"; 
};

// Función para verificar si un número es primo
function isPrime(num) {
    if (num <= 1) return false; // No son primos los números <= 1
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) return false; // Si tiene divisor, no es primo
    }
    return true; // Si no tiene divisor, es primo
  }
};