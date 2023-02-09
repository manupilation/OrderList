function errorDeclarer(order) {
  const error = new Error(`The quantity of products in order ${order.key} has exceeded the order limit!`);

  return error;
}

function quantityAnalizer(quantityObj) {
  console.log('passou');
  quantityObj.forEach((qtt) => qtt.quantity < 0 && console.error(errorDeclarer(qtt)));
}

module.exports = quantityAnalizer;
