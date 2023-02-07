const OrderValidationError = require('../helper/errorsValidation');

class OrderValidator {
  constructor(order) {
    this.order = order;
    this.validationError = new OrderValidationError();
    this.init();
  }

  orderValidator() {
    this.order.data.map((order) => {
      this.typesValidator(order);
      return true;
    });

    this.uniqueNumberValidator();
    this.consecutiveNumbersValidator();
  }

  consecutiveNumbersValidator() {
    const numbersArray = this.order.data.map((ord) => ord.numero_item)
      .sort((a, b) => a - b);

    for (let i = 1; i < numbersArray.length; i += 1) {
      if (numbersArray[i] - numbersArray[i - 1] !== 1) {
        this.validationError.uniqueValueError();
      }
    }
    return true;
  }

  uniqueNumberValidator() {
    const findUnique = new Set(this.order.data.map((order) => order.numero_item));

    if (findUnique.size !== this.order.data.length) {
      this.validationError.uniqueValueError();
    }

    return true;
  }

  typesValidator(order) {
    if (typeof order.numero_item !== 'number') {
      this.validationError.typeError('numero_item', 'number');
    }
    if (typeof order.codigo_produto !== 'string') {
      this.validationError.typeError('codigo_produto', 'string');
    }
    if (typeof order.quantidade_produto !== 'number') {
      this.validationError.typeError('quantidade_produto', 'number');
    }
    if (typeof order.valor_unitario_produto !== 'string') {
      this.validationError.typeError('valor_unitario_produto', 'string');
    }
  }

  init() {
    this.orderValidator();
    return true;
  }
}

module.exports = { OrderValidator };
