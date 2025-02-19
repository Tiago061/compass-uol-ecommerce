
const emails = []

//função de validação de email.
function validateEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

//função de verificação de email.
function verifyEmail(){
    const emailInput = document.getElementById("input-newsletter").value.trim()


    if(!validateEmail(emailInput)){
        alert("Please enter a valid email address.")
        return;
    }

    if (emails.includes(emailInput)) {
        alert("This email is already registered.");
        return;
    }

    emails.push(emailInput);
    alert("Email successfully subscribed!");
}