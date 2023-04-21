const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project ?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief Description of the project ?",
      name: "description",
    },
    {
      type: "input",
      message: "How to install the app ?",
      name: "installation",
    },
    {
      type: "input",
      message: "How to use the application ?",
      name: "usage",
    },
    {
      type: "list",
      message: "what type of license is used ?",
      name: "license",
      choices: ["MIT", "Apache", "GNU", "none"],
    },
    {
      type: "input",
      message: "who were the contributors for this project ?",
      name: "contributors",
    },

    {
      type: "input",
      message: "what were some of the tests that were used ?",
      name: "tests",
    },
    {
      type: "input",
      message: "what is your github ? ?",
      name: "github",
    },
    {
      type: "input",
      message: "what is the best email to reach you at ?",
      name: "email",
    },
    
  ])
  .then((ans) => {
    console.log(ans);
    let licenseBadge = undefined;
    if (ans.license === "none") {
      licenseBadge = "";
    } else {
      licenseBadge = `![project license](https://img.shields.io/badge/license-${ans.license}-blue.svg)`;
    }
    const markdownTemplate = `
${licenseBadge}
# ${ans.title}
## Description
${ans.description}
    

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${ans.installation}

## Usuage
${ans.usage}

## License
${ans.license}

## Contributions
${ans.contributors}

## Tests
${ans.tests}

## Questions

How to reach me:\n
Github : https://github.com/${ans.github}\n
Email : ${ans.email}

## Links

Github repo : https://github.com/linotmike/README-gen 

    
`;

    fs.writeFile(`output/${ans.title}.md`, markdownTemplate, (err) => {
      if (err) {
        throw err;
      }
      console.log("successful");
    });
  });
