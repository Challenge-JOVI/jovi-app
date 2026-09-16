let etapaAtual = 0;

const title = document.getElementById("title")
const stepImage = document.getElementById("stepImage")
const descTitle = document.getElementById('descTitle')
const desc = document.getElementById('desc')

const stepContainer = document.getElementById("steps")
const ImageContainer = document.getElementById("imageContainer")
const numberSteps = document.getElementById("steps-n")
const btnNext = document.getElementById("btn-next")
const btnBack = document.getElementById("btn-back")

const params = new URLSearchParams(window.location.search);
const tutorialId = params.get("id");

const tutorial = tutorials.find(
  tutorial => tutorial.id === tutorialId
);

title.innerHTML = tutorial.title

const icon = document.createElement('img')
icon.src = tutorial.icon
icon.classList.add("w-5", "h-5")
ImageContainer.appendChild(icon)

stepImage.src = tutorial.steps[etapaAtual].image

descTitle.innerHTML = tutorial.steps[etapaAtual].title
desc.innerHTML = tutorial.steps[etapaAtual].description


for(let i=0; i < tutorial.steps.length; i++){ 
    const span = document.createElement("span")
    span.classList.add("w-6", "h-1.5", "bg-gray-300", "rounded-xl")
    span.id = "step"
    stepContainer.appendChild(span)
}

const steps = document.querySelectorAll("#step")

updateInfo();

function updateInfo() {
    btnBack.disabled = etapaAtual === 0;

    steps.forEach((item, index) => {
        item.classList.toggle("bg-royal-blue-700", index === etapaAtual)
        item.classList.toggle("bg-gray-300", index !== etapaAtual)
    })

    numberSteps.innerHTML = `Passos: ${etapaAtual + 1} / ${tutorial.steps.length}`

    stepImage.src = tutorial.steps[etapaAtual].image

    descTitle.innerHTML = tutorial.steps[etapaAtual].title
    desc.innerHTML = tutorial.steps[etapaAtual].description
}

btnNext.addEventListener("click", ()=>{
    if (etapaAtual < steps.length - 1) {
        etapaAtual++;

        if (etapaAtual == steps.length - 1) {
            btnNext.textContent = "Finalizar";
        }

        updateInfo();
    } else {
        window.location.href = `final.html?name=${tutorial.title}`;
    }
})

btnBack.addEventListener("click", () => {
    if (etapaAtual > 0) {
        etapaAtual--;

        btnNext.textContent = "Avançar";

        updateInfo();

    }
});
