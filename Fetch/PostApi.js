const PostUser = async () => {

    const res = await fetch("https://node5.onrender.com/user/user", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Damak",
            email: "damak@gmail.com",
            age: 23,
            isActive: true
        }),
    })


    var res2 = await res.json()

    console.log("data added successfully");
    console.log(res2.data);
}