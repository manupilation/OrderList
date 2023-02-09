const fs = require('fs');

function reportGenerator(orderList) {
  const removeNegatives = orderList.filter((order) => order.saldo_produto > 0);

  const orderTotal = removeNegatives.reduce((str, next) => {
    const total = (next.quantidade_produto * next.valor_produto).toFixed(2);
    const balance = (next.saldo_produto * next.valor_produto).toFixed(2);
    str += `\nItem ${next.key} of order ${next.id} had ${next.quantidade_produto} products, totaling ${total} in this order value.\n`;
    str += `- Order balance ended in $${balance}\n\n`;

    return str;
  }, '                        Order report.\n');

  const orderPendingList = removeNegatives.reduce((str, next) => {
    const qttBalance = (next.quantidade_produto - next.saldo_produto);
    str += `\n----------------------------------------------------------------------------------
The order ${next.key} of number ${5} needed ${qttBalance} products sold in order not to be pending.
----------------------------------------------------------------------------------\n
    `;
    return str;
  }, '');

  const reportEmSi = orderTotal + orderPendingList;

  fs.writeFile('report.txt', reportEmSi, (err) => {
    if (err) throw err;
    console.log('Relatório gerado com sucesso!');
  });
}

module.exports = reportGenerator;
