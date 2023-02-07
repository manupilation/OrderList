const path = require('path');
const readOrder = require('./ReadFiles/RegisterOrders');
const readNote = require('./ReadFiles/RegisterNotes');

readOrder(path.resolve('./src/Pedidos/'));
readNote(path.resolve('./src/Notas/'));
