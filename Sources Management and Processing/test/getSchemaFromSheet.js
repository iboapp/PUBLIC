// Example usage:
/**
 * Test function for getSchemaFromSheet.
 */
function testGetSchemaFromSheet() {
  var sheetName = 'Sources';
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var schema = getSchemaFromSheet(sheet);
  Logger.log(schema);
}