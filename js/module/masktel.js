export default class maskTel {
  constructor(element) {
    this.element = document.querySelector(element);
  }

  clearMask(tel) {
    return tel.replace(/\D/g, '');
  }
  constructorMask(tel) {
    return tel.replace(/(\d{2})(\d{4})(\d{5})/g, '($1)$2-$3');
  }

  format(tel) {
    const clearTel = this.clearMask(tel);
    return this.constructorMask(clearTel);
  }

  validateChange(telElement) {
    telElement.value = this.format(telElement.value);
  }

  addEvents() {
    this.element.addEventListener('change', () => {
      this.validateChange(this.element);
    });
  }

  init() {
    this.addEvents();
    return this;
  }
}
