// Example usage:
/**
 * Test function for getSheetDataAsObjects.
 */
function testGetSheetDataAsObjects() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sources');
  var objects = getSheetDataAsObjects(sheet);
  
  for (var object of objects) {
    Logger.log(object.row_index, typeof object.row_index);
  }
}
