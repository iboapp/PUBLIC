/**
 * Retrieves the Google Sheets sheet named 'Sources'.
 *
 * @return {Sheet|null} - The sheet named 'Sources', or null if not found.
 */
function getRecordingSheet() {
  return SpreadsheetApp.getActive().getSheetByName(SheetName.RECORDING);
}

function test_getRecordingSheet(){
  console.log(getRecordingSheet().getName())
}