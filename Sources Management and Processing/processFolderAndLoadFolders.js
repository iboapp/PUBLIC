/**
 * Processes a folder and loads its folders attributes into a Google Sheet.
 *
 * @param {string} folderName - The name of the folder to process.
 * @param {Folder} [parentFolder=getRootFolder()] - The parent folder to search in.
 * @param {string} [sheetName="Sources"] - The name of the Google Sheet to load the data into.
 */
function processFolderAndLoadFolders(folderName = FolderName.PROJECTS_FILING, parentFolder = DriveApp.getRootFolder(), sheetName = SheetName.PROJECT) {
  try {
    // 1. Find or create the folder
    var folder = findOrCreateFolderByName(folderName, parentFolder);
//var folder = DriveApp.getFolderById('abc').getViewers
    // 2. Find or create the Google Sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // 3. Add header row if it doesn't exist
    if (sheet.getLastRow() === 0) {
      var header = [
        "≡", "Name", "Url", "Rename", "Regex", "Domain", "Document", "Phase", "Summary", "Reminder", "Created", "Updated",  "Owner", "Editors", "Commenters", "Viewers"
      ];
      sheet.appendRow(header);
      // 4. Freeze the header row
      sheet.setFrozenRows(1);
    }

    // 5. Get the files from the folder
    var folders = folder.getFolders();
    var folderData = [];
    var folderList = [];

    // 6. Iterate through the files and extract attributes
    while (folders.hasNext()) {
      var folder = folders.next();
      var rowData = [
        "", // ≡ Checkbox
        folder.getName(), // File
        folder.getUrl(), // Url
        '', // Rename
        '', // Regex
        '', // Domain
        '', // Document
        '', // Summary
        '', // Reminder
        //file.getMimeType(), // Type
        //file.getSize(), // Bytes
        folder.getDateCreated(), // Created
        folder.getLastUpdated(), // Updated
        folder.getOwner().getEmail(), // Owner
        getCollaborators(folder.getEditors()), // Editors
        '', // TODO Commenters 
        getCollaborators(folder.getViewers()), // Viewers
      ];
      folderData.push(rowData);
      //folderList.push(folder);
    }

    //var destination = findOrCreateFolderByName(FolderName.SOURCES_INVENTORY, parentFolder);

    // 7. Write the file data to the sheet
    console.log({ processFolderAndLoadFolders: folderData });
    sheet.getRange(sheet.getLastRow() + 1, 1, folderData.length, folderData[0].length).setValues(folderData);

    // 8. Move files to the destination folder
    //for (var file of fileList) {
      //file.moveTo(destination);
    //}
  } catch (e) {
    Logger.log("Error processing folder and loading folders: " + e);
  }
}