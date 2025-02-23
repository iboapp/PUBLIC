/** @OnlyCurrentDoc */

function UntitledMacro() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('E17').activate();
  spreadsheet.getRange('C1:I1').activate();
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('C1:I9'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('A:A').activate();
  spreadsheet.getRange('I6').activate();
  spreadsheet.getCurrentCell().setFormula('=A6.owner');
  spreadsheet.getRange('H7').activate();
};

function testH16(){
  var sheet = getSourcesSheet();
  var v = sheet.getRange('H16').getValue();
  // Multiselect >> Content Marketing, Social Media
console.log( typeof v, v)
}