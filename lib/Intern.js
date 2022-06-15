const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  static getQuestions() {
    return [
      {
        type: "input",
        message: "Intern name",
        name: "name",
      },
      { type: "input", message: "Intern ID", name: "id" },
      {
        type: "input",
        message: "Email",
        name: "email",
      },
      { type: "input", message: "Intern school", name: "school" },
    ];
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
