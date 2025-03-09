// Example usage:
/**
 * Test function for processFolderAndLoadFiles.
 */
function testProcessFolder() {
  processFolderAndLoadFiles("Sources Collection", findOrCreateFolderByName(FolderName.SOURCES_MANAGEMENT)); // Replace with your folder name
}

/**
 * Maintains the inventory by moving files to the 'Sources Inventory' folder.
 */
function maintainInventory() {
  var parentFolder = findOrCreateFolderByName(FolderName.SOURCES_MANAGEMENT);
  var destination = findOrCreateFolderByName(FolderName.SOURCES_INVENTORY, parentFolder);
  var files = getSourceSheet().getDataRange().getValues().slice(1);

  for (var file of files) {
    var url = file[1];
    console.log({ url });
    var id = extractFileIdFromUrl(url);
    DriveApp.getFileById(id).moveTo(destination);
  }
}