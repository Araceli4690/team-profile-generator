const fs = require('fs');
const inquirer = require('inquirer');

//add team
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];


//initialize app and html 
function startApp() {
    writeHtml();
    addEmployee();
}

//employee questions
const addEmployee = () => {
    return inquirer.prompt([
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
                    return true;
                }
                else {
                    console.log("enter name")
                    return false
                }

            }
        },

        {
            type: 'input',
            name: 'id',
            message: "Enter team member's Id"
        },

        {
            type: 'input',
            name: 'email',
            message: "Enter team member's email address"
        }
    ])
        //more info specific to job role
        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreEmployees"
            }])
                .then(function ({ roleInfo, moreEmployees }) {
                    let newEmployee;
                    if (role === "Engineer") {
                        newEmployee = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newEmployee = new Intern(name, id, email, roleInfo);
                    } else {
                        newEmployee = new Manager(name, id, email, roleInfo);
                    }
                    employees.push(newEmployee);
                    addHtml(newEmployee)
                        .then(function () {
                            if (moreEmployees === "yes") {
                                addEmployee();
                            } else {
                                generatedHtml();
                            }
                        });

                });
        });
}



/// generate html

function writeHtml() {
    const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
</head>
<body>
    <div class="jumbotron text-center text-white bg-info mb-3">
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
function addHtml(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();

        let data = '';
        if (role === 'Manager') {
            const officeNum = member.getOfficeNumber();
            data = `
        <div class="col-md-6 col-lg-4">
        <div class="card">
        <div class="card" style="width: 18rem;">
            <div class="card-header bg-light">
                <h2>${name}</h2>
                <h3><i class="bi bi-person-fill"></i> Manager</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"> <i class="bi bi-envelope-fill"></i> : <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item"> <i class="bi bi-telephone-fill"></i> : <a href="tel: ${officeNum}">${officeNum}</a></li>
            </ul>
        </div>
        </div>
        </div>
    `;
        } else if (role === 'Engineer') {
            const gitHub = member.getGithub();
            data = `
        <div class="col-md-6 col-lg-4">
    <div class="card">
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-light">
            <h2>${name}</h2>
            <h4><i class="bi bi-person-fill"></i> Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item"> <i class="bi bi-envelope-fill"></i> : <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item"><i class="bi bi-github"></i> : <a href="tel: ${gitHub}">${gitHub}</a></li>
        </ul>
    </div>
    </div>
    </div>`;
        } else {
            const school = member.getSchool();
            data = `
        <div class="col-md-6 col-lg-4">
    <div class="card">
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-light">
            <h2>${name}</h2>
            <h4><i class="bi bi-person-fill"></i> Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item"> <i class="bi bi-envelope-fill"></i> : <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item"><i class="bi bi-building"></i>School: <a href="tel: ${school}">${school}</a></li>
        </ul>
    </div>
    </div>
    </div>`
        }
        console.log('adding employees to page');
        fs.appendFile("./src/index.html", data, function (err) {
            if (err) {
                return err;
            };
            return resolve();
        })
    })
}

function generatedHtml() {
    const html = `
    </div>
    </div>
    
</body>
</html>`;
    fs.appendFile("./src/index.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    })
}

startApp();