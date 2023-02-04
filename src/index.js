const path = require('path');
const order = require('./ReadFiles/RegisterOrders');

order.readOrder(path.resolve('./src/Pedidos/'));
