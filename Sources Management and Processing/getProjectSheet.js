/**
 * Retrieves the Google Sheets sheet named 'Sources'.
 *
 * @return {Sheet|null} - The sheet named 'Sources', or null if not found.
 */
function getProjectSheet() {
  return SpreadsheetApp.getActive().getSheetByName(SheetName.PROJECT);
}

function test_getProjectSheet(){
  console.log(getProjectSheet().getName())
}