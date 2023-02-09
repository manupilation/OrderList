function iterableReport(report) {
  const returnReport = Object.entries(report)
    .map(([key, value]) => ({ key, ...value })).sort((a, b) => a.id - b.id);
  return returnReport;
}

module.exports = iterableReport;
