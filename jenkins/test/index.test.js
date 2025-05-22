const { add } = require("../src/index");

test("menjumlahkan 5 + 3 = 8", () => {
  expect(add(5, 3)).toBe(8);
});
