function getSchemaFromSheet(sheet) { //+
  /**
   * Gets the schema from the first row of the active sheet.
   *
   * @return {Object} An object representing the schema with { value: column }.
   */

  var firstRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  console.log({ firstRow })
  var schema = {};

  for (var i = 0; i < firstRow.length; i++) {
    schema[firstRow[i]] = i + 1; // Use 'i' (index) as the column number
  }

  return schema;
}

// Example usage:
function testGetSchemaFromSheet() {
  var sheetName = 'Sources';
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var schema = getSchemaFromSheet(sheet);
  Logger.log(schema);
}
