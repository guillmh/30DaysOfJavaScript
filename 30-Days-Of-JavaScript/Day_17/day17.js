//Ejercicios: Nivel 1
//1.-Guarda tu nombre, apellido, edad, país y ciudad en tu navegador localStorage.
const guill = ['Guill', 25, 'Mexico', 'Cancun'];
const guillJson = JSON.stringify(guill, undefined, 4);
const saveData = localStorage.setItem('Guill', guillJson);
console.log(saveData);
//Ejercicios: Nivel 2
//1.-Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las habilidades, el país, las claves inscritas y los valores para las claves. Almacena el objeto estudiante en el localStorage de tu navegador.
const student = {
    name: 'Alexa',
    lastname: 'Mendoza',
    age: 23,
    skills: ['HTML','CSS','JAVASCRIPT','REACTJS'],
    country: 'Mexico'
}
const studentJson = JSON.stringify(student, undefined, 4);
const saveStudent = localStorage.setItem('Student', studentJson);
//Ejercicios: Nivel 3
//1.-Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
const personAccount = {
    name: 'Josah',
    lastname: 'Vazquez',
    income: {
        webDevelopment: 20000,
        YouTubePartener: 5000,
        MercadoLibre: 1000,
        courses: 8000
    },
    spent: {
        food: 3000,
        internet: 600,
        netflix: 200,
        rent: 10000,
        light: 4000
    },
    totalIncome(){
   let total = 0;
     for (const dataKey in this.income) {
        total += this.income[dataKey]
     }
     return `Ingreso total: ${total}`
    },
    totalExpense(){
    let total = 0;
    for(const dataKey in this.spent){
        total += this.spent[dataKey]
    }
    return `Gastos totales: ${total}`
    },
    accouunInfo(){
     return `Nombre: ${this.name} ${this.lastname} ${this.totalIncome()} ${this.totalExpense()}`
    },
    addIncome(){
    return this.income['VideoEditing'] = 2000;
    },
    addExpense(){
    return this.spent.YtMusic = 120
    },
    accountBalance(){
     const totalIncomed = this.totalIncome().match(/\d+/g);
     const totalExpensed = this.totalExpense().match(/\d+/g);
     return +totalIncomed - +totalExpensed;
    }

};
const accountJson = JSON.stringify(personAccount, undefined, 4);
const saveAccount = localStorage.setItem('Person', accountJson);