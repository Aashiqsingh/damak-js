const examGenerator = ()=>{

    return promise = new Promise((resolve,reject)=>{


        setTimeout(()=>{
            resolve({
                message:"Exam has going to generate",
                DOE: 14-5-2025,
            })
        },3000)
    })
}

const questionGenerator = (data) => {

    return promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                message:" question is generated successfully",
                DOE: data.DOE,
                Quition_id : 14
            })
        },3000)
    })
}


examGenerator().then((data)=>{

    console.log("Exam genrated....",data);
    questionGenerator().then((que)=>{
        console.log("Question generated....",que);
        console.log("Exam End..");
    }).catch((error)=>{
        console.log(error);
    })
}).catch((err)=>{

    console.log(err);
})


// const Exam = async ()=>{

//     console.log("Exam is going to generate");
//     var x =await examGenerator()
//     console.log("Exam genrated....",x);

//     var y = await questionGenerator(x)
//     console.log("Question generated....",y);


//     console.log("Exam End..");
// }

// Exam()

