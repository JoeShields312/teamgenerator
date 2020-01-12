const Admin = require("../lib/Admin");

test("Can set school via constructor", () => {
  const testValue = "UIC";
  const e = new Admin("Bob", 1, "test@test.com", testValue);
});

test("getRole() should return \"Admin\"", () => {
  const testValue = "Admin";
  const e = new Admin("Bob", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
