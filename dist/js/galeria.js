const main = document.getElementById("main")
const grid = document.getElementById("grid")
const counter = document.getElementById("counter")

// Colunas do grid e quantas linhas devem caber na tela sem rolagem.
// Com 8 fotos em 2 colunas, as 4 linhas ocupam todo o espaço disponível;
// fotos a mais no data.js mantêm a mesma altura e o conteúdo passa a rolar.
const columns = 2
const rowsOnScreen = 4
const minRowHeight = 120

counter.textContent = `${galeria.length} fotos`

galeria.forEach(photo => {
    const card = document.createElement("button")
    card.type = "button"
    card.classList.add("group", "relative", "w-full", "h-full", "text-left", "overflow-hidden", "rounded-3xl", "shadow-card", "ring-1", "ring-line", "cursor-pointer")

    const image = document.createElement("img")
    image.src = photo.image
    image.alt = photo.alt
    image.classList.add("w-full", "h-full", "object-cover", "transition-transform", "duration-500", "group-hover:scale-105")

    const overlay = document.createElement("div")
    overlay.setAttribute("aria-hidden", "true")
    overlay.classList.add("absolute", "inset-0", "bg-linear-to-t", "from-black/75", "via-black/10", "to-transparent")

    const info = document.createElement("div")
    info.classList.add("absolute", "inset-x-3", "bottom-3")

    const tag = document.createElement("span")
    tag.textContent = photo.tag
    tag.classList.add("inline-block", "mb-1", "px-2", "py-0.5", "rounded-full", "bg-white/20", "backdrop-blur-md", "text-[10px]", "font-bold", "text-white")

    const title = document.createElement("p")
    title.textContent = photo.title
    title.classList.add("text-xs", "font-bold", "text-white", "leading-tight")

    const hint = document.createElement("span")
    hint.textContent = "Ver sugestões da IA"
    hint.classList.add("block", "mt-0.5", "text-[10px]", "text-white/80", "opacity-0", "transition-opacity", "duration-300", "group-hover:opacity-100")

    info.append(tag, title, hint)
    card.append(image, overlay, info)

    card.addEventListener("click", () => {
        startLoading(() => {
            window.location.href = `feedback.html?id=${photo.id}`
        }, photo.title)
    })

    grid.appendChild(card)
})

fitGrid()
window.addEventListener("resize", fitGrid)

// Estica as linhas do grid para preencher o espaço livre entre o cabeçalho e o menu.
function fitGrid() {
    const rows = Math.min(Math.ceil(galeria.length / columns), rowsOnScreen)
    const gap = parseFloat(getComputedStyle(grid).rowGap) || 0
    const spaceBelow = parseFloat(getComputedStyle(main).paddingBottom) || 0
    const gridTop = grid.getBoundingClientRect().top + window.scrollY

    const available = window.innerHeight - gridTop - spaceBelow - gap * (rows - 1)

    grid.style.gridAutoRows = `${Math.max(available / rows, minRowHeight)}px`
}
