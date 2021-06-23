const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

const introQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your team managers name?'
    },

    {
        type: 'input',
        name: 'employeeID',
        message: "What is your team manager's employee ID?"
    },

    {
        type: 'input',
        name: 'emailAddress',
        message: "What is your team manager's email address?"
    },

    {
        type: 'input',
        name: 'moreInfo',
        message: "What is your team manager's office number?"
    }
];

// prompt with options to add team members or finish team
const addMembers = [
    {
        type: 'checkbox',
        name: 'addMember',
        message: 'Would you like to add an engineer, intern, or finish up the team?',
        choices: ['engineer', 'intern', 'finish team']
    }
];

// create engineer question block
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?"
    },

    {
        type: 'input',
        name: 'employeeID',
        message: "What is your engineer's employee ID?"
    },

    {
        type: 'input',
        name: 'emailAddress',
        message: "What is your engineer's email address?"
    },

    {
        type: 'input',
        name: 'moreInfo',
        message: "What is your engineer's GitHub username?"
    }
];
//create intern question block 
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your interns name?'
    },

    {
        type: 'input',
        name: 'employeeID',
        message: "What is your intern's employee ID?"
    },

    {
        type: 'input',
        name: 'emailAddress',
        message: "What is your intern's email address?"
    },

    {
        type: 'input',
        name: 'moreInfo',
        message: "What school does your intern attend?"
    }
];
//function 
// if engineer option is selected then present with engineer question block
    // once done return to add team memebrs menu

// if intern option is selected then present with intern question block
    //once all question have been answered return to team members menu

// if team is finished building, exit app and generate html

//create function to write html 

//create function to initialize app 