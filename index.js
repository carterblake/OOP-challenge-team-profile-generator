const inquirer = require('inquirer');
const fs = require('fs');
const managerClass  = require('./roles/manager');

function runFile () {
    function buildTeam () {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addRole',
                message: 'what role?',
                choices: ['manager', 'engineer', 'intern', 'done']
            }
        ]).then(function (userResponse) {
            switch(userResponse.addRole) {
                case 'manager':
                addManager();
                console.log('manager selected');
                break;
                
                case 'engineer':
                addEngineer();
                console.log('engineer selected');
                break;

                case 'intern':
                addIntern();
                console.log('intern selected');
                break;
                
                case 'done':
                console.log('complete');
                break;
            }
        })
    }

    function addManager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'enter manager\'s name please'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'what is the manager\'s employee id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is the manager\'s email address?'
        },
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'what is the manager\'s office number?'
        }
    ]).then(response => {
        const manager = new managerClass (response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);
    });}
    
    function addEngineer() {
        console.log('engineer function ran');
    }

    function addIntern() {
        console.log('intern function ran');
    }
buildTeam();
}

runFile();
console.log('ran');