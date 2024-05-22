var users = ["rama", "seet", "geet", "para", "tirt", "pooj", "priy"]

// var flag = true;
// for(let i=0;i<users.length;i++)
//     {
//         // ra
//         if(users[i].length > 4){
//             flag = false
//             break;
//         }
//     }

//     console.log(flag);


// var x = users.every((user)=>{

//     return user.length > 4
// })

// console.log(x);


var x = users.every((user)=>{
    return user.startsWith("r")
})

console.log(x);