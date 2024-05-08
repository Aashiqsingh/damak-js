const docHandler = (option) => {

    return option.fname
}

const pngHandler = (option) => {

    return option.fname + " " + option.size
}

const wordHandler = (option) => {

    return option.fname
}

// const upload = (file, cb) => {

//     // var x = cb({fname:file,size:"34kb"})
//     // console.log("The file type is = ",x);

//     // return cb({
//     //     fname:file,
//     //     size: "10MB",
//     // })

    

// }
const upload = (file,cb)=> cb({fname:file,size:"30kb"})

var fileName = "abc.word";
var temp;
if (fileName.endsWith(".doc")) {
    temp = upload(fileName, docHandler)
}
else if (fileName.endsWith(".png")) {
    temp = upload(fileName, pngHandler);
}
else if (fileName.endsWith(".word")) {
    temp = upload(fileName, wordHandler);
}

console.log("This is file type = ",temp);