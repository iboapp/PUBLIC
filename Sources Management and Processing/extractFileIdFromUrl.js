/**
 * Extracts the file ID from a Google Drive file URL using string manipulation.
 *
 * @param {string} url - The Google Drive file URL.
 * @return {string|null} - The file ID, or null if not found or an error occurs.
 */
function extractFileIdFromUrl(url) {
  try {
    let id = null;
    if (url.indexOf('/presentation/d/') !== -1) {
      id = url.split('/presentation/d/')[1].split('/')[0];
    }
    // Check if the URL contains '/document/d/'
    else if (url.indexOf('/document/d/') !== -1) {
      id = url.split('/document/d/')[1].split('/')[0];
    }
    // Check if the URL contains '/file/d/'
    else if (url.indexOf('/file/d/') !== -1) {
      id = url.split('/file/d/')[1].split('/')[0];
    }
    // Check if the URL contains 'id='
    else if (url.indexOf('id=') !== -1) {
      id = url.split('id=')[1].split('&')[0];
    }
    // Otherwise, assume the URL is just the file ID
    else {
      id = url;
    }

    console.log({ id });
    return id;

  } catch (e) {
    Logger.log("Error extracting file ID from URL: " + e);
    return null; // Error occurred
  }
}