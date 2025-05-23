/**
 * Updates the URLs of folders in the 'Folder' sheet.
 * If a folder does not have a URL, it finds or creates the folder and updates the sheet with the folder's URL.
 */
function updateFolderUrls() {
  var sheet = getFolderSheet();
  var folders = getSheetDataAsObjects(sheet);
  var schema = getSchemaFromSheet(sheet);
  var parentFolder = findOrCreateFolderByName(FolderName.SOURCES_INVENTORY, getRootFolder());

  for (var folderData of folders) {
    if (folderData.Name && !folderData.Url) {
      console.log({ folderData });
      var folder = findOrCreateFolderByName(folderData.Name, parentFolder);
      sheet.getRange(folderData.row_index, schema.Url).setValue(folder.getUrl());
    }
  }
}