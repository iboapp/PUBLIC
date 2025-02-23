function onOpen() {
  /**
   * Creates a custom menu in Google Sheets when the document is opened.
   */
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('App')
    .addItem('Process collection folder and load Files', 'processFolderAndLoadFiles')
    .addItem('Move files to topic folders', 'moveFilesToFolders')
    .addItem('Update folder urls', 'updateFolderUrls')
    .addItem('Rename files', 'renameFiles')
    .addItem('Delete duplicate files', 'deleteDuplicateFiles')
    .addItem('Update this menu', 'onOpen')
    .addToUi();
}
