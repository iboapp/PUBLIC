/**
 * Moves files to their respective folders based on the data in the 'Sources' sheet.
 * If a file is already in a folder, it creates a shortcut in the new folder.
 */
function moveFilesToFolders() {
  var sheet = getSourcesSheet();
  var files = getSheetDataAsObjects(sheet);
  var schema = getSchemaFromSheet(sheet);
  var parentFolder = findOrCreateFolderByName('Sources Inventory', getRootFolder());
  const updateFolderSheet = true;

  for (var fileData of files) {
    if (fileData.Folder && (!fileData.Folders || fileData.Folders.indexOf(fileData.Folder) == -1)) {
      console.log({ fileData });
      var id = extractFileIdFromUrl(fileData.Url);
      var destinationFolder = findOrCreateFolderByName(fileData.Folder, parentFolder, updateFolderSheet);
      var file = DriveApp.getFileById(id);

      if (!fileData.Folders) {
        file.moveTo(destinationFolder);
      } else {
        DriveApp.createShortcut(id).moveTo(destinationFolder);
      }

      sheet.getRange(fileData.row_index, schema.Folder).setValue('');
      sheet.getRange(fileData.row_index, schema.Folders).setValue(!fileData.Folders ? fileData.Folder : fileData.Folders + ', ' + fileData.Folder);
    }
  }
}