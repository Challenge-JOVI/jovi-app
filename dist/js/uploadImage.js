const inputFile = document.getElementById("input-file")
const loading = document.getElementById("loading")
const progress = document.getElementById("progress")
const progressLabel = document.getElementById("progress-label")

inputFile.addEventListener("change", () => {
    if (inputFile.files.length === 0) return

    startLoading()
})

function startLoading() {
    loading.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")

    let value = 0

    const interval = setInterval(() => {
        value += 10

        progress.style.width = `${value}%`
        progressLabel.textContent = `${value}%`

        if (value >= 100) {
            clearInterval(interval)
            window.location.href = "galeria.html"
        }
    }, 300)
}
