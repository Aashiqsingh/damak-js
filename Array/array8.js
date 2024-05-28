var lang = ["english","hindi","php",".Net","java","JavaScript"]


// const deleteLang = (langname)=>{

//     lang = lang.filter((l)=>{
//         return l!=langname
//     })

//     return lang

// }


// const deleteLang = (langname)=>{

//     return lang.filter((l)=> l!=langname)

// }


const deleteLang = (langname)=> lang.filter((l)=> l!=langname)
var x = deleteLang("java")
console.log(x);