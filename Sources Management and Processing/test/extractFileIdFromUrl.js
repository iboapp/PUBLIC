/**
 * Extracts the file ID from a Google Drive file URL using regular expressions.
 *
 * @param {string} url - The Google Drive file URL.
 * @return {string|null} - The file ID, or null if not found or an error occurs.
 */
function test_extractFileIdFromUrl(url) { // TODO testen
  try {
    const regex = /(?:\/document\/d\/|\/file\/d\/|id=)([a-zA-Z0-9-_]+)/;
    const match = url.match(regex);
    const id = match ? match[1] : url;

    console.log({ id });
    return id;
  } catch (e) {
    Logger.log("Error extracting file ID from URL: " + e);
    return null; // Error occurred
  }
}