/* eslint-disable no-console */
const fs = require('fs');
const Constructor = require('../helper/NoteConstructor');
const Note = require('../validation/NotesValidation');

function readNote(notePath) {
  fs.readdir(notePath, (err, txts) => {
    if (err) {
      console.error(err);
      throw err;
    }

    const allProcessedNotes = [];
    txts.forEach((txt) => {
      if (txt.endsWith('.txt')) {
        fs.readFile(`${notePath}/${txt}`, 'utf-8', (error, data) => {
          if (error) {
            console.log(error);
            return;
          }
          const id = txt.replace('.txt', '');
          const orderObj = new Constructor.NoteConstructor(id, data).formatObj();
          // eslint-disable-next-line no-unused-vars
          const validator = new Note.NoteValidator(orderObj);
          allProcessedNotes.push(orderObj);

          const finalNoteStringfy = JSON.stringify(allProcessedNotes);
          fs.writeFileSync('processedNotes.json', finalNoteStringfy);
        });
      }
    });
  });
}

module.exports = readNote;
