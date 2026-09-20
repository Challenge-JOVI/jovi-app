let selected = 0;

const cover = document.getElementById("cover")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const stepsCount = document.getElementById("steps-count")
const counter = document.getElementById("counter")
const pillsContainer = document.getElementById("pills")
const btnStart = document.getElementById("btn-start")

const activePill = ["bg-white", "text-ink", "shadow-float"]
const inactivePill = ["bg-white/20", "text-white", "backdrop-blur-md", "ring-1", "ring-white/40"]

counter.textContent = `${tutorials.length} tutoriais`

tutorials.forEach((tutorial, index) => {
    const pill = document.createElement("button")
    pill.textContent = tutorial.title
    pill.classList.add("shrink-0", "snap-start", "whitespace-nowrap", "px-4", "py-1.5", "rounded-full", "text-sm", "font-semibold", "cursor-pointer", "transition-all", "duration-200")
    pill.addEventListener("click", () => {
        selected = index
        updateInfo()
    })

    pillsContainer.appendChild(pill)
})

const pills = pillsContainer.querySelectorAll("button")

updateInfo();

function updateInfo() {
    const tutorial = tutorials[selected]

    pills.forEach((pill, index) => {
        const isActive = index === selected

        activePill.forEach(style => pill.classList.toggle(style, isActive))
        inactivePill.forEach(style => pill.classList.toggle(style, !isActive))
    })

    cover.src = tutorial.menu_image
    cover.alt = `Imagem do tutorial ${tutorial.title}`

    title.textContent = tutorial.title
    stepsCount.textContent = `${tutorial.steps.length} passos`
    desc.innerHTML = tutorial.steps[0].description
}

btnStart.addEventListener("click", () => {
    window.location.href = `tutorial.html?id=${tutorials[selected].id}`
})
