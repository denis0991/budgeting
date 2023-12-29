const expenseTable = document.querySelector('.expense-table');
const employees = document.querySelector('.employees');
const mainExpenseTable = document.querySelector('.main__expense-table');
const mainEmployees = document.querySelector('.main__employees');
const finalExpense = document.querySelector('.final-expense');
const mainFinalExpense = document.querySelector('.main__final-expenses');
const income = document.querySelector('.income');
const mainIncome = document.querySelector('.main__income');
const kpi = document.querySelector('.kpi');
const mainKpi = document.querySelector('.main__kpi');
const create = document.querySelector('.create');
const mainCreate = document.querySelector('.main__create');
const comparison = document.querySelector('.comparison');
const mainComparison = document.querySelector('.main__comparison');

expenseTable.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn_active');
    expenseTable.classList.remove('btn');
    addDisable(mainEmployees);
    mainExpenseTable.classList.remove('disable');
    addDisable(mainFinalExpense);
    finalExpense.classList.add('btn');
    finalExpense.classList.remove('btn_active');
    income.classList.remove('btn_active');
    income.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainIncome);
    mainKpi.classList.add('disable');
    create.classList.remove('btn_active');
    create.classList.add('btn');
    addDisable(mainCreate);
    addDisable(mainComparison);

    comparison.classList.remove('btn_active');
    comparison.classList.add('btn');

})

employees.addEventListener('click', () => {
    employees.classList.add('btn_active');
    employees.classList.remove('btn');
    expenseTable.classList.remove('btn_active');
    expenseTable.classList.add('btn');
    addDisable(mainExpenseTable);
    mainEmployees.classList.remove('disable');
    addDisable(mainFinalExpense);
    finalExpense.classList.add('btn');
    finalExpense.classList.remove('btn_active');
    income.classList.remove('btn_active');
    income.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainIncome);
    mainKpi.classList.add('disable');
    create.classList.remove('btn_active');
    create.classList.add('btn');
    addDisable(mainCreate);
    addDisable(mainComparison);

    comparison.classList.remove('btn_active');
    comparison.classList.add('btn');

})

finalExpense.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    mainEmployees.classList.add('disable');
    mainExpenseTable.classList.add('disable');
    finalExpense.classList.add('btn_active');
    finalExpense.classList.remove('btn');
    expenseTable.classList.add('btn');
    employees.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    removeDisable(mainFinalExpense);
    income.classList.remove('btn_active');
    income.classList.add('btn');
    addDisable(mainIncome);
    mainKpi.classList.add('disable');
    create.classList.remove('btn_active');
    create.classList.add('btn');
    addDisable(mainCreate);
    addDisable(mainComparison);

    comparison.classList.remove('btn_active');
    comparison.classList.add('btn');

})

income.addEventListener('click', () => {
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    finalExpense.classList.remove('btn_active');
    income.classList.add('btn_active');
    income.classList.remove('btn');
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    finalExpense.classList.add('btn');
    kpi.classList.remove('btn_active');
    kpi.classList.add('btn');
    addDisable(mainEmployees);
    addDisable(mainFinalExpense);
    addDisable(mainExpenseTable);
    addDisable(mainComparison);

    mainIncome.classList.remove('disable');
    mainKpi.classList.add('disable');
    create.classList.remove('btn_active');
    create.classList.add('btn');
    addDisable(mainCreate);
    comparison.classList.remove('btn_active');
    comparison.classList.add('btn');

})

kpi.addEventListener('click', () => {
    kpi.classList.add('btn_active');
    kpi.classList.remove('btn');
    mainKpi.classList.remove('disable');
    income.classList.remove('btn_active');
    income.classList.add('btn');
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    finalExpense.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    finalExpense.classList.add('btn');
    create.classList.remove('btn_active');
    create.classList.add('btn');
    addDisable(mainEmployees);
    addDisable(mainFinalExpense);
    addDisable(mainExpenseTable);
    addDisable(mainIncome);
    addDisable(mainCreate);
    addDisable(mainComparison);

    comparison.classList.remove('btn_active');
    comparison.classList.add('btn');

});

create.addEventListener('click', () => {
    create.classList.add('btn_active');
    create.classList.remove('btn');
    mainCreate.classList.remove('disable');
    addDisable(mainEmployees);
    addDisable(mainFinalExpense);
    addDisable(mainExpenseTable);
    addDisable(mainIncome);
    addDisable(mainKpi);
    addDisable(mainComparison);
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    finalExpense.classList.add('btn');
    income.classList.add('btn');
    kpi.classList.add('btn');
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    finalExpense.classList.remove('btn_active');
    income.classList.remove('btn_active');
    kpi.classList.remove('btn_active');
    comparison.classList.remove('btn_active');
    comparison.classList.add('btn');
});

comparison.addEventListener('click', () => {
    comparison.classList.add('btn_active');
    comparison.classList.remove('btn');
    mainComparison.classList.remove('disable');
    addDisable(mainEmployees);
    addDisable(mainFinalExpense);
    addDisable(mainExpenseTable);
    addDisable(mainIncome);
    addDisable(mainKpi);
    addDisable(mainCreate);
    employees.classList.remove('btn_active');
    expenseTable.classList.remove('btn_active');
    finalExpense.classList.remove('btn_active');
    income.classList.remove('btn_active');
    kpi.classList.remove('btn_active');
    create.classList.remove('btn_active');
    employees.classList.add('btn');
    expenseTable.classList.add('btn');
    finalExpense.classList.add('btn');
    income.classList.add('btn');
    kpi.classList.add('btn');
    create.classList.add('btn');
})

function addDisable(elem) {
    elem.classList.add('disable');
}

function removeDisable(elem) {
    elem.classList.remove('disable');
}