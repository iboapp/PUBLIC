/**
 * Renames files based on the data in the 'Source' sheet.
 * If a file has a new name specified in the 'Rename' column, it renames the file and updates the sheet.
 */
function renameFiles() {
  var sheet = getSourceSheet();
  var files = getSheetDataAsObjects(sheet);
  var schema = getSchemaFromSheet(sheet);

  for (var file of files) {
    if ((file.Rename && file.Rename !== file.File)) {
      var id = extractFileIdFromUrl(file.Url);
      DriveApp.getFileById(id).setName(file.Rename);
      sheet.getRange(file.row_index, schema.File).setValue(file.Rename);
      sheet.getRange(file.row_index, schema.Rename).setValue('');
    } else if (file.Regex) {
      var id = extractFileIdFromUrl(file.Url);
      var name = cleanFilename(file.File, file.Regex);
      DriveApp.getFileById(id).setName(name);
      sheet.getRange(file.row_index, schema.File).setValue(name);
      sheet.getRange(file.row_index, schema.Regex).setValue('');
    }
  }
}