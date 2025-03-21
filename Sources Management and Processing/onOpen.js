/**
 * Creates a custom menu in Google Sheets when the document is opened.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('App')
    .addItem('Process collection folder and load Files', 'processFolderAndLoadFiles')
    .addItem( 'Extract and delete ZIP files', 'extractAndDeleteZipFiles')
    .addItem('Move files to topic folders', 'moveFilesToFolders')
    .addItem('Update folder urls', 'updateFolderUrls')
    .addItem('Rename files', 'renameFiles')
    .addItem('Delete duplicate files', 'deleteDuplicateFiles')
    .addItem('Update this menu', 'onOpen')
    .addToUi();
}