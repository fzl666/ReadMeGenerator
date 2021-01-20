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
const data = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Easy Portfolio</title>
    </head>
    <body>
  <div class = "container">
  <p class="name"> ${response.name}</p>
  <p class="description"> ${response.description}</p>
  <p class="installation"> ${response.installation}</p>
  <p class="usage">  ${response.usage}</p>
  <p class="contributors"> ${response.contributors}</p>
  <p class="github">  ${response.github}</p>
  <p class="email">  ${response.email}</p>
  <p class="license">  ${response.license}</p>
  </div>
  </body>
  </html>`
  
  console.log(data)
  fs.appendFile('index.html', data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
})

// TODO: Create a function to write README file



// TODO: Create a function to initialize app
function init(){
  fs.unlinkSync('index.html') 
}

// Function call to initialize app
init();
