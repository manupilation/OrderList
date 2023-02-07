const NoteValidationError = require('../helper/errorsValidation');

class NoteValidator {
  constructor(note) {
    this.note = note;
    this.validationError = new NoteValidationError();
    this.init();
  }

  noteValidator() {
    this.note.data.map(this.typesValidator);
  }

  typesValidator(note) {
    if (typeof note.id_pedido !== 'number') {
      this.validationError.typeError('id_pedido', 'string');
    }
    if (typeof note.numero_item !== 'number') {
      this.validationError.typeError('numero_item', 'number');
    }
    if (typeof note.quantidade_produto !== 'number') {
      this.validationError.typeError('quantidade_produto', 'number');
    }
  }

  init() {
    this.noteValidator();
    return true;
  }
}

module.exports = { NoteValidator };
