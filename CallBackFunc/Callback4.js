const pngHandler = (option)=>{

    // console.log("This is png handler....",option);
    return option
}


const wordHandler = (option)=>{

    // console.log("this is word handler..",option);
    return option.fname + " And "+  option.size
}

const upload = (file,cb)=>{

    var x = cb({fname:file,size:2784})
    console.log("File is called ....",x);
}

var fileName = "xyz.word"


if(fileName.endsWith(".png")){

    upload(fileName,pngHandler)
}
else if(fileName.endsWith(".word")){
    upload(fileName,wordHandler)
}
