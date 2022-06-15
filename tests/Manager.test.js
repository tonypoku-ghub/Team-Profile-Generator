const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

let answers = {
  team_manager: "Tom",
  emp_id: "5",
  emp_email: "tonypoku@gmail.com",
};

let mgr = new Manager("Tom", "1", "tom.test@test.com", "45");

let eng = new Engineer("Ted", "2", "ted.test@test.com", "ted-ghub");

let eng1 = new Engineer("Sam", "3", "sam.test@test.com", "sam-ghub");

let intern = new Intern("Gail", "4", "gail.test@test.com", "Gailsbury College");

let intern1 = new Intern("Jen", "5", "jen.test@test.com", "Jennyham College");

let intern2 = new Intern("Bret", "6", "bret.test@test.com", "Bretting College");

mgr.addEngineer([eng, eng1]);
mgr.addIntern([intern, intern1, intern2]);

describe("Manager class", () => {
  it("html generated", () => {
    expect(mgr.generateHTML()).toEqual(expect.stringContaining("html"));
  });
  it("must have a manager", () => {
    expect(mgr.generateHTML()).toEqual(expect.stringContaining("Manager"));
  });
});

describe("Add engineers and interns", () => {
  it("Manager count = 2", () => {
    expect(mgr.engineers.length).toBe(2);
  });

  it("Intern count = 3", () => {
    expect(mgr.interns.length).toBe(3);
  });
});
