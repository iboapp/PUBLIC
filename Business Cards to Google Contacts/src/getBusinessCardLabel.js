var CONTACT_GROUP; // Cache the Business Card contact group

/**
 * Retrieves the 'Business Card' contact group, creating it if it does not exist.
 *
 * @return {Object|null} - The contact group object or null if it could not be created.
 */
function getBusinessCardLabel() { //+
  if (CONTACT_GROUP) {
    return CONTACT_GROUP;
  }

  // 1. Check if the 'Business Card' contact group exists
  let contactGroup = getContactGroupByName(NEW_BUSINESS_CARD_LABEL);

  // 2. If the contact group doesn't exist, create it
  if (!contactGroup) {
    contactGroup = createContactGroup(NEW_BUSINESS_CARD_LABEL);
    if (!contactGroup) {
      console.error('Failed to create the Business Card contact group.');
      return null;
    }
    console.error('Business Card contact group created successfully.');
  }
  return CONTACT_GROUP = contactGroup;
}