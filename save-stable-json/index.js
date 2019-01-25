const fs = require('fs');
const mkdirp = require('mkdirp');
const stringify = require('json-stable-stringify');
const path = require('path');

/**
 * Saves a json file from an js object
 * Keys for objects are sorted alphabetically
 * @param {string} filePath
 * @param {Object} jsObject
 */
const saveStableJSON = (filePath, jsObject) => {
  const JSONString = stringify(jsObject, { space: 2 });
  mkdirp.sync(path.dirname(filePath));
  fs.writeFile(filePath, JSONString, 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports = saveStableJSON;
