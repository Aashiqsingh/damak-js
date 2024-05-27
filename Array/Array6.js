var users = ["rama", "seet", "geet", "para", "tirt", "poooja", "priy"]


// for(let i=0;i<users.length;i++){

//     console.log(users[i]);
// }

// users.forEach((u)=>{
//     console.log(u);
// })


// map -- it will return the same length
// users.map((u)=>{
//     console.log(u);
// })

// var newusers = []

// for(let i=0;i<users.length;i++){
    
//     // users[i] = users[i].toUpperCase()
//     newusers.push(users[i].toUpperCase())
// }
// // console.log(users);
// console.log(newusers);

// var arr = users.map((u)=>{
//     return u.toUpperCase()
// })

// console.log(arr);

var x = users.map((u)=> u.toUpperCase())
console.log(x);