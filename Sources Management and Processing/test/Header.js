function extractDataFromMultilineString(multilineString) {
  /**
   * Extracts name and note pairs from a multiline string.
   *
   * @param {string} multilineString The input string with multiple "name : note" entries
   * separated by newline characters.
   * @return {Array<Array<string>>} A 2D array, where each inner array contains a name and note pair.
   */
  var data = [];
  var lines = multilineString.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    try {
      var parts = line.split(':', 2); // Split into two parts at most.
      if (parts.length === 2) {
        var name = parts[0].trim();
        var note = parts[1].trim();
        data.push([name, note]);
      } else {
        Logger.log("Skipping invalid line: " + line);
      }
    } catch (e) {
      Logger.log("Error processing line: " + line + ", error: " + e);
    }
  }
  return data;
}

// Example usage:
function testExtractData() {
  var multilineString = "≡ : Checkbox for selection of rows\n" +
    "File : File name\n" +
    "Type : Mime type of the file (can be replaced by an extension, but color coding based on the value will be sufficient for a start)\n" +
    "Url : File url\n" +
    "Created : Date created\n" +
    "Modified : Date modified\n" +
    "Folder : For moving a file to a subfolder of the inventory folder because it contributes to a topic.\n" +
    //"Moved : Checkbox for marking a file as moved to a Topic (redundant because it equals list not empty)\n" +
    "Folders : A list of topics, if a file has been moved already, a short cut will be added to the newly associated topic folder\n" +
    "Note : For taking individual notes\n" +
    "Bytes : The file size\n" +
    "Duplicate : Checkbox for marking a file as duplicate, by File, Type and Storage.\n" +
    "Rename : For renaming the file\n" +
    "Regex : For defining a rule for renaming the file\n" +
    "Reliability : For rating the quality of the file (Star Chip)\n" +
    "Authors : The names of the authors\n" +
    "Published : The date of publishing\n" +
    "Keywords : Keywords related to or derived from the content.\n" +
    "Copyright : Dropdown for defining a status";
  var extractedData = extractDataFromMultilineString(multilineString);

  for (var i = 0; i < extractedData.length; i++) {
    var name = extractedData[i][0];
    var note = extractedData[i][1];
    Logger.log("Name: " + name + ", Note: " + note);
  }
}