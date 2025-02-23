function renameFiles() { //+
  var sheet = getSourcesSheet();
  var files = getSheetDataAsObjects(sheet); //sheetName);
  var schema = getSchemaFromSheet(sheet);
  for (var file of files) {
    if (file.Rename && file.Rename != file.File) {
      var id = extractFileIdFromUrl(file.Url);
      DriveApp.getFileById(id).setName(file.Rename);
      sheet.getRange(file.row_index, schema.File).setValue(file.Rename);
      sheet.getRange(file.row_index, schema.Rename).setValue('');
    }
  }
}