/**
 * @jest-environment jsdom
 */

import App from "../js/App";

describe("check tooltip textContent on form submit", () => {
  const container = document.createElement("div");
  container.className = "container";
  document.body.append(container);

  new App().init();

  const form = container.querySelector(".form");
  const formInput = form.querySelector(".form__input");
  const formTooltip = form.querySelector(".form__tooltip");

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
    ["", "Введите номер карты!"],
    ["0000", "Введите от 12 до 19 цифр!"],
    ["2200000000000001", "Неверный номер карты!"],
    ["6011350310725000", "Платежная система не определена!"],
    ["3589820761213713", "Платежная система не определена!"],
  ])(
    'comparing tooltip textcontent for input "%s" with text "%s',
    (input, text) => {
      formInput.value = input;
      form.submit();
      expect(formTooltip.textContent).toBe(text);
    },
  );
});
