var CUSTOM_FIELD_NAME = 'business card';

/**
 * Generates a contact JSON object suitable for the Google People API using the Gemini API.
 *
 * @param {string} textString - The text string containing contact information.
 * @param {string} businessCardUrl - The URL of the business card image.
 * @param {string} [apiUrl=getApiUrl()] - The URL of the Gemini API endpoint.
 * @return {Object|null} - The contact JSON object or null if an error occurs.
 */
function generateContactJSONWithGemini(textString, businessCardUrl, apiUrl = getApiUrl()) {
  console.log({ businessCardUrl });

  var prompt = AI.getPrompt(textString);

  var payload = {
    "contents": [{
      "parts": [{
        "text": prompt
      }]
    }]
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload)
  };

  try {
    var response = UrlFetchApp.fetch(apiUrl, options);
    var jsonResponse = JSON.parse(response.getContentText());

    if (jsonResponse.candidates && jsonResponse.candidates.length > 0 && jsonResponse.candidates[0].content.parts && jsonResponse.candidates[0].content.parts.length > 0) {
      var geminiOutput = jsonResponse.candidates[0].content.parts[0].text;
      //console.log({ geminiOutput });
      geminiOutput = geminiOutput.replace(/```json\n/g, "").replace(/```\n?/g, "");

      try {
        var contactJson = JSON.parse(geminiOutput);
        //console.log(geminiOutput);

        // Remove 'source' from metadata of individual fields
        for (var field in contactJson) {
          if (Array.isArray(contactJson[field])) {
            contactJson[field].forEach(function (entry) {
              if (entry.metadata && entry.metadata.source) {
                delete entry.metadata.source;
              }
            });
          }
        }

        // Remove 'sources' from metadata of individual fields
        for (var field in contactJson) {
          if (Array.isArray(contactJson[field])) {
            contactJson[field].forEach(function (entry) {
              if (entry.metadata && entry.metadata.sources) {
                delete entry.metadata.sources;
              }
            });
          }
        }

        // Correct the field names to match the People API requirements
        if (contactJson.websites) {
          contactJson.urls = contactJson.websites;
          delete contactJson.websites;
        }

        if (contactJson.phoneNumbers) {
          contactJson.phoneNumbers.forEach(function (phone) {
            if (phone.number) {
              phone.value = phone.number;
              delete phone.number;
            }
          });
        }

        // Ensure source type is set to "CONTACT"
        for (var field in contactJson) {
          if (Array.isArray(contactJson[field])) {
            contactJson[field].forEach(function (entry) {
              if (entry.metadata && entry.metadata.sources) {
                entry.metadata.sources.forEach(function (source) {
                  source.type = "CONTACT";
                });
              }
            });
          }
        }

        contactJson.memberships = [
          {
            contactGroupMembership: {
              contactGroupResourceName: getBusinessCardLabel().resourceName,
            },
          },
        ];

        if (businessCardUrl) {
          // Add the URL to the contactData
          contactJson.urls = contactJson.urls || [];
          contactJson.urls.push({
            "value": businessCardUrl,
            "type": "custom",
            "formattedType": CUSTOM_FIELD_NAME //setting the label as custom
          });
        }

        if (contactJson.names && contactJson.names.length > 1) {
          contactJson.names = contactJson.names.slice(-1); // TODO das reicht nur für zwei Namen den zweiten Namen = 2. Kontakt!!
        }

        logJsonRecord(contactJson); // Log the corrected JSON
        return contactJson;
      } catch (e) {
        console.error("Gemini Output was not valid JSON: " + e.toString());
        return null;
      }
    } else {
      console.error("Gemini API response did not contain expected data.");
      return null;
    }
  } catch (e) {
    console.error("Error calling Gemini API: " + e.toString());
    return null;
  }
}