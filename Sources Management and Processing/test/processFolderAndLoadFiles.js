// Example usage:
/**
 * Test function for processFolderAndLoadFiles.
 */
function testProcessFolder() {
  processFolderAndLoadFiles("Sources Collection", findOrCreateFolderByName('Sources Management')); // Replace with your folder name
}

/**
 * Maintains the inventory by moving files to the 'Sources Inventory' folder.
 */
function maintainInventory() {
  var parentFolder = findOrCreateFolderByName('Sources Management');
  var destination = findOrCreateFolderByName('Sources Inventory', parentFolder);
  var files = SpreadsheetApp.getActive().getSheetByName('Sources').getDataRange().getValues().slice(1);

  for (var file of files) {
    var url = file[1];
    console.log({ url });
    var id = extractFileIdFromUrl(url);
    DriveApp.getFileById(id).moveTo(destination);
  }
}