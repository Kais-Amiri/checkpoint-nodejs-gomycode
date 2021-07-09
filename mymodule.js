const fs = require("fs");
const path = require("path");

function myModuleFunction(directory, extension, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);

    list = list.filter(function (file) {
      return path.extname(file) === "." + extension;
    });

    callback(null, list);
  });
}

module.exports = myModuleFunction;
