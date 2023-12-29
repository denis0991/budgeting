const expenseTable = document.querySelector('.expense-table');
const employees = document.querySelector('.employees');
const mainExpenseTable = document.querySelector('.main__expense-table');
const mainEmployees = document.querySelector('.main__employees');
const kpi = document.querySelector('.kpi')
const mainKpi = document.querySelector('.main__kpi');
const fot = document.querySelector('.fot');
const mainFot = document.querySelector('.main__fot');

expenseTable.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn_active');
    expenseTable.classList.remove('btn');
    addDisable(mainEmployees);
    addDisable(mainKpi);
    addDisable(mainFot);
    mainExpenseTable.classList.remove('disable');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    mainKpi.classList.add('disable');
    fot.classList.remove('btn_active');
    fot.classList.add('btn');

})

employees.addEventListener('click', () => {
    employees.classList.add('btn_active');
    employees.classList.remove('btn');
    expenseTable.classList.remove('btn_active');
    expenseTable.classList.add('btn');
    addDisable(mainExpenseTable);
    mainEmployees.classList.remove('disable');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainKpi);
    addDisable(mainFot);
    mainKpi.classList.add('disable');
    fot.classList.remove('btn_active');
    fot.classList.add('btn');


})

fot.addEventListener('click', () => {
    fot.classList.add('btn_active');
    fot.classList.remove('btn');
    mainFot.classList.remove('disable');
    addDisable(mainEmployees);
    addDisable(mainKpi);
    addDisable(mainExpenseTable);
    employees.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.remove('btn_active');
    expenseTable.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');

})

kpi.addEventListener('click', () => {
    kpi.classList.add('btn_active');
    kpi.classList.remove('btn');
    mainKpi.classList.remove('disable');
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    addDisable(mainEmployees);
    addDisable(mainExpenseTable);
    addDisable(mainFot);
    fot.classList.remove('btn_active');
    fot.classList.add('btn');

})


function addDisable(elem) {
    elem.classList.add('disable');
}

function removeDisable(elem) {
    elem.classList.remove('disable');
}