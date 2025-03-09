/**
 * Creates a contact group with the given name.
 * @param {string} groupName The name of the group to create.
 * @return {object} The created contact group object.
 * @see https://developers.google.com/people/api/rest/v1/contactGroups/create
 */
function createContactGroup(groupName=NEW_BUSINESS_CARD_LABEL) { //+
  try {
    const contactGroup = {
      contactGroup: { // Nest the name field within a contactGroup object
        name: groupName,
      }
    };
    const createdGroup = People.ContactGroups.create( contactGroup );
    //console.log('Contact group created:', createdGroup);
    return createdGroup;
  } catch (err) {
    console.error('Failed to create contact group with error: ' + err.message);
    return null;
  }
}