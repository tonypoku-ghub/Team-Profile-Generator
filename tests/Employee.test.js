const Employee = require("../lib/Employee");

let emp = new Employee("Tom", "1", "tom.test@test.com");

describe("Employee class ", () => {
  it("Role is employee", () => {
    expect(emp.getRole()).toBe("Employee");
  });
});
