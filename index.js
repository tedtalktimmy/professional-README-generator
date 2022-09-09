const { debug } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
// const { inherits } = require('util');
// const util = require('util');
const generateMarkdown = require( `./util/generateMarkdown`)
const prompt = inquirer.createPromptModule();

prompt([
        {
            message: 'Please enter the title of your repository.',
            name: 'title',
        },
        {
            message: 'Please enter a description of your repository.',
            name: 'description',
        },
        {
            message: 'Please enter installation instructions.',
            name: 'installation',
        },
        {
            message: 'Please explain how other developers may contribute to your project.',
            name: 'contributions',
        },
        {
            message: "Please explain how to test your application.",
            name: 'appTest',
        },
        {
            type: 'checkbox',
            message: 'Choose a license.',
            name: 'license',
            choices: [
                'GNU AGPLv3',
                'GNU GPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'The Unlicense'
            ],
        },
        {
            message: 'If you have any questions, please contact ...',
            name: 'questions',
        },
        {
            message: 'Enter your github repository link.',
            name: 'gitHub',
        },
        {
            message: 'Enter your live site link.',
            name: 'liveSite',
        },
    ]).then((responses) => {
        console.log(responses);
        const template = `# ${responses.title}
        # Table of Contents
        * [Description](#description)
        * [How to Use](#use)
        * [Installation](#installation)
        * [Contributing](#contributions)
        * [Tests](#appTest)
        * [License](#license)
        * [Questions](#questions)
        * [Links](#links)
        
        ## Description
        ${responses.description}
        
        ## How to Use
        ${responses.use}
        
        ## Installation
        ${responses.installation}
        
        ## Contributing
        ${responses.contributions}
        
        ## Tests
        ${responses.appTest}
        
        ## License
        ![Github license](https://img.shields.io/badge/license-${responses.license}-lightpurple)
        
        ## Questions
        ${responses.questions}
        
        ## Links
        * [Github Repository] ${responses.gitHub},
        * [Live site] ${responses.liveSite}`;
    if (!fs.existsSync('./output')) {
        fs.mkdirSync('./output');
    }
    fs.writeFileSync('./output/README.md', template);
    });
