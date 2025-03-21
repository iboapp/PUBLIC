/**
 * Moves files to their respective folders based on the data in the 'Sources' sheet.
 * If a file is already in a folder, it creates a shortcut in the new folder.
 */
function moveRecordingsToFolders() {
  var sheet = getRecordingSheet();
  var files = getSheetDataAsObjects(sheet);
  //console.log(files)
  //return
  var schema = getSchemaFromSheet(sheet);
  var parentFolder = findOrCreateFolderByName(FolderName.PROJECTS_FILING, DriveApp.getRootFolder());
  const updateFolderSheet = true;

  for (var fileData of files) {
    if (fileData.Project && (!fileData.Projects || fileData.Projects.indexOf(fileData.Project) == -1)) {
      console.log({ fileData });
      var id = extractFileIdFromUrl(fileData.Url);
      var destinationFolder = findOrCreateFolderByName(fileData.Project, parentFolder, updateFolderSheet);
      var file = DriveApp.getFileById(id);

      if (!fileData.Projects) {
        file.moveTo(destinationFolder);
      } else {
        DriveApp.createShortcut(id).moveTo(destinationFolder);
      }

      sheet.getRange(fileData.row_index, schema.Project).setValue('');
      sheet.getRange(fileData.row_index, schema.Projects).setValue(!fileData.Projects ? fileData.Project : fileData.Projects + ', ' + fileData.Project);
    }
  }
}