/**
 * Monitors a specified Google Drive folder for new PDF files, converts them to text,
 * and processes the text to add contacts using the Gemini API.
 */
function monitorDriveFolder() {
  // Get New Files
  var files = getBusinessCardFolder().getFilesByType(MimeType.PDF); // Assuming scanned files are PDFs

  // Process Each File
  while (files.hasNext()) {
    var file = files.next();
    var url = file.getUrl();
    //console.log({url});

    // Convert to Text
    var text = convertPdfToText(file.getId());
    if (addContactWithGemini(text, url)) {
      file.moveTo(getBusinessCardArchiveFolder());
    } else {
      file.moveTo(getBusinessCardErrorFolder());
    }
  }
}