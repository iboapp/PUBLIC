function getSourcesSheet() {
  var sheetName = 'Sources';
  return SpreadsheetApp.getActive().getSheetByName(sheetName);
}
