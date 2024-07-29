const PostUser = async () => {


    const user = {
        name:"Deepak",
        email: "deepak@gmail.com",
        age:24,
        isActive: false
    }



    const res = await fetch("https://node5.onrender.com/user/user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })


    var res2 = await res.json()

    console.log("data added successfully");
    console.log(res2.data);
}