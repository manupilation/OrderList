class OrderValidationError extends Error {
  typeError(keyCase, typeExpected) {
    throw new Error(`Type error: Some file had "${keyCase}" different from ${typeExpected}`);
  }

  uniqueValueError() {
    throw new Error('The files have improper repetitions in the key "numero_item"');
  }
}

module.exports = OrderValidationError;
