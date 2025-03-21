/**
 * Renames files based on the data in the 'Source' sheet.
 * If a file has a new name specified in the 'Rename' column, it renames the file and updates the sheet.
 */
function renameFolders() {
  var sheet = getProjectSheet();
  var folders = getSheetDataAsObjects(sheet);
  var schema = getSchemaFromSheet(sheet);
//console.log({schema});
//return
  for (var folder of folders) {
    if ((folder.Rename && folder.Rename !== folder.Name)) {
      var id = extractFolderIdFromUrl(folder.Url);
      DriveApp.getFolderById(id).setName(folder.Rename);
      sheet.getRange(folder.row_index, schema.Name).setValue(folder.Rename);
      sheet.getRange(folder.row_index, schema.Rename).setValue('');
    } else if (folder.Regex) {
      var id = extractFolderIdFromUrl(file.Url);
      // TODO
      return
      var name = cleanFilename(file.File, file.Regex);
      DriveApp.getFileById(id).setName(name);
      sheet.getRange(file.row_index, schema.File).setValue(name);
      sheet.getRange(file.row_index, schema.Regex).setValue('');
    }
  }
}