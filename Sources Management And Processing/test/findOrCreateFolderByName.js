// Example usage:
/**
 * Test function for findOrCreateFolderByName.
 */
function testFindOrCreateFolderByName() {
    try {
      // Example 1: Find or create a folder in the root folder
      console.log('by name');
      var folder1 = findOrCreateFolderByName("My Test Folder"); // Replace with your folder name
      Logger.log("Folder in root: " + folder1.getName());
  
      // Example 2: Find or create a folder in a specific parent folder
      var parent = findOrCreateFolderByName("Parent Folder");
      var folder2 = findOrCreateFolderByName("My Child Folder", parent);
      Logger.log("Folder in parent: " + folder2.getName());
    } catch (e) {
      Logger.log("Error in test function: " + e);
    }
  }