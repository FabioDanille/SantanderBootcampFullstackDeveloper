// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";


/* 1º modo*/
interface Employees {
    name: string,
    code: number,
};
const employee1 = {} as Employees;
employee1.name = 'John';
employee1.code = 1010; 


/* 2º modo*/
const employee2 = {
    name: 'Fabio',
    code: 2020
};

/* 3º modo*/
const employee3: {code: number, name: string} = {
    code: 3030,
    name: 'Marcia'
};