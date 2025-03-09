/**
 * Adds a contact to a specific contact group.
 * @param {string} personResourceName The resource name of the person to add.
 * @param {string} groupResourceName The resource name of the contact group.
 * @see https://developers.google.com/people/api/rest/v1/contactGroups/members/modify
 */
function addContactToContactGroup(personResourceName, groupResourceName) { //+
  try {
    const modificationResult = People.ContactGroups.Members.modify(
      {
        resourceNamesToAdd: [personResourceName],
      },
      groupResourceName
    );
    //console.log('Modification result:', modificationResult);
  } catch (err) {
    console.error('Failed to add contact to group with error: ' + err.message);
  }
}