const checkbox = document.querySelector("input[name=theme]")
const html = document.querySelector("html")

checkbox.addEventListener("change", ({target}) => {
  target.checked ?
  html.classList.add("dark") :
  html.classList.remove("dark")
})