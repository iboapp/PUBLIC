function findValueInSheet(sheet, value, schemaIndex) {
  var data = sheet.getDataRange().getValues();
  var j = schemaIndex - 1;
  for (var i = 0; i < data.length; i++) {
    //for (var j = 0; j < data[i].length; j++) {
    if (data[i][j] == value) {
      return { row: i + 1, col: j + 1 }; // Return row and column (1-based index)
    }
    //  }
  }
  return null; // Value not found
}