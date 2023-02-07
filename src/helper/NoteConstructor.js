class NoteConstructor {
  constructor(id, noteObj) {
    this.noteObj = noteObj;
    this.id = id;
    this.formatObj();
  }

  treatment() {
    const clearText = this.noteObj.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().split(/\r\n/);
    return clearText.map((a) => {
      const parseToObject = JSON.parse(a);
      return parseToObject;
    });
  }

  formatObj() {
    const obj = {
      id: this.id,
      data: this.treatment(),
    };

    return obj;
  }
}

module.exports = { NoteConstructor };
