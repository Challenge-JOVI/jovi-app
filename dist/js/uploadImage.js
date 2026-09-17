// Fluxo do upload: botão -> seleção do arquivo -> carregamento -> sugestão sorteada.
const inputFile = document.getElementById("input-file")

inputFile.addEventListener("change", () => {
    const file = inputFile.files[0]

    if (!file) return

    savePreview(file)

    startLoading(() => {
        const suggestion = uploadSuggestions[Math.floor(Math.random() * uploadSuggestions.length)]

        window.location.href = `feedback.html?origem=upload&id=${suggestion.id}`
    }, file.name)
})

// Guarda uma versão reduzida da foto para exibi-la na tela de feedback.
function savePreview(file) {
    storePreview(null)

    const reader = new FileReader()

    reader.addEventListener("load", () => {
        const image = new Image()

        image.addEventListener("load", () => {
            const maxSize = 720
            const scale = Math.min(1, maxSize / Math.max(image.width, image.height))

            const canvas = document.createElement("canvas")
            canvas.width = image.width * scale
            canvas.height = image.height * scale

            canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height)

            storePreview(canvas.toDataURL("image/jpeg", 0.8))
        })

        image.src = reader.result
    })

    reader.readAsDataURL(file)
}

function storePreview(preview) {
    try {
        if (preview) {
            sessionStorage.setItem("uploadPreview", preview)
        } else {
            sessionStorage.removeItem("uploadPreview")
        }
    } catch {
        // Sem espaço ou sem acesso ao sessionStorage:
        // a tela de feedback exibe apenas as sugestões da IA.
    }
}
