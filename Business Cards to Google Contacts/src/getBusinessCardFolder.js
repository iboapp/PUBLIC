const NEW_BUSINESS_CARD_LABEL = '#1 New Business Card';
var BUSINESS_CARD_FOLDER; // Cache for the Business Card Folder

/**
 * Retrieves the Business Card Folder, creating it in the root folder if it does not exist.
 *
 * @return {Folder} - The Business Card Folder.
 */
function getBusinessCardFolder() {
  if (BUSINESS_CARD_FOLDER) {
    return BUSINESS_CARD_FOLDER;
  }

  // Find the folder by name in the root folder
  var folders = DriveApp.getRootFolder().getFoldersByName(NEW_BUSINESS_CARD_LABEL);
  if (folders.hasNext()) {
    return (BUSINESS_CARD_FOLDER = folders.next());
  } else {
    // Create the folder if it does not exist
    return (BUSINESS_CARD_FOLDER = DriveApp.getRootFolder().createFolder(NEW_BUSINESS_CARD_LABEL));
  }
}