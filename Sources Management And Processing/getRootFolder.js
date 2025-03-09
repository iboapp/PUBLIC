/**
 * Retrieves the root folder named FolderName.SOURCES_MANAGEMENT, creating it if it does not exist.
 *
 * @return {Folder|null} - The root folder named FolderName.SOURCES_MANAGEMENT, or null if an error occurs.
 */
function getRootFolder() {
  return findOrCreateFolderByName(FolderName.SOURCE_MANAGEMENT);
}