function cleanFilename(filename, regexString) {
  /**
   * Removes parts of a filename based on a provided regex and replaces hyphens with spaces.
   *
   * @param {string} filename The filename to clean.
   * @param {string} regexString The regex string to use for removal.
   * @return {string} The cleaned filename.
   */
  var regex = new RegExp(regexString);
  var cleanedFilename = filename.replace(regex, '').replace(/-/g, ' ');
   // Remove.pdf extension (case-insensitive)
  cleanedFilename = cleanedFilename.replace(/\.pdf$/i, '');
  return cleanedFilename;
}

function testCleanFilename() {
  var filename = "188210658-Crafting-Contagious-Workbook.pdf";
  var regexString = "^\\d+-"; // Escaped backslash for Apps Script string
  var cleaned = cleanFilename(filename, regexString);
  Logger.log(cleaned); // Output: Crafting Contagious Workbook.pdf
}