/**
 * Retrieves the Google Sheets sheet named 'Sources'.
 *
 * @return {Sheet|null} - The sheet named 'Sources', or null if not found.
 */
function getSourcesSheet() {
  var sheetName = 'Sources';
  return SpreadsheetApp.getActive().getSheetByName(sheetName);
}