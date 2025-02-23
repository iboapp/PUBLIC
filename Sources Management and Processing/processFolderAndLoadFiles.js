function processFolderAndLoadFiles(folderName = "Sources Collection", parentFolder = findOrCreateFolderByName('Sources Management'), sheetName = "Sources") {
  /**
   * Processes a folder and loads its file attributes into a Google Sheet.
   *
   * @param {string} folderName The name of the folder to process.
   */
  try {
    // 1. Find or create the folder
    var folder = findOrCreateFolderByName(folderName, parentFolder);

    // 2. Find or create the Google Sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // 3. Add header row if it doesn't exist
    if (sheet.getLastRow() === 0) {
      var header = [
        "≡", "Url", "File", "Type", "Bytes", "Created", "Updated", "Folders", "Duplicate", "Rename", "Regex", "Folder", "Note", "Reliability", "Authors", "Published", "Keywords", "Copyright"
      ];
      sheet.appendRow(header);
      // 4. Freeze the header row
      sheet.setFrozenRows(1);
    }

    // 5. Get the files from the folder
    var files = folder.getFiles();
    var fileData = [];
    var fileList = [];
    // 6. Iterate through the files and extract attributes
    while (files.hasNext()) {
      var file = files.next();
      var rowData = [
        "", // ≡ Checkbox
        file.getUrl(), // Url
        file.getName(), // File
        file.getMimeType(), // Type
        file.getSize(), // Bytes
        file.getDateCreated(), // Created
        file.getLastUpdated() // Modified
        /*
        "", // Folder
        "", // Moved
        "", // Folders
        "", // Note
        "", // Duplicate
        "", // Rename
        "", // Regex
        "", // Reliability
        "", // Authors
        "", // Published
        "", // Keywords
        ""  // Copyright
        */
      ];
      fileData.push(rowData);
      fileList.push(file);
    }
    var destination = findOrCreateFolderByName('Sources Inventory', parentFolder);
    // 7. Write the file data to the sheet
    console.log({ processFolderAndLoadFiles: fileData })
    sheet.getRange(sheet.getLastRow() + 1, 1, fileData.length, fileData[0].length).setValues(fileData);
    for (var file of fileList) {
      file.moveTo(destination);
    }
  } catch (e) {
    Logger.log("Error processing folder and loading files: " + e);
  }
}

// Example usage:
function testProcessFolder() {
  processFolderAndLoadFiles("Sources Collection", findOrCreateFolderByName('Sources Management')); // Replace with your folder name
}

function maintainInventory() {
  var parentFolder = findOrCreateFolderByName('Sources Management');
  var destination = findOrCreateFolderByName('Sources Inventory', parentFolder);
  var files = SpreadsheetApp.getActive().getSheetByName('Sources').getDataRange().getValues().slice(1);
  for (var file of files) {
    var url = file[1];
    console.log({ url })
    var id = extractFileIdFromUrl(url);
    //console.log({id})
    //.split('/')[];
    DriveApp.getFileById(id).moveTo(destination);
  }
}