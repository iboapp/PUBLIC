function createVCard(formData) {
  //var vCard = new vCard();
  var vCard = {};//new Contact();
  vCard.name = "Holger Michael Keller"; //formData.getAnswer("name");
  vCard.email = "de@ibo.app"; //formData.getAnswer("email");
  vCard.phone = "+491741973118"; //formData.getAnswer("phone");
  vCard.company = "iBO.App Service"; //formData.getAnswer("company");
  vCard.jobTitle = "Informatiker";//formData.getAnswer("jobTitle");
  vCard.website = "https://www.ibo.app"; //formData.getAnswer("website");
  // LinkedIN
  //vCard.address = formData.getAnswer("address");
  //vCard.city = formData.getAnswer("city");
  //vCard.state = formData.getAnswer("state");
  //vCard.zipCode = formData.getAnswer("zipCode");
  //vCard.country = formData.getAnswer("country");

  var vCardData = vCard.toString();
  var vCardFile = Utilities.newBlob(vCardData, "application/octet-stream");
  var vCardFileName = "contact.vcf";

  DriveApp.createFile(vCardFile, vCardFileName);
}

function createVCard(firstName, lastName, email, phone, website) {
  var vCard =
    "BEGIN:VCARD\n" +
    "VERSION:3.0\n" +
    "FN:" + firstName + " " + lastName + "\n" +
    "N:" + lastName + ";" + firstName + ";;;\n" +
    "EMAIL;TYPE=INTERNET:" + email + "\n" +
    "TEL;TYPE=CELL:" + phone + "\n" +
    "URL:" + website + "\n" + // Adding the website
    "END:VCARD";

  return vCard;
}

function saveVCardsToDrive() {
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //var data = sheet.getDataRange().getValues();

  var folder = DriveApp.createFolder("GeneratedVCards"); // Create a folder to store vCards
  
 // for (var i = 1; i < data.length; i++) { // Skip header row
  var firstName = "Holger Michael";
  var lastName = "Keller"; //formData.getAnswer("name");
  var email = "de@ibo.app"; //formData.getAnswer("email");
  var phone = "+491741973118"; //formData.getAnswer("phone");
  //vCard.company = "iBO.App Service"; //formData.getAnswer("company");
  //vCard.jobTitle = "Informatiker";//formData.getAnswer("jobTitle");
  var website = "https://www.ibo.app"; //formData.getAnswer("website");
    //var firstName = data[i][0];
    //var lastName = data[i][1];
    //var email = data[i][2];
    //var phone = data[i][3];
    //var website = data[i][4]; // Assuming website is in the 5th column

    var vCard = createVCard(firstName, lastName, email, phone, website);
    var fileName = firstName + "_" + lastName + ".vcf"; // Generate a file name

    // Create and save the vCard file in the folder
    folder.createFile(fileName, vCard, MimeType.PLAIN_TEXT); // Corrected MimeType
  //}


}