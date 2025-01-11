//1.-El color del año cambia cada 1 segundo
const switchColor = () => {
const yearBox = document.querySelector("span");
const randomNumber = Math.floor(Math.random() * 16777216);
const hexColor = `#${randomNumber.toString(16).padStart(6, '0')}`;
return yearBox.style.color = hexColor;
}
setInterval(switchColor, 1000);
//2.-El color de fondo de la fecha y la hora cambia cada dos segundos
const time = document.getElementById('dataTime');
const getDateTime = () => {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedDateTime = `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
    time.textContent = formattedDateTime;
};
const colorData = () => {
  const randomNumber = Math.floor(Math.random() * 16777216);
  const hexColor = `#${randomNumber.toString(16).padStart(6, '0')}`;
  return time.style.backgroundColor = hexColor;
}
setInterval(getDateTime, 1000);
setInterval(colorData, 1000);
//3.-El reto completado tiene fondo verde
const challengs = document.querySelectorAll('li');
challengs[0].style.backgroundColor = '#37c701';
//4.-El desafío en curso tiene fondo amarillo
challengs[1].style.backgroundColor = '#ffcf00';
//5.-Los próximos retos tienen fondo rojo
challengs[2].style.backgroundColor = '#d73e3c';
challengs[3].style.backgroundColor = '#d73e3c';
challengs[4].style.backgroundColor = '#d73e3c';
challengs[5].style.backgroundColor = '#d73e3c';
challengs[6].style.backgroundColor = '#d73e3c';
