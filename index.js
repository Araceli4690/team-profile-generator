const fs = require('fs');
const inquirer = require('inquirer');

//add team
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];


//initialize app and html 
function startApp(){
    writeHtml();
    addEmployee();
}

//employee questions
const addEmployee = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Select team member's role",
        choices: ['Manager', 'Engineer', 'Intern']
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
        when: (input) => input.role === 'Manager'
    },

    {
        type: 'input',
        name: 'gitHub',
        message: "Enter GitHub username",
        when: (input) => input.role === 'Engineer',
    },

    {
        type: 'input',
        name: 'school',
        message: "please enter school name",
        when: (input) => input.role === 'Intern'
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
.then(function({name, role, Id, email, school, officeNum, gitHub, moreEmployees}){
   
    let employee;

    if (role === 'Manager') {
        employee = new Manager (name, Id, email, officeNum);
    }
    else if (role === 'Engineer') {
        employee = new Engineer (name, Id, email, gitHub);
    }
    else {
        employee = new Intern (name, Id, email, school);
    }
    employees.push(employee);

    addHtml(employee)
        
    if (moreEmployees === "yes") {
            addEmployee();
        } else {
            generatedHtml();
        }
});

};


/// generate html

function writeHtml(){
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron text-center text-white bg-dark mb-3">
        <h1>Team Profile</h1>
    </div>
    <div class="container">
        <div class="row">`;
    fs.writeFile('./src/index.html', html, err => {
        if (err) {
            console.log(err);
        }
    })
}
//create function to write html 
function addHtml(){
    let data = '';
    const employee = data;
    const role = employee.getRole;

   if(role ==='Manager'){
    data = `
        <div class="col-md-6 col-lg-4">
        <div class="card">
            <div class="card-header bg-light">
                <h2>${Manager.name}</h2>
                <h3><i class="fas fa-mug-hot"></i> Manager</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${Manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                <li class="list-group-item">Office Number: <a href="tel: ${Manager.officeNum}">${Manager.officeNum}</a></li>
            </ul>
        </div>
        </div>
    `;
    } else if(role === 'Engineer'){
        data = `
        <div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header bg-light">
            <h2>${Engineer.name}</h2>
            <h3><i class="fas fa-mug-hot"></i> Engineer</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
            <li class="list-group-item">Office Number: <a href="tel: ${Engineer.gitHub}">${Engineer.gitHub}</a></li>
        </ul>
    </div>
    </div>`;
    } else {
        data = `
        <div class="col-md-6 col-lg-4">
    <div class="card">
        <div class="card-header bg-light">
            <h2>${Intern.name}</h2>
            <h3><i class="fas fa-mug-hot"></i> Intern</h3>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${Intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
            <li class="list-group-item">Office Number: <a href="tel: ${Intern.school}">${Intern.school}</a></li>
        </ul>
    </div>
    </div>`
    }
    console.log('adding employees to page');
    fs.appendFile("./src/index.html", data, function(err){
        if (err){
            return err;
        };
    })
}

function generatedHtml() {
    const html = `
    </div>
    </div>
    
</body>
</html>`;
    fs.appendFile("./src/index.html", html, function(err){
        if(err) {
            console.log(err);
        }
    })
}

startApp();
