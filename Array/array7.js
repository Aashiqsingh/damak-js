var users = ["rama", "seet", "geeta", "para", "tirt", "poooja", "priy"]

// for(let i=0;i<users.length;i++){

//     if(users[i].length > 4){
//         console.log(users[i]);
//     }
// }

// filter -- filter used to modified data with filtered data length 

var newarr = users.filter((u)=>{

    return u.length>4
})

console.log(newarr);