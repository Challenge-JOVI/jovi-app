const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const termsInput = document.querySelector("#terms");

const button = document.querySelector("#register-btn");
const message = document.querySelector("#message");

console.log(form)

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);
    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;


    if (!name) {
        showMessage("Digite seu nome.", "error");
        return;
    }

    if(!age){
        showMessage("Digite sua idade", "error")
        return
    }

    if (!email) {
        showMessage("Digite seu e-mail.", "error");
        return;
    }

    if (password.length < 6) {
        showMessage("A senha deve ter pelo menos 6 caracteres.", "error");
        return;
    }

    if (!termsInput.checked) {
        showMessage("Você precisa aceitar os termos.", "error");
        return;
    }

    const users = getUsers();

    const emailAlreadyExists = users.some(user => user.email === email);

    if (emailAlreadyExists) {
        showMessage("Este e-mail já está cadastrado.","error");
        return;
    }


    const newUser = {
        id: crypto.randomUUID(),
        name: name,
        age: age,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    showMessage("Conta criada com sucesso!", "success");

    form.reset();

    button.disabled = true;

    console.log("Usuário cadastrado:", newUser);

});

function getUsers() {
    const users = localStorage.getItem("users");

    if (!users) {
        return [];
    }

    return JSON.parse(users);
}

function showMessage(text, type) {

    message.textContent = text;

    if (type === "error") {
        message.className ="text-sm text-center mb-4 mt-2 text-red-600";
    }

    if (type === "success") {
        message.className ="text-sm text-center mb-4 mt-2 text-green-600";
    }

}