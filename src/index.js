const Orders = require('../processedOrders.json');
const Notes = require('../processedNotes.json');
const Report = require('./generators/reportConstructor');
const reportGenerator = require('./writeFile/ReportGenerator');
const iterable = require('./helper/iterableReport');
const quantities = require('./helper/iterableQuantities');
const quantityError = require('./helper/quantityError');

const report = new Report(Orders, Notes);
const iterableReport = iterable(report.finalValue);
const quantity = quantities(report.productQuantity);
quantityError(quantity);
reportGenerator(iterableReport);
