const postData = ()=>{

    const box = document.getElementById('box');
    const stuform = document.createElement("form")
    stuform.setAttribute("id","output")
    const nameLable = document.createElement("label")
    nameLable.innerHTML = "Name"
    const nameTd = document.createElement("input")
    nameTd.setAttribute("type", "text")
    const emailLable = document.createElement("label")
    emailLable.innerHTML = "Email"
    const emailTd = document.createElement("input")
    emailTd.setAttribute("type", "email")
    const ageLable = document.createElement("label")
    ageLable.innerHTML = "Age"
    const ageTd = document.createElement("input")
    ageTd.setAttribute("type", "number")
    const statusLable = document.createElement("label")
    statusLable.innerHTML = "Status"
    const status = document.createElement("input")
    status.setAttribute("type", "text")

    const submitTd = document.createElement("input")
    submitTd.setAttribute("type", "submit")


    



    box.appendChild(stuform)
    stuform.appendChild(nameLable)
    stuform.appendChild(nameTd)
    stuform.appendChild(emailLable)
    stuform.appendChild(emailTd)
    stuform.appendChild(ageLable)
    stuform.appendChild(ageTd)
    stuform.appendChild(statusLable)
    stuform.appendChild(status)
    stuform.appendChild(submitTd)



    const output = document.getElementById("output")
    output.addEventListener("submit",async (event)=>{
        event.preventDefault()
        
        const res = await fetch("https://node5.onrender.com/user/user",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameTd.value,
                email: emailTd.value,
                age: ageTd.value,
                status: status.value
            })
        })

        const ress = await res.json()

        console.log("data added successfully");
    })

        

}

