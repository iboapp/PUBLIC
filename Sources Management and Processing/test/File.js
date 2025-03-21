function getFileAttributes() {
  // https://drive.google.com/file/d/1fjpzi5Bfhrq2mYnwhQtJlI-e6ruUVQ4x/view?usp=drive_link
  var fileId = '1fjpzi5Bfhrq2mYnwhQtJlI-e6ruUVQ4x'; //"YOUR_FILE_ID"; // Replace with your file's ID
  var file = DriveApp.getFileById(fileId);

  var fileName = file.getName();
  var fileUrl = file.getUrl();
  var dateCreated = file.getDateCreated();
  var lastUpdated = file.getLastUpdated();
  var fileSizeInBytes = file.getSize();
  Logger.log("File size: " + fileSizeInBytes + " bytes");


  // you can also perform conversions.
  var fileSizeInKilobytes = fileSizeInBytes / 1024;
  Logger.log("File size: " + fileSizeInKilobytes + " kilobytes");


  var fileSizeInMegabytes = fileSizeInKilobytes / 1024;
  Logger.log("File size: " + fileSizeInMegabytes + " megabytes");

  Logger.log("File Name: " + fileName);
  Logger.log("File URL: " + fileUrl);
  Logger.log("Date Created: " + dateCreated);
  Logger.log("Last Updated: " + lastUpdated);
}

function __extractFileIdFromUrl(url) {
  var url = 'https://drive.google.com/file/d/1fFMe1X5Xyz-utrLcTVOCCA6vtNWTfJVt/view?usp=drivesdk';
  /**
   * Extracts the file ID from a Google Drive file URL.
   *
   * @param {string} url The Google Drive file URL.
   * @return {string|null} The file ID, or null if not found or an error occurs.
   */
  try {
    // Regex to match the file ID in various Google Drive URL formats
    // var regex = /\/file\/d\/([a-zA-Z0-9-_]+)|\/d\/([a-zA-Z0-9-_]+)|([a-zA-Z0-9-_]+)/;
    var regex = /\/file\/d\/([a-zA-Z0-9-_]+)|id=([a-zA-Z0-9-_]+)|([a-zA-Z0-9-_]+)/;
    var match = url.match(regex);

    if (match) {
      // The file ID could be in different capturing groups depending on the URL format
      var fileId = match || match || match;
      console.log({ fileId })
      return fileId;
    } else {
      Logger.log("No file ID found in URL: " + url);
      return null; // File ID not found
    }
  } catch (e) {
    Logger.log("Error extracting file ID from URL: " + e);
    return null; // Error occurred
  }
}

