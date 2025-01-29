//toma del DOM los datos del input
const numberInput = document.getElementById("numberInput");
const generateNumbers = document.getElementById("generateNumbers");
const boxCountries = document.getElementById("boxCountries");
//Selecciona la etiqueta p con id messageError
const messageError = document.getElementById("messageError");

//genera los numeros
const generarNumeros = () => {
    const cantidad = parseInt(numberInput.value);
    
    if (isNaN(cantidad)) {
        messageError.textContent = 'Ingrese un número'; // Muestra el mensaje de error
        messageError.style.display = 'block'; // Asegura que el mensaje sea visible
        return;
    } else {
        messageError.style.display = 'none'; // Oculta el mensaje si el número es válido
    }

    boxCountries.innerHTML = ''; // Limpia el contenedor

    for (let i = 0; i < cantidad; i++) {
        const numeroDiv = document.createElement('div');
        numeroDiv.textContent = i;
        numeroDiv.classList.add('numero');
        
        // Determina si es primo
        let esPrimo = true;
        if (i <= 1) esPrimo = false;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        
        // Determina si es par
        const esPar = i % 2 === 0;
        
        // Asigna color según las condiciones
        if (esPrimo) {
            numeroDiv.style.backgroundColor = '#FD5E53';
        } else if (esPar) {
            numeroDiv.style.backgroundColor = '#21BF73';
        } else {
            numeroDiv.style.backgroundColor = '#FDDB3A';
        }
        
        boxCountries.appendChild(numeroDiv);
    }
}

generateNumbers.addEventListener('click', generarNumeros);

