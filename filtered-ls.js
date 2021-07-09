const fs = require("fs")

const extension  = process.argv[3]

fs.readdir(process.argv[2], (err, list)=>{

    if(err) console.log(err)
    else {
    list.filter(el=> el.split(".")[1]===extension ? console.log(el) : null)
    }

})


// const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })