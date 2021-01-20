// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = inquirer
 .prompt([
    {
      type: 'input',
      message: 'Project name:',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Project description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation instruction:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'How to use:',
        name: 'usage',
    },
    {  type: 'input',
       message: 'Who are the contributors:',
       name: 'contributors',
    },
    {
        type: 'input',
        message: 'Your Github username:',
        name: 'github',
    },
    {
      type: 'input',
      message: 'Your E-mail:',
      name: 'email',
    },
    { type: 'input',
    message: 'License:',
    name: 'license',
    }
  ])
  .then((response) =>{
const data = 
`# ${response.name}
 
## description

${response.description}

## Installation

${response.installation}

## Usage

${response.usage}

## Contributors

${response.contributors}

## Contact

[GitHub](https://github.com/${response.github})

[E-mail](mailto:${response.email})

## License

${response.license}`

  
  fs.appendFile('GeneratedReadMe.md', data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
})

// TODO: Create a function to write README file



// TODO: Create a function to initialize app
function init(){
  //fs.unlinkSync('test.md') 
}

// Function call to initialize app
init();

