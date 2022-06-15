const Intern = require("../lib/Intern");

let intern = new Intern("Gail", "4", "gail.test@test.com", "Gailsbury College");

describe("Intern class test", () => {
  it("Intern questions = 4", () => {
    expect(Intern.getQuestions().length).toBe(4);
  });

  it("Role is intern", () => {
    expect(intern.getRole()).toBe("Intern");
  });
});
