let etapaAtual = 0;

const title = document.getElementById("title")
const stepImage = document.getElementById("stepImage")
const descTitle = document.getElementById('descTitle')
const desc = document.getElementById('desc')

const stepContainer = document.getElementById("steps")
const ImageContainer = document.getElementById("imageContainer")
const numberSteps = document.getElementById("steps-n")
const btnNext = document.getElementById("btn-next")
const btnLabel = document.getElementById("btn-label")

const params = new URLSearchParams(window.location.search);
const tutorialId = params.get("id");

const tutorial = tutorials.find(
  tutorial => tutorial.id === tutorialId
);

title.textContent = tutorial.title

const icon = document.createElement('img')
icon.src = tutorial.icon
icon.alt = ""
icon.classList.add("w-5", "h-5")
ImageContainer.appendChild(icon)

for(let i=0; i < tutorial.steps.length; i++){
    const span = document.createElement("span")
    span.classList.add("step", "h-1.5", "rounded-full", "transition-all", "duration-300")
    stepContainer.appendChild(span)
}

const steps = document.querySelectorAll(".step")

updateInfo();

function updateInfo() {
    steps.forEach((item, index) => {
        item.classList.toggle("w-8", index === etapaAtual)
        item.classList.toggle("bg-royal-blue-700", index === etapaAtual)
        item.classList.toggle("w-2", index !== etapaAtual)
        item.classList.toggle("bg-royal-blue-200", index !== etapaAtual)
    })

    numberSteps.textContent = `Passo ${etapaAtual + 1} de ${tutorial.steps.length}`

    stepImage.src = tutorial.steps[etapaAtual].image
    stepImage.alt = `Imagem da etapa ${etapaAtual + 1} do tutorial ${tutorial.title}`

    descTitle.textContent = tutorial.steps[etapaAtual].title
    desc.innerHTML = tutorial.steps[etapaAtual].description
}

btnNext.addEventListener("click", ()=>{
    if (etapaAtual < steps.length - 1) {
        etapaAtual++;

        if (etapaAtual == steps.length - 1) {
            btnLabel.textContent = "Finalizar";
        }

        updateInfo();
    } else {
        window.location.href = `final.html?name=${encodeURIComponent(tutorial.title)}`;
    }
})
