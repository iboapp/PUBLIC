/**
 * Gets the schema from the first row of the specified sheet.
 *
 * @param {Sheet} sheet - The Google Sheets sheet to get the schema from.
 * @return {Object} - An object representing the schema with { value: column }.
 */
function getSchemaFromSheet(sheet) {
  var firstRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  console.log({ firstRow });
  var schema = {};

  for (var i = 0; i < firstRow.length; i++) {
    schema[firstRow[i]] = i + 1; // Use 'i' (index) as the column number
  }

  return schema;
}