const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

let eng = new Engineer("Tom", "2", "tom.test@test.com", "tom-ghub");

describe("Initial Menu", () => {
  it("Engineer questions = 4", () => {
    expect(Engineer.getQuestions().length).toBe(4);
  });

  it("Role is engineer", () => {
    expect(eng.getRole()).toBe("Engineer");
  });
});
