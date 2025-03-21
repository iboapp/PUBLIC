/**
 * Processes a folder and loads its file attributes into a Google Sheet.
 *
 * @param {string} folderName - The name of the folder to process.
 * @param {Folder} [parentFolder=getRootFolder()] - The parent folder to search in.
 * @param {string} [sheetName="Sources"] - The name of the Google Sheet to load the data into.
 */
function processMeetRecordings(folderName = FolderName.MEET_RECORDINGS, parentFolder = getRootFolder(), sheetName = SheetName.RECORDING) {
  try {
    // 1. Find or create the folder
    var folder = findOrCreateFolderByName(folderName, DriveApp.getRootFolder());

    // 2. Find or create the Google Sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // 3. Add header row if it doesn't exist
    if (sheet.getLastRow() === 0) {
      var header = [
        "≡", "Url", "File", "Type", "Bytes", "Created", "Updated", "Projects", "Duplicate", "Rename", "Regex", "Project", "Note", "Reliability", "Participants", "Duration", "Keywords", "Copyright"
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
        file.getLastUpdated() // Updated
      ];
      fileData.push(rowData);
      fileList.push(file);
    }

    var destination = findOrCreateFolderByName(FolderName.RECORDIGS_FILING, parentFolder);

    // 7. Write the file data to the sheet
    console.log({ processMeetRecordings: fileData });
    sheet.getRange(sheet.getLastRow() + 1, 1, fileData.length, fileData[0].length).setValues(fileData);

    // 8. Move files to the destination folder
    for (var file of fileList) {
      file.moveTo(destination);
    }
  } catch (e) {
    Logger.log("Error processing folder and loading files: " + e);
  }
}

function unzipRecordings(){
  extractAndDeleteZipFiles(getRecordingSheet())
}