const form = document.querySelector("#form");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {

    event.preventDefault()
    
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

     
    if (!email || !password) {
        showMessage("Preencha o e-mail e a senha.", "error");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users"))

    const user = users.find((user)=>{
        return user.email == email && user.password == password
    })

    if (!user) {
        showMessage("E-mail ou senha incorretos.", "error");
        return;
    }

    window.location.href = 'index.html'
    
})

function showMessage(text, type) {

    message.textContent = text;

    if (type === "error") {
        message.className = "text-sm text-center mb-4 text-red-600";
    }

    if (type === "success") {
        message.className ="text-sm text-center mb-4 text-green-600";
    }
}