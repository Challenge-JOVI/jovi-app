// UI de carregamento compartilhada pela galeria e pelo upload da foto.
// A tela precisa ter os elementos #loading, #progress e #progress-label.
function startLoading(onComplete, label) {
    const loading = document.getElementById("loading")
    const progress = document.getElementById("progress")
    const progressLabel = document.getElementById("progress-label")
    const loadingFile = document.getElementById("loading-file")

    if (loadingFile && label) {
        loadingFile.textContent = label
    }

    loading.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")

    let value = 0

    const interval = setInterval(() => {
        value += 10

        progress.style.width = `${value}%`
        progressLabel.textContent = `${value}%`

        if (value >= 100) {
            clearInterval(interval)
            onComplete()
        }
    }, 300)
}
