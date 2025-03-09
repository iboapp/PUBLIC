const BUSINESS_CARD_ERROR = 'Error Business Cards';
var BUSINESS_CARD_ERROR_FOLDER; // Cache for the Business Card Folder

/**
 * Retrieves the Business Card Error Folder, creating it in the new business card folder if it does not exist.
 *
 * @return {Folder} - The Business Card Error Folder.
 */
function getBusinessCardErrorFolder() {
  if (BUSINESS_CARD_ERROR_FOLDER) {
    return BUSINESS_CARD_ERROR_FOLDER;
  }

  // Find the folder by name in the root folder
  var folders = getBusinessCardFolder().getFoldersByName(BUSINESS_CARD_ERROR);
  if (folders.hasNext()) {
    return (BUSINESS_CARD_ERROR_FOLDER = folders.next());
  } else {
    // Create the folder if it does not exist
    return (BUSINESS_CARD_ERROR_FOLDER = getBusinessCardFolder().createFolder(BUSINESS_CARD_ERROR));
  }
}