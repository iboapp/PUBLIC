function getFolderSheet() {
  var sheetName = 'Folder';
  return SpreadsheetApp.getActive().getSheetByName(sheetName);
}
