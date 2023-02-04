class OrderValidationError extends Error {
  typeError(keyCase, typeExpected) {
    throw new Error(`Type error: Some file had "${keyCase}" different from ${typeExpected}.`);
  }

  uniqueValueError() {
    throw new Error('The files have improper repetitions in the key "numero_item".');
  }

  consecutiveError() {
    throw new Error('The "numero_item" table must be consecutive numbers, with no gaps between the largest and smallest.');
  }
}

module.exports = OrderValidationError;
