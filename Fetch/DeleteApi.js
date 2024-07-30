const deleteUser = async () => {


    const res = await fetch("https://node5.onrender.com/user/user/66a8c930f03407ee9668d51f", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })

    console.log("User deleted successfully");
    
    // console.log(res.data);
}