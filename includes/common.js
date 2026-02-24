function auditColumns() {
  return `
    current_timestamp() as transformed_time
  `;
}
module.exports = { auditColumns };