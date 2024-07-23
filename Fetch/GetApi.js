const getUser = async () => {


    const response = await fetch("https://node5.onrender.com/user/user", {
        method: "GET",
    })

    var res = await response.json()

    console.log(res.data);


    console.log("End fetching user");
}


// getUser();
