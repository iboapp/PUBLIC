var FOLDER_CACHE = {};
var FOLDER_SHEET = getFolderSheet();
var FOLDER_SCHEMA = getSchemaFromSheet(FOLDER_SHEET);

function findOrCreateFolderByName(folderName, parentFolder, updateFolderSheet = false) {
  if (FOLDER_CACHE[folderName]) {
    return FOLDER_CACHE[folderName];
  }
  console.log({ findOrCreateFolderByName: folderName })
  /**
   * Finds or creates a folder with a given name in a specified parent folder or the root folder.
   *
   * @param {string} folderName The name of the folder to find or create.
   * @param {Folder} [parentFolder] The parent folder to search in. If not provided, searches the root folder.
   * @return {Folder} The found or created folder.
   */
  try {
    var searchFolder;

    if (parentFolder) {
      searchFolder = parentFolder;
    } else {
      searchFolder = DriveApp.getRootFolder();
      //console.log('roor')
    }

    var folders = searchFolder.getFoldersByName(folderName);
    if (folders.hasNext()) {
      var result = folders.next(); // Return existing folder
      console.log({ url: result.getUrl() });
      FOLDER_CACHE[folderName] = result;
      var position = findValueInSheet(FOLDER_SHEET, folderName, FOLDER_SCHEMA.Name)
      if (!position) {
        var url = result.getUrl();
        FOLDER_SHEET.appendRow([true, folderName, url]);
      }
      return result;
    } else {
      var folder = searchFolder.createFolder(folderName); // Create new folder
      if (updateFolderSheet) {
        var url = folder.getUrl();
        FOLDER_SHEET.appendRow([true, folderName, url]);
      }
    }
  } catch (e) {
    Logger.log({ 'Error finding or creating folder': e, name: folderName });
    return null; // Return null on error
  }
}

// Example usage:
function testFindOrCreateFolderByName() {
  try {
    // Example 1: Find or create a folder in the root folder
    console.log('by name')
    var folder1 = findOrCreateFolderByName("My Test Folder"); // Replace with your folder name
    Logger.log("Folder in root: " + folder1.getName());

    // Example 2: Find or create a folder in a specific parent folder
    //var rootFolder = DriveApp.getRootFolder();
    var parent = findOrCreateFolderByName("Parent Folder"); //rootFolder.createFolder("Parent Folder");
    var folder2 = findOrCreateFolderByName("My Child Folder", parent);
    Logger.log("Folder in parent: " + folder2.getName());
  } catch (e) {
    Logger.log("Error in test function: " + e);
  }
}