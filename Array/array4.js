var users = ["ram", "seeta", "geet", "par", "tirth", "pooja", "priya"]

// console.log(users);

// var flag = false;
// for (let i = 0; i < users.length; i++) {

//     if (users[i].length > 5) {
//         flag = true;
//         break;
//     }

// }

// console.log(flag);
// user [i]


// var x = users.some((user)=>{

//     return user.length > 5
// })

// console.log(x);


// var x1 = users.some((user)=> user.length > 5)
// console.log(x1);


// var x = users.some((user)=> user.startsWith("t"))
// console.log(x);

var x = users.some((user)=>{
    return user.startsWith("t")
})

console.log(x);