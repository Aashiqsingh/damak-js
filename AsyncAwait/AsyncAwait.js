const fetchData = ()=>{


    return promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Data fetched successfully");
        },3000)
    })
}


async function getAnswer(){

    console.log("Starting fetching data");

    var x = await fetchData();
    console.log(x);

    console.log("ending fetching data");
    
}

getAnswer();


// fetchData().then((data)=>{

//     console.log(data);
// }).catch((err)=>{
//     console.log("Error fetching data:",err);
// })
// // console.log("Ending");