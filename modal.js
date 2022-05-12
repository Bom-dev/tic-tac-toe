const openModal = document.createElement("button")
openModal.innerText = "About the game"
openModal.setAttribute("id", "openModal")
openModal.setAttribute("class", "modal-buttons")
modalHere.appendChild(openModal)

const modal = document.createElement("div")
modal.setAttribute("id", "modal")
modalHere.appendChild(modal)

const modalTextbox = document.createElement("div")
modalTextbox.setAttribute("id", "modal-textbox")
modal.appendChild(modalTextbox)

const modalH1 = document.createElement("h1")
modalH1.innerText = "What is Tic-Tac-Toe?"
modalTextbox.appendChild(modalH1)

const paragraph1 = document.createElement("p")
paragraph1.innerHTML = "Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. "
modalTextbox.appendChild(paragraph1)

const paragraph2 = document.createElement("p")
paragraph2.innerHTML = "Players: 2<br />Other names: Noughts and Crosses; Xs and Os<br />Genres: Paper-and-pencil game<br />Skills required: Strategy, tactics, observation"
modalTextbox.appendChild(paragraph2)

const modalFooter = document.createElement("div")
modalFooter.setAttribute("id", "modal-footer")
modalTextbox.appendChild(modalFooter)

const close = document.createElement("button")
close.setAttribute("class", "modal-buttons")
close.setAttribute("id", "close")
close.innerText = "Close"
modalFooter.appendChild(close)

const opening = () => {
  modal.style.display = 'block';
}
const closing = () => {
  modal.style.display = 'none'
}

openModal.addEventListener('click', opening)
close.addEventListener('click', closing)