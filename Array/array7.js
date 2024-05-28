var users = ["rama", "seet", "geeta", "paraa", "tirt", "poooja", "priy"]

// for(let i=0;i<users.length;i++){

//     if(users[i].length > 4){
//         console.log(users[i]);
//     }
// }

// filter -- filter used to modified data with filtered data length 

// filter will return new array with modified data 

// var newarr = users.filter((u)=>{

//     return u.length>4
// })

// console.log(newarr);

var delUser = "geeta"

users = users.filter((user)=>{
    // rama
    // seet
    return user!=delUser
})

console.log(users);