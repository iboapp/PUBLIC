var FOLDER_CACHE = {};
var FOLDER_SHEET = getFolderSheet();
var FOLDER_SCHEMA = getSchemaFromSheet(FOLDER_SHEET);

/**
 * Finds or creates a folder with a given name in a specified parent folder or the root folder.
 *
 * @param {string} folderName - The name of the folder to find or create.
 * @param {Folder} [parentFolder] - The parent folder to search in. If not provided, searches the root folder.
 * @param {boolean} [updateFolderSheet=false] - Whether to update the folder sheet with the new folder information.
 * @return {Folder|null} - The found or created folder, or null if an error occurs.
 */
function findOrCreateFolderByName(folderName, parentFolder, updateFolderSheet = false) {
  if (FOLDER_CACHE[folderName]) {
    return FOLDER_CACHE[folderName];
  }
  console.log({ findOrCreateFolderByName: folderName });

  try {
    var searchFolder = parentFolder || DriveApp.getRootFolder();
    var folders = searchFolder.getFoldersByName(folderName);

    if (folders.hasNext()) {
      var result = folders.next(); // Return existing folder
      console.log({ url: result.getUrl() });
      FOLDER_CACHE[folderName] = result;

      var position = findValueInSheet(FOLDER_SHEET, folderName, FOLDER_SCHEMA.Name);
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
      FOLDER_CACHE[folderName] = folder;
      return folder;
    }
  } catch (e) {
    Logger.log({ 'Error finding or creating folder': e, name: folderName });
    return null; // Return null on error
  }
}