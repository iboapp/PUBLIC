/**
 * Gets the content of the specified sheet as an array of objects,
 * with the first row defining the attribute names.
 *
 * @param {Sheet} sheet - The Google Sheets sheet to get the data from.
 * @return {Array<Object>} An array of objects representing the sheet data.
 */
function getSheetDataAsObjects(sheet) {
  var data = sheet.getDataRange().getValues();
  var headers = data.shift(); // Remove and store the header row
  var objects = [];

  for (var i = 0; i < data.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j];
    }
    obj.row_index = i + 2; // Store the row index (1-based index)
    objects.push(obj);
  }

  return objects;
}