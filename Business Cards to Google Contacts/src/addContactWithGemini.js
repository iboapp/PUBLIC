/**
 * Adds a contact to Google Contacts using the Gemini API.
 *
 * @param {string} textString - The text string containing contact information.
 * @param {string} businessCardUrl - The URL of the business card image.
 */
function addContactWithGemini(textString, businessCardUrl) { //+
  var contactData = generateContactJSONWithGemini(textString, businessCardUrl);
  //console.log({ contactData })
  if (contactData) {
    try {
      var person = People.People.createContact(contactData);
      //console.log("Contact created successfully: " + person.resourceName);
    } catch (e) {
      console.error("Error creating contact: " + e.toString());
    }
  } else {
    console.error("Error: Could not generate valid contact data.");
  }
}