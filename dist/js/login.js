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

    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find((user)=>{
        return user.email == email && user.password == password
    })

    if (!user) {
        showMessage("E-mail ou senha incorretos.", "error");
        return;
    }

    // Guarda quem entrou para a tela de perfil exibir os dados do cadastro
    localStorage.setItem("loggedUserId", user.id)

    window.location.href = 'menu.html'
    
})

function showMessage(text, type) {

    message.textContent = text;

    if (type === "error") {
        message.className = "text-sm text-center font-semibold rounded-2xl px-4 py-3 mb-4 bg-red-50 text-red-600 ring-1 ring-red-200";
    }

    if (type === "success") {
        message.className = "text-sm text-center font-semibold rounded-2xl px-4 py-3 mb-4 bg-green-50 text-green-700 ring-1 ring-green-200";
    }
}