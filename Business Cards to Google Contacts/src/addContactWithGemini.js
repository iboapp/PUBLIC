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

function testAddContactWithGemini(){
  var textString = "Stefan Rapp \n Geschäftsführer \n Rapp Consulting GmbH \n Dynamostraße 13 \n 68165 Mannheim \n T.: +49 621 438 55-39 3 \n F.: +49 621 438 55-55 5 \n M.: info@rapp-consulting.com";
var businessCardUrl = '';
addContactWithGemini(textString,businessCardUrl)
}