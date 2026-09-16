const data = [
  "Olá! Seja bem-vindo(a)",
  "Você sabia que a câmera de um celular pode ir muito além?",
  "Quer aprender como?",
  "A JOVI te mostra."
]

let step = 0

const btn = document.getElementById("btn")
const title = document.getElementById("title")

title.innerHTML = data[step]

btn.addEventListener('click', ()=>{
    if (step < data.length - 1) {
        step++;

        if (step == data.length - 1) {
            btn.innerHTML = "Finalizar";
        }

        title.innerHTML = data[step]
    } else {
        window.location.href = "signup.html";
    }
})