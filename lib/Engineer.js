const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  static getQuestions() {
    return [
      {
        type: "input",
        message: "Engineer name",
        name: "name",
      },
      { type: "input", message: "Engineer ID", name: "id" },
      {
        type: "input",
        message: "Engineer Email",
        name: "email",
      },
      { type: "input", message: "Engineer Github", name: "github_username" },
    ];
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
