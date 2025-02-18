import cardValidation from "../js/cardValidation";

test.each([
  ["4024007183140101", "Visa"],
  ["4916273554687002", "Visa"],
  ["5266996783368514", "MasterCard"],
  ["5382221805079729", "MasterCard"],
  ["342464204493915", "AmericanExpress"],
  ["376381671189413", "AmericanExpress"],
  ["6250947000000097", "UnionPay"],
  ["2201382000000021", "MIR"],
  ["2204290100000006", "MIR"],
  ["5020608794753082", ""],
  ["6370656184549846", ""],
])('testing checkCardValidity function for input "%s"', (input, type) => {
  const result = cardValidation(input);
  expect(result).toBe(type);
});
