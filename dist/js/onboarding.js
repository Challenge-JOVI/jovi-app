const data = [
  "Olá! Seja bem-vindo(a)",
  "Você sabia que a câmera de um celular pode ir muito além?",
  "Quer aprender como?",
  "A JOVI te mostra."
]

let step = 0

const btn = document.getElementById("btn")
const title = document.getElementById("title")
const dotsContainer = document.getElementById("dots")

data.forEach(() => {
    const dot = document.createElement("span")
    dot.classList.add("dot", "h-1.5", "rounded-full", "transition-all", "duration-300")
    dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll(".dot")

updateStep();

function updateStep() {
    title.textContent = data[step]

    dots.forEach((dot, index) => {
        dot.classList.toggle("w-8", index === step)
        dot.classList.toggle("bg-white", index === step)
        dot.classList.toggle("w-2", index !== step)
        dot.classList.toggle("bg-white/40", index !== step)
    })
}

btn.addEventListener('click', ()=>{
    if (step < data.length - 1) {
        step++;

        if (step == data.length - 1) {
            btn.textContent = "Finalizar";
        }

        updateStep()
    } else {
        window.location.href = "signup.html";
    }
})
