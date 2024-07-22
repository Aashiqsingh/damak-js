// const science = (name)=>{

//     return name +" addimission confirm in science stream"
// }

// const commerce = (name)=>{
//     return name +" addimission confirm in commerce stream"
// }

// const arts = (name)=>{

//     return name +" addimission confirm in arts stream"
// }


// var fName = "Roshan srivastav"
// var per = 75;
// var flag;

// if(per > 90){
//     flag = science(fName);
// }

// else if(per > 80 && per <= 90){
//     flag = commerce(fName);
// }

// else if(per > 70 && per <= 80){
//     flag = arts(fName);
// }
// console.log(flag);

// var str = "royal"
// str.

// var x = prompt("Enter the password :")
// if(x.length <= 8){
//     console.log("password is strong");
// }
// else{
//     console.log("password is weak");
// }

function checkPasswordStrength(password) {
    // Minimum length requirement
    const minLength = 10;
    // Define regex patterns for character sets
    const uppercasePattern = /[A-Z]/;
    const lowercasePattern = /[a-z]/;
    const digitPattern = /[0-9]/;
    const specialPattern = /[!@#$%^&*(),.?":{}|<>]/;

    // Initialize criteria
    const lengthOk = password.length >= minLength;
    const hasUppercase = uppercasePattern.test(password);
    const hasLowercase = lowercasePattern.test(password);
    const hasDigit = digitPattern.test(password);
    const hasSpecial = specialPattern.test(password);

    // Check overall strength
    if (lengthOk && hasUppercase && hasLowercase && hasDigit && hasSpecial) {
        return "Strong";
    } else {
        return "Weak";
    }
}

// Example usage:
const password = "roshanPandey";
const strength = checkPasswordStrength(password);
console.log(`The strength of '${password}' is: ${strength}`);
