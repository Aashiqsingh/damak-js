const science = (name)=>{

    console.log("Your admission confirm in science stream ",name);
}

const commerce = (name)=>{
    console.log("Your admission confirm in commerce stream ",name.toUpperCase());
}

const arts = (name)=>{
    console.log("Your admission confirm in Arts stream ",name.toUpperCase());
}

// cb -- Callback 
const admission = (sname,cb)=>{

    // cb("krishna")
    cb(sname)
}



