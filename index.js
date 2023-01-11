const inquirer = require('inquirer');
const fs = require('fs');
const managerClass  = require('./roles/manager.js');
const engineerClass = require('./roles/engineer.js');
const internClass = require('./roles/intern.js');

dreamTeam = [];

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
                break;
                
                case 'engineer':
                addEngineer();
                break;

                case 'intern':
                addIntern();
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
        dreamTeam.push(manager);
        buildTeam();
    });}
    
    function addEngineer() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: 'enter engineer\'s name please'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'what is the engineer\'s employee id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'what is the engineer\'s email address?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'what is the engineer\'s office number?'
            }
        ]).then(response => {
            const engineer = new engineerClass (response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            dreamTeam.push(engineer);
            buildTeam();
        });
    }

    function addIntern() {
        inquirer.prompt ([
            {
                type: 'input',
                name: 'internName',
                message: 'enter intern\'s name please'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'what is the intern\'s employee id?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'what is the intern\'s email address?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'what is the intern\'s school?'
            }
        ]).then(response => {
            const intern = new internClass (response.internName, response.internId, response.internEmail, response.internSchool);
            dreamTeam.push(intern);
            buildTeam();
        });
    }
buildTeam();
}

runFile();
