const Employee = require("./Employee");

class Manager extends Employee {
  interns = [];
  engineers = [];

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  static getQuestions() {
    return [
      {
        type: "list",
        message: "Select One",
        name: "emp_type",
        choices: [
          { name: "Add an Engineer", value: "engineer" },
          { name: "Add an Intern", value: "intern" },
          { name: "Finish Building Team", value: "finish" },
        ],
      },
    ];
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  // Add a single a engineer or an array of engineers
  addEngineer(eng) {
    if (Array.isArray(eng)) {
      eng.forEach((eng) => this.engineers.push(eng));
    } else {
      this.engineers.push(eng);
    }
  }

  // Add a single intern or an array of interns
  addIntern(intern) {
    if (Array.isArray(intern)) {
      intern.forEach((intern) => this.interns.push(intern));
    } else {
      this.interns.push(intern);
    }
  }

  generateHTML() {
    let html_top = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../src/css/bootstrap.min.css" />
        <title>Document</title>
      </head>
      <body>
        <div class="d-flex">
          <div id="cards">`;

    let html_body = `<div class="card" style="width: 15rem">
    <div class="card-body">
      <h5 class="card-title">${this.getName()}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${this.getRole()}</h6>
      <div class="card-text">${this.getId()}</div>

      <a href="${this.getEmail()}" class="card-link">Email</a>
      <a href="${this.getOfficeNumber()}" class="card-link">Github</a>
    </div>
  </div>`;

    this.engineers.forEach((eng) => {
      html_body += `<div class="card" style="width: 15rem">
      <div class="card-body">
        <h5 class="card-title">${eng.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${eng.getRole()}</h6>
        <div class="card-text">${eng.getId()}</div>

        <a href="mailto:${eng.getEmail()}" class="card-link">Email</a>
        <a href="https://github.com/${eng.getGithub()}" class="card-link">Github</a>
      </div>
    </div>`;
    });

    this.interns.forEach((intern) => {
      html_body += `<div class="card" style="width: 15rem">
      <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
        <div class="card-text">${intern.getId()}</div>

        <a href="${intern.getEmail()}" class="card-link">Email</a>
        <a href="${intern.getSchool()}" class="card-link">Github</a>
      </div>
    </div>`;
    });
    let html_bottom = `</div>
                </div>
      </body>
    </html>`;

    return html_top + html_body + html_bottom;
  }
}

module.exports = Manager;
