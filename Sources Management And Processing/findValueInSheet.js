/**
 * Finds the position of a value in a specified column of a Google Sheets sheet.
 *
 * @param {Sheet} sheet - The Google Sheets sheet to search in.
 * @param {string} value - The value to search for.
 * @param {number} schemaIndex - The 1-based index of the column to search in.
 * @return {Object|null} - An object containing the row and column (1-based index) if found, or null if not found.
 */
function findValueInSheet(sheet, value, schemaIndex) {
  var data = sheet.getDataRange().getValues();
  var columnIndex = schemaIndex - 1;

  for (var i = 0; i < data.length; i++) {
    if (data[i][columnIndex] == value) {
      return { row: i + 1, col: columnIndex + 1 }; // Return row and column (1-based index)
    }
  }
  return null; // Value not found
}