function getSheetDataAsObjects(sheet) { //+
  /**
   * Gets the content of the active sheet as an array of objects,
   * with the first row defining the attribute names.
   *
   * @return {Array<Object>} An array of objects representing the sheet data.
   */

  var data = sheet.getDataRange().getValues();
  var headers = data.shift(); // Remove and store the header row
  var objects = [];

  for (var i = 0; i < data.length; i++) {
    var obj = {};
    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j];
    }
    obj.row_index = i + 2;
    //console.log(obj.row_index, typeof obj.row_index)
    objects.push(obj);
  }

  return objects;
}

// Example usage:
function testGetSheetDataAsObjects() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sources');
  var objects = getSheetDataAsObjects(sheet);
  return
  for (var object of objects){
  Logger.log(object.row_index,typeof object.row_index);
  }
}




