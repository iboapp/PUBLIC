/**
 * Deletes duplicate files from the Google Drive and removes their entries from the sheet.
 */
function deleteDuplicateFiles() {
  var sheet = getSourcesSheet();
  var files = getSheetDataAsObjects(sheet).reverse();

  for (var fileData of files) {
    if (fileData.Duplicate) {
      //console.log({ fileData });
      var id = extractFileIdFromUrl(fileData.Url);
      DriveApp.getFileById(id).setTrashed(true);
      sheet.deleteRow(fileData.row_index);
    }
  }
}