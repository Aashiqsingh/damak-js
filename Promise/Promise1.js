// promise class 


const getData = ()=>{


    var promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            // resolve("Data fetched successfully!!")
            reject("Error found data not found")
        },3000)

    })

    console.log(promise);

    promise.then((data)=>{
        console.log(data);
        
    })
    
    promise.catch((error)=>{
        console.log(error);
    })

    

}

