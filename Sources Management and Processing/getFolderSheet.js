/**
 * Retrieves the Google Sheets sheet named 'Folder'.
 *
 * @return {Sheet|null} - The sheet named 'Folder', or null if not found.
 */
function getFolderSheet() {
  var sheetName = 'Folder';
  return SpreadsheetApp.getActive().getSheetByName(sheetName);
}