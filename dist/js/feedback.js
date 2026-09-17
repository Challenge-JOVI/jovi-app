// Tela padrão de feedback: apenas renderiza a análise salva no data.js.
// Galeria:  feedback.html?id=<id da foto>
// Upload:   feedback.html?origem=upload&id=<id da sugestão>

const icons = {
    iluminacao: ["M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"],
    exposicao: ["M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"],
    cores: ["M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.88 2.88M6.75 17.25h.008v.008H6.75v-.008z"],
    nitidez: ["M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"],
    contraste: ["M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z", "M12 3v18"],
    enquadramento: ["M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"],
    dica: ["M12 18v-5.25m3.75 5.25a12.06 12.06 0 0 1-7.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"]
}

const photo = document.getElementById("photo")
const photoImage = document.getElementById("photo-image")
const photoTitle = document.getElementById("photo-title")
const photoTag = document.getElementById("photo-tag")
const suggestionsContainer = document.getElementById("suggestions")
const btnShare = document.getElementById("btn-share")
const btnShareLabel = document.getElementById("btn-share-label")
const btnBack = document.getElementById("btn-back")

const params = new URLSearchParams(window.location.search)
const isUpload = params.get("origem") === "upload"
const analysisId = params.get("id")

const analysis = isUpload
    ? uploadSuggestions.find(item => item.id === analysisId)
    : galeria.find(item => item.id === analysisId)

if (!analysis) {
    window.location.href = "galeria.html"
} else {
    showPhoto()
    showSuggestions()
}

function showPhoto() {
    // No upload, a prévia da foto escolhida é guardada pelo uploadImage.js.
    const image = isUpload ? readPreview() : analysis.image

    if (!image) return

    photoImage.src = image
    photoImage.alt = analysis.alt ?? `Foto analisada: ${analysis.title}`
    photoTitle.textContent = analysis.title
    photoTag.textContent = analysis.tag
    photo.classList.remove("hidden")
}

function readPreview() {
    try {
        return sessionStorage.getItem("uploadPreview")
    } catch {
        // Alguns navegadores bloqueiam o sessionStorage: segue apenas com as sugestões.
        return null
    }
}

function showSuggestions() {
    analysis.suggestions.forEach(suggestion => {
        const card = document.createElement("article")
        card.classList.add("rounded-2xl", "bg-royal-blue-100/60", "ring-1", "ring-line", "border-l-4", "border-royal-blue-700", "p-4")

        const header = document.createElement("div")
        header.classList.add("flex", "items-center", "gap-2.5", "mb-2")

        const iconBox = document.createElement("span")
        iconBox.classList.add("w-8", "h-8", "rounded-xl", "bg-royal-blue-700", "text-white", "flex", "items-center", "justify-center", "shrink-0")
        iconBox.appendChild(createIcon(suggestion.icon))

        const title = document.createElement("h2")
        title.textContent = suggestion.title
        title.classList.add("flex-1", "text-sm", "font-extrabold", "tracking-tight", "leading-tight")

        const delta = document.createElement("span")
        delta.textContent = suggestion.delta
        delta.classList.add("shrink-0", "px-2.5", "py-1", "rounded-full", "bg-royal-blue-700", "text-white", "text-[11px]", "font-bold")

        const description = document.createElement("p")
        description.innerHTML = suggestion.description
        description.classList.add("rich-text", "text-sm", "text-muted", "leading-relaxed")

        header.append(iconBox, title, delta)
        card.append(header, description)
        suggestionsContainer.appendChild(card)
    })
}

function createIcon(name) {
    const paths = icons[name] ?? icons.dica

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", "0 0 24 24")
    svg.setAttribute("fill", "none")
    svg.setAttribute("stroke", "currentColor")
    svg.setAttribute("stroke-width", "1.8")
    svg.setAttribute("aria-hidden", "true")
    svg.classList.add("w-4.5", "h-4.5")

    paths.forEach(d => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", d)
        path.setAttribute("stroke-linecap", "round")
        path.setAttribute("stroke-linejoin", "round")
        svg.appendChild(path)
    })

    return svg
}

btnShare.addEventListener("click", async () => {
    const text = `Análise JOVI — ${analysis.title}\n\n` + analysis.suggestions
        .map(suggestion => `${suggestion.title} (${suggestion.delta}): ${stripTags(suggestion.description)}`)
        .join("\n\n")

    try {
        if (navigator.share) {
            await navigator.share({ title: "Análise JOVI", text })
            return
        }

        await navigator.clipboard.writeText(text)
        showShareFeedback("Copiado!")
    } catch {
        showShareFeedback("Não foi possível compartilhar")
    }
})

btnBack.addEventListener("click", () => {
    window.location.href = "galeria.html"
})

function stripTags(text) {
    return text.replace(/<[^>]*>/g, "")
}

function showShareFeedback(message) {
    btnShareLabel.textContent = message

    setTimeout(() => {
        btnShareLabel.textContent = "Compartilhar"
    }, 2000)
}
