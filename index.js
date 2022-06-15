const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");

init_questions = [
  {
    type: "input",
    message: `Manager name`,
    name: "manager_name",
  },
  { type: "input", message: `Manager ID`, name: "manager_id" },
  {
    type: "input",
    message: `Manager Email`,
    name: "manager_email",
  },
  {
    type: "input",
    message: "Office Number",
    name: "manager_office_num",
  },
];

async function init() {
  // Gather input from user
  let init_answers = await inquirer.prompt(init_questions);

  manager = new Manager(
    init_answers.manager_name,
    init_answers.manager_id,
    init_answers.manager_email,
    init_answers.manager_office_num
  );

  do {
    let manager_answers = await inquirer.prompt(Manager.getQuestions());

    manager_answers = { ...init_answers, ...manager_answers };

    // console.log("Combined Manager Answers", manager_answers);

    let sec_answers = [];

    if (manager_answers.emp_type === "finish") {
      break;
    } else if (manager_answers.emp_type === "engineer") {
      sec_answers = await inquirer.prompt(Engineer.getQuestions());

      let eng = new Engineer(
        sec_answers.name,
        sec_answers.id,
        sec_answers.email,
        sec_answers.github_username
      );

      manager.addEngineer(eng);
    } else if (manager_answers.emp_type === "intern") {
      sec_answers = await inquirer.prompt(Intern.getQuestions());
      let intern = new Intern(
        sec_answers.name,
        sec_answers.id,
        sec_answers.email,
        sec_answers.school
      );

      manager.addIntern(intern);
    }

    let answers = { ...manager_answers, ...sec_answers };

    // console.log("Answers", answers);
  } while (true);

  // console.log("Manager data", manager);

  let html = manager.generateHTML();

  writeToFile("./dist/GEN_page.html", html);
  console.log("File successfully written to ./dist/GEN_page.html");
}

// write file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function call to initialize app
init();
