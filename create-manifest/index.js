const fs = require('fs');
const path = require('path');

const createManifest = (treeFolderPath) => {
  const manifest = {};

  const entities = fs.readdirSync(treeFolderPath);
  entities.forEach((entity) => {
    const entityFolder = path.join(treeFolderPath, entity);

    if (!fs.lstatSync(entityFolder).isDirectory()) return;

    manifest[entity] = [];
    const instances = fs.readdirSync(entityFolder);

    instances.forEach((instanceFile) => {
      manifest[entity].push(instanceFile);
    });
  });

  return manifest;
};

module.exports = createManifest;