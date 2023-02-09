function iterableQuantities(report) {
  const quantities = Object.entries(report)
    .map(([key, value]) => ({ key, ...value }));
  return quantities;
}

module.exports = iterableQuantities;
