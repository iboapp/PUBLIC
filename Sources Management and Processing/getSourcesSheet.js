/**
 * Retrieves the Google Sheets sheet named 'Sources'.
 *
 * @return {Sheet|null} - The sheet named 'Sources', or null if not found.
 */
function getSourceSheet() {
  return SpreadsheetApp.getActive().getSheetByName(SheetName.SOURCE);
}

function test_getSourceSheet(){
  console.log(getSourceSheet().getName())
}