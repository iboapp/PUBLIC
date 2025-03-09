const BUSINESS_CARD_ARCHIVE = 'Archive Business Cards';
var BUSINESS_CARD_ARCHIVE_FOLDER; // Cache for the Business Card Folder

/**
 * Retrieves the Business Card Archive Folder, creating it in the new business card folder if it does not exist.
 *
 * @return {Folder} - The Business Card Archive Folder.
 */
function getBusinessCardArchiveFolder() {
  if (BUSINESS_CARD_ARCHIVE_FOLDER) {
    return BUSINESS_CARD_ARCHIVE_FOLDER;
  }

  // Find the folder by name in the root folder
  var folders = getBusinessCardFolder().getFoldersByName(BUSINESS_CARD_ARCHIVE);
  if (folders.hasNext()) {
    return (BUSINESS_CARD_ARCHIVE_FOLDER = folders.next());
  } else {
    // Create the folder if it does not exist
    return (BUSINESS_CARD_ARCHIVE_FOLDER = getBusinessCardFolder().createFolder(BUSINESS_CARD_ARCHIVE));
  }
}