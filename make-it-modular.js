const myModuleFunction = require("./mymodule");

const directory = process.argv[2];
const extension = process.argv[3];

myModuleFunction(directory, extension, function (err, list) {
  if (err) return console.log("Error : ", err);

  list.forEach(function (file) {
    console.log(file);
  });
});
