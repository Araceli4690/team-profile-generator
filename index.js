const fs = require('fs');
const inquirer = require('inquirer');
//html
const generateHTML = require('./src/generateHTML');
//add team

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
        name: 'ID',
        message: "Enter team member's ID"
    },

    {
        type: 'input',
        name: 'email',
        message: "Enter team member's email address"
    },
//more infor specific to job role
    {
        type: 'input',
        name: 'moreInfo',
        message: "Enter the manager's office number",
        when: (input) => input.role === 'manager'
    },

    {
        type: 'input',
        name: 'moreInfo',
        message: "Enter GitHub username",
        when: (input) => input.role === 'engineer',
    },

    {
        type: 'input',
        name: 'moreInfo',
        message: "please enter the intern's school",
        when: (input) => input.role === 'intern'
    },
// prompt with options to add team members;
    {
        tyoe: 'list',
        name: 'moreEmployees',
        message: 'Would you like to add more members to your team?',
        choices: ['yes', 'no']
    }
])
//add info to new employee
.then(employeeInfo => {
    let { name, id, email, moreInfo} = employeeInfo;
    let newEmployee;

    if (role === 'manager') {
        newEmployee = new manager (name,id, email, moreInfo);
        console.log(newEmployee)
    }
    else if (role === 'engineer') {
        newEmployee = new engineer (name, id, email, moreInfo);
        console.log(newEmployee)
    }
    else {
        newEmployee = new intern (name, id, email, moreInfo);
        console.log(newEmployee)
    }
    employees.push(newEmployee);

    if (moreEmployees === 'yes') {
        addEmployee();
    } else {
        return employees;
    }
})

};

//create function to write html 

//create function to initialize app 

