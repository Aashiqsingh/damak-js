const fetchData = ()=>{


    return promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{

            // resolve("Data fetched successfully")
            reject("An error occurred while fetching data")
        },2000)
    })


}

fetchData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("Error ...",error);
})