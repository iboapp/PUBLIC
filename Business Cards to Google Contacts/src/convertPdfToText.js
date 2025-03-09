/**
   * Convert PDF to TEXT with OCR function
   * @param {String} id - id of PDF file
   * @returns {String} text
   */
  function convertPdfToText(id) { //+
    var blob = DriveApp.getFileById(id).getAs("application/pdf").copyBlob();
    var resource = {
      title: blob.getName(),
      mimeType: blob.getContentType(),
    };
    var file = Drive.Files.insert(resource, blob, {
      ocr: true,
      ocrLanguage: "de",
    }); // Enable the Advanced Drive API Service
    var doc = DocumentApp.openById(file.id);
    var text = doc.getBody().getText(); // Extract Text from PDF file
    DriveApp.getFileById(file.id).setTrashed(true);
    return text.trim() || "-";
  }
