const fs = require('fs');
const Order = require('../OrdersValidation');
const Constructor = require('../OrderConstructor');

function readOrder(orderPath) {
  fs.readdir(orderPath, (err, txts) => {
    if (err) {
      throw new Error(err);
    }

    const allProcessedOrders = [];
    txts.forEach((txt) => {
      if (txt.endsWith('.txt')) {
        fs.readFile(`${orderPath}/${txt}`, 'utf8', (error, data) => {
          if (error) {
            throw new Error('Internal Error: Something is wrong with the files', error);
          }
          const id = txt.replace('.txt', '');
          const orderObj = new Constructor.OrderConstructor(id, data).formatObj();
          // eslint-disable-next-line no-unused-vars
          const validator = new Order.OrderValidator(orderObj);
          allProcessedOrders.push(orderObj);

          const finalOrderStringfy = JSON.stringify(allProcessedOrders);
          fs.writeFileSync('processedOrders.json', finalOrderStringfy);
        });
      }
    });
  });
}

module.exports = {
  readOrder,
};
