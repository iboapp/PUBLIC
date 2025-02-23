function updateFolderUrls() {
  var sheetName = 'Folder';
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName);
  var folders = getSheetDataAsObjects(sheet); //sheetName);
  var schema = getSchemaFromSheet(sheet);
  var parentFolder = findOrCreateFolderByName('Sources Inventory', getRootFolder());
  for (var folderData of folders) {
    if (folderData.Name && !folderData.Url ) {
      console.log({folderData})
      var folder = findOrCreateFolderByName(folderData.Name, parentFolder);
      sheet.getRange(folderData.row_index, schema.Url).setValue(folder.getUrl());
    }
  }
}
