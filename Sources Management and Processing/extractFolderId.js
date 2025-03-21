/**
 * Extracts the folder ID from a Google Drive folder URL.
 *
 * @param {string} url The Google Drive folder URL.
 * @return {string|null} The folder ID, or null if not found.
 */
function extractFolderIdFromUrl(url) {
  const regex = /folders\/([a-zA-Z0-9_-]+)/;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

// Example usage:
function testExtractFolderId() {
  const url = "https://drive.google.com/drive/folders/1kE8I99tBqbwCJnxkM2brdSusKhEqwcvG";
  const folderId = extractFolderIdFromUrl(url);

  if (folderId) {
    Logger.log("Folder ID: " + folderId); // Output: Folder ID: 1kE8I99tBqbwCJnxkM2brdSusKhEqwcvG
    return folderId;
  } else {
    Logger.log("Folder ID not found.");
    return null;
  }
}