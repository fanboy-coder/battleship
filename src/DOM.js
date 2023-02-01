const { Ship, Gameboard, Player } = require("./objects");
const { GameController } = require("./index")

let startWindow = function (game) {
	let container = document.querySelector(".container");
	let background = container.appendChild(document.createElement("div"));
	background.setAttribute("id", "modal-bg-display");
	let modal = background.appendChild(document.createElement("div"));
	modal.setAttribute("class", "modal");
	let h1 = modal.appendChild(document.createElement("h1"));
	h1.textContent = "WELCOME TO BATTLESHIP";
	let button = modal.appendChild(document.createElement("btn"));
	button.textContent = "NEW GAME";
	button.setAttribute("class", "button");
	button.addEventListener("click", () => {
		game.placeShipPlayer();
		game.placeShipCpu();
		hits(game.playerBoard, game.cpuBoard);
		background.remove();
		console.log(game);
	})
}

let gameoverWindow = function (player, cpu) {
	let winner = "";
	if (player.lost == true) {
		winner = "Player";
	}
	else if (cpu.lost == true) {
		winner = "CPU";
	}
	if (winner != "") {
		let container = document.querySelector(".container");
		let background = container.appendChild(document.createElement("div"));
		background.setAttribute("id", "modal-bg-display");
		let modal = background.appendChild(document.createElement("div"));
		modal.setAttribute("class", "modal");
		let h1 = modal.appendChild(document.createElement("h1"));
		h1.textContent = "GAME OVER! " + winner + " WON THE GAME!";
		let button = modal.appendChild(document.createElement("btn"));
		button.textContent = "NEW GAME";
		button.setAttribute("class", "button");
		button.addEventListener("click", () => {
			const game = new GameController();
			game.placeShipPlayer();
			game.placeShipCpu();
			hits(game.playerBoard, game.cpuBoard);
			background.remove();
			console.log(game);
		})
	}
};

//generates both player's boards
let domBoard = function (playerBoard, cpuBoard, player, cpu) {
	let container = document.querySelector(".container");
	let playarea = container.appendChild(document.createElement("div"));
	playarea.setAttribute("id", "play-area");

	const playerColumn = playarea.appendChild(document.createElement("div"));
	playerColumn.setAttribute("id", "player-column");
	const playerText = playerColumn.appendChild(document.createElement("h3"));
	playerText.setAttribute("id", "player-text");
	playerText.innerText = "Player's board";
	const playerArea = playerColumn.appendChild(document.createElement("div"));
	playerArea.setAttribute("id", "player-board");
	playerArea.setAttribute("class", "board");
	playerBoard.board.forEach(entry => {
		let cell = playerArea.appendChild(document.createElement("div"));
		cell.setAttribute("class", "player-cell")
		cell.setAttribute("id", entry);
	});

	const cpuColumn = playarea.appendChild(document.createElement("div"));
	cpuColumn.setAttribute("id", "cpu-column");
	const cpuText = cpuColumn.appendChild(document.createElement("h3"));
	cpuText.setAttribute("id", "cpu-text");
	cpuText.innerText = "CPU's board";
	const cpuArea = cpuColumn.appendChild(document.createElement("div"));
	cpuArea.setAttribute("id", "cpu-board");
	cpuArea.setAttribute("class", "board");
	cpuBoard.board.forEach(entry => {
		let cell = cpuArea.appendChild(document.createElement("div"));
		cell.setAttribute("class", "cpu-cell")
		cell.setAttribute("id", entry);
		cell.addEventListener("click", () => {
			cpuBoard.receiveAttack(cpu.dock, cell.id);
			cpu.randomPlay(player, playerBoard);
			hits(playerBoard, cpuBoard);
			cpu.gameOver();
			player.gameOver();
			gameoverWindow(player, cpu);
		})
	});
};

//marks the hits and misses on each board
let hits = function (playerBoard, cpuBoard) {
	let cpuCell = document.querySelectorAll(".cpu-cell");
	let playerCell = document.querySelectorAll(".player-cell");

	cpuCell.forEach(cell => {
		if (cpuBoard.misses.includes(cell.id)) {
			cell.setAttribute("class", "miss");
		}
		if (cpuBoard.hits.includes(cell.id)) {
			cell.setAttribute("class", "hit");
		}
	});

	playerCell.forEach(cell => {
		if (playerBoard.misses.includes(cell.id)) {
			cell.setAttribute("class", "miss");
		}
		if (playerBoard.hits.includes(cell.id)) {
			cell.setAttribute("class", "hit");
		}
	});

};

module.exports = { startWindow, domBoard, hits };