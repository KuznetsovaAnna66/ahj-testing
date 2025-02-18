export default function cardValidation(input) {
  const firstDigit = +input.charAt(0);
  const firstTwoDigits = +input.slice(0, 2);
  const firstFourDigits = +input.slice(0, 4);
  const length = +input.length;

  if (firstDigit === 4 && (length === 13 || length === 16)) {
    return "Visa";
  } else if (
    firstDigit === 5 &&
    length === 16 &&
    firstTwoDigits >= 51 &&
    firstTwoDigits <= 55
  ) {
    return "MasterCard";
  } else if (
    firstFourDigits >= 2200 &&
    firstFourDigits <= 2204 &&
    length === 16
  ) {
    return "MIR";
  } else if (
    firstDigit === 3 &&
    (firstTwoDigits === 34 || firstTwoDigits === 37) &&
    length === 15
  ) {
    return "American Express";
  } else if (
    firstTwoDigits === 62 &&
    (length === 16 || length === 17 || length === 19)
  ) {
    return "UnionPay";
  } else {
    return "Неизвестный тип карты";
  }
}
