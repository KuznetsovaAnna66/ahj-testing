import luhnAlgorithm from "../js/luhnAlgoruthm";

test.each([
  ["1234567812345670", true],
  ["1234567812345671", false],
  ["4532015112830366", true],
  ["4532015112830365", false],
  ["6011517277173131", true],
  ["6011517277173130", false],
  ["4485194404532589", true],
  ["4485194404532580", false],
  ["371449635398431", true],
  ["371449635398432", false],
  ["2223009876543214", true],
  ["2223009876543215", false],
  ["5105105105105100", true],
  ["5105105105105101", false],
])('testing luhnAlgorithm function for input "%s"', (input, expected) => {
  const result = luhnAlgorithm(input);
  expect(result).toBe(expected);
});
