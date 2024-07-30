

const getData = async () => {

    const response = await fetch("https://reqres.in/api/users?page=2", {
        method: "GET"
    })

    console.log(response);

    var res = await response.json()
    console.log(res.data);


    var dataTable = document.getElementById("dataTable")

    for (let i = 0; i <= res.data.length; i++) {

        const tr = document.createElement("tr")
        const tdId = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdName = document.createElement("td")
        const tdLName = document.createElement("td")
        const avatartd = document.createElement("td")
        const img = document.createElement("img")
        const actionTd = document.createElement("td")
        const btn = document.createElement("button")

        tdId.innerHTML = res.data[i].id
        tdEmail.innerHTML = res.data[i].email
        tdName.innerHTML = res.data[i].first_name
        tdLName.innerHTML = res.data[i].last_name
        img.setAttribute("src", res.data[i].avatar)
        btn.innerHTML = "Delete"
        btn.style.backgroundColor = "red"
        btn.style.color = "white"
        btn.style.border = "none"
        btn.addEventListener("click", async() => {
            // alert("data deleted successfully  " + res.data[i].id)

            // const res = await fetch("https://node5.onrender.com/user/user/"+res.data[i].id,{
            //     method: 'DELETE',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })

            

            // if(res.ok){
            //     alert("data deleted successfully  " + res.data[i].id)
            //     getData()
            // }else{
            //     alert("Failed to delete data  " + res.data[i].id)
            // }
        })


        tr.appendChild(tdId)
        tr.appendChild(tdEmail)
        tr.appendChild(tdName)
        tr.appendChild(tdLName)
        tr.appendChild(avatartd)
        avatartd.appendChild(img)
        tr.appendChild(actionTd)
        actionTd.appendChild(btn)

        dataTable.appendChild(tr)
    }


} 