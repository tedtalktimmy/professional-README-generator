const fs = require('fs');
const inquirer = require('inquirer');
// const util = require('util');
const prompt = inquirer.createPromptModule();

prompt(
    [
        {
            message: 'Please enter the title of your repository.',
            name: 'title',
        },
        {
            message: 'Please enter a description of your repository.',
            name: 'description',
        },
        {
            message: 'Would you like to provide instructions for using your application?',
            name: 'use',
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
            message:
            name: 
        },
        {
            message:
            name: 
        },
        {
            message: 'Enter your github repository link.',
            name: 'gitHubLink',
        },
        {
            message: 'Enter your live site link.',
            name: 'liveSite',
        },
    ]
);