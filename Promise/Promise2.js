const Zomato = () => {

    console.log("Order is about to placed...");


    var promise = new Promise((success, failure) => {

        setTimeout(() => {

            // success({
            //     OrderId: 101,
            //     amount: 495,
            //     message: "Order is going to be placed"
            // })

            failure({
                orderId: 101,
                message:"something error happened"
            })
        }, 3000)

    })

    // console.log(promise);

    promise.then((data) => {

        console.log("Order is going to be placed :", data);
    })
    promise.catch((error) => {
        console.log("Error :", error);
    })


    // console.log("ending...");
}

Zomato();