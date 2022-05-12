const h1 = document.createElement("h1")
h1.innerText = "Play Tic-Tac-toe"
document.body.appendChild(h1)

const modalHere = document.createElement("div")
modalHere.setAttribute("id", "modal-here")
document.body.appendChild(modalHere)

const gameStatus = document.createElement("div")
gameStatus.setAttribute("id", "gameStatus")
document.body.appendChild(gameStatus)

const result = document.createElement("div")
result.setAttribute("id", "result")
document.body.appendChild(result)

const gridContainer = document.createElement("div")
gridContainer.setAttribute("class", "grid-container")
document.body.appendChild(gridContainer)

for (i=0; i<9; i++) {
    const items = document.createElement("div")
    items.setAttribute("id", i)
    items.setAttribute("class", "grid-item")
    gridContainer.appendChild(items)
}

const gridItem = document.querySelectorAll(".grid-item")

const restart = document.createElement("button")
restart.innerText = "Restart"
restart.setAttribute("id", "restart")
document.body.appendChild(restart)

let player1 = true
let turns = 0
let board = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8
]

function checking() {
    if ((board[0] === board[1] && board[0] === board[2]) ||
    (board[3] === board[4] && board[3] === board[5])||
    (board[6] === board[7] && board[6] === board[8])||
    (board[0] === board[3] && board[0] === board[6])||
    (board[1] === board[4] && board[1] === board[7])||
    (board[2] === board[5] && board[2] === board[8])||
    (board[0] === board[4] && board[0] === board[8])||
    (board[2] === board[4] && board[2] === board[6])) {
        if (player1) {
            gameStatus.innerHTML = ""
            result.innerHTML = "<h2>> Player 1 Wins!</h2>"
            result.style.backgroundColor = "#0ff"
            result.style.color = "#000"
        } else {
            gameStatus.innerHTML = ""
            result.innerHTML = "<h2>> Player 2 Wins!</h2>"
            result.style.backgroundColor = "#ff0"
            result.style.color = "#000"
        }
        gridItem.forEach(grid => {
            grid.removeEventListener("click", clicked)}
        )
    } else if (turns >= 9) {
        gameStatus.innerHTML = ""
        result.style.backgroundColor = "#123"
        result.style.color = "#fff"
        result.innerHTML = "<h2>> It's a tie!</h2>"
    }
}

gridItem.forEach(grid => {
    grid.addEventListener("click", clicked)}
)

function clicked(event) {
    const clickedGrid = event.target;
    if (player1) {
        clickedGrid.style.backgroundColor = "#0ff"
        gameStatus.innerHTML = "<h2>> Player2's Turn</h2>"
        gameStatus.style.backgroundColor = "#ff0"
        gameStatus.style.color = "#000"
    } else {
        clickedGrid.style.backgroundColor = "#ff0"
        gameStatus.innerHTML = "<h2>> Player1's Turn</h2>"
        gameStatus.style.backgroundColor = "#0ff"
        gameStatus.style.color = "#000"
    }
    board[clickedGrid.id] = player1
    turns++
    checking()
    player1 = !player1
    clickedGrid.removeEventListener("click", clicked)
}

restart.addEventListener("click", () => {
    gridItem.forEach(grid => {
        grid.style.backgroundColor = "#fff"
        grid.addEventListener("click", clicked)}
    )
    player1 = true
    result.innerHTML = ""
    gameStatus.innerHTML = "<h2>Player1's Turn</h2>"
    gameStatus.style.backgroundColor = "#0ff"
    gameStatus.style.color = "#000"
    board = [0,1,2,3,4,5,6,7,8]
    turns = 0
})