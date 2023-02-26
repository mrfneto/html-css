const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")

button.onclick = function () {
  modal.showModal() // Exibe no centro da tela com backdrop
  // modal.show()
}
buttonClose.onclick = function () {
  modal.close()
}