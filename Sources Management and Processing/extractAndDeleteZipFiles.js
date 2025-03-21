/**
 * Extracts the content of ZIP files to the folder in which the ZIP file is found.
 */
function extractAndDeleteZipFiles() {
  var sheet = getSourceSheet();
  var files = getSheetDataAsObjects(sheet).reverse();

  for (var fileData of files) {
    if (fileData.Type === MimeType.ZIP) {
      var id = extractFileIdFromUrl(fileData.Url);
      var zipFile = DriveApp.getFileById(id);
      var parentFolder = zipFile.getParents().next();
      var blob = zipFile.getBlob();
      var unzippedFiles = Utilities.unzip(blob);

      for (var unzippedFile of unzippedFiles) {
        parentFolder.createFile(unzippedFile);
      }
      zipFile.setTrashed(true);
      sheet.deleteRow(fileData.row_index);
      console.log('Extracted ZIP file: ' + fileData.File);
    }
  }
}