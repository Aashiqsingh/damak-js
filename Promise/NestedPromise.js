const order = ()=>{

    return promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                orderId:1011,
                price:343,
                name:"damak",
                message:"Order has going to be placed"
            })
        },3000)
    })
}

const payment = (data)=>{

    return promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                name:data.name,
                message:"Payment has been successfully",
                amount:data.price
            })
        },2000)
    })
}

order().then((data)=>{
    console.log("Oredr function called!!",data);
    payment(data).then((payment)=>{
        console.log("Payment ...",payment);
    }).catch((err)=>{
        console.log(err);
    })
}).catch((error)=>{
    console.log(error);
})