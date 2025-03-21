/**
 * Retrieves the Google Sheets sheet named 'Folder'.
 *
 * @return {Sheet|null} - The sheet named 'Folder', or null if not found.
 */
function getFolderSheet() {
  return SpreadsheetApp.getActive().getSheetByName(SheetName.FOLDER);
}

function test_getFolderSheet(){
  console.log( getFolderSheet().getName())
}