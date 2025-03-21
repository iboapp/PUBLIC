function getCollaborators(list) {
  //var list = DriveApp.getFolderById('abc').getEditors();
  var result = '';
  for (var collaborator of list) {
    result = result ? '\n' + collaborator.getEmail() : collaborator.getEmail();
  }
  return result;
}
