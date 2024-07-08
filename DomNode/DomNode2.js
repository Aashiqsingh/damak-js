const ans = document.getElementById('ans');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {


    const form = document.createElement('form');
    const nameLable = document.createElement('lable')
    nameLable.innerHTML = "Name"
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.setAttribute("placeholder", "Enter your name")

    const emailLabel = document.createElement('label');
    emailLabel.innerHTML = "Email"
    const emailInput = document.createElement('input');
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("placeholder", "Enter your email")

    const submit = document.createElement("input")
    submit.setAttribute("type", "submit");
    submit.value = "Submit";


    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(nameLable);
    form.appendChild(nameInput)
    form.appendChild(submit)


    ans.appendChild(form);

})