function extractFileIdFromUrl(url) { //+
  //var url = 'https://drive.google.com/file/d/1fFMe1X5Xyz-utrLcTVOCCA6vtNWTfJVt/view?usp=drivesdk';

  /**
   * Extracts the file ID from a Google Drive file URL using string manipulation.
   *
   * @param {string} url The Google Drive file URL.
   * @return {string|null} The file ID, or null if not found or an error occurs.
   */
  try {
    // Check if the URL contains '/file/d/'
    if (url.indexOf('/document/d/') !== -1) {
      var id = url.split('/document/d/')[1].split('/')[0];
      console.log({ id });
      return id;
    }
    if (url.indexOf('/file/d/') !== -1) {
      var id = url.split('/file/d/')[1].split('/')[0];
      console.log({ id });
      return id;
    }
    // Check if the URL contains 'id='
    if (url.indexOf('id=') !== -1) {
      var id = url.split('id=').split('&');
      console.log({ id });
      return id;
    }
    // Otherwise, assume the URL is just the file ID

    return url;

  } catch (e) {
    Logger.log("Error extracting file ID from URL: " + e);
    return null; // Error occurred
  }
}