const FileUrlDelimiter = {
  SLASH : '/',
  AMPERSAND : '&'
}

const FileIdentifier = {
  FOLDER : [ '/drive/u/0/folders/', FileUrlDelimiter.SLASH ],
  SCRIPT: [ '/home/projects/', FileUrlDelimiter.SLASH ],
  SLIDES : [ '/presentation/d/', FileUrlDelimiter.SLASH ],
  DRAWING : [ '/drawings/d/', FileUrlDelimiter.SLASH ],
  SHEET : [ '/spreadsheets/d/', FileUrlDelimiter.SLASH ],
  FORM : [ '/forms/d/', FileUrlDelimiter.SLASH ],
  DOC : [ '/document/d/', FileUrlDelimiter.SLASH ],
  FILE : [ '/file/d/', FileUrlDelimiter.SLASH ], // PDF, IMAGE, VIDEO, AUDIO
  SITE : [ '/d/', FileUrlDelimiter.SLASH ],
  ID : [ 'id=', FileUrlDelimiter.AMPERSAND ]
}

/**
 * Extracts the file ID from a Google Drive file URL using string manipulation.
 *
 * @param {string} url - The Google Drive file URL.
 * @return {string|null} - The file ID, or null if not found or an error occurs.
 */
function extractFileIdFromUrl(url) { //+
  try {
    let id = url;
    for ( var key in FileIdentifier ) {
      if (url.indexOf(FileIdentifier[key][0]) !== -1) {
        if (FileIdentifier[key][1]) {
          id = url.split(FileIdentifier[key][0])[1].split(FileIdentifier[key][1])[0];
        } else {
          id = url.split(FileIdentifier[key][0])[1]
        }
        break;
      }
    }
    return id;
  } catch (e) {
    Logger.log("Error extracting file ID from URL: " + e);
    return null; // Error occurred
  }
}
