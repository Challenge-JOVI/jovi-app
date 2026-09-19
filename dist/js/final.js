
const params = new URLSearchParams(window.location.search);
const tutorialName = params.get("name");

const btn = document.getElementById("btn")
const title = document.getElementById("title")

title.textContent = `Você completou o tutorial do(a) ${tutorialName}!`

btn.addEventListener("click",()=>{
    window.location.href = 'menu.html'
})
