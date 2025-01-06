function sumData() {
    let count = 0;
    function plusOne() {
     count++;
     return count;
    }
    return plusOne;
};
const sumPlus = sumData();
// console.log(sumPlus());
// console.log(sumPlus());
//Ejercicios: Nivel 2
//1.-Crear una closure que tenga tres funciones internas
function datas(){
    let number = 0;
    function sum(){
        number++;
        return number;
    }
    function rest(){
        number--;
        return number;
    }
    function multi(){
        number++
       let mul = number * 2;
        return mul;
    }
    return {
        one: sum,
        two: rest,
        thre: multi
    };
}
const innerFunctions = datas();
console.log(innerFunctions.one());
console.log(innerFunctions.two());
console.log(innerFunctions.thre());
//Ejercicios: Nivel 3
//1.-Crear una función de salida de personAccount. Tiene variables internas de nombre, apellido, ingresos y gastos. Tiene las funciones internas totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos con su descripción.
function personAccount() {
    let name = 'Alexa';
    let lastName = 'Mendoza';
    let income = [{ description: 'Salario', amount: 20000 }];
    let expense = [{ description: 'Renta', amount: 3000 }];

    function totalIncome() {
        return income.reduce((total, item) => total + item.amount, 0);
    }

    function totalExpense() {
        return expense.reduce((total, item) => total + item.amount, 0);
    }

    function accountInfo() {
        return `Nombre: ${name} ${lastName}, Total Ingresos: ${totalIncome()}, Total Gastos: ${totalExpense()}`;
    }

    function addIncome(description, amount) {
        income.push({ description, amount });
        return `Ingreso agregado: ${description} por ${amount}`;
    }

    function addExpense(description, amount) {
        expense.push({ description, amount });
        return `Gasto agregado: ${description} por ${amount}`;
    }

    function accountBalance() {
        return `Saldo: ${totalIncome() - totalExpense()}`;
    }

    return {
        addIncome,
        addExpense,
        accountInfo,
        accountBalance,
    };
}

const userTotal = personAccount();
console.log(userTotal.addIncome('Freelance', 5000)); // Agregar ingreso
console.log(userTotal.addExpense('Supermercado', 1000)); // Agregar gasto
console.log(userTotal.accountInfo()); // Mostrar info de la cuenta
console.log(userTotal.accountBalance()); // Mostrar saldo



