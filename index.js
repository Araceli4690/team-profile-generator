const fs = require('fs');
const inquirer = require('inquirer');
//html
const generateHTML = require('./src/generateHTML.js');
//add team
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const employees = [];

//employee questions

const addEmployee = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Select team member's role",
        choices: ['manager', 'engineer', 'intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name',
// validating name input
        validate: nameInput => {
            if (nameInput) {
                return true;}
            else {
                console.log("enter name")
                return false
            }
            
        }
    },

    {
        type: 'input',
        name: 'Id',
        message: "Enter team member's Id"
    },

    {
        type: 'input',
        name: 'email',
        message: "Enter team member's email address"
    },
//more info specific to job role
    {
        type: 'input',
        name: 'officeNum',
        message: "Enter the manager's office number",
        when: (input) => input.role === 'manager'
    },

    {
        type: 'input',
        name: 'gitHub',
        message: "Enter GitHub username",
        when: (input) => input.role === 'engineer',
    },

    {
        type: 'input',
        name: 'school',
        message: "please enter the intern's school",
        when: (input) => input.role === 'intern'
    },
// prompt with options to add team members;
    {
        type: 'list',
        name: 'moreEmployees',
        message: 'Would you like to add more members to your team?',
        choices: ['yes', 'no']
    }
])
//add info to new employee
.then(employeeInfo => {
    let { role, name, Id, email, officeNum, gitHub, school, moreEmployees} = employeeInfo;
    let employee;

    if (role === 'manager') {
        employee = new manager (name, Id, email, officeNum);
        console.log(employee)
    }
    else if (role === 'engineer') {
        employee = new engineer (name, Id, email, gitHub);
        console.log(employee)
    }
    else if (role === 'intern') {
        employee = new intern (name, Id, email, school);
        console.log(employee)
    }
    employees.push(employee);

    if (moreEmployees === 'yes') {
        addEmployee(employees);
    } else {
        return employees;
    }
})

};

//create function to write html 
const writeFile = employeeData => {
    fs.writeFile('./src/index.html', employeeData, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("your team profile has been generated!")
        }
    })
};

//create function to initialize app 
addEmployee ()
.then(employees => {
    return generateHTML(employees);
})
.then(pageHTML => {
    return writeFile(pageHTML);
});


/// generate html