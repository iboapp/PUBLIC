/**
 * Retrieves the root folder named 'Sources Management', creating it if it does not exist.
 *
 * @return {Folder|null} - The root folder named 'Sources Management', or null if an error occurs.
 */
function getRootFolder() {
  return findOrCreateFolderByName('Sources Management');
}