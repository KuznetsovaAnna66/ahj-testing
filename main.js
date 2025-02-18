/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/components/MainTitle/MainTitle.js

class MainTitle {
  constructor() {
    this.element = document.createElement("h1");
    this.element.classList.add("main-title");
    this.element.textContent = "Credit Card Validator";
  }
}
;// ./src/pic/visa.svg
const visa_namespaceObject = __webpack_require__.p + "b224875a1797b4861b6b.svg";
;// ./src/pic/mastercard.svg
const mastercard_namespaceObject = __webpack_require__.p + "2def179c92792fb3d9a9.svg";
;// ./src/pic/americanexpress.svg
const americanexpress_namespaceObject = __webpack_require__.p + "868e0e7e2c4c2024aa3f.svg";
;// ./src/pic/mir.svg
const mir_namespaceObject = __webpack_require__.p + "b61bbd844f24037f7726.svg";
;// ./src/pic/unionpay.svg
const unionpay_namespaceObject = __webpack_require__.p + "d38664ec2ab0669f9008.svg";
;// ./src/components/Cards/Cards.js






class Cards {
  constructor() {
    this.element = document.createElement("ul");
    this.element.classList.add("cards");
    this.cardImages = [];
    const cardItems = [{
      type: "visa",
      src: visa_namespaceObject,
      alt: "Visa"
    }, {
      type: "mastercard",
      src: mastercard_namespaceObject,
      alt: "MasterCard"
    }, {
      type: "americanexpress",
      src: americanexpress_namespaceObject,
      alt: "AmericanExpress"
    }, {
      type: "unionpay",
      src: unionpay_namespaceObject,
      alt: "UnionPay"
    }, {
      type: "mir",
      src: mir_namespaceObject,
      alt: "MIR"
    }];
    cardItems.forEach(cardItem => {
      const item = document.createElement("li");
      item.classList.add("cards__item");
      const image = document.createElement("img");
      image.classList.add("cards__img", cardItem.type);
      image.src = cardItem.src;
      image.alt = cardItem.alt;
      this.cardImages.push(image);
      item.append(image);
      this.element.append(item);
    });
  }
  activateCards() {
    this.cardImages.forEach(image => image.classList.remove("with-opacity"));
  }
  deActivateCards(cardType) {
    this.cardImages.forEach(image => {
      if (!image.classList.contains(cardType.toLowerCase())) {
        image.classList.add("with-opacity");
      }
    });
  }
}
;// ./src/components/Form/Form.js

class Form {
  // <form class="form">
  //   <label class="form__label visually-hidden" for="cardNumber">Введите номер карты</label>
  //   <input class="form__input" id="cardNumber" type="text" placeholder="Введите номер карты">
  //   <div class="form__tooltip hidden"></div>
  //   <button class="form__button" type="submit">Click to Validate</button>
  // </form>
  constructor() {
    this.element = document.createElement("form");
    this.element.classList.add("form");
    this.labelElement = document.createElement("label");
    this.labelElement.classList.add("form__label", "visually-hidden");
    this.labelElement.for = "cardNumber";
    this.labelElement.textContent = "Введите номер карты";
    this.inputElement = document.createElement("input");
    this.inputElement.classList.add("form__input");
    this.inputElement.id = "cardNumber";
    this.inputElement.type = "text";
    this.inputElement.placeholder = "Введите номер карты";
    this.tooltipElement = document.createElement("div");
    this.tooltipElement.classList.add("form__tooltip", "hidden");
    this.buttonElement = document.createElement("button");
    this.buttonElement.classList.add("form__button");
    this.buttonElement.type = "submit";
    this.buttonElement.textContent = "Click to Validate";
    this.element.append(this.labelElement, this.inputElement, this.tooltipElement, this.buttonElement);
  }
  submitEventListener(callback) {
    this.element.addEventListener("submit", callback);
  }
  inputEventListener(callback) {
    this.inputElement.addEventListener("input", callback);
  }
  renderInitialState() {
    this.inputElement.classList.remove("form__input_valid");
    this.inputElement.classList.remove("form__input_invalid");
    this.tooltipElement.classList.add("hidden");
    this.tooltipElement.classList.remove("valid");
  }
  validateInput() {
    const index = this.inputElement.selectionStart;
    this.inputElement.value = this.inputElement.value.replace(/\D/g, "");
    this.inputElement.value = this.inputElement.value.slice(0, 19);
    this.inputElement.value = this.inputElement.value.split(/([0-9]{4})/).filter(num => num).join(" ");
    if (this.inputElement.value[index - 1] === " ") {
      this.inputElement.setSelectionRange(index + 1, index + 1);
    } else {
      this.inputElement.setSelectionRange(index, index);
    }
  }
  getCardNumber() {
    return this.inputElement.value.replaceAll(" ", "");
  }
  setValidInput() {
    this.inputElement.classList.add("form__input_valid");
  }
  setInValidInput() {
    this.inputElement.classList.add("form__input_invalid");
  }
  setValidTooltip() {
    this.tooltipElement.classList.add("valid");
  }
  setTooltipText(text) {
    this.tooltipElement.textContent = text;
  }
  showTooltip() {
    this.tooltipElement.classList.remove("hidden");
  }
}
;// ./src/js/cardValidation.js
function cardValidation(input) {
  let cardType = "";
  const firstDigit = +input.charAt(0);
  const firstTwoDigits = +input.slice(0, 2);
  const firstFourDigits = +input.slice(0, 4);
  const length = +input.length;
  if (firstDigit === 4 && (length === 13 || length === 16 || length === 19)) {
    cardType = "Visa";
  } else if (firstDigit === 5 && length === 16 && firstTwoDigits >= 51 && firstTwoDigits <= 55) {
    cardType = "MasterCard";
  } else if (firstFourDigits >= 2200 && firstFourDigits <= 2204 && length === 16) {
    cardType = "MIR";
  } else if (firstDigit === 3 && (firstTwoDigits === 34 || firstTwoDigits === 37) && length === 15) {
    cardType = "AmericanExpress";
  } else if (firstTwoDigits === 62 && (length === 16 || length === 17 || length === 19)) {
    cardType = "UnionPay";
  }
  return cardType;
}
;// ./src/js/luhnAlgoruthm.js
function luhnAlgorithm(input) {
  const parity = input.length % 2;
  let sum = 0;
  for (let i = 0; i < input.length; i += 1) {
    let digit = +input[i];
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
;// ./src/js/App.js





class App {
  constructor() {
    this.mainTitle = new MainTitle();
    this.cards = new Cards();
    this.form = new Form();
  }
  init() {
    this.render();
    this.addEventListeners();
  }
  render() {
    this.container = document.querySelector(".container");
    this.container.append(this.mainTitle.element);
    this.container.append(this.cards.element);
    this.container.append(this.form.element);
  }
  addEventListeners() {
    this.form.submitEventListener(this.onFormSubmit.bind(this));
    this.form.inputEventListener(this.onInput.bind(this));
  }
  rerender() {
    this.cards.activateCards();
    this.form.renderInitialState();
  }
  onInput() {
    this.rerender();
    this.form.validateInput();
  }
  onFormSubmit(event) {
    event.preventDefault();
    const cardNumber = this.form.getCardNumber();
    const inputLength = cardNumber.length;
    let text = "";
    if (!inputLength) {
      text = "Введите номер карты!";
    } else if (inputLength > 11) {
      if (luhnAlgorithm(cardNumber)) {
        const result = cardValidation(cardNumber);
        if (result) {
          text = result;
          this.cards.deActivateCards(result);
          this.form.setValidInput();
          this.form.setValidTooltip();
        } else {
          this.form.setInValidInput();
          text = "Платежная система не определена!";
        }
      } else {
        text = "Неверный номер карты!";
        this.form.setInValidInput();
      }
    } else {
      text = "Введите от 12 до 19 цифр!";
    }
    this.form.setTooltipText(text);
    this.form.showTooltip();
  }
}
;// ./src/index.js


document.addEventListener("DOMContentLoaded", () => {
  new App().init();
});
/******/ })()
;