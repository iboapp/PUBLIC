function logJsonRecord(jsonData, indent, prefix) {
  /**
   * Recursively logs the content of a JSON record with indentation.
   *
   * @param {object|array|string|number|boolean} jsonData The JSON data.
   * @param {number} indent The number of spaces for indentation.
   * @param {string} prefix A string to prepend to each line of output.
   */

  if (typeof indent === 'undefined') {
    indent = 4;
  }
  if (typeof prefix === 'undefined') {
    prefix = "";
  }

  if (typeof jsonData === 'object' && jsonData !== null) {
    if (Array.isArray(jsonData)) {
      console.log(prefix + "[");
      for (var i = 0; i < jsonData.length; i++) {
        logJsonRecord(jsonData[i], indent, prefix + " ".repeat(indent));
      }
      console.log(prefix + "]");
    } else {
      console.log(prefix + "{");
      for (var key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
          console.log(prefix + " ".repeat(indent) + "\"" + key + "\": " + logJsonRecord(jsonData[key], indent, prefix + " ".repeat(indent)));
        }
      }
      console.log(prefix + "}");
    }
    return ""; // Return empty string to prevent nested logging
  } else if (typeof jsonData === 'string') {
    console.log("\"" + jsonData + "\"");
    return "\"" + jsonData + "\""; //return the string to prevent nested logging
  } else if (typeof jsonData === 'number' || typeof jsonData === 'boolean' || jsonData === null) {
    console.log(jsonData);
    return jsonData; //return the value to prevent nested logging
  } else {
      console.error("Unsupported type: " + typeof jsonData);
      return "Unsupported type: " + typeof jsonData;
  }
}